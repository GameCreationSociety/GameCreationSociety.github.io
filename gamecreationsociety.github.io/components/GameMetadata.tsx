import { gameFilters, type Game } from "@/data/games";
import styles from "./games.module.css";

export default function GameMetadata({ game }: { game: Game }) {
  const groups = gameFilters.filter(({ key }) => game[key].length > 0);
  if (!groups.length) return null;

  return <dl className={styles.metadata} aria-label="Game information">
    {groups.map(({ key, label }) => <div key={key} className={styles.metadataGroup}>
      <dt>{label}</dt>
      <dd>{game[key].map(value => <span key={value} className={styles.metadataValue}>{value}</span>)}</dd>
    </div>)}
  </dl>;
}
