"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import type { Game } from "@/data/games";
import styles from "./home.module.css";
import { useGameTransition } from "@/components/GameTransitionProvider";

const subscribeReady = () => () => {};
const copies = 9;
const middleCopy = Math.floor(copies / 2);

export default function GamesCarousel({ games }: { games: Game[] }) {
  const { expandGame } = useGameTransition();
  const ready = useSyncExternalStore(subscribeReady, () => true, () => false);
  const root = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const selectGame = useRef<((id: string) => void) | null>(null);
  const [centeredGameId, setCenteredGameId] = useState(games[0]?.id);
  const announcement = useRef<HTMLSpanElement>(null);
  const looping = ready && games.length > 1;

  useEffect(() => {
    const element = viewport.current;
    const carousel = root.current;
    if (!element || !carousel || !looping) return;
    let step = 0, cycle = 0, base = 0;
    let inView = false, focused = carousel.contains(document.activeElement) && !!document.activeElement?.matches(":focus-visible");
    let held = false, manual = false, suppressClick = false;
    let pointer: { id: number; x: number; y: number; left: number; dragging: boolean } | null = null;
    let autoTimer: ReturnType<typeof setTimeout> | undefined;
    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    let clickTimer: ReturnType<typeof setTimeout> | undefined;
    let frame: number | null = null;
    let programmaticPosition: number | null = null;
    const modulo = (value: number, total: number) => ((value % total) + total) % total;

    function syncCenteredGameFromScroll() {
      if (!step) return;
      const index = modulo(Math.round((element!.scrollLeft - base) / step), games.length);
      setCenteredGameId(games[index].id);
    }
    function stopAnimation() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    }
    function stopAuto() { clearTimeout(autoTimer); }
    function jump(left: number) {
      programmaticPosition = left;
      element!.scrollLeft = left;
      syncCenteredGameFromScroll();
    }
    function rebase() {
      if (!cycle || held) return;
      const left = element!.scrollLeft;
      const max = element!.scrollWidth - element!.clientWidth;
      if (left < cycle * 1.5 || left > max - cycle * 1.5) {
        jump(base + modulo(left - base, cycle));
      }
    }
    function scheduleAuto() {
      stopAuto();
      if (!step || !inView || document.hidden || focused || held || manual || frame !== null) return;
      autoTimer = setTimeout(() => {
        const next = Math.round((element!.scrollLeft - base) / step) + 1;
        animate(base + next * step);
      }, 4000);
    }
    function animate(target: number) {
      stopAuto();
      clearTimeout(settleTimer);
      stopAnimation();
      const start = element!.scrollLeft;
      const started = performance.now();
      function tick(now: number) {
        const progress = Math.min(1, (now - started) / 500);
        const eased = (1 - Math.cos(Math.PI * progress)) / 2;
        element!.scrollLeft = start + (target - start) * eased;
        syncCenteredGameFromScroll();
        if (progress < 1) frame = requestAnimationFrame(tick);
        else {
          frame = null;
          programmaticPosition = element!.scrollLeft;
          manual = false;
          rebase();
          syncCenteredGameFromScroll();
          scheduleAuto();
        }
      }
      frame = requestAnimationFrame(tick);
    }
    selectGame.current = id => {
      const index = games.findIndex(game => game.id === id);
      if (index < 0 || !step) return;
      beginInteraction();
      const current = (element!.scrollLeft - base) / step;
      const nearestCopy = Math.round((current - index) / games.length);
      const target = base + (index + nearestCopy * games.length) * step;
      if (Math.abs(element!.scrollLeft - target) < 1) {
        manual = false;
        syncCenteredGameFromScroll();
        scheduleAuto();
        return;
      }
      if (announcement.current) announcement.current.textContent = `${games[index].title}, game ${index + 1} of ${games.length}`;
      animate(target);
    };
    function settle() {
      if (held || !step || frame !== null) return;
      rebase();
      const nearest = Math.round((element!.scrollLeft - base) / step);
      if (manual && announcement.current) {
        const index = modulo(nearest, games.length);
        announcement.current.textContent = `${games[index].title}, game ${index + 1} of ${games.length}`;
      }
      animate(base + nearest * step);
    }
    function settleSoon() {
      clearTimeout(settleTimer);
      if (!held) settleTimer = setTimeout(settle, 180);
    }
    function onScroll() {
      syncCenteredGameFromScroll();
      if (programmaticPosition !== null && Math.abs(element!.scrollLeft - programmaticPosition) < 1) {
        programmaticPosition = null;
        return;
      }
      programmaticPosition = null;
      if (frame !== null) return;
      manual = true;
      stopAuto();
      settleSoon();
    }
    function beginInteraction() {
      stopAuto();
      clearTimeout(settleTimer);
      stopAnimation();
      manual = true;
    }
    function onWheel(event: WheelEvent) {
      if (event.deltaX || (event.shiftKey && event.deltaY)) {
        focused = false;
        beginInteraction();
        settleSoon();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey) return;
      beginInteraction();
      focused = false;
      held = true;
      suppressClick = false;
      const bounds = element!.getBoundingClientRect();
      const onScrollbar = event.clientY - bounds.top >= element!.clientHeight;
      if (event.pointerType === "mouse" && !onScrollbar) {
        event.preventDefault();
        pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, left: element!.scrollLeft, dragging: false };
      }
    }
    function onPointerMove(event: PointerEvent) {
      if (!pointer || pointer.id !== event.pointerId) return;
      const dx = event.clientX - pointer.x;
      if (!pointer.dragging && Math.hypot(dx, event.clientY - pointer.y) > 6) {
        pointer.dragging = true;
        suppressClick = true;
        element!.setPointerCapture(event.pointerId);
        element!.dataset.dragging = "true";
      }
      if (pointer.dragging) element!.scrollLeft = pointer.left - dx;
    }
    function releasePointer() {
      if (!held) return;
      held = false;
      if (pointer && element!.hasPointerCapture(pointer.id)) element!.releasePointerCapture(pointer.id);
      pointer = null;
      delete element!.dataset.dragging;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => { suppressClick = false; }, 0);
      settleSoon();
    }
    function onClick(event: MouseEvent) {
      if (suppressClick) { event.preventDefault(); event.stopPropagation(); }
    }
    function onDragStart(event: DragEvent) { event.preventDefault(); }
    function onKeyDown(event: KeyboardEvent) {
      focused = true;
      stopAuto();
      if ((event.target as HTMLElement).closest("button")) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      beginInteraction();
      const next = Math.round((element!.scrollLeft - base) / step) + (event.key === "ArrowLeft" ? -1 : 1);
      const index = modulo(next, games.length);
      if (announcement.current) announcement.current.textContent = `${games[index].title}, game ${index + 1} of ${games.length}`;
      animate(base + next * step);
    }
    function onFocus(event: FocusEvent) {
      focused = (event.target as HTMLElement).matches(":focus-visible");
      if (!focused) return;
      stopAuto();
      stopAnimation();
      const link = (event.target as HTMLElement).closest<HTMLElement>("[data-game-card]");
      if (link) {
        const bounds = link.getBoundingClientRect(), outer = element!.getBoundingClientRect();
        animate(element!.scrollLeft + bounds.left - outer.left + bounds.width / 2 - element!.clientWidth / 2);
      } else settleSoon();
    }
    function onBlur(event: FocusEvent) {
      if (carousel!.contains(event.relatedTarget as Node | null)) return;
      focused = false;
      scheduleAuto();
    }
    function onVisibility() {
      if (document.hidden) { stopAuto(); stopAnimation(); }
      else settleSoon();
    }
    const resize = new ResizeObserver(() => {
      const card = element.querySelector<HTMLElement>("[data-canonical='true']");
      if (!card) return;
      const index = step ? modulo(Math.round((element.scrollLeft - base) / step), games.length) : 0;
      stopAnimation();
      const bounds = card.getBoundingClientRect(), outer = element.getBoundingClientRect();
      step = bounds.width + 24;
      cycle = step * games.length;
      base = element.scrollLeft + bounds.left - outer.left + bounds.width / 2 - element.clientWidth / 2;
      jump(base + index * step);
      manual = false;
      syncCenteredGameFromScroll();
      scheduleAuto();
    });
    resize.observe(element);
    const intersection = new IntersectionObserver(([entry]) => {
      inView = entry.intersectionRatio >= .5;
      if (inView) scheduleAuto();
      else stopAuto();
    }, { threshold: [0, .5] });
    intersection.observe(element);
    element.addEventListener("scroll", onScroll, { passive: true });
    element.addEventListener("wheel", onWheel, { passive: true });
    element.addEventListener("pointerdown", onPointerDown);
    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("click", onClick, true);
    element.addEventListener("dragstart", onDragStart);
    carousel.addEventListener("keydown", onKeyDown);
    carousel.addEventListener("focusin", onFocus);
    carousel.addEventListener("focusout", onBlur);
    window.addEventListener("pointerup", releasePointer);
    window.addEventListener("pointercancel", releasePointer);
    window.addEventListener("mouseup", releasePointer);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      selectGame.current = null;
      stopAnimation(); stopAuto(); clearTimeout(settleTimer); clearTimeout(clickTimer);
      resize.disconnect(); intersection.disconnect();
      element.removeEventListener("scroll", onScroll);
      element.removeEventListener("wheel", onWheel);
      element.removeEventListener("pointerdown", onPointerDown);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("click", onClick, true);
      element.removeEventListener("dragstart", onDragStart);
      carousel.removeEventListener("keydown", onKeyDown);
      carousel.removeEventListener("focusin", onFocus);
      carousel.removeEventListener("focusout", onBlur);
      window.removeEventListener("pointerup", releasePointer);
      window.removeEventListener("pointercancel", releasePointer);
      window.removeEventListener("mouseup", releasePointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [games, looping]);

  return <div ref={root} className={`${styles.carousel} ${games.length === 1 ? styles.singleGame : ""}`}>
    <div className={styles.carouselWindow}>
    <div ref={viewport} className={`${styles.gameRow} ${looping ? styles.looping : ""}`} role="region" aria-roledescription="carousel" aria-label="Featured games" tabIndex={0}>
      <div className={styles.gameTrack}>
        {Array.from({ length: looping ? copies : 1 }, (_, copy) => games.map(game => {
          const canonical = !looping || copy === middleCopy;
          return <Link data-game-card data-game-link={game.id} data-canonical={canonical} key={`${copy}-${game.id}`} className={styles.gameCard}
            href={`/games/${game.id}`} tabIndex={canonical ? undefined : -1} aria-hidden={canonical ? undefined : true}
            onNavigate={event => {
              const source = viewport.current?.querySelector<HTMLElement>(`[data-game-link="${CSS.escape(game.id)}"][data-copy="${copy}"]`);
              if (source) { event.preventDefault(); expandGame(game.id, source); }
            }} data-copy={copy}
            aria-label={`${game.title}, ${game.semester} ${game.year}`} draggable={false}>
            <div className={styles.gameImage} data-game-artwork>
              {game.thumbnail ? <Image src={game.thumbnail.src} alt={game.thumbnail.alt} fill sizes="(max-width: 767px) 80vw, 320px" className={styles.thumbnail} draggable={false} /> : <span aria-hidden="true">Game artwork</span>}
            </div>
            <h3>{game.title}</h3><p>{game.semester} {game.year}</p>
          </Link>;
        }))}
      </div>
    </div>
    </div>
    {looping && <div className={styles.carouselDots} role="group" aria-label="Featured game positions"
      style={{ "--dot-row-width": `${Math.ceil(games.length / Math.ceil(games.length / 8)) * 40 - 8}px` } as CSSProperties}>
      {games.map((game, index) => <button key={game.id} type="button" className={styles.carouselDot}
        aria-label={`Show ${game.title}, ${index + 1} of ${games.length}`}
        aria-current={game.id === centeredGameId ? "true" : undefined}
        onClick={() => selectGame.current?.(game.id)}><span aria-hidden="true" /></button>)}
    </div>}
    <span ref={announcement} className={styles.srOnly} aria-live="polite" aria-atomic="true" />
  </div>;
}
