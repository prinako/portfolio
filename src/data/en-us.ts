import type { PageData } from "./types.ts";
import {
  alternateLanguages,
  sharedSiteInfo,
  technologySets,
} from "./shared.ts";

export const enUSData: PageData = {
  language: "en-us",
  htmlLang: "en-US",
  stylesheet: "/styles.en-us.css",
  alternateLanguages,
  siteInfo: {
    ...sharedSiteInfo,
    role: "Computer Engineering Student & Software Developer",
    location: "Brazil · Universidade Federal do Pará",
    availability: "Building research, mobile, and infrastructure projects",
    focus: "computer vision, mobile apps, and resilient communication systems",
    summary:
      "I am a Computer Engineering student at UFPA with experience in IT support, software development, and image recognition research using drones. My work connects practical mobile products, AI experiments, Docker-based infrastructure, and offline-first communication tools.",
  },
  text: {
    metaDescription:
      "Professional developer portfolio focused on AI research, semantic communication, knowledge distillation, and self-hosted infrastructure.",
    navigationAria: "Primary navigation",
    homeAriaSuffix: "home",
    navigation: {
      skills: "Skills",
      projects: "Projects",
      process: "Process",
      contact: "Contact",
    },
    heroEyebrow: "AI research + production systems",
    heroPrimaryAction: "View work",
    heroSecondaryAction: "Start a conversation",
    languageLabel: "Language",
    snapshotAria: "Profile snapshot",
    snapshot: {
      name: "name",
      focus: "focus",
      stack: "stack",
      status: "status",
    },
    skillsEyebrow: "Core capabilities",
    skillsHeading:
      "Computer engineering foundations with hands-on product delivery.",
    projectsEyebrow: "Selected systems",
    projectsHeading:
      "Projects shaped around campus needs, research questions, and reliable infrastructure.",
    selectedProject: "Selected project",
    technologiesAria: "Technologies used",
    processEyebrow: "Workflow",
    processHeading: "A practical path from local problem to working software.",
    contactEyebrow: "Contact",
    contactHeading:
      "Let’s build useful software from research, infrastructure, and real-world needs.",
    footerSuffix: "Built with Deno and plain TypeScript.",
  },
  skills: [
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
      skills: [...technologySets.softwareEngineering],
    },
    {
      name: "Backend and Data",
      skills: [...technologySets.backendData],
    },
    {
      name: "Mobile and Web",
      skills: [...technologySets.mobileWeb],
    },
  ],
  projects: [
    {
      name: "RU Digital UFPA",
      summary:
        "A Flutter mobile app that helps UFPA students access daily University Restaurant menu information, service hours, and update notifications.",
      impact:
        "Built for a real campus workflow, bringing useful food service information closer to students in a focused mobile experience.",
      technologies: [...technologySets.ruDigital],
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
      technologies: [...technologySets.whyDisconnected, "Networking"],
    },
    {
      name: "RU Server Docker",
      summary:
        "Docker-based server work for RU Digital UFPA, focused on serving updated menu and service data.",
      impact:
        "Connects mobile product delivery with maintainable backend infrastructure for a student-facing service.",
      technologies: [...technologySets.ruServerDocker],
    },
  ],
  experience: [
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
  ],
};
