import Image from "next/image";
import type { Game } from "@/data/games";

export default function GameImage({ game, className = "", sizes = "100vw", priority = false }: {
  game: Game;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
      <div className={`relative flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-900 ${className}`}>
        {game.thumbnail ? (
          <Image src={game.thumbnail.src} alt={game.thumbnail.alt} fill sizes={sizes} priority={priority} className="object-cover" />
        ) : (
          <span className="px-3 text-center text-xs text-zinc-600 dark:text-zinc-400">Image placeholder</span>
        )}
      </div>
  );
}
