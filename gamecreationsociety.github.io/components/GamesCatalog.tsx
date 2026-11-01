"use client";

import { useState } from "react";
import GameCard from "@/components/GameCard";
import { gameFilters, type Game, type GameFilterKey } from "@/data/games";

type SortOrder = "newest" | "oldest" | "title";
const semesterOrder = { Spring: 0, Summer: 1, Fall: 2 };
const controlClassName = "mt-2 min-h-11 w-full rounded-md border border-zinc-400 bg-background px-3 py-2 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:border-zinc-600";

export default function GamesCatalog({ games }: { games: Game[] }) {
	const [search, setSearch] = useState("");
	const [filters, setFilters] = useState<Partial<Record<GameFilterKey, string>>>({});
	const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

	const terms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
	const visibleGames = games.filter((game) => {
		const matchesFilters = gameFilters.every(({ key }) => {
			const value = filters[key];
			if (!value) return true;
			if (key === "genres" && value === "Untagged") return game.genres.length === 0;
			if (key === "awards" && value === "Award-Winning") return game.awards.length > 0;
			return (game[key] as readonly string[]).includes(value);
		});
		const searchableFields = [game.title, game.description, ...game.teamMembers]
			.map((field) => field.toLowerCase());
		return matchesFilters && terms.every((term) => searchableFields.some((field) => field.includes(term)));
	}).sort((a, b) => {
		const byTitle = a.title.localeCompare(b.title);
		if (sortOrder === "title") return byTitle;
		const chronological = a.year - b.year || semesterOrder[a.semester] - semesterOrder[b.semester];
		return (sortOrder === "newest" ? -chronological : chronological) || byTitle;
	});

	function reset() {
		setSearch("");
		setFilters({});
		setSortOrder("newest");
	}

	return (
		<>
			<section aria-label="Search, sort, and filter games" className="space-y-6 border-b border-zinc-300 pb-8 dark:border-zinc-700">
				<div className="grid gap-4 sm:grid-cols-[1fr_12rem]">
					<label className="text-sm font-medium">
						Search games
						<input
							type="search"
							value={search}
							onChange={(event) => setSearch(event.target.value)}
							placeholder="Title, description, or team member"
							className={controlClassName}
						/>
					</label>
					<label className="text-sm font-medium">
						Sort by
						<select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)} className={controlClassName}>
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
							<option value="title">Title</option>
						</select>
					</label>
				</div>
				<fieldset>
					<legend className="mb-3 font-semibold">Filter by</legend>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{gameFilters.map(({ key, label, options }) => (
							<label key={key} className="min-w-0 text-sm font-medium">
								{label}
								<select
									value={filters[key] ?? ""}
									onChange={(event) => setFilters({ ...filters, [key]: event.target.value })}
									className={controlClassName}
								>
									<option value="">Any</option>
									{options.map((option) => <option key={option} value={option}>{option}</option>)}
								</select>
							</label>
						))}
					</div>
				</fieldset>
				<button type="button" onClick={reset} className="min-h-11 rounded-md border border-zinc-400 px-4 py-2 text-sm font-medium hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:border-zinc-600 dark:hover:bg-zinc-900">
					Reset filters
				</button>
			</section>
			<p role="status" aria-live="polite" aria-atomic="true" className="my-6 text-sm text-zinc-600 dark:text-zinc-400">
				{visibleGames.length} {visibleGames.length === 1 ? "game" : "games"} found
			</p>
			{visibleGames.length > 0 ? (
				<div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{visibleGames.map((game) => <GameCard key={game.id} game={game} />)}
				</div>
			) : (
				<div className="py-12 text-center">
					<h2 className="text-xl font-semibold">No games found</h2>
					<p className="mt-2 text-zinc-600 dark:text-zinc-400">Try another search or reset the filters to see all games.</p>
				</div>
			)}
		</>
	);
}
