"use client";

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { gameFilters, type GameFilterKey } from "@/data/games";

export type SortOrder = "newest" | "oldest" | "title";
type CatalogState = {
  search: string;
  filters: Partial<Record<GameFilterKey, string>>;
  sortOrder: SortOrder;
  scrollY: number;
};

const storageKey = "gcs-games-catalog-v1";
const defaultState: CatalogState = { search: "", filters: {}, sortOrder: "newest", scrollY: 0 };
let cachedState: CatalogState | undefined;
const listeners = new Set<() => void>();

function getSnapshot(): CatalogState {
  if (cachedState) return cachedState;
  cachedState = { ...defaultState };
  try {
    const saved: unknown = JSON.parse(sessionStorage.getItem(storageKey) ?? "null");
    if (!saved || typeof saved !== "object") return cachedState;
    const candidate = saved as Partial<CatalogState>;
    const filters: CatalogState["filters"] = {};
    for (const { key, options } of gameFilters) {
      const value = candidate.filters?.[key];
      if (typeof value === "string" && (options as readonly string[]).includes(value)) filters[key] = value;
    }
    cachedState = {
      search: typeof candidate.search === "string" ? candidate.search : "",
      filters,
      sortOrder: ["newest", "oldest", "title"].includes(candidate.sortOrder ?? "") ? candidate.sortOrder! : "newest",
      scrollY: typeof candidate.scrollY === "number" && Number.isFinite(candidate.scrollY) ? Math.max(0, candidate.scrollY) : 0,
    };
  } catch {
    // Browsing still works when storage is unavailable or a saved value is invalid.
  }
  return cachedState;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

function updateState(patch: Partial<CatalogState>) {
  cachedState = { ...getSnapshot(), ...patch };
  try { sessionStorage.setItem(storageKey, JSON.stringify(cachedState)); } catch { /* Storage is optional. */ }
  listeners.forEach((listener) => listener());
}

export function rememberCatalogPosition() {
  updateState({ scrollY: window.scrollY });
}

export function useGameCatalogState() {
  const state = useSyncExternalStore(subscribe, getSnapshot, () => defaultState);
  const restored = useRef(false);

  useLayoutEffect(() => {
    if (state === defaultState || restored.current) return;
    restored.current = true;
    window.scrollTo({ top: state.scrollY, behavior: "instant" });
  }, [state]);

  useLayoutEffect(() => {
    window.addEventListener("pagehide", rememberCatalogPosition);
    return () => window.removeEventListener("pagehide", rememberCatalogPosition);
  }, []);

  return { state, updateState, reset: () => updateState({ ...defaultState }) };
}
