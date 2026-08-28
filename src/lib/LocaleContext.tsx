import { createContext } from "react";
import type { Locale, TranslationKey, ProjectKey, ProjectEntry } from "./i18n";

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
  project: (key: ProjectKey) => ProjectEntry;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);