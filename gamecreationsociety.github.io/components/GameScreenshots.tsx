"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Game } from "@/data/games";
import styles from "./games.module.css";

export default function GameScreenshots({ screenshots, title }: { screenshots: NonNullable<Game["screenshots"]>; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState(0);
  const screenshot = screenshots[selected];

  return <section className={styles.gallery} aria-labelledby="screenshots-heading">
    <h2 id="screenshots-heading">Screenshots</h2>
    <div className={styles.screenshots}>{screenshots.map((shot, index) => <button type="button" key={`${shot.src}-${index}`} className={styles.screenshot}
      aria-label={`Enlarge screenshot ${index + 1} of ${title}`} onClick={event => {
        trigger.current = event.currentTarget;
        setSelected(index);
        dialog.current?.showModal();
      }}><Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 768px) 400px, 90vw" /></button>)}</div>
    <dialog ref={dialog} className={styles.viewer} aria-labelledby="screenshot-viewer-title" aria-describedby="screenshot-caption"
      onClose={() => trigger.current?.focus({ preventScroll: true })}>
      <div className={styles.viewerHeader}><h2 id="screenshot-viewer-title">{title} — screenshot {selected + 1} of {screenshots.length}</h2>
        <button type="button" autoFocus onClick={() => dialog.current?.close()}>Close</button></div>
      <div className={styles.viewerImage}><Image src={screenshot.src} alt={screenshot.alt} fill sizes="95vw" /></div>
      <p id="screenshot-caption" className={styles.viewerCaption}>{screenshot.alt}</p>
    </dialog>
  </section>;
}
