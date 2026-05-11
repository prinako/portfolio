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
  name: "Alex Morgan",
  role: "AI Systems Researcher & Full-Stack Infrastructure Engineer",
  location: "Remote / Open Source",
  email: "hello@example.dev",
  availability: "Available for research engineering and infrastructure work",
  summary:
    "I build reliable AI and developer platforms that turn research ideas into resilient, observable systems. My work spans semantic communication, model compression, self-hosted infrastructure, and production-grade application delivery.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/example" },
    { label: "LinkedIn", href: "https://linkedin.com/in/example" },
    { label: "Research Notes", href: "https://example.dev/notes" },
  ],
};

export const skills: SkillCategory[] = [
  {
    name: "AI Research",
    skills: [
      "Semantic communication",
      "Knowledge distillation",
      "PyTorch",
      "Experiment design",
      "Model evaluation",
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
    name: "Product Engineering",
    skills: [
      "Deno",
      "TypeScript",
      "React",
      "Flutter",
      "Node.js",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Semantic Link Lab",
    summary:
      "Research workspace for testing semantic communication strategies under noisy network conditions.",
    impact:
      "Improved experiment turnaround with reproducible pipelines, structured logging, and lightweight dashboards.",
    technologies: ["PyTorch", "Deno", "Docker", "Linux"],
  },
  {
    name: "DistillKit",
    summary:
      "A modular toolkit for compressing large teacher models into efficient student models for edge deployment.",
    impact:
      "Reduced prototype model size while preserving task-specific accuracy through configurable distillation recipes.",
    technologies: ["Knowledge distillation", "Python", "PyTorch", "Docker"],
  },
  {
    name: "Self-Hosted Control Plane",
    summary:
      "Private infrastructure stack for services, reverse proxies, network routing, monitoring, and backups.",
    impact:
      "Created a dependable operations baseline for personal and client systems with clear recovery procedures.",
    technologies: ["Linux", "Networking", "Docker", "Deno"],
  },
];

export const experience: ExperienceItem[] = [
  {
    stage: "01",
    title: "Research and validate",
    description:
      "Turn ambiguous AI ideas into measurable experiments with crisp assumptions, baselines, and evaluation loops.",
  },
  {
    stage: "02",
    title: "Engineer the platform",
    description:
      "Build maintainable services, typed interfaces, and infrastructure that can survive real usage.",
  },
  {
    stage: "03",
    title: "Ship and observe",
    description:
      "Deploy with clear runtime behavior, operational checks, and feedback channels for continuous improvement.",
  },
];
