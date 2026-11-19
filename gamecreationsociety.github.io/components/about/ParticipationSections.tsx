import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { semesterEvents } from "@/components/events/content";
import { aboutLinks } from "./content";
import styles from "@/app/about/about.module.css";

const stageDescriptions: Record<string, string> = {
  "Pitch Fair": "Teams form around game ideas and spend the semester making a game.",
  Alpha: "Teams present games in progress and exchange constructive criticism.",
  Beta: "Teams present their progress and share feedback on each other’s games.",
  "Pre-Release": "Teams present their games and exchange feedback before Release.",
  Release: "Everyone shows off what they’ve made during the semester.",
};

export default function ParticipationSections() {
  return (
    <>
      <section id="get-involved" aria-labelledby="participation-title" className={styles.participation}>
        <h2 id="participation-title">Come to a meeting</h2>
        <p>We help members of all skill levels and backgrounds learn about game development. There is a place for artists, programmers, and others interested in making games.</p>
        <p>We also have tutorials, guest speakers, game nights, and social events. You don’t have to work on a project to attend meetings or hang out.</p>
        <div className={styles.actions}>
          <Link href="/events" className={styles.textLink}>Meetings and events</Link>
          <a href={aboutLinks.discord} className={styles.textLink}><FaDiscord aria-hidden="true" /> Discord</a>
        </div>
        <p className={styles.stuco}><strong>StuCo:</strong> Details to be confirmed.</p>
      </section>
      <section id="what-we-do" aria-labelledby="semester-title" className={styles.semester}>
        <h2 id="semester-title">Each semester</h2>
        <ol className={styles.semesterSequence}>
          {semesterEvents.map(event => <li key={event.name}>
            <h3><Link href={event.href}>{event.name}</Link></h3>
            <p>{stageDescriptions[event.name]}</p>
          </li>)}
        </ol>
      </section>
    </>
  );
}
