import ArtworkSection from "./ArtworkSection";
import styles from "./home.module.css";
export default function Sponsors() {
  return <ArtworkSection kind="sponsors" titleId="sponsors-title"><h2 id="sponsors-title">Our sponsors</h2>
    <div className={styles.sponsorRow}>{Array.from({ length: 5 }, (_, i) => <div className={styles.logo} key={i}>Sponsor logo</div>)}</div>
  </ArtworkSection>;
}
