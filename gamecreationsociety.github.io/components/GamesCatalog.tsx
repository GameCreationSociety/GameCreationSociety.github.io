"use client";

import { useLayoutEffect, useRef } from "react";
import GameCard from "@/components/GameCard";
import { gameFilters, type Game } from "@/data/games";
import { rememberCatalogPosition, useGameCatalogState, type SortOrder } from "@/lib/game-catalog-state";
import styles from "./games.module.css";

const semesterOrder = { Spring: 0, Summer: 1, Fall: 2 };

export default function GamesCatalog({ games }: { games: Game[] }) {
  const collection = useRef<HTMLDivElement>(null);
  const { state: { search, filters, sortOrder }, updateState, reset } = useGameCatalogState();
  const terms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const activeFilters = gameFilters.filter(({ key }) => filters[key]);
  const visibleGames = games.filter(game => {
    const matchesFilters = gameFilters.every(({ key }) => {
      const value = filters[key];
      if (!value) return true;
      if (key === "genres" && value === "Untagged") return game.genres.length === 0;
      if (key === "awards" && value === "Award-Winning") return game.awards.length > 0;
      return (game[key] as readonly string[]).includes(value);
    });
    const searchableFields = [game.title, game.description, ...game.teamMembers.map(({ name }) => name)].map(field => field.toLowerCase());
    return matchesFilters && terms.every(term => searchableFields.some(field => field.includes(term)));
  }).sort((a, b) => {
    const byTitle = a.title.localeCompare(b.title);
    if (sortOrder === "title") return byTitle;
    const chronological = a.year - b.year || semesterOrder[a.semester] - semesterOrder[b.semester];
    return (sortOrder === "newest" ? -chronological : chronological) || byTitle;
  });

  useLayoutEffect(() => {
    const element = collection.current;
    const parent = element?.parentElement;
    if (!element || !parent) return;
    function fitCollection() {
      element!.style.width = "100%";
      const cards = Array.from(element!.children) as HTMLElement[];
      const first = cards[0];
      if (!first) return;
      const row = cards.filter(card => card.offsetTop === first.offsetTop);
      const last = row[row.length - 1];
      const width = `${last.offsetLeft + last.offsetWidth - first.offsetLeft}px`;
      element!.style.width = width;
      parent!.style.setProperty("--games-collection-width", width);
    }
    fitCollection();
    const observer = new ResizeObserver(fitCollection);
    observer.observe(parent);
    return () => {
      observer.disconnect();
      parent.style.removeProperty("--games-collection-width");
    };
  }, [visibleGames.length]);

  function filterControl({ key, label, options }: (typeof gameFilters)[number]) {
    return <label key={key} className={styles.label}>{label}
      <select aria-label={label} value={filters[key] ?? ""} className={styles.control}
        onChange={event => updateState({ filters: { ...filters, [key]: event.target.value }, scrollY: 0 })}>
        <option value="">Any</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>;
  }

  return <>
    <section id="games-catalog" className={styles.filters} aria-labelledby="catalog-heading" tabIndex={-1}>
      <div className={styles.catalogHeading}>
        <h2 id="catalog-heading" className={styles.filterHeading}>Explore the catalog</h2>
        <p role="status" aria-live="polite" aria-atomic="true" className={styles.count}>{visibleGames.length} {visibleGames.length === 1 ? "game" : "games"} found</p>
      </div>
      <div className={styles.searchRow}>
        <label className={`${styles.label} ${styles.searchControl}`}>Search games
          <input type="search" value={search} onChange={event => updateState({ search: event.target.value, scrollY: 0 })}
            placeholder="Title, description, or team member" className={styles.control} />
        </label>
        <label className={`${styles.label} ${styles.sortControl}`}>Sort by
          <select aria-label="Sort by" value={sortOrder} onChange={event => updateState({ sortOrder: event.target.value as SortOrder, scrollY: 0 })} className={styles.control}>
            <option value="newest">Newest</option><option value="oldest">Oldest</option><option value="title">Title</option>
          </select>
        </label>
      </div>
      <div className={styles.filterRow}>{gameFilters.map(filterControl)}</div>
      {(search.trim() || activeFilters.length > 0 || sortOrder !== "newest") && <div className={styles.selections}>
        <div className={styles.chips}>
          {search.trim() && <button className={styles.chip} type="button" onClick={() => updateState({ search: "", scrollY: 0 })} aria-label={`Remove search: ${search}`}>
            Search: {search}<CloseIcon />
          </button>}
          {activeFilters.map(({ key, label }) => <button key={key} className={styles.chip} type="button"
            onClick={() => updateState({ filters: { ...filters, [key]: "" }, scrollY: 0 })} aria-label={`Remove ${label}: ${filters[key]}`}>
            {label}: {filters[key]}<CloseIcon />
          </button>)}
        </div>
        <button type="button" onClick={reset} className={styles.clear}>Clear all</button>
      </div>}
    </section>
    {visibleGames.length ? <div ref={collection} className={styles.collection}>
      {visibleGames.map(game => <GameCard key={game.id} game={game} onNavigate={rememberCatalogPosition} />)}
    </div> : <div className={styles.empty}>
      <h3>No games found</h3><p>Try another search or clear the filters to see all games.</p>
      <button type="button" onClick={reset} className={styles.clear}>Clear all</button>
    </div>}
  </>;
}

function CloseIcon() {
  return <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={{ flexShrink: 0 }}><path d="m4 4 8 8M12 4l-8 8" /></svg>;
}
