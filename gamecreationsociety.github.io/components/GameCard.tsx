import Image from "next/image";
import { gameFilters, type Game } from "@/data/games";

export default function GameCard({ game }: { game: Game }) {
	return (
		<article className="overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-700">
			<div className="relative flex aspect-[5/3] items-center justify-center bg-zinc-100 dark:bg-zinc-900">
				{game.thumbnail ? (
					<Image
						src={game.thumbnail.src}
						alt={game.thumbnail.alt}
						fill
						sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
						className="object-cover"
					/>
				) : (
					<span className="text-sm text-zinc-600 dark:text-zinc-400">Image placeholder</span>
				)}
			</div>
			<div className="space-y-4 p-5">
				<div>
					<h2 className="text-xl font-semibold">{game.title}</h2>
					<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
						{game.semester} {game.year}
					</p>
				</div>
				<p className="text-sm leading-6">{game.description}</p>
				<dl className="space-y-2 text-sm">
					<div>
						<dt className="font-medium">Team</dt>
						<dd className="text-zinc-600 dark:text-zinc-400">{game.teamMembers.join(", ") || "Not specified"}</dd>
					</div>
					{gameFilters.map(({ key, label }) => (
						<div key={key}>
							<dt className="font-medium">{label}</dt>
							<dd className="break-words text-zinc-600 dark:text-zinc-400">
								{game[key].join(", ") || (key === "genres" ? "Untagged" : "Not specified")}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</article>
	);
}
