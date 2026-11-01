export const gameFilters = [
  { key: "platforms", label: "Platform", options: ["Windows", "Mac", "Linux", "Web", "iOS", "Android", "Console"] },
  { key: "genres", label: "Genre", options: ["Arcade", "Educational", "Fighting", "Horror", "Party", "Platformer", "Puzzle", "Racing", "Rhythm", "Roguelike", "RPG", "Shooter", "Strategy", "Visual-Novel", "Untagged"] },
  { key: "playerModes", label: "Players", options: ["Singleplayer", "Multiplayer"] },
  { key: "inputMethods", label: "Input Methods", options: ["Controller-Compatible", "VR", "Kinect"] },
  { key: "engines", label: "Engine", options: ["Unity", "Unreal", "Godot", "Flash", "Pygame", "Twine", "Board"] },
  { key: "awards", label: "Awards", options: ["Award-Winning", "GCS Gold Award", "Best Art", "Best Music", "Best Tech", "Most Innovative Gameplay", "Schell Games Award", "People's Choice Award"] },
  { key: "extras", label: "Extras", options: ["Game-Jam", "Independent"] },
] as const;

export type GameFilterKey = (typeof gameFilters)[number]["key"];
type FilterValues = {
  [Filter in (typeof gameFilters)[number] as Filter["key"]]: Array<Filter["options"][number]>;
};

export type Game = FilterValues & {
  id: string;
  title: string;
  description: string;
  semester: "Spring" | "Summer" | "Fall";
  year: number;
  teamMembers: string[];
  thumbnail?: { src: string; alt: string };
};

// Currently just placeholder games
export const games: Game[] = [
  {
    id: "placeholder-01", title: "Placeholder Game A",
    description: "Placeholder description for a puzzle project.",
    semester: "Fall", year: 2026, teamMembers: ["Sample Creator A", "Sample Creator B"],
    platforms: ["Web", "Windows"], genres: ["Puzzle"], playerModes: ["Singleplayer"],
    inputMethods: [], engines: ["Godot"], awards: ["Best Art"], extras: ["Game-Jam"],
  },
  {
    id: "placeholder-02", title: "Placeholder Game B",
    description: "Placeholder description for a cooperative arcade project.",
    semester: "Spring", year: 2026, teamMembers: ["Sample Creator C"],
    platforms: ["Windows", "Mac", "Linux"], genres: ["Arcade", "Party"], playerModes: ["Multiplayer"],
    inputMethods: ["Controller-Compatible"], engines: ["Unity"], awards: [], extras: ["Independent"],
  },
  {
    id: "placeholder-03", title: "Placeholder Game C",
    description: "Placeholder description for a story-driven project.",
    semester: "Summer", year: 2026, teamMembers: ["Sample Creator D"],
    platforms: ["Web"], genres: ["Visual-Novel"], playerModes: ["Singleplayer"],
    inputMethods: [], engines: ["Twine"], awards: ["Best Music"], extras: [],
  },
  {
    id: "placeholder-04", title: "Placeholder Game D",
    description: "Placeholder description for a virtual reality project.",
    semester: "Fall", year: 2025, teamMembers: ["Sample Creator E"],
    platforms: ["Windows"], genres: ["Horror"], playerModes: ["Singleplayer"],
    inputMethods: ["VR"], engines: ["Unreal"], awards: ["Best Tech"], extras: ["Game-Jam"],
  },
  {
    id: "placeholder-05", title: "Placeholder Game E",
    description: "Placeholder description for a mobile strategy project.",
    semester: "Spring", year: 2025, teamMembers: ["Sample Creator F"],
    platforms: ["iOS", "Android"], genres: ["Strategy"], playerModes: ["Singleplayer", "Multiplayer"],
    inputMethods: [], engines: ["Unity"], awards: [], extras: ["Independent"],
  },
  {
    id: "placeholder-06", title: "Placeholder Game F",
    description: "Placeholder description for an uncategorized prototype.",
    semester: "Summer", year: 2025, teamMembers: ["Sample Creator G"],
    platforms: ["Web"], genres: [], playerModes: ["Singleplayer"],
    inputMethods: [], engines: ["Pygame"], awards: [], extras: ["Game-Jam"],
  },
  {
    id: "placeholder-07", title: "Placeholder Game G",
    description: "Placeholder description for a racing project.",
    semester: "Fall", year: 2024, teamMembers: ["Sample Creator H"],
    platforms: ["Console", "Windows"], genres: ["Racing"], playerModes: ["Multiplayer"],
    inputMethods: ["Controller-Compatible", "Kinect"], engines: ["Unreal"],
    awards: ["GCS Gold Award", "People's Choice Award"], extras: [],
  },
  {
    id: "placeholder-08", title: "Placeholder Game H",
    description: "Placeholder description for a tabletop project.",
    semester: "Spring", year: 2024, teamMembers: ["Sample Creator I"],
    platforms: [], genres: ["Strategy", "Party"], playerModes: ["Multiplayer"],
    inputMethods: [], engines: ["Board"], awards: [], extras: ["Independent"],
  },
];
