"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { FiArrowLeft, FiArrowRight, FiPause, FiPlay } from "react-icons/fi";
import { gallerySlides } from "./content";
import styles from "@/app/events/events.module.css";

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}
const motionSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const visibilitySnapshot = () => document.hidden;
const serverSnapshot = () => true;

export default function EventsGallery() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion, motionSnapshot, serverSnapshot);
  const hidden = useSyncExternalStore(subscribeVisibility, visibilitySnapshot, serverSnapshot);
  const count = gallerySlides.length;
  const canPlay = !reducedMotion && count > 1;

  useEffect(() => {
    if (!playing || hovered || hidden || !canPlay) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % count), 6000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, hidden, canPlay, count]);

  function select(next: number) {
    const selected = (next + count) % count;
    setIndex(selected);
    setPlaying(false);
    setAnnouncement(`Photo ${selected + 1} of ${count}: ${gallerySlides[selected].label}`);
  }

  return (
    <section id="gallery" aria-labelledby="gallery-title" className={styles.gallery}>
      <div className={styles.sectionHeading}><h2 id="gallery-title">Gallery</h2></div>
      <div role="region" aria-roledescription="carousel" aria-label="Club life"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocusCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPlaying(false); }}
        onKeyDown={event => {
          if (event.key === "Tab") setPlaying(false);
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            select(index + (event.key === "ArrowLeft" ? -1 : 1));
          }
        }}>
        <div id="club-life-slides" className={styles.carouselViewport} tabIndex={0} aria-label="Photos; use left and right arrow keys to navigate"
          onPointerDown={event => { if (event.pointerType === "touch") { pointer.current = { x: event.clientX, y: event.clientY }; setPlaying(false); } }}
          onPointerCancel={() => { pointer.current = null; }}
          onPointerUp={event => {
            if (!pointer.current) return;
            const dx = event.clientX - pointer.current.x;
            const dy = event.clientY - pointer.current.y;
            pointer.current = null;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) select(index + (dx < 0 ? 1 : -1));
          }}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(calc(-${index} * (var(--slide-width) + var(--slide-gap))))` }}>
            {[...gallerySlides, gallerySlides[0]].map((slide, position) => (
              <figure key={`${slide.id}-${position}`} className={styles.slide} role="group" aria-roledescription="slide" aria-label={`${position + 1} of ${count}`} aria-hidden={position !== index} inert={position !== index}>
                <div className={styles.slideMedia}>{slide.src ? <Image src={slide.src} alt={slide.alt ?? slide.label} fill sizes="(max-width: 700px) 90vw, 900px" /> : <div className={styles.photoPlaceholder}><span>Photo placeholder</span><strong>{slide.label}</strong></div>}</div>
                <figcaption>{slide.src ? slide.label : slide.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className={styles.carouselControls}>
          <div className={styles.transport}>
            <button type="button" aria-label="Previous photo" aria-controls="club-life-slides" onClick={() => select(index - 1)}><FiArrowLeft aria-hidden="true" /></button>
            <button type="button" aria-label="Next photo" aria-controls="club-life-slides" onClick={() => select(index + 1)}><FiArrowRight aria-hidden="true" /></button>
            <span className={styles.counter}>{String(index + 1).padStart(2, "0")} <span>/ {String(count).padStart(2, "0")}</span></span>
          </div>
          <div className={styles.indicators} aria-label="Choose a photo">{gallerySlides.map((slide, position) => <button key={slide.id} type="button" aria-label={`Show photo ${position + 1}: ${slide.label}`} aria-current={position === index ? "true" : undefined} onClick={() => select(position)}><span /></button>)}</div>
          <button type="button" className={styles.autoplay} disabled={!canPlay} onClick={() => setPlaying(current => !current)} aria-label={reducedMotion ? "Autoplay disabled for reduced motion" : playing ? "Pause autoplay" : "Start autoplay"}>{playing && canPlay ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}<span>{reducedMotion ? "Autoplay off" : playing ? "Pause" : "Play"}</span></button>
        </div>
        <p className={styles.srOnly} role="status" aria-atomic="true">{announcement}</p>
      </div>
    </section>
  );
}
