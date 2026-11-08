import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { aboutLinks } from "@/components/about/content";
import EventsGallery from "@/components/events/EventsGallery";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import { UpcomingLoading } from "@/components/events/UpcomingList";
import styles from "./events.module.css";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Events | Game Creation Society",
  description: "Explore GCS events, from Pitch Fair and Release to playtesting and game nights, and find upcoming meetings.",
};

export default function EventsPage() {
  const calendarUrl = new URL(aboutLinks.calendar);
  for (const [key, value] of Object.entries({ showTitle: "0", showPrint: "0", showTabs: "0", showCalendars: "0", showTz: "0" })) {
    calendarUrl.searchParams.set(key, value);
  }

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <h1>Events</h1>
      </header>
			<header className={styles.intro}>
        <a href="#calendar" className={`${styles.headerAction} ${styles.calendarAction}`}><FiCalendar aria-hidden="true" />View calendar</a>
        <a href={aboutLinks.discord} className={`${styles.headerAction} ${styles.discordAction}`}><FaDiscord aria-hidden="true" />Join Discord</a>
      </header>
      <EventsGallery />
      <div className={styles.schedule}>
        <section id="calendar" aria-labelledby="calendar-title" className={styles.calendar}>
          <div className={styles.sectionHeading}>
            <h2 id="calendar-title">Club calendar</h2>
            <a href={aboutLinks.calendar} className={styles.textLink}>Open calendar</a>
          </div>
          <iframe src={calendarUrl.toString()} title="Game Creation Society events calendar" className={styles.calendarFrame} />
        </section>
        <section aria-labelledby="upcoming-title" className={styles.upcoming}>
          <div className={styles.sectionHeading}><h2 id="upcoming-title">Coming up</h2></div>
          <Suspense fallback={<UpcomingLoading />}><UpcomingEvents /></Suspense>
        </section>
      </div>
      <p className={styles.returnLink}><Link href="/about">About GCS</Link> · <Link href="/about#faq">Joining FAQ</Link></p>
    </main>
  );
}
