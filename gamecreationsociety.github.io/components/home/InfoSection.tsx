import Link from "next/link";
import ArtworkSection from "./ArtworkSection";
import styles from "./home.module.css";
export default function InfoSection() {
  return <ArtworkSection kind="intro" titleId="intro-title">
    <div className={styles.introGrid}>
      <div><h2 id="intro-title">Who we are</h2>
        <p>Game Creation Society is a student-run organization at Carnegie Mellon University, dedicated to the art and science of making games. We help members of all skill levels and backgrounds learn and gain experience in game development.</p>
        <p>Each semester, teams form at the Pitch Fair and spend about ten weeks building a game together, then showcase the finished work at Release. GCS has been running since 2004.</p>
        <Link className={styles.action} href="/about">About GCS</Link>
      </div>
      <div className={styles.photo}>Club photo</div>
    </div>
  </ArtworkSection>;
}
