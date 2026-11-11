import ArtworkSection from "./ArtworkSection";
import styles from "./home.module.css";
export default function Hero() {
  return <ArtworkSection kind="hero" titleId="hero-title">
    <div className={styles.heroContent}>
      <h1 id="hero-title">Game Creation Society</h1>
      <p>Student game development at Carnegie Mellon University.</p>
      <a className={styles.action} href="#activity">What’s happening</a>
    </div>
  </ArtworkSection>;
}
