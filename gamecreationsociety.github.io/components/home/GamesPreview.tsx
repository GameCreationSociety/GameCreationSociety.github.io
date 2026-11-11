import Link from "next/link";
import { games } from "@/data/games";
import { featuredGameIds } from "@/data/featured-games";
import ArtworkSection from "./ArtworkSection";
import GamesCarousel from "./GamesCarousel";
import styles from "./home.module.css";
export default function GamesPreview() {
  const seen = new Set<string>();
  const featured = featuredGameIds.map(id => {
    if (seen.has(id)) throw new Error(`Duplicate game ID "${id}" in data/featured-games.ts`);
    seen.add(id);
    const game = games.find(game => game.id === id);
    if (!game) throw new Error(`Unknown game ID "${id}" in data/featured-games.ts`);
    return game;
  });
  return <ArtworkSection kind="games" titleId="games-title">
    <div className={styles.heading}><h2 id="games-title">Our games</h2><Link className={styles.action} href="/games">View all games</Link></div>
    {featured.length > 0 && <GamesCarousel games={featured} />}
  </ArtworkSection>;
}
