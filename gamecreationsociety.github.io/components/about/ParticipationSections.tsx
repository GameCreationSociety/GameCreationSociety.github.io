import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { semesterEvents } from "@/components/events/content";
import { aboutLinks, sectionLinks } from "./content";
import styles from "@/app/about/about.module.css";

export default function ParticipationSections() {
  return (
    <>
      <section id="what-we-do" aria-labelledby="semester-title" className={styles.semester}>
        <h2 id="semester-title">Each semester</h2>
        <ol className={styles.semesterSequence}>
          {semesterEvents.map(event => <li key={event.name}><Link href={event.href}>{event.name}</Link></li>)}
        </ol>
        <div className={styles.semesterNotes}>
          <p>Teams form at <Link href="/events#pitch-fair">Pitch Fair</Link> and spend the semester making a game.</p>
          <p>At <Link href="/events#project-meetings">Alpha, Beta, and Pre-Release</Link>, teams present their games and exchange constructive criticism.</p>
          <p>At <Link href="/events#release">Release</Link>, everyone shows off what they’ve made.</p>
        </div>
      </section>
      <section id="get-involved" aria-labelledby="participation-title" className={styles.participation}>
        <h2 id="participation-title">Come to a meeting</h2>
        <p>We also have tutorials, guest speakers, game nights, and social events. You don’t have to work on a project to attend meetings or hang out.</p>
        <div className={styles.actions}>
          <Link href="/events" className={styles.textLink}>Meetings and events</Link>
          <a href={aboutLinks.discord} className={styles.textLink}><FaDiscord aria-hidden="true" /> Discord</a>
        </div>
        <p className={styles.stuco}><strong>StuCo:</strong> Details to be confirmed.</p>
      </section>
      <nav aria-label="On this page" className={styles.sectionNav}><ul>{sectionLinks.map(({ label, href }) => <li key={href}><a href={href}>{label}</a></li>)}</ul></nav>
    </>
  );
}
