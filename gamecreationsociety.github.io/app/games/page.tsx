import GamesCatalog from "@/components/GamesCatalog";
import { games } from "@/data/games";

export default function GamesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 sm:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold sm:text-4xl">GCS Games</h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Placeholder projects for the games catalog. Use the controls below to explore the scaffold.
        </p>
      </header>
      <GamesCatalog games={games} />
    </main>
  );
}
