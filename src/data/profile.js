export const profile = {
  name: "Fatemeh Delkhosh",
  firstName: "Fatemeh",
  lastName: "Delkhosh",
  role: "Backend-focused developer",
  location: "Mashhad, Iran",
  email: "fatemehrap051@gmail.com",
  phoneDisplay: "0937 293 0730",
  phoneHref: "tel:+989372930730",
  linkedin: "https://www.linkedin.com/in/fatemeh-delkhosh/",
  github: "https://github.com/Marci051",
  summary:
    "I build web applications from the backend out — Python and Django first, then a Vue interface, and a careful step into data and AI when the product needs it.",
  about: [
    "I started with the interface: HTML, CSS, Tailwind, and Sass. From there I moved into Python and Django, and that is where most of my work sits now — templates, views, the ORM, REST APIs, and the shape of the data behind a feature.",
    "The products I want to build have three legible parts: a backend, a frontend, and, where it earns its place, a small amount of applied AI. I am early on that last part, and I learn it the same way I learned the rest — by building, and by entering bootcamps and competitions.",
  ],
  principles: [
    {
      title: "Analytical",
      text: "I take a problem apart before I start writing.",
    },
    {
      title: "Collaborative",
      text: "I work on a team, and I can hear feedback without defending the first draft.",
    },
    {
      title: "Reliable",
      text: "I keep ownership of my tasks and manage my time so the work ships.",
    },
    {
      title: "Steady",
      text: "I stay composed when the plan changes, and I adapt.",
    },
  ],
};

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "Mega Vision Team",
    place: "Mashhad",
    dates: "Apr 2024 — Present",
    points: [
      "Building with Django templates, views, the ORM, and routing.",
      "Implementing backend logic in Django’s model-view-template architecture.",
      "Working across Django REST Framework and Vue.js on the same products.",
      "Practicing data analysis alongside feature work.",
    ],
    tags: ["Django", "DRF", "Vue.js", "Data analysis"],
  },
  {
    role: "Junior Frontend Developer",
    org: "Mega Vision Team",
    place: "Mashhad",
    dates: "Nov 2024 — Mar 2025",
    points: [
      "Built interface work with HTML, CSS, Sass, Tailwind CSS, and JavaScript.",
    ],
    tags: ["HTML", "CSS", "Sass", "Tailwind CSS", "JavaScript"],
  },
];

export const skillGroups = [
  {
    label: "Backend",
    items: ["Python", "Django", "Django templates", "Django REST Framework", "Database design"],
  },
  {
    label: "Frontend",
    items: ["Vue.js", "HTML", "CSS", "Tailwind CSS", "Sass", "Bootstrap"],
  },
  {
    label: "AI & data",
    note: "Early stage",
    items: ["Data analysis", "Machine learning", "LLMs", "AI agents"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Figma", "Photoshop", "Illustrator", "ICDL"],
  },
  {
    label: "English",
    items: ["B2–C1"],
  },
];

export const education = [
  {
    school: "Sampad Saadi Technical and Vocational School",
    field: "Computer",
    place: "Mashhad",
    dates: "2023 — Present",
    detail: "Currently in 12th grade. 10th-grade average: 19.91 / 20.",
  },
  {
    school: "Farzanegan 1",
    field: "General studies",
    place: "Mashhad",
    dates: "2020 — 2023",
    detail: "Grades 7 through 9.",
  },
];

export const highlights = [
  {
    title: "2nd place — CanGrow 2",
    detail:
      "Bootcamp in Python, data science, and algorithmic thinking. Part Software Group.",
  },
  {
    title: "1st place — Paya League",
    detail: "Finished with every answer correct.",
  },
  {
    title: "Media Literacy Olympiad, 2023",
    detail: "Passed the first round.",
  },
];

export const programs = [
  "Crocodile 1 — web development bootcamp, Part Software Group",
  "HodCode 1 — WordPress theme development, Part Software Group",
  "Quera Back-End competition",
  "Quera Front-End competition",
];

// نمونه هستند. قبل از اشتراک‌گذاری، متن را با کار واقعی عوض کن و sample را بردار.
export const projects = [
  {
    sample: true,
    title: "Atlas Queue",
    summary:
      "A small operations board: tickets, owners, and status, with a Django REST API and Vue screens for filtering and a short activity log.",
    role: "Full-stack",
    stack: ["Django", "DRF", "Vue.js", "SQLite"],
  },
  {
    sample: true,
    title: "Field Notes",
    summary:
      "A reading desk for saved articles. The original text stays visible, and a short summary sits beside it — a place to practice one careful AI step.",
    role: "Backend and interface",
    stack: ["Python", "Django", "Vue.js"],
  },
  {
    sample: true,
    title: "Ledger Kit",
    summary:
      "Estimates, line items, and a print-clean invoice view for a studio. The interface is Vue, Tailwind, and Sass, with a thin Django API behind it.",
    role: "Frontend, with API support",
    stack: ["Vue.js", "Tailwind CSS", "Sass", "Django"],
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];
