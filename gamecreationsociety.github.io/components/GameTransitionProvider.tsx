"use client";

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "@/components/GameTransitionProvider.module.css";

type TransitionContext = {
  expandGame: (id: string, source: HTMLElement, onStart?: () => void) => void;
  registerDestination: (id: string, destination: HTMLElement) => () => void;
};
type Expansion = {
  id: string;
  sourcePath: string;
  targetPath: string;
  frames: number[];
  timer: ReturnType<typeof setTimeout>;
  destination?: HTMLElement;
  previousOpacity?: string;
  main?: HTMLElement;
  wasInert?: boolean;
};

const TransitionContext = createContext<TransitionContext | null>(null);

// Copies are visual only; the actual page remains the navigation and accessibility surface.
function visualCopy(element: HTMLElement, className: string) {
  const container = document.createElement("div");
  container.className = className;
  container.style.width = "100%";
  container.style.height = "100%";
  const copy = element.cloneNode(true) as HTMLElement;
  copy.removeAttribute("id");
  copy.querySelectorAll("[id]").forEach((child) => child.removeAttribute("id"));
  copy.removeAttribute("data-game-transition-target");
  Object.assign(copy.style, { width: "100%", height: "100%", margin: "0", opacity: "1", border: "0", borderRadius: "0" });
  container.append(copy);
  return container;
}

export default function GameTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const layer = useRef<HTMLDivElement>(null);
  const active = useRef<Expansion | null>(null);

  const finish = useCallback(() => {
    const expansion = active.current;
    if (!expansion) return;
    active.current = null;
    clearTimeout(expansion.timer);
    expansion.frames.forEach(cancelAnimationFrame);
    if (expansion.destination) expansion.destination.style.opacity = expansion.previousOpacity ?? "";
    if (expansion.main) {
      expansion.main.removeAttribute("data-game-entering");
      expansion.main.inert = expansion.wasInert ?? false;
    }
    if (layer.current) {
      layer.current.hidden = true;
      layer.current.removeAttribute("data-expanding");
      layer.current.replaceChildren();
    }
  }, []);

  const expandGame = useCallback((id: string, source: HTMLElement, onStart?: () => void) => {
    const surface = layer.current;
    if (active.current || !surface) return;
    const rect = source.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      onStart?.();
      router.push(`/games/${encodeURIComponent(id)}`);
      return;
    }

    onStart?.();
    const expansion: Expansion = {
      id,
      sourcePath: window.location.pathname,
      targetPath: `/games/${encodeURIComponent(id)}`,
      frames: [],
      timer: setTimeout(finish, 2000),
    };
    active.current = expansion;
    surface.removeAttribute("data-expanding");
    surface.replaceChildren(visualCopy(source, styles.source));
    Object.assign(surface.style, {
      left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`,
      borderRadius: getComputedStyle(source).borderRadius,
      borderColor: getComputedStyle(source).borderColor,
    });
    surface.hidden = false;

    try {
      router.push(expansion.targetPath, { scroll: false });
    } catch {
      finish();
    }
  }, [finish, router]);

  const registerDestination = useCallback((id: string, destination: HTMLElement) => {
    const expansion = active.current;
    const surface = layer.current;
    if (!expansion || expansion.id !== id || !surface) return () => {};
    const cleanup = () => {
      // Strict Mode replays layout effects while the same destination is still mounted.
      queueMicrotask(() => {
        if (active.current === expansion && !destination.isConnected) finish();
      });
    };
    if (expansion.destination === destination) return cleanup;

    window.scrollTo({ top: 0, behavior: "instant" });
    const rect = destination.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      finish();
      return () => {};
    }
    expansion.destination = destination;
    expansion.previousOpacity = destination.style.opacity;
    expansion.main = destination.closest("main") ?? undefined;
    if (expansion.main) {
      expansion.wasInert = expansion.main.inert;
      expansion.main.inert = true;
      expansion.main.setAttribute("data-game-entering", "true");
    }
    destination.style.opacity = "0";
    surface.append(visualCopy(destination, styles.destination));
    clearTimeout(expansion.timer);

    // Let the source rectangle paint before changing bounds, including on prefetched routes.
    expansion.frames.push(requestAnimationFrame(() => {
      expansion.frames.push(requestAnimationFrame(() => {
        if (active.current !== expansion) return;
        surface.setAttribute("data-expanding", "true");
        Object.assign(surface.style, {
          left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`,
          borderRadius: getComputedStyle(destination).borderRadius,
        });
        expansion.timer = setTimeout(finish, 450);
      }));
    }));
    return cleanup;
  }, [finish]);

  useEffect(() => {
    const expansion = active.current;
    if (expansion && pathname !== expansion.sourcePath && pathname !== expansion.targetPath) finish();
  }, [pathname, finish]);

  useEffect(() => {
    window.addEventListener("resize", finish);
    window.addEventListener("pagehide", finish);
    window.addEventListener("popstate", finish);
    return () => {
      window.removeEventListener("resize", finish);
      window.removeEventListener("pagehide", finish);
      window.removeEventListener("popstate", finish);
      finish();
    };
  }, [finish]);

  return (
    <TransitionContext.Provider value={{ expandGame, registerDestination }}>
      {children}
      <div ref={layer} hidden inert aria-hidden="true" className={styles.layer} />
    </TransitionContext.Provider>
  );
}

export function useGameTransition() {
  const value = useContext(TransitionContext);
  if (!value) throw new Error("Game transitions require GameTransitionProvider.");
  return value;
}

export function GameTransitionDestination({ gameId, className, children }: { gameId: string; className?: string; children: ReactNode }) {
  const element = useRef<HTMLDivElement>(null);
  const { registerDestination } = useGameTransition();
  useLayoutEffect(() => {
    if (element.current) return registerDestination(gameId, element.current);
  }, [gameId, registerDestination]);
  return <div ref={element} data-game-transition-target={gameId} className={className}>{children}</div>;
}
