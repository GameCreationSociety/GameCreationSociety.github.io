import type { Metadata } from "next";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { aboutLinks } from "@/components/about/content";
import { eventGuide } from "@/components/events/content";
import EventsGallery from "@/components/events/EventsGallery";
import styles from "./events.module.css";

export const metadata: Metadata = {
  title: "Events | Game Creation Society",
  description: "Find GCS meetings and events, from Pitch Fair and Release to tutorials, playtesting, and game nights.",
};

export default function EventsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <h1>Meetings and events</h1>
        <p>Come to a meeting! Check the calendar for times and locations, or join our Discord to keep up with events and announcements.</p>
        <div className={styles.actions}><a href={aboutLinks.discord} className={styles.button}><FaDiscord aria-hidden="true" /> Join our Discord</a><Link href="/about#faq" className={styles.textLink}>Questions about joining?</Link></div>
      </header>
      <section id="calendar" aria-labelledby="calendar-title" className={styles.calendar}>
        <div className={styles.sectionHeading}><h2 id="calendar-title">Club calendar</h2><a href={aboutLinks.calendar} className={styles.textLink}>Open club calendar</a></div>
        <iframe src={aboutLinks.calendar} title="Game Creation Society events calendar" className={styles.calendarFrame} loading="lazy" />
      </section>
      <section id="event-guide" aria-labelledby="guide-title" className={styles.eventGuide}>
        <h2 id="guide-title">Throughout the semester</h2>
        <nav aria-label="Meeting types"><ul>{eventGuide.map(event => <li key={event.id}><a href={`#${event.id}`}>{event.title}</a></li>)}</ul></nav>
        <div className={styles.guideEntries}>{eventGuide.map(event => <article key={event.id} id={event.id}><h3>{event.title}</h3><p>{event.description}</p></article>)}</div>
      </section>
      <EventsGallery />
      <p className={styles.returnLink}><Link href="/about">About GCS</Link> · <Link href="/about#faq">Joining FAQ</Link></p>
    </main>
  );
}
