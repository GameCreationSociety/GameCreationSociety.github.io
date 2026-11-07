// Links are also used by the About page; preserve the existing destinations.
export const semesterEvents = [
  { name: "Pitch Fair", href: "/events#pitch-fair" },
  { name: "Alpha", href: "/events#project-meetings" },
  { name: "Beta", href: "/events#project-meetings" },
  { name: "Pre-Release", href: "/events#project-meetings" },
  { name: "Release", href: "/events#release" },
];

type EventStory = {
  id: string;
  title: string;
  image: { label: string; src?: string; alt?: string };
  descriptions: { id?: string; text: string }[];
};

export const eventStories: EventStory[] = [
  {
    id: "pitch-fair",
    title: "Pitch Fair",
    image: { label: "Pitch Fair and team formation" },
    descriptions: [{ text: "Hear members pitch their game ideas and find a team for the semester." }],
  },
  {
    id: "project-meetings",
    title: "Playtesting and Release",
    image: { label: "Sharing and playtesting games" },
    descriptions: [
      { text: "At Alpha, Beta, and Pre-Release, see games in progress and share feedback." },
      { id: "release", text: "At Release, play the semester’s games and meet their creators." },
    ],
  },
  {
    id: "other-events",
    title: "Learn and hang out",
    image: { label: "Club activities and community" },
    descriptions: [{ text: "Learn through tutorials and guest talks, get help during office hours, or join a game night." }],
  },
];
