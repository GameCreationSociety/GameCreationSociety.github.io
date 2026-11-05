// Meeting descriptions are adapted from legacy/about.html and legacy/FAQ.html.
export const semesterEvents = [
  { name: "Pitch Fair", href: "/events#pitch-fair" },
  { name: "Alpha", href: "/events#project-meetings" },
  { name: "Beta", href: "/events#project-meetings" },
  { name: "Pre-Release", href: "/events#project-meetings" },
  { name: "Release", href: "/events#release" },
];

export const eventGuide = [
  {
    id: "pitch-fair",
    title: "Pitch Fair",
    description: "At the beginning of each semester, members present their game ideas at Pitch Fair and form teams. If you want to pitch a game and lead a project, talk to the officers beforehand about your idea and its scope.",
  },
  {
    id: "project-meetings",
    title: "Alpha, Beta, and Pre-Release",
    description: "At these meetings, teams present their games and exchange constructive criticism. Come see what other teams are working on and give them feedback.",
  },
  {
    id: "release",
    title: "Release",
    description: "At the end of the semester, teams show off the games they’ve been working on at the GCS Release Showcase. Projects are expected to be finished by then, but teams can continue working on them afterward.",
  },
  {
    id: "other-events",
    title: "Other meetings and events",
    description: "Some meetings are tutorials on game development or talks from guest speakers. We also hold game nights and social events. Office hours are a chance to work together, share resources, and get help from other members. Check the calendar and Discord for the current schedule.",
  },
];

export type GallerySlide = {
  id: string;
  label: string;
  caption: string;
  src?: string;
  alt?: string;
};

export const gallerySlides: GallerySlide[] = [
  { id: "collaboration", label: "Team collaboration", caption: "Image placeholder · Members working on a game together." },
  { id: "playtesting", label: "Playtesting and Release", caption: "Image placeholder · Sharing and playtesting student games." },
  { id: "community", label: "Club events and community", caption: "Image placeholder · Club activities and community." },
];

