import { Suspense } from "react";
import Link from "next/link";
import { aboutLinks } from "@/components/about/content";
import { getUpcomingEvents, type UpcomingResult } from "@/lib/calendar";
import { eventDate, eventTime } from "@/lib/event-format";
import { newsItems } from "@/lib/data";
import ArtworkSection from "./ArtworkSection";
import NewsSection from "./NewsSection";
import styles from "./home.module.css";
export function HomeUpcomingList({ result }: { result: UpcomingResult }) {
  if (result.status === "unavailable") return <p>Upcoming events couldn’t be loaded. <a href={aboutLinks.calendar}>View the calendar</a> or <a href={aboutLinks.discord}>check Discord</a>.</p>;
  if (!result.events.length) return <p>No upcoming events are listed. <a href={aboutLinks.discord}>Check Discord for announcements</a>.</p>;
  return <><p className={styles.date}>Times shown in Eastern Time</p><ol className={styles.eventList}>
    {result.events.slice(0, 3).map(event => {
      const { date, timeZone } = eventDate(event);
      return <li key={event.id}><time dateTime={event.start}>{date.toLocaleDateString("en-US", { timeZone, month: "short", day: "numeric", year: "numeric" })}</time>
        <div><h4>{event.title}</h4><p>{eventTime(event)}</p>{event.location && <p>{event.location}</p>}</div></li>;
    })}
  </ol></>;
}
async function HomeUpcoming() {
  return <HomeUpcomingList result={await getUpcomingEvents(aboutLinks.calendar)} />;
}
export default function ActivitySection() {
  return <ArtworkSection id="activity" kind="activity" titleId="activity-title">
    <div className={styles.heading}><h2 id="activity-title">What’s happening</h2><Link className={styles.action} href="/events">All events</Link></div>
    <div className={styles.activityGrid}>
      <div><h3>Upcoming events</h3><div className={styles.upcoming}>
        <Suspense fallback={<p role="status">Loading upcoming events…</p>}><HomeUpcoming /></Suspense>
      </div></div>
      <NewsSection items={newsItems} />
    </div>
  </ArtworkSection>;
}
