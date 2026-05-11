export type LanguageCode = "en-us" | "pt-br";

export type LanguageOption = {
  code: LanguageCode;
  label: string;
  href: string;
};

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

export type SiteInfo = {
  name: string;
  handle: string;
  role: string;
  location: string;
  email: string;
  availability: string;
  focus: string;
  stack: string;
  summary: string;
  socialLinks: Array<{
    label: string;
    href: string;
  }>;
};

export type PageText = {
  metaDescription: string;
  navigationAria: string;
  homeAriaSuffix: string;
  navigation: {
    skills: string;
    projects: string;
    process: string;
    contact: string;
  };
  heroEyebrow: string;
  heroPrimaryAction: string;
  heroSecondaryAction: string;
  languageLabel: string;
  snapshotAria: string;
  snapshot: {
    name: string;
    focus: string;
    stack: string;
    status: string;
  };
  skillsEyebrow: string;
  skillsHeading: string;
  projectsEyebrow: string;
  projectsHeading: string;
  selectedProject: string;
  technologiesAria: string;
  processEyebrow: string;
  processHeading: string;
  contactEyebrow: string;
  contactHeading: string;
  footerSuffix: string;
};

export type PageData = {
  language: LanguageCode;
  htmlLang: string;
  stylesheet: string;
  alternateLanguages: LanguageOption[];
  siteInfo: SiteInfo;
  text: PageText;
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
};
