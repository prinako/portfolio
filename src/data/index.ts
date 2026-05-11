import { enUSData } from "./en-us.ts";
import { ptBRData } from "./pt-br.ts";
import type { LanguageCode, PageData } from "./types.ts";

export type {
  ExperienceItem,
  LanguageCode,
  PageData,
  Project,
  SkillCategory,
} from "./types.ts";

export const DEFAULT_LANGUAGE: LanguageCode = "en-us";

export const pageDataByLanguage: Record<LanguageCode, PageData> = {
  "en-us": enUSData,
  "pt-br": ptBRData,
};

export function getPageData(language: LanguageCode): PageData {
  return pageDataByLanguage[language];
}
