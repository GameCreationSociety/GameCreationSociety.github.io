import GameTransitionProvider from "@/components/GameTransitionProvider";

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return <GameTransitionProvider>{children}</GameTransitionProvider>;
}
