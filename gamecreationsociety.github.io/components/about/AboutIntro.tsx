import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { aboutLinks } from "./content";
import styles from "@/app/about/about.module.css";

export default function AboutIntro() {
  return (
    <header className={styles.intro}>
      <h1>About Game Creation Society</h1>
      <p>Game Creation Society (GCS) is a student-run organization at Carnegie Mellon University dedicated to the art and science of making games. We help members of all skill levels and backgrounds learn about and gain experience in game development.</p>
      <div className={styles.actions}>
        <a href={aboutLinks.discord} className={styles.button}><FaDiscord aria-hidden="true" /> Join our Discord</a>
        <Link href="/games" className={styles.textLink}>Play our games</Link>
      </div>
      <div className={styles.clubPhoto} role="img" aria-label="Placeholder for a club photo">
        <span>Club photo</span><small>Image placeholder · GCS members making games together</small>
      </div>
    </header>
  );
}
