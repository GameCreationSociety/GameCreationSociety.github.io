"use client";

import Link from "next/link";
import { useRef } from "react";
import GameImage from "@/components/GameImage";
import { useGameTransition } from "@/components/GameTransitionProvider";
import { gameFilters, type Game } from "@/data/games";

export default function GameCard({ game, onNavigate }: { game: Game; onNavigate?: () => void }) {
  const element = useRef<HTMLAnchorElement>(null);
  const { expandGame } = useGameTransition();
  const tags = [...new Set([
    ...game.genres,
    ...game.playerModes,
    ...game.platforms,
    ...gameFilters.filter(({ key }) => !["genres", "playerModes", "platforms"].includes(key)).flatMap(({ key }) => game[key]),
  ])];
  const team = game.teamMembers.slice(0, 2).map(({ name }) => name).join(", ");

  return (
    <article className="min-w-0">
      <Link
        ref={element}
        href={`/games/${game.id}`}
        onNavigate={(event) => {
          if (!element.current) return;
          event.preventDefault();
          expandGame(game.id, element.current, onNavigate);
        }}
        aria-label={`View ${game.title}`}
        className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-zinc-300 hover:border-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground dark:border-zinc-700 dark:hover:border-zinc-400"
      >
        <GameImage game={game} className="aspect-video w-full shrink-0" sizes="(min-width: 1024px) 520px, 100vw" />
        <div data-game-card-summary className="flex min-w-0 flex-col gap-1.5 p-3">
          <div>
            <h2 className="line-clamp-2 break-words text-base font-semibold">{game.title}</h2>
            <p className="text-xs leading-4 text-zinc-600 dark:text-zinc-400">{game.semester} {game.year}</p>
          </div>
          <p className="line-clamp-2 break-words text-sm leading-5">{game.description}</p>
          {tags.length > 0 && (
            <div className="flex min-w-0 flex-wrap gap-1" aria-label="Game tags">
              {tags.slice(0, 4).map((tag) => (
                <span key={tag} className="max-w-full truncate rounded bg-zinc-100 px-1.5 py-0.5 text-xs leading-4 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{tag}</span>
              ))}
              {tags.length > 4 && <span className="py-0.5 text-xs leading-4 text-zinc-600 dark:text-zinc-400">+{tags.length - 4}</span>}
            </div>
          )}
          {team && (
            <p className="flex min-w-0 flex-wrap gap-1 pt-1 text-xs leading-4 text-zinc-600 dark:text-zinc-400">
              <span className="min-w-0 break-words">{team}</span>
              {game.teamMembers.length > 2 && <span className="shrink-0">+{game.teamMembers.length - 2} more</span>}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
