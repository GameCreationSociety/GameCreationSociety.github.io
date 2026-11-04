export type NewsItem = {
  id: string;
  title: string;
  date: string;
  body: string;
  image?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "spring-2026-release",
    title: "Spring 2026 Release Showcase",
    date: "May 2026",
    body: "Every team presents the game they built over the semester. Join us to play through the semester's projects and celebrate another round of finished games.",
    image: "/images/news/release-showcase.jpg",
  },
  {
    id: "gcs-gold-awards",
    title: "GCS Gold Awards announced",
    date: "May 2026",
    body: "This semester's award-winning games have been selected for the various categories we hold.",
  },
  {
    id: "fall-2025-pitch-fair",
    title: "Fall 2025 Pitch Fair",
    date: "Sep 2025",
    body: "Project leads pitched their ideas and assembled teams for the semester.",
  },
];

export type Game = {
  slug: string;
  title: string;
  semester: string;
  year: number;
  image?: string;
};

export const games: Game[] = [
  { slug: "bikes-of-fury", title: "Bikes of Fury", semester: "Spring", year: 2024, image: "image_path.png" },
  { slug: "avox", title: "Avox", semester: "Fall", year: 2023 },
  { slug: "super-flytrap-adventures", title: "Super Flytrap Adventures", semester: "Spring", year: 2023 },
  { slug: "mad-rabbits", title: "Mad Rabbits", semester: "Fall", year: 2022 },
  { slug: "cryptoeggs", title: "Cryptoeggs", semester: "Spring", year: 2022 },
  { slug: "supreme-hen-donkey", title: "Supreme Hen Donkey", semester: "Spring", year: 2022 },
];
