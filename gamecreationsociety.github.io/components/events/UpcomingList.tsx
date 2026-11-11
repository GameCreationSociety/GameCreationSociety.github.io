import type { UpcomingResult } from "@/lib/calendar";
import { aboutLinks } from "@/components/about/content";
import styles from "@/app/events/events.module.css";

import { eventDate, eventTime } from "@/lib/event-format";

export function UpcomingLoading() {
  return <p role="status" className={styles.upcomingStatus}>Loading upcoming events…</p>;
}

export function UpcomingList({ result }: { result: UpcomingResult }) {
  if (result.status === "unavailable") {
    return <p className={styles.upcomingStatus}>Upcoming events couldn’t be loaded. <a href={aboutLinks.calendar}>View the calendar</a> or <a href={aboutLinks.discord}>check Discord.</a></p>;
  }
  if (result.events.length === 0) {
    return <p className={styles.upcomingStatus}>No upcoming events are listed. <a href={aboutLinks.discord}>Check Discord for announcements.</a></p>;
  }
  return (
    <>
      <p className={styles.timezone}>Times shown in Eastern Time</p>
      <ol className={styles.eventList}>
        {result.events.map(event => {
          const { date, timeZone: dateZone } = eventDate(event);
          return (
            <li key={event.id}>
              <time dateTime={event.start} className={styles.eventDate} aria-label={date.toLocaleDateString("en-US", { timeZone: dateZone, dateStyle: "full" })}>
                <span>{date.toLocaleDateString("en-US", { timeZone: dateZone, month: "short" })}</span>
                <strong>{date.toLocaleDateString("en-US", { timeZone: dateZone, day: "numeric" })}</strong>
                <span>{date.toLocaleDateString("en-US", { timeZone: dateZone, year: "numeric" })}</span>
              </time>
              <div className={styles.eventDetails}>
                <h3>{event.title}</h3>
                <p>{eventTime(event)}</p>
                {event.location && <p className={styles.location}>{event.location}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
