"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { aboutLinks, historyMilestones } from "./content";
import styles from "@/app/about/about.module.css";

const milestones = [...historyMilestones].sort((a, b) => b.year - a.year);
const visibleMilestones = 3;

export default function AboutHistory() {
  const listRef = useRef<HTMLOListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [heights, setHeights] = useState<{ full: number; collapsed: number } | null>(null);
  const [jumpTarget, setJumpTarget] = useState<string | null>(null);
  const collapsed = heights !== null && !expanded && heights.collapsed < heights.full;

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(() => {
      const nextItem = list.children[visibleMilestones];
      const full = list.scrollHeight + 2;
      const preview = nextItem ? nextItem.getBoundingClientRect().top - list.getBoundingClientRect().top + 48 : full;
      const next = { full, collapsed: Math.min(preview, full) };
      setHeights(current => current?.full === next.full && current?.collapsed === next.collapsed ? current : next);
    });
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function revealHash(hash: string) {
      const id = hash.slice(1);
      if (!milestones.some(milestone => id === `history-${milestone.year}`)) return;
      setExpanded(true);
      setJumpTarget(id);
    }
    function onHashChange() { revealHash(window.location.hash); }
    function onLinkClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname) revealHash(url.hash);
    }
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onLinkClick);
    const frame = window.requestAnimationFrame(onHashChange);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onLinkClick);
    };
  }, []);

  useEffect(() => {
    if (!expanded || !jumpTarget) return;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(jumpTarget);
      target?.scrollIntoView({ block: "start", behavior: "instant" });
      target?.focus({ preventScroll: true });
      setJumpTarget(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [expanded, jumpTarget]);

  function toggleHistory() {
    setJumpTarget(null);
    setExpanded(current => !current);
    if (expanded) window.requestAnimationFrame(() => buttonRef.current?.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }

  return (
    <section id="history" aria-labelledby="history-title" className={styles.history}>
      <div className={styles.sectionHeading}>
        <h2 id="history-title">Club history</h2>
        <a href={aboutLinks.history} className={styles.textLink}>Officer history and legacy records</a>
      </div>
      <p className={styles.historyNote}>GCS has been an active club at CMU since 2004. These are historical records, rather than current programs or schedules.</p>
      <div id="club-history" className={styles.historyWindow} data-collapsed={collapsed || undefined} data-jump={jumpTarget ? "true" : undefined} style={heights ? { maxHeight: expanded ? heights.full : heights.collapsed } : undefined}>
        <ol ref={listRef} className={styles.timeline}>
          {milestones.map(({ year, description, photo }, index) => (
            <li key={year} id={`history-${year}`} tabIndex={-1} aria-hidden={collapsed && index >= visibleMilestones ? true : undefined} inert={collapsed && index >= visibleMilestones}>
              <h3>{year}</h3>
              <div><p>{description}</p>
                {photo && <details className={styles.archivePhoto}><summary>Archive photo<span className={styles.srOnly}>: {photo.label}</span></summary><figure><div className={styles.archivePlaceholder} role="img" aria-label={`Photo placeholder: ${photo.label}`}><span>Photo placeholder</span><strong>{photo.label}</strong></div><figcaption>{photo.caption}</figcaption></figure></details>}
              </div>
            </li>
          ))}
        </ol>
      </div>
      {heights && heights.collapsed < heights.full && <button ref={buttonRef} type="button" className={styles.historyToggle} aria-expanded={expanded} aria-controls="club-history" onClick={toggleHistory}>{expanded ? "Show less" : "Show full history"}{expanded ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}</button>}
    </section>
  );
}
