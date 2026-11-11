import type { ReactNode } from "react";
import styles from "./home.module.css";
export default function ArtworkSection({ id, titleId, kind, children, overlays }: {
  id?: string; titleId: string; kind: "hero" | "activity" | "intro" | "games" | "sponsors";
  children: ReactNode; overlays?: ReactNode;
}) {
  return <section id={id} aria-labelledby={titleId} className={`${styles.section} ${styles[kind]}`}>
    <div aria-hidden="true" className={styles.artwork}>
      <div className={styles.desktopArtwork} data-artwork="desktop" />
      <div className={styles.mobileArtwork} data-artwork="mobile" />
      <div className={styles.overlays}>{overlays}</div>
    </div>
    <div className={styles.container}>{children}</div>
  </section>;
}
