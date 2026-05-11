export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Project = {
  name: string;
  summary: string;
  impact: string;
  technologies: string[];
};

export type ExperienceItem = {
  stage: string;
  title: string;
  description: string;
};

export const siteInfo = {
  name: "Prince Nyarko",
  handle: "prinako",
  role: "Computer Engineering Student & Software Developer",
  location: "Brazil · Universidade Federal do Pará",
  email: "mail@prinako.online",
  availability: "Building research, mobile, and infrastructure projects",
  focus: "computer vision, mobile apps, and resilient communication systems",
  stack: "Flutter · Python · Docker · Linux",
  summary:
    "I am a Computer Engineering student at UFPA with experience in IT support, software development, and image recognition research using drones. My work connects practical mobile products, AI experiments, Docker-based infrastructure, and offline-first communication tools.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/prinako" },
    { label: "ORCID", href: "https://orcid.org/0009-0008-9233-6367" },
    { label: "X", href: "https://twitter.com/prinako1" },
    { label: "Instagram", href: "https://www.instagram.com/prinako2" },
  ],
};

export const skills: SkillCategory[] = [
  {
    name: "AI Research",
    skills: [
      "YOLOv8",
      "Drone image recognition",
      "Vegetation recognition",
      "PyTorch",
      "Computer vision",
      "Research prototyping",
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      "Docker",
      "Linux",
      "Networking",
      "Self-hosted systems",
      "Observability",
    ],
  },
  {
    name: "Software Engineering",
    skills: [
      "Python",
      "Dart",
      "Flutter",
      "React",
      "React Native",
      "Deno",
    ],
  },
  {
    name: "Backend and Data",
    skills: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "PostgreSQL",
      "WebRTC",
    ],
  },
  {
    name: "Mobile and Web",
    skills: [
      "Flutter",
      "Dart",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "RU Digital UFPA",
    summary:
      "A Flutter mobile app that helps UFPA students access daily University Restaurant menu information, service hours, and update notifications.",
    impact:
      "Built for a real campus workflow, bringing useful food service information closer to students in a focused mobile experience.",
    technologies: ["Flutter", "Dart", "Firebase", "MongoDB"],
  },
  {
    name: "Vegetation Recognition Research",
    summary:
      "Computer vision research project focused on vegetation recognition using drone imagery and YOLOv8.",
    impact:
      "Explores how AI can support environmental analysis by turning aerial imagery into structured recognition workflows.",
    technologies: ["YOLOv8", "Python", "Computer vision", "Drones"],
  },
  {
    name: "WhyDisconnected",
    summary:
      "An offline and online communication app built around Socket.io and WebRTC for local-first connectivity scenarios.",
    impact:
      "Investigates resilient communication patterns for moments when conventional internet access is unreliable.",
    technologies: ["Socket.io", "WebRTC", "Node.js", "Networking"],
  },
  {
    name: "RU Server Docker",
    summary:
      "Docker-based server work for RU Digital UFPA, focused on serving updated menu and service data.",
    impact:
      "Connects mobile product delivery with maintainable backend infrastructure for a student-facing service.",
    technologies: ["Docker", "JavaScript", "Node.js", "Linux"],
  },
];

export const experience: ExperienceItem[] = [
  {
    stage: "01",
    title: "Investigate real problems",
    description:
      "Start from practical contexts such as campus services, offline communication, and drone-based image recognition.",
  },
  {
    stage: "02",
    title: "Prototype with the right stack",
    description:
      "Use Flutter, Python, Docker, Linux, Node.js, and networking tools to move from concept to working system.",
  },
  {
    stage: "03",
    title: "Ship, maintain, and improve",
    description:
      "Keep projects useful after launch through infrastructure care, documentation, and iterative feature work.",
  },
];
