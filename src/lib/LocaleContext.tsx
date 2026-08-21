import { createContext } from "react";
import type { Locale, TranslationKey } from "./i18n";

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);