export const profile = {
  name: "Kanhaiya Prasad Sah",
  role: "Full-Stack Developer",
  location: "Janakpur, Madhesh Pradesh, Nepal",
  email: "ksah1674@gmail.com",
  phones: ["+977 9826822004", "+91 7396090180"],
  github: "https://github.com/KanhaiyaPrasadSah",
  linkedin: "https://www.linkedin.com/in/kanhaiya-sah",
  tagline:
    "I build full-stack web apps with React and Node, then spend the weekend wiring an ESP32 to something.",
};

export const stack = [
  {
    group: "Languages",
    items: ["C", "Java", "Python", "JavaScript"],
  },
  {
    group: "Frontend",
    items: ["HTML", "CSS", "React.js", "Next.js"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Tools",
    items: ["VS Code", "Postman", "Android Studio", "Flutterflow", "Tableau", "Git"],
  },
];

export const projects = [
  {
    date: "2026",
    status: "Live",
    title: "Smart Gate AI",
    description:
      "A real-time gate access system built on an ESP32 with an OV2640 camera. Visitors register through a web form, and the identification console matches faces against the registry to decide who gets through.",
    tags: ["ESP32", "IoT", "Computer Vision", "Real-time"],
    links: [
      { label: "Registration form", href: "https://kanhaiyaprasadsah.github.io/Registration-form/" },
      { label: "Identification console", href: "https://smartgate-ai-gate.vercel.app/" },
    ],
  },
  {
    date: "2025",
    status: "Live",
    title: "Todo Application",
    description:
      "A full-stack task manager: a React and Next.js frontend talking to a Node and Express API, with MongoDB holding the data. Built to get comfortable with the whole request-to-database round trip.",
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB"],
    links: [
      { label: "Open app", href: "https://todos-application-frontend.vercel.app" },
    ],
  },
  {
    date: "2024",
    status: "Published",
    title: "Student Attendance Tracker",
    description:
      "An Android app for keeping a daily attendance sheet, written in Kotlin and shipped to the Amazon App Store — my first published app.",
    tags: ["Kotlin", "Android", "Mobile"],
    links: [
      { label: "View on Amazon", href: "https://www.amazon.com/dp/B0D4DX3DXP/ref=apps_sf_sta" },
    ],
  },
  {
    date: "2023",
    status: "Archived",
    title: "Game Hub",
    description:
      "My earlier portfolio and games collection, hosted on GitHub Pages. The starting point that got me into building things I could actually put online.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    links: [
      { label: "Visit site", href: "https://kanhaiyaprasadsah.github.io/game_hub/" },
    ],
  },
];

export const experience = [
  {
    org: "Fube Technologies Pvt. Ltd.",
    role: "Software Development Intern",
    period: "June 15 — Present",
    points: [
      "Built frontend features in React.js and Next.js.",
      "Built backend routes and services in Node.js and Express.js.",
      "Worked with MongoDB and PostgreSQL across different projects.",
      "Collaborated inside a team, shipping features through a shared workflow.",
    ],
  },
  {
    org: "IoT Workshop",
    role: "Participant",
    period: "Embedded Systems Training",
    points: [
      "Learned embedded systems fundamentals using Arduino.",
      "Applied the same concepts later in the ESP32-based Smart Gate AI project.",
    ],
  },
];

export const education = [
  {
    school: "Guru Nanak Institute of Technology",
    location: "Hyderabad, India",
    program: "B.Tech, Information Technology",
    detail: "CGPA 7.83/10 (78.3%) — graduating 2026",
  },
  {
    school: "Dhanusha Science Campus",
    location: "Janakpur, Nepal",
    program: "Intermediate Level",
    detail: "78.75%",
  },
  {
    school: "Mithila Montessori School",
    location: "Janakpur, Nepal",
    program: "Schooling",
    detail: "80%",
  },
];
