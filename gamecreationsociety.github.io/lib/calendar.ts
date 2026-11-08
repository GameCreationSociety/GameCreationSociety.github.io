import "server-only";
import ical, { type ParameterValue } from "node-ical";

export const CALENDAR_TIME_ZONE = "America/New_York";

export type UpcomingEvent = {
  id: string;
  title: string;
  // All-day boundaries are floating YYYY-MM-DD dates; end is exclusive.
  start: string;
  end: string;
  allDay: boolean;
  location?: string;
};

export type UpcomingResult =
  | { status: "success"; events: UpcomingEvent[] }
  | { status: "unavailable" };

function text(value?: ParameterValue): string {
  return (typeof value === "string" ? value : value?.val ?? "").trim();
}

function localDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function calendarDate(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CALENDAR_TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(date);
  return ["year", "month", "day"].map(type => parts.find(part => part.type === type)!.value).join("-");
}

export async function parseUpcomingEvents(source: string, now = new Date()): Promise<UpcomingEvent[]> {
  if (!/^BEGIN:VCALENDAR\s*$/m.test(source) || !/^END:VCALENDAR\s*$/m.test(source)) {
    throw new Error("Invalid calendar response");
  }
  const calendar = await ical.async.parseICS(source);
  const until = new Date(now);
  until.setUTCMonth(until.getUTCMonth() + 6);
  const today = calendarDate(now);
  const lastDay = calendarDate(until);
  const events = new Map<string, UpcomingEvent>();

  for (const entry of Object.values(calendar)) {
    if (entry?.type !== "VEVENT" || !entry.start || entry.status === "CANCELLED") continue;
    // Widen the parser range so floating all-day dates never depend on the server's timezone.
    const instances = ical.expandRecurringEvent(entry, {
      from: new Date(now.getTime() - 36 * 60 * 60 * 1000),
      to: new Date(until.getTime() + 36 * 60 * 60 * 1000),
      expandOngoing: true,
    });
    for (const instance of instances) {
      if (instance.event.status === "CANCELLED") continue;
      const { start, end, isFullDay } = instance;
      if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime())) continue;
      const startValue = isFullDay ? localDate(start) : start.toISOString();
      const endValue = isFullDay ? localDate(end) : end.toISOString();
      if (isFullDay) {
        if (endValue <= today || startValue > lastDay) continue;
      } else if ((end <= now && start < now) || start > until) {
        continue;
      }
      const id = `${entry.uid}:${startValue}`;
      events.set(id, {
        id,
        title: text(instance.summary) || "Club event",
        start: startValue,
        end: endValue,
        allDay: isFullDay,
        location: text(instance.event.location ?? entry.location) || undefined,
      });
    }
  }

  const sortKey = (event: UpcomingEvent) => event.allDay
    ? `${event.start}T00:00:00`
    : `${calendarDate(new Date(event.start))}T${new Intl.DateTimeFormat("en-GB", {
      timeZone: CALENDAR_TIME_ZONE, hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
    }).format(new Date(event.start))}`;
  return [...events.values()].sort((a, b) => sortKey(a).localeCompare(sortKey(b)) || a.id.localeCompare(b.id)).slice(0, 5);
}

export async function getUpcomingEvents(
  calendarEmbedUrl: string,
  now = new Date(),
  fetcher: typeof fetch = fetch,
): Promise<UpcomingResult> {
  try {
    const calendarId = new URL(calendarEmbedUrl).searchParams.get("src");
    if (!calendarId) throw new Error("Missing calendar ID");
    const response = await fetcher(`https://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`, {
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 900 },
    });
    if (!response.ok) throw new Error(`Calendar returned ${response.status}`);
    return { status: "success", events: await parseUpcomingEvents(await response.text(), now) };
  } catch {
    return { status: "unavailable" };
  }
}
