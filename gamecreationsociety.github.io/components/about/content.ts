// Initial joining destinations come from the legacy About and FAQ pages.
// Discord's invite API confirmed this invite leads to CMU GCS on 2026-11-04.
export const aboutLinks = {
  discord: "https://discord.gg/Hfs9bfY",
  instagram: "https://instagram.com/gamecreation",
  mailingList: "https://lists.andrew.cmu.edu/mailman/listinfo/game-creation",
  calendar: "https://calendar.google.com/calendar/embed?src=andrew.cmu.edu_81nu9se1dvr891bdcfjo9ndovk%40group.calendar.google.com&ctz=America%2FNew_York",
  history: "https://www.gamecreation.org/history",
  email: "mailto:contact@gamecreation.org",
};

export const sectionLinks = [
  { label: "Each semester", href: "#what-we-do" },
  { label: "Getting involved", href: "#get-involved" },
  { label: "Past years", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "History", href: "#history" },
];

// Condensed from legacy/FAQ.html. Dated schedules and administrative policies are omitted.
export const faqs: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  { question: "How can I join?", answer: "Come to one of our meetings! You can find the next meeting time and location on our calendar. You can also join our Discord to chat with members and keep up with events and announcements." },
  { question: "I don’t have experience making games. Can I learn?", answer: "Absolutely! GCS helps members of all skill levels learn about game development through projects, tutorials, and help from other members. Ask about beginner-friendly teams at Pitch Fair." },
  { question: "What do I need to work on a game?", answer: "A passion for game creation and a willingness to learn. There is a place for artists of all styles and experience levels, as well as programmers and others interested in making games." },
  { question: "Do I have to work on a project to attend meetings?", answer: "Nope! If you want to sit in on meetings, attend events, or otherwise hang out, you’re welcome to." },
  { question: "What happens at GCS meetings?", answer: "We have several types of meetings throughout the semester.", link: { href: "/events#project-meetings", label: "See the meetings and events guide" } },
  { question: "How do I pitch a game and lead a project?", answer: "Talk to the officers before Pitch Fair about your idea and its scope. After a pitch is approved, you present it to the club and assemble a team for the semester. Ask the officers about the current pitch process." },
  { question: "What game engines and tools do you use?", answer: "GCS games have been made in Unity, Unreal, and GameMaker. Teams can use other engines, tools, or languages." },
  { question: "What happens to projects at the end of the semester?", answer: "Projects are expected to be finished by Release, but teams can continue working on them afterward.", link: { href: "/events#release", label: "About the Release Showcase" } },
];

type Milestone = {
  year: number;
  description: string;
  photo?: { label: string; caption: string };
};

// Condensed from legacy/history.html. Historical programs are not current offerings.
export const historyMilestones: Milestone[] = [
  { year: 2022, description: "Members host a barbecue and paint the Fence to promote the first in-person Release since the pandemic began.", photo: { label: "Fence painting, 2022", caption: "Photo placeholder · Painting the Fence to advertise Release." } },
  { year: 2020, description: "GCS starts Unreal Fast Track in partnership with Epic Games and moves game creation, playtesting, and meetings online during the COVID-19 pandemic." },
  { year: 2019, description: "GCS introduces its StuCo and Game Bytes program for new developers. The website is redesigned to focus on presenting the club and its projects." },
  { year: 2016, description: "GCS creates its Discord community, which becomes a hub for member conversations and announcements." },
  { year: 2014, description: "The GCS arcade cabinet is built to showcase student games. A website redesign introduces a lighter color scheme and removes the forum.", photo: { label: "The GCS Cabinet, 2014", caption: "Photo placeholder · The arcade cabinet built to play student games." } },
  { year: 2013, description: "The club celebrates its 100th game, Retrograde." },
  { year: 2010, description: "The website is redesigned with a dark theme and a streamlined layout." },
  { year: 2008, description: "GCS shifts toward smaller, simpler projects with more emphasis on learning new skills." },
  { year: 2007, description: "The club runs a bake sale." },
  { year: 2006, description: "The website receives a new address and its first major overhaul." },
  { year: 2005, description: "GCS celebrates 15 completed projects and holds its first officer elections." },
  { year: 2004, description: "GCS begins and completes its first game, Dragon Of Shiuliang. Founders include Curt Bererton, Chris DeLeon, John Nesky, and Greg Peng. The first meeting takes place on February 27. The club hosts its first guest speaker, starts a lending library, and paints the Fence for the first time." },
];
