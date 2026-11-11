"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./GameTransitionProvider.module.css";

type Entry = { id: string; origin: "/" | "/games"; scrollY: number; carouselLeft?: number; sourceCopy?: number };
type Journey = { entry: Entry; direction: "in" | "out"; sourcePath: string; targetPath: string; rect?: DOMRect; timer: ReturnType<typeof setTimeout>; target?: HTMLElement; opacity?: string; focus?: HTMLElement; animations: Animation[] };
type TransitionContext = {
  expandGame: (id: string, source: HTMLElement, onStart?: () => void) => void;
  registerDestination: (id: string, destination: HTMLElement) => () => void;
  returnToOrigin: (id: string) => void;
};
const Context = createContext<TransitionContext | null>(null);
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const navigationEvent = "gcs-game-navigation";

function readEntry(id?: string): Entry | null {
  const entry = window.history.state?.gcsGameEntry as Entry | undefined;
  if (!entry || (id && entry.id !== id) || !["/", "/games"].includes(entry.origin) || !Number.isFinite(entry.scrollY)) return null;
  return entry;
}
function originLink(entry: Entry) {
  const links = Array.from(document.querySelectorAll<HTMLElement>(`[data-game-link="${CSS.escape(entry.id)}"]`));
  return links[entry.sourceCopy ?? 0] ?? links[0];
}
function artwork(element: HTMLElement) {
  return element.querySelector<HTMLElement>("[data-game-artwork]") ?? element;
}

export default function GameTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const layer = useRef<HTMLDivElement>(null);
  const active = useRef<Journey | null>(null);
  const pending = useRef<Entry | null>(null);
  const lastDetail = useRef<{ id: string; entry: Entry | null } | null>(null);

  const finish = useCallback(() => {
    const journey = active.current;
    active.current = null;
    if (journey) {
      clearTimeout(journey.timer);
      journey.animations.forEach(animation => animation.cancel());
      if (journey.target) journey.target.style.opacity = journey.opacity ?? "";
      journey.focus?.focus({ preventScroll: true });
    }
    if (layer.current) {
      layer.current.hidden = true;
      layer.current.replaceChildren();
      layer.current.style.transform = "";
    }
  }, []);

  const begin = useCallback((entry: Entry, direction: "in" | "out", source: HTMLElement | null) => {
    finish();
    const journey: Journey = {
      entry, direction, sourcePath: window.location.pathname,
      targetPath: direction === "in" ? `/games/${encodeURIComponent(entry.id)}` : entry.origin,
      timer: setTimeout(finish, 2000), animations: [],
    };
    active.current = journey;
    if (source && layer.current && !reducedMotion()) {
      const media = artwork(source);
      const rect = media.getBoundingClientRect();
      if (rect.width && rect.height && rect.top >= 64 && rect.bottom <= window.innerHeight) {
        journey.rect = rect;
        const copy = media.cloneNode(true) as HTMLElement;
        copy.removeAttribute("id");
        copy.querySelectorAll("[id]").forEach(child => child.removeAttribute("id"));
        Object.assign(copy.style, { width: "100%", height: "100%", margin: "0" });
        layer.current.replaceChildren(copy);
        Object.assign(layer.current.style, { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px` });
        layer.current.hidden = false;
      }
    }
    return journey;
  }, [finish]);

  const land = useCallback((journey: Journey, target?: HTMLElement, focus?: HTMLElement) => {
    if (active.current !== journey) return;
    if (target && journey.target === target) return;
    journey.focus = focus;
    const rect = target?.getBoundingClientRect();
    if (!journey.rect || !rect || !rect.width || rect.top < 64 || rect.bottom > window.innerHeight || reducedMotion() || !layer.current) {
      finish();
      return;
    }
    journey.target = target;
    journey.opacity = target!.style.opacity;
    target!.style.opacity = "0";
    const source = journey.rect;
    const animation = layer.current.animate([
      { transform: "translate(0, 0) scale(1, 1)" },
      { transform: `translate(${rect.left - source.left}px, ${rect.top - source.top}px) scale(${rect.width / source.width}, ${rect.height / source.height})` },
    ], { duration: 360, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "forwards" });
    journey.animations.push(animation);
    document.querySelectorAll<HTMLElement>("[data-game-detail-copy]").forEach(element => {
      journey.animations.push(element.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, fill: "both" }));
    });
    clearTimeout(journey.timer);
    journey.timer = setTimeout(finish, 380);
  }, [finish]);

  const expandGame = useCallback((id: string, source: HTMLElement, onStart?: () => void) => {
    onStart?.();
    const origin = window.location.pathname === "/" ? "/" : "/games";
    const links = Array.from(document.querySelectorAll<HTMLElement>(`[data-game-link="${CSS.escape(id)}"]`));
    const carousel = source.closest<HTMLElement>('[aria-roledescription="carousel"]');
    const entry: Entry = { id, origin, scrollY: window.scrollY, carouselLeft: carousel?.scrollLeft, sourceCopy: Math.max(0, links.indexOf(source)) };
    pending.current = entry;
    begin(entry, "in", source);
    router.push(`/games/${encodeURIComponent(id)}`, { scroll: false });
  }, [begin, router]);

  const registerDestination = useCallback((id: string, destination: HTMLElement) => {
    const entry = pending.current?.id === id ? pending.current : readEntry(id);
    if (entry) {
      window.history.replaceState({ ...window.history.state, gcsGameEntry: entry }, "");
      pending.current = null;
      window.dispatchEvent(new Event(navigationEvent));
    }
    lastDetail.current = { id, entry };
    const journey = active.current;
    if (journey?.direction === "in" && journey.entry.id === id) {
      window.scrollTo({ top: 0, behavior: "instant" });
      land(journey, destination, document.querySelector<HTMLElement>("[data-game-detail-page] h1") ?? undefined);
    }
    return () => {};
  }, [land]);

  const returnToOrigin = useCallback((id: string) => {
    const entry = readEntry(id);
    if (!entry) { router.push("/games"); return; }
    begin(entry, "out", document.querySelector<HTMLElement>("[data-game-transition-target]"));
    router.back();
  }, [begin, router]);

  useLayoutEffect(() => {
    const journey = active.current;
    if (!journey) return;
    if (pathname !== journey.sourcePath && pathname !== journey.targetPath) { pending.current = null; finish(); return; }
    if (journey.direction !== "out" || pathname !== journey.targetPath) return;
    let frame = 0, attempts = 0;
    function restore() {
      if (active.current !== journey) return;
      // The homepage installs its repeated carousel after hydration and measures it.
      let link = originLink(journey!.entry);
      if ((!link || (journey!.entry.origin === "/" && !document.querySelector('[data-canonical="false"]'))) && attempts++ < 12) {
        frame = requestAnimationFrame(restore);
        return;
      }
      const carousel = link?.closest<HTMLElement>('[aria-roledescription="carousel"]');
      if (carousel && journey!.entry.carouselLeft !== undefined) carousel.scrollLeft = journey!.entry.carouselLeft;
      window.scrollTo({ top: journey!.entry.scrollY, behavior: "instant" });
      if (link?.getAttribute("aria-hidden") === "true") {
        // Rebase to the accessible copy while keeping the same artwork on screen.
        const canonical = document.querySelector<HTMLElement>(`[data-game-link="${CSS.escape(journey!.entry.id)}"][data-canonical="true"]`);
        if (canonical && carousel) {
          carousel.scrollLeft += canonical.getBoundingClientRect().left - link.getBoundingClientRect().left;
          link = canonical;
        }
      }
      land(journey!, link ? artwork(link) : undefined, link?.getAttribute("aria-hidden") === "true" ? undefined : link);
      lastDetail.current = null;
    }
    // Allow local catalog state and carousel measurements to settle first.
    frame = requestAnimationFrame(() => { frame = requestAnimationFrame(restore); });
    return () => cancelAnimationFrame(frame);
  }, [pathname, finish, land]);

  useEffect(() => {
    function onPopState() {
      const detail = lastDetail.current;
      if (detail && detail.entry && window.location.pathname === detail.entry.origin) {
        if (active.current?.direction !== "out") begin(detail.entry, "out", document.querySelector<HTMLElement>("[data-game-transition-target]"));
      } else {
        const entry = readEntry();
        if (entry && window.location.pathname === `/games/${entry.id}`) begin(entry, "in", originLink(entry) ?? null);
        else finish();
      }
      window.dispatchEvent(new Event(navigationEvent));
    }
    function cancel() { finish(); }
    window.addEventListener("popstate", onPopState);
    window.addEventListener("resize", cancel);
    window.addEventListener("pagehide", cancel);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("resize", cancel);
      window.removeEventListener("pagehide", cancel);
      finish();
    };
  }, [begin, finish]);

  return <Context.Provider value={{ expandGame, registerDestination, returnToOrigin }}>
    {children}<div ref={layer} hidden inert aria-hidden="true" className={styles.layer} />
  </Context.Provider>;
}

export function useGameTransition() {
  const context = useContext(Context);
  if (!context) throw new Error("Game transitions require GameTransitionProvider.");
  return context;
}
export function GameTransitionDestination({ gameId, className, children }: { gameId: string; className?: string; children: ReactNode }) {
  const element = useRef<HTMLDivElement>(null);
  const { registerDestination } = useGameTransition();
  useLayoutEffect(() => {
    if (element.current) return registerDestination(gameId, element.current);
  }, [gameId, registerDestination]);
  return <div ref={element} data-game-transition-target={gameId} className={className}>{children}</div>;
}
function subscribeEntry(listener: () => void) {
  window.addEventListener(navigationEvent, listener);
  window.addEventListener("popstate", listener);
  return () => {
    window.removeEventListener(navigationEvent, listener);
    window.removeEventListener("popstate", listener);
  };
}
export function GameReturnLink({ gameId, className }: { gameId: string; className?: string }) {
  const origin = useSyncExternalStore(subscribeEntry, () => readEntry(gameId)?.origin ?? "/games", () => "/games");
  const { returnToOrigin } = useGameTransition();
  return <Link href={origin} scroll={false} className={className} onNavigate={event => {
    event.preventDefault();
    returnToOrigin(gameId);
  }}><svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m8 4-6 6 6 6M2 10h16" /></svg>
    {origin === "/" ? "Back to homepage" : "Back to games"}
  </Link>;
}
