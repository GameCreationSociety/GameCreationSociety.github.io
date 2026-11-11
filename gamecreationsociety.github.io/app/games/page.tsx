import GamesCatalog from "@/components/GamesCatalog";
import { games } from "@/data/games";
import GamesBanner from "@/components/GamesBanner";
import styles from "@/components/games.module.css";

export default function GamesPage() {
  return (
    <main className={styles.page}>
      <GamesBanner />
      <section className={styles.catalogCanvas} aria-label="Games catalog">
        <div className={styles.catalogArtwork} aria-hidden="true">
          <div className={styles.catalogDesktopArtwork} data-games-catalog-artwork="desktop" />
          <div className={styles.catalogMobileArtwork} data-games-catalog-artwork="mobile" />
        </div>
        <div className={`${styles.container} ${styles.catalog}`}><GamesCatalog games={games} /></div>
      </section>
    </main>
  );
}
