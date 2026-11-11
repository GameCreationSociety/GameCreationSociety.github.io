"use client";

import Link from "next/link";
import { useRef } from "react";
import GameImage from "@/components/GameImage";
import GameMetadata from "@/components/GameMetadata";
import { useGameTransition } from "@/components/GameTransitionProvider";
import type { Game } from "@/data/games";
import styles from "./games.module.css";

export default function GameCard({ game, onNavigate }: { game: Game; onNavigate?: () => void }) {
  const element = useRef<HTMLAnchorElement>(null);
  const { expandGame } = useGameTransition();
  const team = game.teamMembers.slice(0, 2).map(({ name }) => name).join(", ");

  return <article className={styles.card}>
    <Link ref={element} href={`/games/${game.id}`} data-game-link={game.id}
      onNavigate={event => {
        if (!element.current) return;
        event.preventDefault();
        expandGame(game.id, element.current, onNavigate);
      }} aria-label={`View ${game.title}`} className={styles.cardLink}>
      <div className={styles.cardBackground} aria-hidden="true" />
      <div data-game-artwork><GameImage game={game} className={styles.cardImage} sizes="(max-width: 423px) calc(100vw - 64px), 360px" /></div>
      <div className={styles.cardSummary}>
        <div className={styles.cardHeading}>
          <h2 className={styles.cardTitle}>{game.title}</h2>
          <p className={styles.semester}>{game.semester} {game.year}</p>
        </div>
        <p className={styles.cardDescription}>{game.description}</p>
        <GameMetadata game={game} />
        {team && <p className={styles.teamPreview}><span>{team}</span>
          {game.teamMembers.length > 2 && <span>+{game.teamMembers.length - 2} more</span>}
        </p>}
      </div>
    </Link>
  </article>;
}
