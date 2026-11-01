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
  teamMembers: { name: string; role?: string }[];
  thumbnail?: { src: string; alt: string };
  details?: string;
  screenshots?: { src: string; alt: string }[];
  builds?: { label: string; url: string }[];
};

// Currently just placeholder games
export const games: Game[] = [
  {
    id: "placeholder-01", title: "Placeholder Game A",
    description: "A compact puzzle prototype about arranging shifting pieces.",
    details: "Placeholder project overview for a puzzle game. Players explore a series of small, hand-built rooms where pieces slide, rotate, and change the paths available through each space. This long-form placeholder gives the team room to explain the core idea, development process, and what they hope players notice. Replace it with the final game description when project copy is ready.",
    semester: "Fall", year: 2026, teamMembers: [{ name: "Sample Creator A", role: "Design and programming" }, { name: "Sample Creator B", role: "Art and level design" }, { name: "Sample Creator C", role: "Audio" }],
    platforms: ["Web", "Windows"], genres: ["Puzzle"], playerModes: ["Singleplayer"],
    inputMethods: [], engines: ["Godot"], awards: ["Best Art"], extras: ["Game-Jam"],
  },
  {
    id: "placeholder-02", title: "Placeholder Game B",
    description: "A cooperative arcade prototype built around quick shared challenges.",
    details: "Placeholder project overview for a cooperative arcade game. Two or more players work together through quick rounds that reward communication, timing, and playful experimentation. The final description can introduce the controls, explain how a session unfolds, and share what makes this project distinct. This copy is intentionally generic until the team supplies approved details.",
    semester: "Spring", year: 2026, teamMembers: [{ name: "Sample Creator D", role: "Game design" }],
    platforms: ["Windows", "Mac", "Linux"], genres: ["Arcade", "Party"], playerModes: ["Multiplayer"],
    inputMethods: ["Controller-Compatible"], engines: ["Unity"], awards: [], extras: ["Independent"],
  },
  {
    id: "placeholder-03", title: "Placeholder Game C",
    description: "A narrative prototype exploring a branching story through player choices.",
    details: "Placeholder project overview for a story-driven game. The player follows a sequence of conversations and choices that shape how the story is understood. This space can hold the premise, themes, and a short description of the writing and interactive structure once those details are cleared by the team. Until then, it remains sample content for the game detail layout.",
    semester: "Summer", year: 2026, teamMembers: [{ name: "Sample Creator E", role: "Writing and design" }],
    platforms: ["Web"], genres: ["Visual-Novel"], playerModes: ["Singleplayer"],
    inputMethods: [], engines: ["Twine"], awards: ["Best Music"], extras: [],
  },
  {
    id: "placeholder-04", title: "Placeholder Game D",
    description: "A virtual reality horror prototype focused on atmosphere and exploration.",
    details: "Placeholder project overview for a virtual reality horror game. Players move through an atmospheric environment, observe its details, and uncover clues about what happened there. Final copy can describe the intended experience, accessibility considerations, and headset requirements. This is generic placeholder text and does not describe a released or downloadable build.",
    semester: "Fall", year: 2025, teamMembers: [{ name: "Sample Creator F", role: "Creative direction" }],
    platforms: ["Windows"], genres: ["Horror"], playerModes: ["Singleplayer"],
    inputMethods: ["VR"], engines: ["Unreal"], awards: ["Best Tech"], extras: ["Game-Jam"],
  },
  {
    id: "placeholder-05", title: "Placeholder Game E",
    description: "A mobile strategy prototype about planning flexible turns with a team.",
    details: "Placeholder project overview for a mobile strategy game. Players plan a sequence of moves, adapt to changing conditions, and choose whether to cooperate or compete. The final overview can explain the game's systems and intended session length, along with notes about supported devices. This sample paragraph demonstrates how longer project information will appear on the detail page.",
    semester: "Spring", year: 2025, teamMembers: [{ name: "Sample Creator G", role: "Systems design" }],
    platforms: ["iOS", "Android"], genres: ["Strategy"], playerModes: ["Singleplayer", "Multiplayer"],
    inputMethods: [], engines: ["Unity"], awards: [], extras: ["Independent"],
  },
  {
    id: "placeholder-06", title: "Placeholder Game F",
    description: "An early prototype whose format and genre are still being explored.",
    details: "Placeholder project overview for an early prototype. The team is still exploring its mechanics, presentation, and the kind of experience it should become. This page provides a place to share progress and context while those decisions take shape. Replace this sample text with an approved overview when the project has more to share.",
    semester: "Summer", year: 2025, teamMembers: [{ name: "Sample Creator H", role: "Prototype development" }],
    platforms: ["Web"], genres: [], playerModes: ["Singleplayer"],
    inputMethods: [], engines: ["Pygame"], awards: [], extras: ["Game-Jam"],
  },
  {
    id: "placeholder-07", title: "Placeholder Game G",
    description: "A multiplayer racing prototype with alternate routes and shared play.",
    details: "Placeholder project overview for a racing game. Players compete across a set of compact courses with alternate routes and room for friendly rivalries. The eventual project page can describe its modes, controls, and design goals, plus credit the people who contributed. All copy here is sample content and should be replaced with information from the project team.",
    semester: "Fall", year: 2024, teamMembers: [{ name: "Sample Creator I", role: "Gameplay programming" }],
    platforms: ["Console", "Windows"], genres: ["Racing"], playerModes: ["Multiplayer"],
    inputMethods: ["Controller-Compatible", "Kinect"], engines: ["Unreal"],
    awards: ["GCS Gold Award", "People's Choice Award"], extras: [],
  },
  {
    id: "placeholder-08", title: "Placeholder Game H with a Longer Title for Layout Testing",
    description: "A tabletop strategy prototype for a group of players around one board.",
    details: "Placeholder project overview for a tabletop game. Players gather around a shared board, weigh competing priorities, and make decisions that affect the next round. This project detail page can later include a concise explanation of the rules, the creative process, and where to find printable materials if the team chooses to publish them. No game materials are linked yet.",
    semester: "Spring", year: 2024, teamMembers: [{ name: "Sample Creator J", role: "Game design" }],
    platforms: [], genres: ["Strategy", "Party"], playerModes: ["Multiplayer"],
    inputMethods: [], engines: ["Board"], awards: [], extras: ["Independent"],
  },
];
