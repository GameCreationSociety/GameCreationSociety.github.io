import Link from "next/link";
import Image from "next/image";
import { gameFilters, type Game } from "@/data/games";
import GameImage from "@/components/GameImage";
import { GameTransitionDestination } from "@/components/GameTransitionProvider";

const cardTagKeys = ["genres", "playerModes", "platforms"] as const;

export default function GameDetails({ game }: { game: Game }) {
	const metadata = gameFilters
		.map(({ key, label }) => ({ label, values: game[key] }))
		.filter(({ values }) => values.length > 0);
	const summaryTags = [...new Set([
		...game.genres,
		...game.playerModes,
		...game.platforms,
		...gameFilters.filter(({ key }) => !cardTagKeys.includes(key as (typeof cardTagKeys)[number])).flatMap(({ key }) => game[key]),
	])];

	return (
		<main data-game-detail-page className="mx-auto w-full max-w-6xl flex-1 px-6 py-8 sm:py-12">
			<Link
				href="/games"
				scroll={false}
				className="inline-flex rounded-sm text-sm font-medium text-zinc-600 transition hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950"
			>
				Back to games
			</Link>

			<article className="mt-6 space-y-10 sm:mt-8 sm:space-y-14">
				<GameTransitionDestination gameId={game.id} className="min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-background dark:border-zinc-800">
					<header className="flex min-w-0 flex-col">
						<GameImage game={game} className="aspect-video w-full shrink-0" sizes="(min-width: 1152px) 1152px, 100vw" priority />
						<div data-game-card-summary className="flex min-w-0 flex-col gap-4 p-5 sm:p-8 lg:p-10">
							<div>
								<p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
								{game.semester} {game.year}
								</p>
								<h1 className="min-w-0 break-words text-3xl font-semibold tracking-tight sm:text-4xl">{game.title}</h1>
							</div>
							<p className="max-w-3xl break-words text-base leading-6 text-zinc-600 dark:text-zinc-400">{game.description}</p>
							{summaryTags.length > 0 && (
								<div className="flex min-w-0 flex-wrap gap-1" aria-label="Game tags">
									{summaryTags.map((tag) => <span key={tag} className="max-w-full break-words rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{tag}</span>)}
								</div>
							)}
							{game.teamMembers.length > 0 && (
								<p className="break-words text-sm text-zinc-600 dark:text-zinc-400">
									{game.teamMembers.map(({ name }) => name).join(", ")}
								</p>
							)}
						</div>
					</header>
				</GameTransitionDestination>

					<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
						<section className="min-w-0 space-y-4" aria-labelledby="about-game">
							<h2 id="about-game" className="text-2xl font-semibold">About the game</h2>
							<p className="max-w-3xl break-words whitespace-pre-line leading-7 text-zinc-700 dark:text-zinc-300">
								{game.details || game.description}
							</p>
						</section>

						<aside className="min-w-0 space-y-7">
							<section aria-labelledby="team-heading">
								<h2 id="team-heading" className="text-lg font-semibold">Team</h2>
								<ul className="mt-3 min-w-0 space-y-3">
									{game.teamMembers.length ? game.teamMembers.map((member) => (
										<li key={member.name}>
											<p className="break-words font-medium">{member.name}</p>
											{member.role && <p className="break-words text-sm text-zinc-600 dark:text-zinc-400">{member.role}</p>}
										</li>
									)) : <li className="text-sm text-zinc-600 dark:text-zinc-400">Not specified</li>}
								</ul>
							</section>

							{metadata.length > 0 && (
								<section aria-labelledby="details-heading">
									<h2 id="details-heading" className="text-lg font-semibold">Game details</h2>
									<dl className="mt-3 space-y-3">
										{metadata.map(({ label, values }) => (
											<div key={label}>
												<dt className="text-sm font-medium">{label}</dt>
												<dd className="mt-0.5 break-words text-sm leading-6 text-zinc-600 dark:text-zinc-400">{values.join(", ")}</dd>
											</div>
										))}
									</dl>
								</section>
							)}
						</aside>
					</div>

					<section aria-labelledby="play-download-heading">
						<h2 id="play-download-heading" className="text-2xl font-semibold">Play / Download</h2>
						{game.builds?.length ? (
							<ul className="mt-4 flex flex-wrap gap-3">
								{game.builds.map((build) => (
									<li key={`${build.label}-${build.url}`}>
										<a
											href={build.url}
											className="inline-flex min-h-11 max-w-full items-center justify-center break-words rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950"
										>
											{build.label}
										</a>
									</li>
								))}
							</ul>
						) : (
							<p className="mt-3 text-zinc-600 dark:text-zinc-400">Build not available yet</p>
						)}
					</section>

					<section aria-labelledby="screenshots-heading">
						<h2 id="screenshots-heading" className="text-2xl font-semibold">Screenshots</h2>
						<div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{game.screenshots?.length ? game.screenshots.map((screenshot) => (
								<figure key={`${screenshot.src}-${screenshot.alt}`} className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
									<Image src={screenshot.src} alt={screenshot.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
								</figure>
							)) : [1, 2, 3].map((item) => (
								<div key={item} className="flex aspect-video items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
									Screenshot placeholder
								</div>
							))}
						</div>
					</section>
			</article>
		</main>
	);
}
