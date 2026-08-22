export type Locale = "en" | "fr";
const dictionaries = {
  en: {
    "home.tagline": "is a front-end engineer and creative coder working in web design and development, with a background in fine arts. Currently open for work.",
    "home.taglineOpposite": "est un développeur front-end et codeur créatif travaillant en design web, avec un parcours en beaux-arts. Actuellement disponible.",
    "home.selectedWork": "Selected Work:",
    "home.selectedWorkOpposite": "Travaux Sélectionnés :",
    "home.otherProjects": "Other Projects:",
    "home.otherProjectsOpposite": "Autres Projets :",
    "footer.contact": "Contact",
    
  },
  fr: {
    "home.tagline": "est un développeur front-end et codeur créatif travaillant en design web, avec un parcours en beaux-arts. Actuellement disponible.",
    "home.taglineOpposite": "is a front-end engineer and creative coder working in web design and development, with a background in fine arts. Currently open for work.",
    "home.selectedWork": "Travaux Sélectionnés :",
    "home.selectedWorkOpposite": "Selected Work:",
    "home.otherProjects": "Autres Projets :",
    "home.otherProjectsOpposite": "Other Projects:",
    "footer.contact": "Contact",
  },
} satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof (typeof dictionaries)["en"];

export function translate(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale][key] ?? dictionaries.en[key] ?? key;
}