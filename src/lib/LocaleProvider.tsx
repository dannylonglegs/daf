import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import { translate, type Locale } from "./i18n";
import { LocaleContext } from "./LocaleContext";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(
    () => (localStorage.getItem("locale") as Locale) || "en"
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale: (l: Locale) => {
        localStorage.setItem("locale", l);
        setLocale(l);
      },
      t: (key: Parameters<typeof translate>[1]) => translate(locale, key),
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}