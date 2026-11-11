import Hero from "@/components/home/Hero";
import ActivitySection from "@/components/home/ActivitySection";
import InfoSection from "@/components/home/InfoSection";
import GamesPreview from "@/components/home/GamesPreview";
import Sponsors from "@/components/home/Sponsors";
import styles from "@/components/home/home.module.css";
export const revalidate = 900;
export default function Home() {
  return <main className={styles.home}><Hero /><ActivitySection /><InfoSection /><GamesPreview /><Sponsors /></main>;
}
