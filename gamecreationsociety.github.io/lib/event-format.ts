import { CALENDAR_TIME_ZONE, type UpcomingEvent } from "@/lib/calendar";

const timeZone = CALENDAR_TIME_ZONE;

export function eventDate(event: UpcomingEvent) {
  // Floating dates must not move to the previous day when displayed in Eastern time.
  return { date: new Date(event.allDay ? `${event.start}T12:00:00Z` : event.start), timeZone: event.allDay ? "UTC" : timeZone };
}

export function eventTime(event: UpcomingEvent) {
  if (event.allDay) {
    const end = new Date(`${event.end}T12:00:00Z`);
    end.setUTCDate(end.getUTCDate() - 1);
    if (end.toISOString().slice(0, 10) === event.start) return "All day";
    return `All day · through ${end.toLocaleDateString("en-US", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric" })}`;
  }
  const start = new Date(event.start);
  const end = new Date(event.end);
  const options: Intl.DateTimeFormatOptions = { timeZone, hour: "numeric", minute: "2-digit" };
  if (end <= start) return start.toLocaleTimeString("en-US", options);
  const sameDay = start.toLocaleDateString("en-US", { timeZone }) === end.toLocaleDateString("en-US", { timeZone });
  const endLabel = sameDay ? end.toLocaleTimeString("en-US", options) : end.toLocaleString("en-US", { ...options, month: "short", day: "numeric" });
  return `${start.toLocaleTimeString("en-US", options)} – ${endLabel}`;
}
