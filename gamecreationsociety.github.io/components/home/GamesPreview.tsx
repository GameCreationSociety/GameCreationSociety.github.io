import Link from "next/link";
import { games, type Game } from "@/lib/data";

export default function GamesPreview() {
  const loop = [...games, ...games];

  return (
    <section className="border-b-2 border-black">
      <div className="mx-auto max-w-6xl p-8 md:p-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Our Games</h2>
          <Link
            href="/games"
            className="border-2 border-black px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
          >
            View all
          </Link>
        </div>

        <div className="gcs-fade-edges overflow-hidden">
          <div className="gcs-marquee flex w-max">
            {loop.map((game, i) => (
              <GameCard key={`${game.slug}-${i}`} game={game} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GameCard({ game }: { game: Game }) {
  return (
    <div className="w-56 shrink-0 border-2 border-black">
      <div className="flex aspect-video items-center justify-center bg-neutral-200">
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Game image
        </span>
      </div>
      <div className="border-t-2 border-black p-3">
        <h3 className="truncate font-bold">{game.title}</h3>
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          {game.semester} {game.year}
        </p>
      </div>
    </div>
  );
}
