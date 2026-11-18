export type Position = { role: string; period: string };
export type MemberLink = { label: string; url: string };

export type Member = {
  slug: string;
  name: string;
  classOf: number;
  bio: string[];
  photo?: string;
  currentPosition?: string;
  pastPositions?: Position[];
  email?: string;
  phone?: string;
  website?: string;
  resume?: string;
  links?: MemberLink[];
  updated?: string;
};

export const officerRoles = [
  { role: "President", email: "president@gamecreation.org" },
  { role: "Vice President", email: "vicepresident@gamecreation.org" },
  { role: "Director of Development", email: "director@gamecreation.org" },
  { role: "Public Relations Lead", email: "pr@gamecreation.org" },
  { role: "Chief of Operations", email: "sysadmin@gamecreation.org" },
  { role: "Treasurer", email: "treasurer@gamecreation.org" },
];

export const resumeBaseUrl = "https://stage.gamecreation.org/resumes/";

export const members: Member[] = [
  {
    slug: "adela-kapuscinska",
    name: "Adela Kapuścińska",
    classOf: 2019,
    bio: [
      "Hey, I'm Adela (she/her)! I'm a game designer and UX designer from Poland, and have worked on video games and board games. At CMU, I operated between CFA (fine arts with a game design minor), ETC and HCII. Always happy to chat with any GCS members :)"
    ],
    website: "https://www.adelakapuscinska.com/",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/akapx/"
      }
    ],
    updated: "March 31, 2023"
  },
  {
    slug: "adrian-biagioli",
    name: "Adrian Biagioli",
    classOf: 2020,
    bio: [
      "I am currently a student at CMU's School of Computer Science, with minors in Game Design and Animation & Special effects. I like to create interactive 3D experiences and research new ways to promote interaction between users and their devices. With new advances in VR and AR, I am excited to see what new levels of presence can be achieved.",
      "As Director of Development at GCS from 2016-2019, I helped develop the course materials for/teach the GCS StuCo, helped run the GCS Pitch Fair, and assisted teams with technical issues. Currently I am a TA for CMU's 15-462 Computer Graphics. I have additionally worked as a TA for CMU's 15-122 Principles of Imperative Computation. During Summer 2019, I worked at Apple as an intern.",
      "Currently the majority of my personal projects are in the Unity game engine. I am currently exploring the fields of interactive design (that is, the interaction between humans and their devices, specifically in 3D applications) and computer graphics (rendering techniques to create convincing virtual worlds). Check out my Personal Blog and my Github to browse my work!"
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2017-2019"
      }
    ],
    website: "https://flafla2.github.io",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Flafla2"
      },
      {
        label: "15-462 Computer Graphics",
        url: "http://15462.courses.cs.cmu.edu"
      },
      {
        label: "15-122 Principles of Imperative Computation.",
        url: "http://www.cs.cmu.edu/~15122/"
      },
      {
        label: "Personal Blog",
        url: "http://flafla2.github.io"
      }
    ],
    updated: "November 15, 2020"
  },
  {
    slug: "adrian-ma",
    name: "Adrian Ma",
    classOf: 2023,
    bio: [
      "Hello! I'm a Human-Computer Interaction and Cognitive Science major who loves creating environments and immersive experiences. I work mainly on programming, UI/UX, and art and am most comfortable with Unity and Blender."
    ],
    pastPositions: [
      {
        role: "President",
        period: "2022"
      }
    ],
    email: "adrianm@andrew.cmu.edu",
    updated: "January 9, 2023"
  },
  {
    slug: "adrian-mester",
    name: "Adrian Mester",
    classOf: 2021,
    bio: [
      "Adrian Mester is a senior in the BXA program studying Computer Science and Music Technology."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2020"
      }
    ],
    email: "a.jul.mester@gmail.com",
    phone: "8592504986",
    website: "https://ajulmester.wixsite.com/ajulm",
    resume: "Resume - Adrian Mester.pdf",
    links: [
      {
        label: "SoundCloud",
        url: "https://soundcloud.com/dabomb1313"
      },
      {
        label: "GitHub",
        url: "https://github.com/RedHippi"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/adrian-j-mester/"
      },
      {
        label: "Itch.io",
        url: "https://redhippi.itch.io/"
      }
    ],
    updated: "January 5, 2021"
  },
  {
    slug: "alana-gerald",
    name: "Alana Gerald",
    classOf: 2024,
    bio: [
      "Hi! I'm an Electrical and Computer Engineering major who likes to do 2D art for GCS. I've been trying to learn game engines like Unity and Godot for fun on the side. I've always liked playing games so GCS gives me a fun platform to experiment and make some."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2022"
      }
    ],
    updated: "January 9, 2022"
  },
  {
    slug: "alexander-lyons",
    name: "Alexander Lyons",
    classOf: 2025,
    bio: [
      "Hello! I am an AI major from New York City. I like making games as a hobby, and I look forward to making more!"
    ],
    email: "alyons@andrew.cmu.edu",
    updated: "August 17, 2022"
  },
  {
    slug: "alexander-su",
    name: "Alexander Su",
    classOf: 2026,
    bio: [
      "Games shouldn't be fun"
    ],
    email: "sualexander2013@gmail.com",
    website: "https://sualexander.github.io/",
    links: [
      {
        label: "Itch.io",
        url: "https://sualexander.itch.io/"
      },
      {
        label: "GitHub",
        url: "https://github.com/sualexander"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@alexandersu9397"
      }
    ],
    updated: "January 21, 2025"
  },
  {
    slug: "alexander-werth",
    name: "Alexander Werth",
    classOf: 2028,
    bio: [
      "Being a robotics nerd DOES translate to Blender!"
    ],
    email: "awerth2@andrew.cmu.edu",
    updated: "November 18, 2024"
  },
  {
    slug: "amy-lin",
    name: "Amy Lin",
    classOf: 2024,
    bio: [
      "Hi! I'm the Director of Development this year for GCS, previously I led a multiplayer FPS game called Empyrean. I spend most of my time programming, but I otherwise enjoy thrifting, sewing, and playing Valorant."
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2023"
      }
    ],
    email: "amylin2@andrew.cmu.edu",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/amyxlase"
      }
    ],
    updated: "January 30, 2024"
  },
  {
    slug: "an-tang",
    name: "An Tang",
    classOf: 2023,
    bio: [
      "Nice to meet you! I'm an AI major in my second year.",
      "I am still a beginner at game design and I was drawn in by indie games such as Undertale, Hiveswap, and the To the Moon series. I am amazed by how technologies have brought a new layer of experience to traditional story telling.",
      "I have currently only made games with Twine, but I am always eager to learn!"
    ],
    email: "antang06211@gmail.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/antang211/"
      }
    ],
    updated: "January 4, 2021"
  },
  {
    slug: "anabelle-kang",
    name: "Anabelle Kang",
    classOf: 2024,
    bio: [
      "Anabelle Kang is a freshman in the College of Fine Arts with a focus in illustration."
    ],
    email: "anabellek2001@gmail.com",
    phone: "7867022323",
    resume: "Anabelle Kang - Anabelle Kang.pdf",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCQ2o9P-ZDmUEvy8YPaPXH2Q/videos"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/puakaba.art/"
      }
    ],
    updated: "January 5, 2021"
  },
  {
    slug: "annika-wu",
    name: "Annika Wu",
    classOf: 2024,
    bio: [
      "Hi! I'm a CMU undergrad studying CS and Music Tech. I'm also an avid rhythm gamer who loves Japanese hardcore/techno music."
    ],
    email: "annikaw@andrew.cmu.edu",
    resume: "AnnikaWu.pdf",
    links: [
      {
        label: "Box",
        url: "https://cmu.box.com/s/f3k9idt8jh0holtjzgrt2zg2xn01oqj9"
      }
    ],
    updated: "August 17, 2022"
  },
  {
    slug: "audrey-renouf",
    name: "Audrey Renouf",
    classOf: 2023,
    bio: [
      "Hi! I'm an Human Computer Interaction and Art major. I love making video games and work primarily as an 2D/3D artist as well as a UI/UX designer, but if the need arises I don't mind doing some coding either."
    ],
    email: "arenouf@andrew.cmu.edu",
    website: "https://arenouf49.wixsite.com/portfolio",
    updated: "January 16, 2023"
  },
  {
    slug: "augustus-saalfeld",
    name: "Augustus Saalfeld",
    classOf: 2022,
    bio: [
      "I like games with unique mechanics or compelling narratives. The last game to make me cry was Valiant Hearts. The first game to make me cry was Pokemon, when at age 6 I accidentally released my Charmander.",
      "Top 3 Games: Moonhunters, Transistor, Kirby's Air Ride"
    ],
    website: "https://augustus-saalfeld.myportfolio.com/",
    updated: "February 5, 2020"
  },
  {
    slug: "basil-collis",
    name: "Basil Collis",
    classOf: 2024,
    bio: [
      "Hi, I am a Music Technology major with a study emphasis in Computer Science. I really enjoy designing sounds and writing soundtracks for games, and coming up with creative ways of implementing them. My favorite games are Overwatch, Minecraft, and Mario Kart."
    ],
    email: "bcollis@andrew.cmu.edu",
    phone: "3145400871",
    updated: "May 2, 2022"
  },
  {
    slug: "ben-cagan",
    name: "Ben Cagan",
    classOf: 2023,
    bio: [
      "Undergrad Majoring in CS and Minoring in Japanese"
    ],
    website: "http://www.benjamincagan.com/",
    resume: "Resume - Benjamin Cagan.pdf",
    updated: "April 2, 2022"
  },
  {
    slug: "brandan-chen",
    name: "Brandan Chen",
    classOf: 2024,
    bio: [
      "Hello hello. I'm Brandan! I'm majoring in Information Systems with a double minor in Game Design and Human-Computer Interaction. I joined GCS my freshman fall, and have worked on games as a music producer, producer, and game designer. I play all kinds of games from FPS's to MOBA's to your classic indie games, though I mainly play Valorant and League of Legends."
    ],
    email: "bychen@andrew.cmu.edu",
    phone: "9178320456",
    website: "https://www.brandanchen.com",
    resume: "Resume - Brandan Chen",
    updated: "December 24, 2021"
  },
  {
    slug: "brendan-valley",
    name: "Brendan Valley",
    classOf: 2019,
    bio: [
      "Hello, I'm Brendan and I typically am a variety man when it comes to game development. I love composing 8-bit music, drawing pixel art, and working in GameMaker and Unity.",
      "I'm currently at the Entertainment Technology Center for my masters in Entertainment Technology."
    ],
    website: "https://www.brendanvalley.com/",
    updated: "December 17, 2019"
  },
  {
    slug: "brian-teng",
    name: "Brian Teng",
    classOf: 2020,
    bio: [
      "I'm a game designer and developer from Taiwan. I majored in EECS in National Chiao Tung University and received a degree of B.E. upon graduation. Now, I am a graduate student at the Entertainment Technology Center of Carnegie Mellon University. I am currently working at OVA, a Montreal-based VR startup as a Unity developer.",
      "​​",
      "I found my interest in game design during my junior year in college, and has since then been seeking constantly for opportunities to get involved with the game-dev world. Currently my experience emphasizes game design (VR/AR in particular), creative writing with a touch of sound design.",
      "​",
      "I have a stronger analytical brain than my creative one, meaning that I usually listen to people first and ask questions before I start contributing ideas and solutions to the team. I also like to challenge myself, picking harder routes and see where I end up. It's the experience collected along the way that's important!"
    ],
    website: "https://www.ycteng.xyz",
    resume: "Resume - Yang Che Teng.pdf",
    links: [
      {
        label: "Blog",
        url: "https://www.ycteng.home.blog"
      }
    ],
    updated: "September 2, 2020"
  },
  {
    slug: "bruce-hill",
    name: "Bruce Hill",
    classOf: 2013,
    bio: [
      "Bruce was a member of GCS for 4 years, during which time he participated in only a couple of semester-long projects (few of which were finished), but completed dozens of games for GCS 2-week-long game development contests and Global Game Jams. He later adapted one of his games, \"30 Second Life\", to be an iOS game, which did well. After graduation, he joined EA to work on \"The Sims 4\" for two years, before quitting to work on his own games for iOS, releasing \"Unshuffle,\" \"30 Second Life: Redux,\" and \"Triptoy.\" He is currently working on non-game-related projects and is a bit burnt out on the game industry, but still tinkers with game prototypes from time to time."
    ],
    website: "https://bruce-hill.com",
    updated: "August 19, 2020"
  },
  {
    slug: "bryan-stewart",
    name: "Bryan Stewart",
    classOf: 2023,
    bio: [
      "Hello I'm Bryan Stewart, at the moment I'm studying AI and cloud computing for the military. I want to be a video game producer. I'm hoping to gain some experience through this community and would love a chance to work with others as well have some of my game ideas develop so please reach out if interested."
    ],
    phone: "8577076043",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/bryan-stewart-359b14114/"
      }
    ],
    updated: "December 28, 2021"
  },
  {
    slug: "cameron-cheng",
    name: "Cameron Cheng",
    classOf: 2023,
    bio: [
      "I write music and design sound effects"
    ],
    email: "cc02@cmu.edu",
    links: [
      {
        label: "SoundCloud",
        url: "https://soundcloud.com/cc02music"
      }
    ],
    updated: "January 14, 2022"
  },
  {
    slug: "carter-williams",
    name: "Carter Williams",
    classOf: 2020,
    bio: [
      "Carter Williams is a game designer and developer who enjoys experimental design, juicy animation and clean code. His favorite games to design are cooperative games that force players to interact in new ways. As a part of making these games, he has developed a networking framework for Unity.",
      "In addition to making games, Carter also has a passion for teaching. He has taught courses on game analysis and game development as well as TA'ing courses on functional programming and educational technology."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2018"
      },
      {
        role: "President",
        period: "2019"
      }
    ],
    website: "https://ncarterwilliams.com",
    updated: "November 15, 2020"
  },
  {
    slug: "chansocphentra-salcido",
    name: "Chansocphentra Salcido",
    classOf: 2024,
    bio: [
      "Howdy! I'm an electronic arts student with a passion for storytelling and education through games. I work in both 2D and 3D, and all art in-between :) In my spare time you can find me watching my favorite silent films or haunting abandoned crypts."
    ],
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2023"
      }
    ],
    website: "https://chansocphentra.com/",
    links: [
      {
        label: "ArtStation",
        url: "https://www.artstation.com/chansocphentra"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/chansocphentra-salcido/"
      }
    ],
    updated: "August 18, 2024"
  },
  {
    slug: "charlie-ai",
    name: "Charlie Ai",
    classOf: 2026,
    bio: [
      "Single-celled Simpleton who likes to draw and make games"
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2024"
      },
      {
        role: "Vice President",
        period: "2025"
      }
    ],
    email: "yacil@andrew.cmu.edu",
    phone: "2246783460",
    resume: "CharlieAi.pdf",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/gucha.art/"
      },
      {
        label: "GitHub",
        url: "https://github.com/GuchaIll"
      }
    ],
    updated: "January 31, 2024"
  },
  {
    slug: "chelsea-liu-1",
    name: "Chelsea Liu",
    classOf: 2023,
    bio: [
      "Hi there! I'm an undergrad design major. I'm a newbie at gaming, but was sucked into this rabbit hole when I discovered indie games like Journey and Monument Valley. I joined GCS to explore video games as a medium for story-telling."
    ],
    website: "https://chelsealiu.myportfolio.com",
    updated: "September 2, 2020"
  },
  {
    slug: "chelsea-tang",
    name: "Chelsea Tang",
    classOf: 2024,
    bio: [
      "Hello! I am a BXA major in Design and Computer Science and I'm interested in computer graphics, animation, and game design. I have worked with Maya, Substance Painter, Blender, and Java."
    ],
    email: "ctang2@andrew.cmu.edu",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/chelseatang2"
      }
    ],
    updated: "July 26, 2021"
  },
  {
    slug: "chris-deleon",
    name: "Chris DeLeon",
    classOf: 2007,
    bio: [
      "Chris has been making games since 1997. He cofounded GCS in 2004, organizing the club's first several semesters. After graduation, Chris worked as a Technical Game Designer at Electronic Arts on Medal of Honor Airborne and Boom Blox, as an early hire at a Silicon Valley start-up (began by fellow GCS cofounder/alum, Curt Bererton), and co-developed iOS games with another GCS alum (John Nesky) both independently and through publisher arrangements. Chris attended graduate school at Georgia Tech in 2010. While at GT, he started a similar club, VGDev. In 2014, Chris left the PhD track to focus full-time on teaching independently online, including operating a worldwide adaptation of the pattern learned in these clubs, HomeTeam GameDev (formerly called Gamkedo Club). Outside of his main business, he's also helped curate IndieCade's speakers for 5 events, and is now leading the creation of an IndieCade alumni network. Chris serves on the board for the Los Angeles chapter of IGDA."
    ],
    pastPositions: [
      {
        role: "Organizer/President",
        period: "2005"
      },
      {
        role: "Advisor, Cofounder",
        period: "2007"
      },
      {
        role: "Cofounder, Organizer/President",
        period: "2004 (_Fall)"
      },
      {
        role: "Cofounder",
        period: "2004 (Spring)"
      }
    ],
    website: "http://chrisdeleon.com/",
    links: [
      {
        label: "HomeTeam GameDev",
        url: "https://hometeamgamedev.com/"
      }
    ],
    updated: "November 15, 2020"
  },
  {
    slug: "cj-hostetter",
    name: "CJ Hostetter",
    classOf: 2009,
    bio: [
      "Designer and indie dev. I'm a 50% feral adrenaline junkie who likes to travel, glassblow and fling themselves into the ocean, and a 50% nerd who likes video games, comics and books. I've been organizing one of the largest Global Game Jam sites in Tokyo, Japan since 2020, and am co-founder of Studio Terranova, an queer indie game company. We put out our first game, Terranova on Steam/itch.io on April 2021."
    ],
    email: "illuminesce@pm.me",
    website: "https://chostett.com",
    links: [
      {
        label: "Itch.io",
        url: "https://illuminesce.itch.io/"
      }
    ],
    updated: "August 23, 2023"
  },
  {
    slug: "claire-peck",
    name: "Claire Peck",
    classOf: 2021,
    bio: [
      "Hello! I am an ECE major, as well as a musician and sound designer for a number of games for the game creation society, game jam, independent developers, and mods. I'm fascinated by audio synthesis and interested in learning how immersive audio can transform how people experience games."
    ],
    website: "https://lordcakespy.bandcamp.com/",
    updated: "December 23, 2021"
  },
  {
    slug: "clytie-qiu",
    name: "Clytie Qiu",
    classOf: 2026,
    bio: [
      "I'm a Computational Physics major interested in making video games!"
    ],
    email: "clytieq@andrew.cmu.edu",
    updated: "October 18, 2024"
  },
  {
    slug: "colburn-cole-jones",
    name: "Colburn (Cole) Jones",
    classOf: 2025,
    bio: [
      "I'm a masters student studying the rhetoric of video games. I am interested in digital rhetoric and how new technologies change the way we write, what form our writing takes, and how we're able to deliver a message. I focus on interactive fictions and how interactivity changes how we communicate a message. I believe interactivity, when utilized correctly, can impact an audience on a greater scale, but it also brings some new challenges. I'm interested in answering how to create meaningful change based on audience's choice while not altering the essence of a text, how to create value from multiple interactions, how to make an interaction feel significant, and how to best utilize new technologies to reach and impact an audience."
    ],
    email: "colej@andrew.cmu.edu",
    website: "https://colejonesera.wixsite.com/colburn-jones",
    resume: "Colburn(Cole)Jones.pdf",
    links: [
      {
        label: "Itch.io",
        url: "https://colejones0888.itch.io/"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/colburn-jones/"
      }
    ],
    updated: "November 20, 2024"
  },
  {
    slug: "connor-fallon",
    name: "Connor Fallon",
    classOf: 2012,
    bio: [
      "Currently a designer at ArenaNet (Guild Wars 2), previously at Schell Games (I Expect You To Die). Indie Projects: Elsinore and Pro Philosopher"
    ],
    pastPositions: [
      {
        role: "President",
        period: "2010-2012"
      }
    ],
    website: "https://www.connorfallon.com/",
    updated: "November 15, 2020"
  },
  {
    slug: "dario-quintero",
    name: "Dario Quintero",
    classOf: 2027,
    bio: [
      "Indulging the medium"
    ],
    currentPosition: "Chief of Operations",
    email: "dario.r.quintero@gmail.com",
    website: "https://sites.google.com/view/dario-quintero-portfolio/projects?authuser=0",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/@darioquintero5416"
      },
      {
        label: "GitHub",
        url: "https://github.com/DarioQuintero"
      }
    ],
    updated: "March 23, 2025"
  },
  {
    slug: "david-zelong-fan",
    name: "David Zelong Fan",
    classOf: 2023,
    bio: [
      "Hello! My name is David and I am studying Computer Science and Business Administration. I love playing 2D games, from any genre."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2021"
      },
      {
        role: "Director of Development",
        period: "2022"
      }
    ],
    email: "davidzef@andrew.cmu.edu",
    phone: "8789994431",
    resume: "David Zelong Fan - David Zelong Fan.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/david-zelong-fan/"
      }
    ],
    updated: "January 9, 2023"
  },
  {
    slug: "dmitry-portnoy",
    name: "Dmitry Portnoy",
    classOf: 2010,
    bio: [
      "I am a very mysterious (or possibly lazy) person."
    ],
    pastPositions: [
      {
        role: "Server Admin",
        period: "2009"
      }
    ],
    email: "dportnoy@andrew.cmu.edu",
    website: "http://www.medievaltech.com",
    updated: "January 16, 2023"
  },
  {
    slug: "dominic-calkosz",
    name: "Dominic Calkosz",
    classOf: 2021,
    bio: [
      "Programmer, game designer, Eagle Scout, and creator of this website! Throughout my time at CMU, GCS was my passion and my home.",
      "My experience in game development has also extended to the professional industry. In 2019 and 2020, I interned on the Hearthstone design team at Blizzard Entertainment. In 2021, I joined the team full time!"
    ],
    pastPositions: [
      {
        role: "Chief of Operations",
        period: "2019"
      },
      {
        role: "President",
        period: "2020"
      }
    ],
    email: "dmcdominic@gmail.com",
    website: "https://Dominic-Calkosz.com",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Dmcdominic"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/DCalkosz"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/dominic-calkosz/"
      },
      {
        label: "SoundCloud",
        url: "https://soundcloud.com/dominic-calkosz"
      }
    ],
    updated: "January 23, 2021"
  },
  {
    slug: "dominick-robinson",
    name: "Dominick Robinson",
    classOf: 2025,
    bio: [
      "Hey there! I'm a Math major who loves to create funny games with a sense of exploration and adventure. I typically work on programming, level design, and writing using my game engine of choice: Godot. Outside of game dev, I love to make YouTube videos as well as play tennis and pickleball."
    ],
    pastPositions: [
      {
        role: "President",
        period: "2023"
      }
    ],
    email: "dominicr@andrew.cmu.edu",
    website: "https://www.domonation.dev",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/@DomonationYT"
      }
    ],
    updated: "January 30, 2024"
  },
  {
    slug: "eileen-lee",
    name: "Eileen Lee",
    classOf: 2021,
    bio: [
      "Hi there, I'm in BXA for art and psychology with an additional major in Human-Computer Interaction. I'm a designer, illustrator, and printmaker who also likes to make art for videogames!"
    ],
    email: "eileenl1@andrew.cmu.edu",
    website: "https://eileenlees.cargo.site/",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/eileen_loves_cheesecake/"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/eelneelie"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/eileenleee/"
      }
    ],
    updated: "June 22, 2021"
  },
  {
    slug: "eli-fox",
    name: "Eli Fox",
    classOf: 2023,
    bio: [
      "Eli is a mechanical engineering major with a minor in robotics. He enjoys programming and using the Unity engine to make cool games."
    ],
    email: "efox@andrew.cmu.edu",
    updated: "January 27, 2022"
  },
  {
    slug: "emily-amspoker",
    name: "Emily Amspoker",
    classOf: 2025,
    bio: [
      "Hi, I'm Emily! I'm a student in the School of Computer Science. I've had a great time making games with GCS, and I can't wait to be more involved with the club!"
    ],
    email: "eamspoke@andrew.cmu.edu",
    website: "https://eamspoker.github.io/portfolio/",
    resume: "Resume - Emily Amspoker.pdf",
    updated: "December 28, 2021"
  },
  {
    slug: "emily-guo",
    name: "Emily Guo",
    classOf: 2025,
    bio: [
      "Hi! I'm Emily and I'm majoring in computer science and minoring in drama! I've really enjoyed the games I've made in GCS and hope to continue to make more awesome games here!"
    ],
    email: "emilyguo@andrew.cmu.edu",
    resume: "Resume - Emily Guo.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "http://linkedin.com/in/emily-guo17/"
      }
    ],
    updated: "January 16, 2023"
  },
  {
    slug: "emily-xie",
    name: "Emily Xie",
    classOf: 2025,
    bio: [
      "Hi! I'm an Information Systems major, and I'm interested in game development for the endlessly creative worldbuilding it brings. My favorite games include Earthbound and OMORI. I hope to explore areas such as AR/VR and computer graphics, and I also enjoy composing music."
    ],
    email: "elx@andrew.cmu.edu",
    website: "http://emily.xie.fm",
    resume: "Resume - Emily Xie.pdf",
    updated: "January 27, 2022"
  },
  {
    slug: "emma-jiang",
    name: "Emma Jiang",
    classOf: 2024,
    bio: [
      "Hi, my name is Emma and I am an undergrad studying Information Systems and Computer Science! I've loved games all my life, with my favorite genre being MMORPGs. I jumped at the opportunity to hone my skills by building games for myself with GCS!"
    ],
    pastPositions: [
      {
        role: "Chief of Operations",
        period: "2022-2023"
      }
    ],
    email: "eyjiang@andrew.cmu.com",
    phone: "4082030487",
    resume: "Resume - Emma Jiang.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/emma-jiang/"
      },
      {
        label: "GitHub",
        url: "https://github.com/emmayjiang"
      }
    ],
    updated: "January 30, 2024"
  },
  {
    slug: "eric-butler",
    name: "Eric Butler",
    classOf: 2010,
    bio: [
      "Currently Technical Lead at Enlearn, a non-profit educational technology company. Made the indie game Elsinore and did a PhD on formal methods and AI design tools."
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2008-2009"
      }
    ],
    website: "https://www.ericbutler.net",
    links: [
      {
        label: "Twitter",
        url: "https://twitter.com/zantifon"
      }
    ],
    updated: "November 15, 2020"
  },
  {
    slug: "evan-shimizu",
    name: "Evan Shimizu",
    classOf: 2014,
    bio: [
      "Evan is currently working on creating new creative tools at Adobe in the Machine Intelligence Design group. He received a PhD from CMU with a thesis about creativity support tools. He's responsible for most of the GCS games about dragons from 2010-2014."
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2012"
      },
      {
        role: "President",
        period: "2013"
      }
    ],
    website: "http://evanshimizu.com/",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/ebshimizu"
      },
      {
        label: "Twitch",
        url: "https://www.twitch.tv/falindrith"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/falindrith"
      }
    ],
    updated: "November 15, 2020"
  },
  {
    slug: "feng-wu",
    name: "Feng Wu",
    classOf: 2020,
    bio: [
      "I'm a MBA student at CMU Tepper who loves games. My favorite game is either Mass Effect 2 or Witcher 3. My career goal is to be a senior producer/ development director at a game studio. Besides being involved with GCS, I am the President of Tepper Games and EVP of Media Entertainment Club."
    ],
    updated: "September 16, 2019"
  },
  {
    slug: "flora-cheng",
    name: "Flora Cheng",
    classOf: 2026,
    bio: [
      "Hi hi! I'm an undergraduate majoring in computer science. I enjoy making digital art in my free time!"
    ],
    email: "florac@andrew.cmu.edu",
    resume: "FloraCheng.pdf",
    updated: "August 23, 2023"
  },
  {
    slug: "george-whitfield",
    name: "George Whitfield",
    classOf: 2022,
    bio: [
      "Hello! I'm George and I am a senior majoring in Electrical and Computer Engineering with a minor in Game Design. I am fascinated by the intersection of computer science and art, which has motivated my interest in game development. I've worked on games as a musician, story writer, and a programmer. I'm pursuing a career in video game software development.",
      "I've made a several games with Unity in and outside of GCS. I've also created a few games in C++ with OpenGL. I've dabbled a little bit with Unreal here and there.",
      "Here's a short list of my favorite games: Dance Dance Revolution, Minecraft, Starcraft II, Outlast 2, Amnesia: The Dark Descent, Skyrim, Oblivion"
    ],
    email: "gwhitfie@andrew.cmu.edu",
    website: "https://gwhitfieldjr.com",
    resume: "Resume - George Whitfield Jr.pdf",
    links: [
      {
        label: "SoundCloud",
        url: "https://soundcloud.com/poshonmusic"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/georgewhitfieldjr/"
      },
      {
        label: "GitHub",
        url: "https://github.com/gcwhitfield"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/gcwhitfie"
      }
    ],
    updated: "January 27, 2022"
  },
  {
    slug: "gerald-kim",
    name: "Gerald Kim",
    classOf: 2025,
    bio: [
      "Hi, I'm a Math major, and I like playing games so I thought I'd try my hand in help make one in GCS."
    ],
    email: "geraldckim2003@gmail.com",
    resume: "Resume - Gerald Kim.pdf",
    updated: "December 24, 2021"
  },
  {
    slug: "grace-li",
    name: "Grace Li",
    classOf: 2023,
    bio: [
      "Nice to meet you! I'm an undergraduate design major who loves story-driven games that stretch the bounds of my imagination. Some of my favorites are Fire Emblem: The Blazing Blade, and Oxenfree.",
      "I joined GCS to meet new people and learn about interactivity. Character art and UI are my specialties!"
    ],
    website: "https://www.gracelidesign.com/",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/grace-li-24471919b/"
      }
    ],
    updated: "February 1, 2021"
  },
  {
    slug: "grace-liu",
    name: "Grace Liu",
    classOf: 2021,
    bio: [
      "Hi stranger, I'm a fine arts major minoring in game design and animation & special effects. I'm interested in visual development and hope to bring life to video games through concept art and illustration!"
    ],
    website: "https://gzliuwork.wixsite.com/graceliu",
    links: [
      {
        label: "ArtStation",
        url: "https://www.artstation.com/grapejuice"
      }
    ],
    updated: "April 29, 2019"
  },
  {
    slug: "greg-peng",
    name: "Greg Peng",
    classOf: 2008,
    bio: [
      "Game systems designer working in professional game development since graduating from CS & HCI undergrad in 2008.",
      "Games worked on:",
      "God of War: Ghost of Sparta",
      "The Order 1886",
      "Destiny: Taken King",
      "Destiny 2, Forsaken, Shadowkeep",
      "Twitter @gregcpeng"
    ],
    pastPositions: [
      {
        role: "Chief Operating Officer",
        period: "2007"
      }
    ],
    website: "http://www.mecno.com",
    links: [
      {
        label: "@gregcpeng",
        url: "https://twitter.com/gregcpeng"
      }
    ],
    updated: "November 15, 2020"
  },
  {
    slug: "gregory-rose",
    name: "Gregory Rose",
    classOf: 2016,
    bio: [
      "I was a GCS member from 2012-2016, served a year as Sysadmin, and joined Oculus VR full-time after graduating."
    ],
    pastPositions: [
      {
        role: "Systems Administrator",
        period: "2014"
      }
    ],
    website: "http://gregoryrose.me/",
    updated: "November 15, 2020"
  },
  {
    slug: "gustavo-silvera",
    name: "Gustavo Silvera",
    classOf: 2023,
    bio: [
      "I am an undergrad at the School of Computer Science currently exploring game design/animation as a potential minor. I like to play and create simple 2D games in my free time, and want to expand into 3D games and animations. My favourite games are immersive story driven action games with amazing graphics and intuitive combat mechanisms. Some examples include: The Witcher 3, Batman Arkham City/Knight, and Shadow of Mordor."
    ],
    website: "https://gustavosilvera.github.io/websiteGus/",
    updated: "December 29, 2019"
  },
  {
    slug: "hank-xu",
    name: "Hank Xu",
    classOf: 2025,
    bio: [
      "CS, Graphics concentration"
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2024"
      }
    ],
    email: "hankxu12@cmu.edu",
    phone: "4124195616",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/hankxu1212"
      }
    ],
    updated: "January 30, 2024"
  },
  {
    slug: "hanke-chen",
    name: "Hanke Chen",
    classOf: 2024,
    bio: [
      "This is Hanke Chen, majoring in Bachelor of Computer Science and Art at Carnegie Mellon University. I am interested in Computer Vision, Technical Arts, and Blockchains. If you have projects that are similar to my interest, it is definitely worth your time to check out my resume or my personal website."
    ],
    email: "hankec@andrew.cmu.edu",
    website: "https://www.kokecacao.me",
    resume: "Resume - Hanke Chen.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/hanke-chen-659844141/"
      }
    ],
    updated: "January 27, 2022"
  },
  {
    slug: "hefei-tu",
    name: "Hefei Tu",
    classOf: 2022,
    bio: [
      "I am currently a student at CMU's School of Computer Science, majoring in AI. I enjoy playing games with a unique player experience and game mechanics. Making games with people who share the same passion has been a thrilling experience here at the GCS, and I look forward to meeting more people and learning from such experience!"
    ],
    updated: "December 17, 2019"
  },
  {
    slug: "helena-yang",
    name: "Helena Yang",
    classOf: 2024,
    bio: [
      "Hello! I'm a computer science major interested in studying computer graphics and animation. I have experience working in Unity, Twine, and Paint Tool SAI. I really like programming and illustration!"
    ],
    email: "hfy@andrew.cmu.edu",
    website: "https://heleaf.me/",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/helenafyang/"
      },
      {
        label: "GitHub",
        url: "https://github.com/heleaf"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/leaf.rat/"
      }
    ],
    updated: "January 31, 2021"
  },
  {
    slug: "isaac-merlin",
    name: "Isaac Merlin",
    classOf: 2029,
    bio: [
      "Creating games that are hopefully good."
    ],
    email: "ixm@andrew.cmu.edu",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/isaacmerlin/"
      }
    ],
    updated: "January 02, 2026"
  },
  {
    slug: "jacob-dill",
    name: "Jacob Dill",
    classOf: 2022,
    bio: [
      "I am currently an undergraduate studying at Carnegie Mellon's School of Computer Science (SCS) for a Bachelor's of Computer Science and a Minor in Mathematical Sciences. I am a programmer, artist, musician, and sound designer. I have considerable experience with applications such as the Unity Engine, Blender, Logic/GarageBand, and the Source Engine. To reach out, following any of the following media links or email me at jacobdil@andrew.cmu.edu."
    ],
    email: "jacobdil@andrew.cmu.edu",
    website: "https://jacobdill75.github.io/profile/",
    resume: "Resume-JacobDill.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/jacobdillcmu"
      },
      {
        label: "GitHub",
        url: "https://github.com/jacobdill75"
      },
      {
        label: "SoundCloud",
        url: "https://soundcloud.com/izofar"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCVv7H-0w_cZN29irWWnHCgQ"
      }
    ],
    updated: "September 12, 2020"
  },
  {
    slug: "jade-wang",
    name: "Jade Wang",
    classOf: 2024,
    bio: [
      "Hi! I'm majoring in Decision Science, minoring in Human-Computer Interaction and Animation & Special Effects. I'm an artist interested in 2D graphic design, character design and 3D animation. I love horror games and making horror games."
    ],
    email: "qiwang2@andrew.cmu.edu",
    resume: "JadeWang.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/jade-qi-wang-503580220/"
      }
    ],
    updated: "August 17, 2022"
  },
  {
    slug: "jan-orlowski",
    name: "Jan Orlowski",
    classOf: 2020,
    bio: [
      "I'm your run of the mill CS major with a game design minor. I've been bouncing around the games industry for a few years now and worked on titles like RUINER, Destiny 2 and Fortnite. I also make a lot of small games in my spare time, all of which can be found on my website. I have also lead a lot of game projects here at GCS, so I have pent up advice for anyone wanting to run projects."
    ],
    pastPositions: [
      {
        role: "Systems Administrator",
        period: "2017-2018"
      },
      {
        role: "Vice President",
        period: "2019"
      }
    ],
    website: "https://janorlowski.com",
    updated: "November 15, 2020"
  },
  {
    slug: "jeffrey-wang",
    name: "Jeffrey Wang",
    classOf: 2027,
    bio: [
      "Loves painting and playing violin!"
    ],
    currentPosition: "Treasurer",
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2024"
      },
      {
        role: "President",
        period: "2025"
      }
    ],
    email: "jw8@andrew.cmu.edu",
    updated: "August 18, 2024"
  },
  {
    slug: "jerry-zhang",
    name: "Jerry Zhang",
    classOf: 2028,
    bio: [
      "Game Designer"
    ],
    currentPosition: "President",
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2025"
      }
    ],
    email: "yunhuaz@andrew.cmu.edu",
    phone: "14122910112",
    website: "https://Yunhuazhang.com",
    updated: "November 19, 2024"
  },
  {
    slug: "jessica-jess-cao",
    name: "Jessica (Jess) Cao",
    classOf: 2021,
    bio: [
      "Hello! I'm a computer science major and animation & special effects minor. I really enjoy working on things that bring art, tech, and design together, from HCI research to computer graphics to - of course - video games!"
    ],
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2019"
      },
      {
        role: "Vice President",
        period: "2020"
      }
    ],
    website: "https://www.jessicacao.com/",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/jessica-cao-b47875141/"
      },
      {
        label: "GitHub",
        url: "https://github.com/jkcao"
      }
    ],
    updated: "January 5, 2021"
  },
  {
    slug: "jia-en-jessica-lee",
    name: "Jia-En (Jessica) Lee",
    classOf: 2024,
    bio: [
      "I am a sophomore majoring in Mathematics and minoring in Game Design. My favorite game genre is horror games. I have experience in story writing and game creation using Unity."
    ],
    email: "jiaenl@andrew.cmu.edu",
    phone: "4252134970",
    resume: "Resume - Jia-En Lee.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/jia-en-jessica-lee/"
      },
      {
        label: "GitHub",
        url: "https://github.com/JIAENL"
      }
    ],
    updated: "December 24, 2021"
  },
  {
    slug: "jingxuan-chen",
    name: "Jingxuan Chen",
    classOf: 2026,
    bio: [
      "I miss my cat ( ._.)"
    ],
    currentPosition: "Director of Development",
    pastPositions: [
      {
        role: "Vice President",
        period: "2024"
      }
    ],
    email: "jingxua4@andrew.cmu.edu",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/coffeemilk_and_cats/"
      }
    ],
    updated: "August 20, 2024"
  },
  {
    slug: "john-choi",
    name: "John Choi",
    classOf: 2017,
    bio: [
      "Just a guy that loves building robots and video games."
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2014-2015"
      }
    ],
    email: "johnchoi@choitek.com",
    phone: "4124448018",
    website: "https://johnchoi313.com",
    resume: "johnchoi_resume2019 - John Choi.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/john-choi-7a2335aa/"
      },
      {
        label: "GitHub",
        url: "https://github.com/johnchoi313"
      }
    ],
    updated: "June 22, 2021"
  },
  {
    slug: "john-nesky",
    name: "John Nesky",
    classOf: 2008,
    bio: [
      "John was a GCS member from 2004 to 2007, where he was credited on 15 games in various roles including programmer, designer, artist, and animator. John also worked on PlayCrafter, a web app with a drag-and-drop interface for kids to design games. John is best known for his work at ThatGameCompany, where he designed avatar and camera controls for Journey and animation and environment tools for Sky. In his spare time, he develops BeepBox, a web app for composing music."
    ],
    website: "https://johnnesky.com/",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/johnnesky/"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/shaktool/"
      },
      {
        label: "Mastodon",
        url: "https://mastodon.gamedev.place/@johnnesky"
      }
    ],
    updated: "August 23, 2023"
  },
  {
    slug: "jonathan-fischer",
    name: "Jonathan Fischer",
    classOf: 2022,
    bio: [
      "Information systems major. Primarily a musician, but I like making games too."
    ],
    pastPositions: [
      {
        role: "Chief of Operations",
        period: "2021"
      }
    ],
    website: "https://skelothan.dev/",
    links: [
      {
        label: "SoundCloud",
        url: "https://soundcloud.com/skelothan"
      }
    ],
    updated: "December 23, 2021"
  },
  {
    slug: "joseph-perrino",
    name: "Joseph Perrino",
    classOf: 2021,
    bio: [
      "Hi there! I'm an Information Systems major pursuing minors in Game Design and Technical Writing, as well as a Master's in Information Systems and Management. I'm also a TA, a writing tutor, a trumpet player, and of course, a proud member of GCS. I want to make games that people remember and love coming back to."
    ],
    pastPositions: [
      {
        role: "Chief of Operations",
        period: "2020"
      }
    ],
    email: "jperrino@andrew.cmu.edu",
    resume: "Resume-JosephPerrino.pdf",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/epiccrash"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/joseph-perrino"
      }
    ],
    updated: "January 5, 2021"
  },
  {
    slug: "josh-fratis",
    name: "Josh Fratis",
    classOf: 2024,
    bio: [
      "Josh is a game developer currently pursuing degrees in Computer Science and Digital Narrative & Interactive Design. He intends to enter the games industry as a programmer. He has worked at BehaVR, which develops virtual reality experiences for mental and behavioral health, and TerraSim, which develops advanced software solutions for geospatial technologies. Josh is excited to be a part of a vibrant community of creative game developers at GCS and to continue working with Blast Furnace Games, the creators of Steelpunk."
    ],
    email: "frajosk@gmail.com",
    phone: "4848770741",
    website: "http://www.joshuafratis.com/",
    resume: "JoshFratis.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/josh-fratis-666443221/"
      },
      {
        label: "Itch.io",
        url: "https://josh-fratis.itch.io/"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/FratisJosh"
      },
      {
        label: "SoundCloud",
        url: "https://soundcloud.com/josh-fratis"
      },
      {
        label: "GitHub",
        url: "https://github.com/JoshFratis"
      }
    ],
    updated: "May 10, 2023"
  },
  {
    slug: "joyce-zhang",
    name: "Joyce Zhang",
    classOf: 2023,
    bio: [
      "I'm a student in the BXA program, and I'm interested in creating 3D character models for games! I am also gaining interest in creating real time VFX. I like fast paced action games, especially fighting games! :)",
      "I'm familiar with Unreal Engine 4, Autodesk Maya, Substance Painter, and Zbrush."
    ],
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2021"
      },
      {
        role: "Vice President",
        period: "2022"
      }
    ],
    email: "yunyizha@andrew.cmu.edu",
    phone: "4128979609",
    resume: "JoyceZhang - resume - Yunyi Zhang.pdf",
    links: [
      {
        label: "ArtStation",
        url: "https://www.artstation.com/saltlady"
      }
    ],
    updated: "January 9, 2023"
  },
  {
    slug: "julia-shuieh",
    name: "Julia Shuieh",
    classOf: 2023,
    bio: [
      "I am a undergraduate in the School of Computer Science with an interest in artificial intelligence, psychology, and game development. My interest in game development stems from experiences of playing video games with friends and the compelling stories that games can tell, and I want to help bring the same kind of happiness and wonder to others with the games I help make.",
      "Throughout my time in programming games, I have worked with Unity, Blender, and LOVE2D. However, I always want to keep adding onto my skillset, and I am especially excited about working with new technology such as VR and AR.",
      "I currently mostly play League of Legends and Escape from Tarkov, but some of my all-time favorites include Portal and Tetris Battle."
    ],
    updated: "February 5, 2020"
  },
  {
    slug: "julianne-bierwirth",
    name: "Julianne Bierwirth",
    classOf: 2009,
    bio: [
      "Juli is a game designer and circus acrobat who lives in Athens, GA. She and her husband co-own Distant Rabbit Games."
    ],
    website: "https://www.distantrabbitgames.com",
    updated: "June 18, 2020"
  },
  {
    slug: "kai-diel",
    name: "Kai Diel",
    classOf: 2025,
    bio: [
      "I'm a self defined major interested in creating anything art wise for games from 3d models to animations rigging and vfx! I play almost any game under the sun but love top down games.",
      "I'm familiar with Unreal Engine 5 (and its Niagara system), Autodesk Maya, Substance Painter, and Zbrush."
    ],
    email: "kaijdiel@gmail.com",
    website: "https://www.avatarkai.com/",
    resume: "KaiDiel.pdf",
    updated: "November 18, 2024"
  },
  {
    slug: "kaitlyn-liu",
    name: "Kaitlyn Liu",
    classOf: 2025,
    bio: [
      "Hi I'm Kaitlyn, an Electrical and Computer Engineering major with an interest in software. I really enjoyed making games with GCS and can't wait to continue experimenting with Unity and game design, combining my passions for art and programming."
    ],
    email: "kaitlynl@andrew.cmu.edu",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/kaitlyn-liu/"
      }
    ],
    updated: "August 17, 2022"
  },
  {
    slug: "kalpa-anjur",
    name: "Kalpa Anjur",
    classOf: 2021,
    bio: [
      "Hello! I am a Computer Science major with a minor in and passion for Game Design. I am interested in creating games that are unique, transformational, and/or educational. My first game design experience came from interning at YouMatter Studios, and from there has continued at CMU. I look forward to exploring more in the world of game design!"
    ],
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2020"
      }
    ],
    website: "https://hitechlife.github.io",
    updated: "January 5, 2021"
  },
  {
    slug: "katie-chironis",
    name: "Katie Chironis",
    classOf: 2012,
    bio: [
      "Hi! I'm currently a senior game designer at Riot Games and have previously worked at Oculus VR/Facebook, Xbox, EA, and Her Interactive."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2011"
      },
      {
        role: "Public Relations Lead",
        period: "2012"
      }
    ],
    website: "http://katiechironis.com/",
    updated: "November 15, 2020"
  },
  {
    slug: "kelly-zheng",
    name: "Kelly Zheng",
    classOf: 2024,
    bio: [
      "Hi, I'm an art major minoring in animation and special effects and human computer interaction."
    ],
    email: "kellyzhengart@gmail.com",
    website: "https://haisuzheng.wixsite.com/kellyzheng/selected-work",
    updated: "August 17, 2022"
  },
  {
    slug: "kyle-leve",
    name: "Kyle Leve",
    classOf: 2021,
    bio: [
      "Hello there! I'm pursuing a self-defined major in Music and Audio Production. I enjoy making games and creating the music and sound effects found in them. I also enjoy recording and I play the saxophone. If you've got a second check out my Soundcloud!"
    ],
    website: "https://soundcloud.com/kyle-leve",
    updated: "June 13, 2020"
  },
  {
    slug: "larry-chen",
    name: "Larry Chen",
    classOf: 2023,
    bio: [
      "Unreal Engine Enjoyer"
    ],
    email: "llchen@andrew.cmu.edu",
    updated: "December 24, 2021"
  },
  {
    slug: "laura-yao",
    name: "Laura Yao",
    classOf: 2024,
    bio: [
      "Hello! I'm a computer science major that is interested in programming and computer graphics. I have experience with Unity, Python, Java, and C."
    ],
    email: "ljyao@andrew.cmu.edu",
    resume: "resumelaurayao21 - Laura Yao.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/laurajyao"
      },
      {
        label: "GitHub",
        url: "https://github.com/gss223"
      }
    ],
    updated: "February 17, 2021"
  },
  {
    slug: "lela-yuan",
    name: "Lela Yuan",
    classOf: 2024,
    bio: [
      "Hi! I am Lela. I am majoring Decision Science and double minoring Human-Computer Interaction and Game Design! I joined GCS my sophomore year and I led the creation of a 2D puzzle RPG game Nannan (we won the GCS best art award!). I love playing puzzle games and horror games, and my favorite games are Sally Face, Rusty Lake and Until Dawn. I'm also super into escape rooms and have completed over thirty of them around the world! Hit me up if you are interested in making or playing games together!"
    ],
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2023"
      }
    ],
    email: "yuemingy@andrew.cmu.edu",
    website: "https://www.lelayuan.com/",
    resume: "LelaYuan.pdf",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/itsmlela/"
      }
    ],
    updated: "January 30, 2024"
  },
  {
    slug: "leslie-lin",
    name: "Leslie Lin",
    classOf: 2026,
    bio: [
      "communication design major with an interest in concept art and narrative storytelling through illustration. loves sci-fi horror games"
    ],
    email: "lxlin@andrew.cmu.edu",
    website: "https://www.leslie-lin.com/",
    updated: "May 10, 2023"
  },
  {
    slug: "liam-hower",
    name: "Liam Hower",
    classOf: 2025,
    bio: [
      "Hi, I'm Liam! I'm majoring in Computer Science and minoring in Game Design. In my free time I enjoy programming games, composing and playing music, and playing games with my friends."
    ],
    pastPositions: [
      {
        role: "Chief of Operations",
        period: "2024"
      }
    ],
    email: "ljhower@andrew.cmu.edu",
    resume: "LiamHower.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/liam-h-49697b261/"
      },
      {
        label: "GitHub",
        url: "https://github.com/superpi2"
      },
      {
        label: "Itch.io",
        url: "https://superpi2.itch.io/"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@superpi2"
      }
    ],
    updated: "January 30, 2024"
  },
  {
    slug: "luke-freimanis",
    name: "Luke Freimanis",
    classOf: 2028,
    bio: [
      "Hello, My name is Luke Freimanis. I am a mobile game developer and have multiple games on the App Store and Google Play through Unity C#. I have participated in multiple Game Jams including Brackeys Game Jam and GMTK Game Jam in the past years. I am also a NCAA Track and Field Decathlete at Carnegie Mellon University."
    ],
    email: "lfreiman@andrew.cmu.edu",
    website: "https://lfreiman6.wixsite.com/gamedev",
    resume: "LukeFreimanis.pdf",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/@biggameproductions877"
      },
      {
        label: "Itch.io",
        url: "https://bossfire964.itch.io/"
      }
    ],
    updated: "November 26, 2024"
  },
  {
    slug: "luke-hann",
    name: "Luke Hann",
    classOf: 2028,
    bio: [
      "I'm Luke, and I am studying CS and Robotics at CMU. I've worked on some game dev projects previously using Unity C# and Unreal Engine C++, and I am excited to work on cool new games with GCS."
    ],
    email: "lhann@andrew.cmu.edu",
    updated: "December 12, 2024"
  },
  {
    slug: "malek-anabtawi",
    name: "Malek Anabtawi",
    classOf: 2019,
    bio: [
      "I'm new to this, but I've confirmed that making games is, indeed, good stuff."
    ],
    website: "https://jspro.itch.io/",
    updated: "February 10, 2020"
  },
  {
    slug: "marie-leung",
    name: "Marie Leung",
    classOf: 2021,
    bio: [
      "Marie is a game designer who graduated from CMU in 2021 and is now studying at CMU's Entertainment Technology Center to work with emerging technologies. She has done 3D modelling, animation, 2D art, and audio for the GCS games Slope Crusher, BLADE, and Food Fight. Her favorite part of GCS is scope creep and she'll probably forget to update this bio when she graduates from the ETC."
    ],
    email: "marieleung8@gmail.com",
    website: "https://marieleung.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/marie-leung/"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCIVa2v7YJ2K4Nwmz-WCnEog"
      }
    ],
    updated: "January 16, 2023"
  },
  {
    slug: "matei-budiu",
    name: "Matei Budiu",
    classOf: 2025,
    bio: [
      "I am a Computer Science major from the San Francisco Bay Area in California. I co-led the Manhunt Game project in Fall 2021. In my free time, I enjoy making games - check out my game 'Tanks: The Crusades' on Steam and on the iOS App Store."
    ],
    email: "mateib@andrew.cmu.edu",
    resume: "Resume - Matei Budiu.pdf",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aehmttw"
      },
      {
        label: "Itch.io",
        url: "https://aehmttw.itch.io/"
      }
    ],
    updated: "January 14, 2022"
  },
  {
    slug: "matt-kaemmerer",
    name: "Matt Kaemmerer",
    classOf: 2011,
    bio: [
      "I currently work as a freelance programmer in Tokyo, and make indie games in my spare time. One half of Studio Terranova. I like to make games about bunnies."
    ],
    email: "matt.kaemmerer@pm.me",
    website: "https://www.playterranova.com",
    links: [
      {
        label: "Itch.io",
        url: "https://mabbees.itch.io/"
      },
      {
        label: "Cohost",
        url: "https://cohost.org/mabbees"
      }
    ],
    updated: "August 23, 2023"
  },
  {
    slug: "matthew-bofenkamp",
    name: "Matthew Bofenkamp",
    classOf: 2018,
    bio: [
      "I am a game programmer currently working as CTO of Anxious Oak Studios, an indie game studio I cofounded. While at CMU, I majored in biological sciences and double minored in game design and creative writing. I then went on to get my Masters at the Entertainment Technology Center and graduated from there in 2020.",
      "Notable games I worked on include The Unfathomed Voyager (selected for Alt.Ctrl.GDC 2020, shortlisted for IGF award), BROKE: The Game (selected for CHI PLAY 2019, Bronze Award winner at Serious Play 2019), Breakers (commissioned by the US Department of Homeland Security and served as the final round of the first President's Cup Cybersecurity Competition), and Wagonwheel (made a permanent fixture in a public technology center in Camagüey, Cuba).",
      "I also taught the StuCo 'World Music: An Exploration,' while at CMU, which taught about modern popular music from literally every country in the world, and was a member of CMU's improv troupe: The No Parking Players."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2017"
      }
    ],
    email: "matthewbofenkamp@gmail.com",
    website: "https://www.matthewbofenkamp.com/",
    updated: "January 4, 2021"
  },
  {
    slug: "matthew-lucien-komar",
    name: "Matthew Lucien Komar",
    classOf: 2023,
    bio: [
      "I make VR experiences. Playing games is nice and all, but I like making them more! I like to work in Unreal Engine, Maya and Photoshop/Substance Painter."
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2021"
      },
      {
        role: "Club Consultant",
        period: "2022"
      }
    ],
    email: "komarmatthewl@gmail.com",
    phone: "6463538682",
    website: "https://compuginger.com/",
    resume: "Resume - Matthew Komar.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/matthewkomar/"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/gingeredlucien/"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCswUPE4pWAWE_TbJW3wgmFA"
      }
    ],
    updated: "January 31, 2024"
  },
  {
    slug: "megan-xu",
    name: "Megan Xu",
    classOf: 2024,
    bio: [
      "Hello! I'm an artist and programmer (majors in CS and Stats/ML, minor in Game Design) who is passionate about games and the intersection between technology and creativity. I love developing games set in fantasy universes with compelling characters and charming aesthetics. Some of my favorite games are Final Fantasy XIV, League of Legends, Deltarune, Pokemon, Hollow Knight, and Hades. I am proficient in Unity, Autodesk Maya, Procreate, and Photoshop."
    ],
    email: "meganxu9@gmail.com",
    website: "https://meganxu.wixsite.com/home",
    links: [
      {
        label: "Itch.io",
        url: "https://meganxu.itch.io/"
      }
    ],
    updated: "August 17, 2022"
  },
  {
    slug: "michael-loguercio",
    name: "Michael Loguercio",
    classOf: 2023,
    bio: [
      "I am a music composition student who is aspiring to work on soundtracks for games and other multimedia and and to work on sound design."
    ],
    updated: "January 15, 2020"
  },
  {
    slug: "michael-poirier",
    name: "Michael Poirier",
    classOf: 2021,
    bio: [
      "My name is Michael Poirier. I am currently a Senior in Carnegie Mellon University's Bachelor of Fine Arts Program with a concentration in Electronic Time-Based Media and minors in Game Design and Animation. My main interests are in digital animation, game design, and storytelling. I am adept at game engines (Unity, GameMaker), software tools (Maya, Photoshop, Illustrator), and coding languages (C#, Java, Python). I have built a variety of games on my own and have worked on different collaborative game projects at Pratt Institute and CMU."
    ],
    email: "Mvpoirier2@yahoo.com",
    phone: "9088125769",
    website: "https://michaelpoirier.weebly.com/",
    resume: "Michael Poirier Resume - Michael Poirier.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/michaelvincentpoirier/"
      }
    ],
    updated: "February 17, 2021"
  },
  {
    slug: "michael-wong",
    name: "Michael Wong",
    classOf: 2024,
    bio: [
      "Music composition major, game design minor. Makes sound and/or music."
    ],
    email: "michael.g.wong@outlook.com",
    website: "https://michael-g-wong.com/",
    updated: "May 10, 2023"
  },
  {
    slug: "nathan-oswell",
    name: "Nathan Oswell",
    classOf: 2024,
    bio: [
      "Hey! I'm an Information Systems major with a minor in Game Design. I love all video games and am excited to make them. I work mainly on programming and level design, and am most comfortable with Unity."
    ],
    email: "nathanoswell11@gmail.com",
    resume: "NathanOswell.pdf",
    updated: "August 19, 2024"
  },
  {
    slug: "nestor-flores",
    name: "Nestor Flores",
    classOf: 2027,
    bio: [
      "Animator and Game Designer. Loves Arroz Chaufa."
    ],
    currentPosition: "Public Relations Lead",
    email: "nezt50.00@gmail.com",
    phone: "4102539330",
    website: "https://nestorf27a2.myportfolio.com/",
    resume: "NestorFlores.pdf",
    links: [
      {
        label: "Itch.io",
        url: "https://nezt50.itch.io/"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@nezt50"
      },
      {
        label: "Website",
        url: "https://cosmoperatingsystem.netlify.app/"
      }
    ],
    updated: "March 29, 2026"
  },
  {
    slug: "peter-sheehan",
    name: "Peter Sheehan",
    classOf: 2020,
    bio: [
      "I care about making and promoting strange, different, and exploratory games. I am a Fine Arts major with a minor in game design, I'm really interested in pushing what new experiences can be had in games!"
    ],
    website: "https://perebite.itch.io",
    updated: "September 3, 2019"
  },
  {
    slug: "rachel-moeller",
    name: "Rachel Moeller",
    classOf: 2017,
    bio: [
      "Hi, I'm Rachel. I like making people feel clever. I graduated from the CMU School of Art in 2017 and served as GCS president from 2015 to 2017. I also have a Masters in Game Design from NYU, where I script gameplay in Unreal Engine. Currently I'm a Game Designer at Haiku Games, making adventure games for mobile platforms."
    ],
    pastPositions: [
      {
        role: "President",
        period: "2015-2016"
      }
    ],
    website: "https://www.rachelparrishmoeller.com/",
    updated: "November 15, 2020"
  },
  {
    slug: "ram-potham",
    name: "Ram Potham",
    classOf: 2025,
    bio: [
      "I'm an undergraduate at Carnegie Mellon University studying artificial intelligence. On GCS, I have over 2 semesters of experience, winning the gold award and being a team lead. Outside of GCS, I know full stack development, and I'm currently a freelancer on AWS IQ as a certified expert, specializing in helping companies with serverless architecture and machine learning."
    ],
    email: "ram.potham@gmail.com",
    website: "https://rampotham.com",
    resume: "RamPotham.pdf",
    updated: "August 17, 2022"
  },
  {
    slug: "richard-wang",
    name: "Richard Wang",
    classOf: 2028,
    bio: [
      "Proud Member of GCS"
    ],
    email: "suprich0922@gmail.com",
    updated: "November 17, 2024"
  },
  {
    slug: "ryan-lee",
    name: "Ryan Lee",
    classOf: 2028,
    bio: [
      "School of Computer Science"
    ],
    email: "ryanlee2@andrew.cmu.edu",
    updated: "December 11, 2024"
  },
  {
    slug: "sanjay-salem",
    name: "Sanjay Salem",
    classOf: 2022,
    bio: [
      "Visual storyteller, programmer, nerd.",
      "Undergraduate art/computer science major at Carnegie Mellon, with interests in animation, augmented reality, and game design."
    ],
    website: "https://sanjaysalem17.github.io",
    updated: "October 5, 2020"
  },
  {
    slug: "sarah-pethani",
    name: "Sarah Pethani",
    classOf: 2023,
    bio: [
      "Hi, I'm an undergraduate student in computer science minoring in game design! I'm somewhat of a sucker for peaceful, story-based, 2D, single-player games and will never hesitate to gush about the artwork/story of a game (even though I definitely love talking about cool game mechanics too). I also do art as a hobby."
    ],
    website: "https://sarahpethani.com",
    updated: "September 2, 2020"
  },
  {
    slug: "sasha-mishkin",
    name: "Sasha Mishkin",
    classOf: 2025,
    bio: [
      "I like to mess around with overly complicated interfaces."
    ],
    updated: "December 23, 2021"
  },
  {
    slug: "scott-king",
    name: "Scott King",
    classOf: 2023,
    bio: [
      "Hi there, I'm Scott! I'm an Information Systems major with minors in Computer Science and Game Design."
    ],
    email: "jsking@andrew.cmu.edu",
    website: "https://jscottking.wixsite.com/portfolio/",
    resume: "Resume - Scott King.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/jacob-king2920/"
      },
      {
        label: "Itch.io",
        url: "https://scottking.itch.io/"
      },
      {
        label: "GitHub",
        url: "https://github.com/jsking2920"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/__king.scott__/"
      }
    ],
    updated: "February 4, 2022"
  },
  {
    slug: "sebastian-yang",
    name: "Sebastian Yang",
    classOf: 2022,
    bio: [
      "Hi, I'm Sebastian. A student majoring in Information system and interested in game design. GCS is a great place to learn more about games and how they are made. If you like games and enjoy making stuff, definitely join us :)"
    ],
    pastPositions: [
      {
        role: "President",
        period: "2021"
      }
    ],
    website: "https://sebastianyang.com/",
    updated: "December 23, 2021"
  },
  {
    slug: "shangyi-zhu",
    name: "Shangyi Zhu",
    classOf: 2026,
    bio: [
      "Hi! I am a Master's student in Music Tech, and Reaper is currently my favorite DAW."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2025"
      }
    ],
    email: "shangyiz@andrew.cmu.edu",
    website: "https://www.pufferfishmusic.net/",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/shangyi-zhu-6818201b3/"
      }
    ],
    updated: "March 24, 2025"
  },
  {
    slug: "shannon-lin",
    name: "Shannon Lin",
    classOf: 2024,
    bio: [
      "I'm a BXA Design and Cognitive Science student interested in Animation and Special Effects! I'm not a veteran in creating games by any means, but I'm fascinated with the stylistic art and visual storytelling of games such as Monument Valley, Oxenfree, Sky: Children of Light, and OPUS. I specialize in art and environments.",
      "I'm familiar with Unity, Maya, Photoshop, Illustrator, and Procreate."
    ],
    email: "salin@andrew.cmu.edu",
    website: "https://www.shannonlin.design/",
    updated: "January 31, 2021"
  },
  {
    slug: "shao-ju-wang",
    name: "Shao-Ju Wang",
    classOf: 2025,
    bio: [
      "Masters student in ECE, interested in embedded system, control and games"
    ],
    email: "shaojuw@andrew.cmu",
    updated: "January 17, 2025"
  },
  {
    slug: "shelly-zhang",
    name: "Shelly Zhang",
    classOf: 2024,
    bio: [
      "Hi! Im Shelly and I am currently an art major with a minor in animation and special effects. I enjoy creating on a team. So far I've been involved mainly in 2D and 3D asset creation though expansion into other areas of game creation is always exciting to me."
    ],
    email: "shzhang@andrew.cmu.edu",
    links: [
      {
        label: "Instagram",
        url: "https://instagram.com/marth._.a"
      }
    ],
    updated: "December 28, 2021"
  },
  {
    slug: "simon-corpuz",
    name: "Simon Corpuz",
    classOf: 2024,
    bio: [
      "An oncoming junior in Information Systems, with a passion for video games and an interest in art."
    ],
    email: "scorpuz@andrew.cmu.edu",
    phone: "8505595334",
    resume: "SimonCorpuz.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/simon-corpuz-78047822b"
      }
    ],
    updated: "September 9, 2022"
  },
  {
    slug: "soo-hyun-alan-lee",
    name: "Soo Hyun (Alan) Lee",
    classOf: 2023,
    bio: [
      "Hi, I'm Alan Lee. I major in CS with minors in Game Design and Film Studies. I am mainly a gameplay programmer, but always open to trying out new roles."
    ],
    email: "soohyun3@andrew.cmu.edu",
    phone: "4129354719",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/alan-lee-b70788141/"
      }
    ],
    updated: "December 24, 2021"
  },
  {
    slug: "sophia-qin",
    name: "Sophia Qin",
    classOf: 2020,
    bio: [
      "Hi! I double major in Art and Human Computer Interaction, and minor in Design. In my Art practice, I like melding physical paintings and sculpture with digital effects to create playful videos & animations. I like unique and strange indie games and I hope to see more mixed reality experiences in the future."
    ],
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2017-2018"
      }
    ],
    website: "https://sophiayqin.com/",
    updated: "November 15, 2020"
  },
  {
    slug: "stacey-cho",
    name: "Stacey Cho",
    classOf: 2024,
    bio: [
      "I'm an Art major minoring in Game Design. I love anything that has to do with 3D- level design, modeling, rendering, rigging, 3D printing, laser cutting...everything is so fun! I am familiar with Adobe Photoshop, Illustrator, Premiere Pro, and Audition. I also like to create works in Unity, Maya, Blender, Substance Painter, Ultimaker Cura, Meshmixer, and more! Can't wait to develop more fun games!"
    ],
    pastPositions: [
      {
        role: "Public Relations Lead",
        period: "2022"
      }
    ],
    email: "subincho@andrew.cmu.edu",
    updated: "January 9, 2023"
  },
  {
    slug: "steve-lu",
    name: "Steve Lu",
    classOf: 2025,
    bio: [
      "I design stuff. Like game systems. And levels. And characters."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2023"
      }
    ],
    email: "zhilu@andrew.cmu.edu",
    phone: "4128889726",
    website: "https://blasterus.github.io/",
    resume: "Resume - Steve Lu.pdf",
    updated: "January 30, 2024"
  },
  {
    slug: "susan-lin",
    name: "Susan Lin",
    classOf: 2011,
    bio: [
      "Boss Lady, Queen of Pastel Aesthetics. I manage people to make art, designs, and mechanical keyboards."
    ],
    website: "https://bysusanlin.com",
    updated: "March 7, 2020"
  },
  {
    slug: "swapnil-das",
    name: "Swapnil Das",
    classOf: 2024,
    bio: [
      "Hi! I'm an engineering PhD student at CMU. I'm really invested in video game composition overall, particularly when it comes to crafting stories and writing for them. I generally am a sucker for interesting roguelikes!"
    ],
    updated: "December 23, 2021"
  },
  {
    slug: "tabris-wang",
    name: "Tabris Wang",
    classOf: 2028,
    bio: [
      "correlation does not imply causation"
    ],
    currentPosition: "Vice President",
    email: "yiyuw@andrew.cmu.edu",
    phone: "4129014589",
    website: "https://www.yiyutabriswang.com/",
    updated: "January 11, 2026"
  },
  {
    slug: "tiger-jia",
    name: "Tiger Jia",
    classOf: 2020,
    bio: [
      "Hi, I'm a Business Administration major with a minor in Game Design with a love for making games! I really enjoy making games that give the player a unique and fun experience and hope to continue this in the future."
    ],
    pastPositions: [
      {
        role: "Treasurer",
        period: "2019"
      }
    ],
    website: "https://tigerjia.com",
    updated: "November 15, 2020"
  },
  {
    slug: "tomas-san-miguel",
    name: "Tomas San Miguel",
    classOf: 2019,
    bio: [
      "I'm a programmer who has been designing and making games since I was little. It's pretty much the best feeling in the world to create a project that has a positive impact on somebody else's life. Plus, making games is basically the most fun thing to be doing. Joining GCS was one of the best decisions I ever made!",
      "I was the president of GCS from Fall of 2016 until the Fall or 2018. The GCS game I'm most proud of is definitely Knight Night which was a hit on the Arcade Cabinet. I think my biggest accomplishment as President was modernizing the club by updating the bylaws and how we actually create teams.",
      "I'm currently poised to take a full-time job at Amazon but I aim to move into the game industry when the time is right. I had the opportunity to work at Vicarious Visions in the Summer of 2018 and it was certainly the best work experience I have ever had.",
      "I think absolutely anyone can (and should!) try their hand at making games. GCS is a pretty awesome place to give that a go!"
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2016"
      },
      {
        role: "President",
        period: "2017-2018"
      }
    ],
    website: "https://tomassanmiguel.github.io/aboutme/",
    updated: "November 15, 2020"
  },
  {
    slug: "vishant-raajkumar",
    name: "Vishant Raajkumar",
    classOf: 2026,
    bio: [
      "Hello, I'm a math major who likes games."
    ],
    email: "vraajkum@andrew.cmu.edu",
    resume: "Resume - Vishant Raajkumar.pdf",
    updated: "March 31, 2023"
  },
  {
    slug: "weiwen-andy-jiang",
    name: "Weiwen (Andy) Jiang",
    classOf: 2025,
    bio: [
      "Hello, I am an architecture student with a passion in game design."
    ],
    pastPositions: [
      {
        role: "Vice President",
        period: "2023"
      },
      {
        role: "President",
        period: "2024"
      }
    ],
    website: "https://www.weiwenjiang.com",
    links: [
      {
        label: "Itch.io",
        url: "https://adjacent.itch.io/"
      }
    ],
    updated: "January 30, 2024"
  },
  {
    slug: "will-huang",
    name: "Will Huang",
    classOf: 2024,
    bio: [
      "Hello, my name is Will and I'm an undergrad studying IS. As someone who grew up playing games I've always wanted to try programming and/or designing for games which brought me to GCS here at CMU."
    ],
    email: "whuang3@andrew.cmu.edu",
    phone: "6177085766",
    resume: "Resume - Will Huang.pdf",
    updated: "January 27, 2022"
  },
  {
    slug: "william-crenshaw",
    name: "William Crenshaw",
    classOf: 2025,
    bio: [
      "I am William Crenshaw. I look forward to future involvement with GCS."
    ],
    updated: "August 17, 2022"
  },
  {
    slug: "william-ozeas",
    name: "William Ozeas",
    classOf: 2023,
    bio: [
      "I am an undergraduate at CMU studying Computer Science and Music Composition. I'm extremely interested in creative sound implementation in games, and I love sound design and music creation of all kinds! I also enjoy game design and creatively designing around player motivation. Some of my inspirations are Transistor (or anything Supergiant), Overwatch, and Hollow Knight."
    ],
    email: "wco@andrew.cmu.edu",
    resume: "William Ozeas Resume VG 2 - William Ozeas.pdf",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/william-ozeas/"
      },
      {
        label: "SoundCloud",
        url: "https://soundcloud.com/willowpet"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCaortKkmoUYjRx-oIDEBR9g"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/WillOzeas"
      }
    ],
    updated: "January 4, 2021"
  },
  {
    slug: "woody-mccoy",
    name: "Woody McCoy",
    classOf: 2022,
    bio: [
      "Hello, I'm Woody! I'm a senior in CS at CMU, and I love making games. I've worked on around 2 dozen games during my time here, and I've had a lot of fun on technically challenging and artistically interesting games. Aside from previously helping run GCS, I also taught the student course on game creation for 2 years, and currently teach a course on the design and play of Roguelike games."
    ],
    pastPositions: [
      {
        role: "Director of Development",
        period: "2020"
      },
      {
        role: "Vice President",
        period: "2021"
      }
    ],
    website: "https://woodymccoy.dev",
    resume: "Resume - Manan McCoy.pdf",
    updated: "January 27, 2022"
  },
  {
    slug: "yihuanh-he",
    name: "Yihuanh He",
    classOf: 2026,
    bio: [
      "Yet to be filled as a new member"
    ],
    email: "yihuanh@andrew.cmu.edu",
    updated: "January 17, 2025"
  },
  {
    slug: "yunfeng-jason-jiang",
    name: "Yunfeng (Jason) Jiang",
    classOf: 2025,
    bio: [
      "Hi I am Jason who is majoring in architecture and computer science. I love making 3D models and doing environmental art."
    ],
    email: "yunfeng2@andrew.cmu.edu",
    phone: "5033448249",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCIzC2VCi43z-JmWbV4N_k9A"
      }
    ],
    updated: "April 29, 2023"
  },
  {
    slug: "zachary-heintzleman",
    name: "Zachary Heintzleman",
    classOf: 2026,
    bio: [
      "I am a Math (possibly CS?) Major in the class of 2026. I like problem solving, game design and programming. I like games from all genres I've tried, though I specifically like playing and making engine builders and party games."
    ],
    email: "zheintzleman@gmail.com",
    resume: "ZacharyHeintzleman.pdf",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/zheintzleman"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/zachary-heintzleman"
      }
    ],
    updated: "January 30, 2024"
  },
  {
    slug: "zeyang-li-linus",
    name: "Zeyang Li (Linus)",
    classOf: 2010,
    bio: [
      "Co-founder & CEO of ChillyRoom, indie game developer, programmer & game designer."
    ],
    email: "a.banknote@gmail.com",
    website: "https://chillyroom.com",
    updated: "Feburary 27, 2023"
  }
];
