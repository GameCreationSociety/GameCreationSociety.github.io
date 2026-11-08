import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import NewsSection from "@/components/home/NewsSection";
import GamesPreview from "@/components/home/GamesPreview";
import Sponsors from "@/components/home/Sponsors";
import { newsItems } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoSection />
      <NewsSection items={newsItems} />
      <GamesPreview />
      <Sponsors />
    </main>
  );
}
