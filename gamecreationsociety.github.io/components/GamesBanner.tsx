"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gamesBanner } from "@/data/games-banner";
import styles from "./games.module.css";

export default function GamesBanner() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [stillFailed, setStillFailed] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element || !gamesBanner.videoSrc) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function sync() {
      if (preference.matches) {
        element!.pause();
        element!.removeAttribute("src");
        element!.load();
        setReady(false);
      } else {
        element!.src = gamesBanner.videoSrc;
        element!.play().catch(() => setFailed(true));
      }
    }
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  return <header className={styles.banner}>
    <div className={styles.media} data-games-hero-media aria-hidden="true">
      {gamesBanner.stillSrc && !stillFailed && <Image src={gamesBanner.stillSrc} alt="" fill sizes="100vw" priority onError={() => setStillFailed(true)} />}
      {gamesBanner.videoSrc && <video ref={video} muted loop playsInline preload="none"
        className={ready && !failed ? undefined : styles.videoPending}
        onPlaying={() => { setReady(true); setPlaying(true); setFailed(false); }}
        onPause={() => setPlaying(false)} onError={() => { setFailed(true); setPlaying(false); }} />}
    </div>
    <div className={styles.foreground} data-games-banner-frame aria-hidden="true">
      <div className={styles.desktopArtwork} data-games-frame-artwork="desktop" />
      <div className={styles.mobileArtwork} data-games-frame-artwork="mobile" />
    </div>
    <div className={`${styles.container} ${styles.bannerContent}`}>
      <div className={styles.bannerCopy}>
        <h1>GCS Games</h1>
        <p>Explore games made by members of the Game Creation Society.</p>
        <Link href="#games-catalog" className={styles.action}>Browse games</Link>
      </div>
    </div>
    {ready && !failed && <button type="button" className={styles.mediaControl} aria-label={playing ? "Pause gameplay video" : "Play gameplay video"}
          onClick={() => {
            if (playing) video.current?.pause();
            else video.current?.play().catch(() => setFailed(true));
          }}>{playing ? "Pause" : "Play"}</button>}
  </header>;
}
