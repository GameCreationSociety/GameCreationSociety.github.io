import { gameFilters, type Game } from "@/data/games";
import GameImage from "@/components/GameImage";
import GameMetadata from "@/components/GameMetadata";
import { GameReturnLink, GameTransitionDestination } from "@/components/GameTransitionProvider";
import GameScreenshots from "@/components/GameScreenshots";
import styles from "./games.module.css";

export default function GameDetails({ game }: { game: Game }) {
  const hasMetadata = gameFilters.some(({ key }) => game[key].length > 0);
  return <main data-game-detail-page className={styles.page}>
    <article className={`${styles.container} ${styles.detail}`}>
      <GameReturnLink gameId={game.id} className={styles.back} />
      <header className={styles.detailHero}>
        <GameTransitionDestination gameId={game.id} className={styles.detailImage}>
          <GameImage game={game} className="aspect-video w-full" sizes="(min-width: 900px) 670px, 100vw" priority />
        </GameTransitionDestination>
        <div className={styles.detailSummary} data-game-detail-copy>
          <p className={styles.semester}>{game.semester} {game.year}</p>
          <h1 tabIndex={-1}>{game.title}</h1>
          <p className={styles.description}>{game.description}</p>
          {game.teamMembers.length > 0 && <p className={styles.creatorSummary}>{game.teamMembers.map(({ name }) => name).join(", ")}</p>}
          {game.builds?.length ? <ul className={styles.builds} aria-label="Play or download">
            {game.builds.map(build => <li key={`${build.label}-${build.url}`}><a href={build.url} className={styles.action}>{build.label}</a></li>)}
          </ul> : <p className={styles.availability}>Build not available yet</p>}
        </div>
      </header>
      <div className={styles.detailBody} data-game-detail-copy>
        <div>
          <section aria-labelledby="about-game">
            <h2 id="about-game">About the game</h2>
            <p className={styles.prose}>{game.details || game.description}</p>
          </section>
          {!!game.screenshots?.length && <GameScreenshots screenshots={game.screenshots} title={game.title} />}
        </div>
        <aside className={styles.sidebar}>
          <section aria-labelledby="team-heading">
            <h2 id="team-heading">Team</h2>
            <ul>{game.teamMembers.length ? game.teamMembers.map(member => <li key={member.name}>
              <div>{member.name}</div>{member.role && <p>{member.role}</p>}
            </li>) : <li><p>Not specified</p></li>}</ul>
          </section>
          {hasMetadata && <section aria-labelledby="details-heading">
            <h2 id="details-heading">Game details</h2>
            <GameMetadata game={game} />
          </section>}
        </aside>
      </div>
    </article>
  </main>;
}
