import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GameDetails from "@/components/GameDetails";
import { games } from "@/data/games";

type GamePageProps = {
	params: Promise<{ id: string }>;
};

export function generateStaticParams() {
	return games.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
	const { id } = await params;
	const game = games.find((entry) => entry.id === id);

	if (!game) notFound();

	return {
		title: `${game.title} | Game Creation Society`,
		description: game.description,
	};
}

export default async function GamePage({ params }: GamePageProps) {
	const { id } = await params;
	const game = games.find((entry) => entry.id === id);

	if (!game) notFound();

	return <GameDetails game={game} />;
}
