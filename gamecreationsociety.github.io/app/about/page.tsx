import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import ParticipationSections from "@/components/about/ParticipationSections";
import AboutHighlights from "@/components/about/AboutHighlights";
import AboutFaq from "@/components/about/AboutFaq";
import AboutHistory from "@/components/about/AboutHistory";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About | Game Creation Society",
  description: "Learn about Carnegie Mellon’s student-run game development club, how we make games together, and how to get involved with GCS.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <AboutIntro />
      <ParticipationSections />
      <AboutHighlights />
      <AboutFaq />
      <AboutHistory />
    </main>
  );
}
