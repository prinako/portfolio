import type { LanguageOption, SiteInfo } from "./types.ts";

export const alternateLanguages: LanguageOption[] = [
  { code: "en-us", label: "EN", href: "/en-us" },
  { code: "pt-br", label: "PT", href: "/pt-br" },
];

export const sharedSiteInfo = {
  name: "Prince Nyarko",
  handle: "prinako",
  email: "mail@prinako.online",
  stack: "Flutter · Python · Docker · Linux",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/prinako" },
    { label: "ORCID", href: "https://orcid.org/0009-0008-9233-6367" },
    { label: "X", href: "https://twitter.com/prinako1" },
    { label: "Instagram", href: "https://www.instagram.com/prinako2" },
  ],
} satisfies Pick<
  SiteInfo,
  "name" | "handle" | "email" | "stack" | "socialLinks"
>;

export const technologySets = {
  ruDigital: ["Flutter", "Dart", "Firebase", "MongoDB"],
  whyDisconnected: ["Socket.io", "WebRTC", "Node.js"],
  ruServerDocker: ["Docker", "JavaScript", "Node.js", "Linux"],
  softwareEngineering: [
    "Python",
    "Dart",
    "Flutter",
    "React",
    "React Native",
    "Deno",
  ],
  mobileWeb: ["Flutter", "Dart", "HTML", "CSS", "JavaScript", "Node.js"],
  backendData: [
    "Node.js",
    "Express.js",
    "Socket.io",
    "MongoDB",
    "PostgreSQL",
    "WebRTC",
  ],
} as const;
