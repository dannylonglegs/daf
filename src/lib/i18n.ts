export type Locale = "en" | "fr";
const dictionaries = {
  en: {
    "home.tagline": "is a front-end engineer and creative coder working in web design and development, with a background in fine arts. Currently open for work.",
    "home.taglineOpposite": "est un développeur front-end et codeur créatif travaillant en design web, avec un parcours en beaux-arts. Actuellement disponible.",
    "home.selectedWork": "Selected Work:",
    "home.selectedWorkOpposite": "Travaux Sélectionnés :",
    "home.otherProjects": "Other Projects:",
    "home.otherProjectsOpposite": "Autres Projets :",

    "code.maggiePeachTitle": "",
    "code.maggiePeachTitleOpposite": "",
    "code.maggiePeachDescription": "",
    "code.maggiePeachDescriptionOpposite": "",

    "code.etteTitle": "Ette Designer Portfolio",
    "code.etteTitleOpposite": "Portfolio « Ette » ",
    "code.etteDescription": "Portfolio site for Toronto-based furniture and interior designer Kate Richard. \n\n Led UI/UX and developed the site with GatsbyJS and Contentful CMS. Built an infinite-scrolling, lazy-loaded gallery to handle a large volume of imagery while keeping performance smooth.",
    "code.etteDescriptionOpposite": "Portfolio site for Toronto-based furniture and interior designer Kate Richard. \n\n Led UI/UX and developed the site with GatsbyJS and Contentful CMS. Built an infinite-scrolling, lazy-loaded gallery to handle a large volume of imagery while keeping performance smooth.",

    "code.playWorkGroupTitle": "Novos Growth Partners & Apollo Care Corporate Websites",
"code.playWorkGroupTitleOpposite": "Sites web corporatifs pour Novos Growth Partners et Apollo Care",
"code.playWorkGroupDescription": "Two informational healthcare websites built with a NYC agency for Chicago-based pharma company Novos Growth Partners and its subsidiary Apollo Care.\n\nLed primary development using Next.js and Contentful. Focused on clean, professional design, strong content flow, and SEO-friendly architecture.",
"code.playWorkGroupDescriptionOpposite": "Deux sites web informatifs pour le secteur de la santé, réalisés avec une agence de New York pour l'entreprise pharmaceutique Novos Growth Partners, basée à Chicago, et sa filiale Apollo Care.\n\nDéveloppement principal réalisé avec Next.js et Contentful. Accent mis sur un design épuré et professionnel, une structure de contenu fluide, et une architecture optimisée pour le référencement (SEO).",

    "code.danseCiteTitle": "Danse-Cité 40th Anniversary Rebrand and Website",
    "code.danseCiteTitleOpposite": "Refonte de marque et site web pour le 40e anniversaire de Danse-Cité",
    "code.danseCiteDescription": "Full visual and website redesign for contemporary dance company Danse-Cité's 40th anniversary, including updated branding, visual language, and digital presence.\n\nDeveloped the site using Next.js and Contentful CMS, based on branding by Steven Steffen and web/UI design created collaboratively as a duo. Built a modern, highly navigable experience featuring a sortable archive of 40 years of performances, and trained the team to manage content independently.",
    "code.danseCiteDescriptionOpposite": "Refonte visuelle et web complète pour la compagnie de danse contemporaine Danse-Cité à l'occasion de son 40e anniversaire, incluant une image de marque, un langage visuel et une présence numérique renouvelés.\n\nDéveloppement du site avec Next.js et Contentful CMS, à partir de l'identité visuelle créée par Steven Steffen et d'un design web/UI conçu en duo. Conception d'une expérience moderne et facilement navigable, incluant une archive triable de 40 ans de spectacles, avec formation de l'équipe pour une gestion autonome du contenu.",

    "code.materialMattersTitle": "Material Matters - Emily Carr University of Art and Design",
    "code.materialMattersTitleOpposite": "Material Matters - Emily Carr University of Art and Design",
    "code.materialMattersDescription":  "Website for Material Matters, a research initiative at Emily Carr University of Art and Design. \n\n Consulted on UI/UX and developed the site with GatsbyJS and Contentful CMS. Designed a sortable homepage layout with intentional blank space to create visual rhythm, and trained the team to manage content independently.",
    "code.materialMattersDescriptionOpposite":  "Website for Material Matters, a research initiative at Emily Carr University of Art and Design. \n\n Consulted on UI/UX and developed the site with GatsbyJS and Contentful CMS. Designed a sortable homepage layout with intentional blank space to create visual rhythm, and trained the team to manage content independently.",

    "projects.artworkTitle": "Personal Artwork",
    "projects.artworkTitleOpposite": "Œuvres Personnelles",
    "projects.artworkDescription": "Since graduating from art school, I maintain a small artistic practice, primarily of paintings and charcoal drawings. I have exhibited my artwork in solo and group exhibitions both locally and abroad, in places such as Winnipeg, Glasgow, and Shanghai. ",
    "projects.artworkDescriptionOpposite": "Since graduating from art school, I maintain a small artistic practice, primarily of paintings and charcoal drawings. I have exhibited my artwork in solo and group exhibitions both locally and abroad, in places such as Winnipeg, Glasgow, and Shanghai. ",

    "projects.eolithTitle": "Eolith Curatorial Project",
    "projects.eolithTitleOpposite": "Projet curatorial Eolith",
    "projects.eolithDescription": "From 2022 until 2024, I co-curated and co-organized a series of off-site art exhibitions alongside a friend. Each site that would choose became the inspiration for our curation and artists we asked to participate. Our goal was to treat the artworks as artifacts, inviting interpretation through the lens of a specific location. We usually planned our exhibitions around the themes of prehistory, archaeology, forgotten science and time. We have since retired this project in favour of our gallery, Ermitage 308.",
    "projects.eolithDescriptionOpposite": "De 2022 à 2024, j'ai co-organisé et co-commissarié une série d'expositions d'art hors-site avec un ami. Chaque lieu qu'on choisissait devenait la source d'inspiration pour notre curation et pour les artistes qu'on invitait à participer. Notre but était de traiter les œuvres comme des artefacts, en invitant à les interpréter à travers le prisme d'un lieu précis. On planifiait habituellement nos expositions autour des thèmes de la préhistoire, de l'archéologie, des sciences oubliées et du temps. On a depuis mis fin à ce projet au profit de notre galerie, Ermitage 308.",

    "projects.ermitageTitle": "",
    "projects.ermitageTitleOpposite": "",
    "projects.ermitageDescription": "",
    "projects.ermitageDescriptionOpposite": "",

    "footer.contact": "Contact",
    
  },
  fr: {
    "home.tagline": "est un développeur front-end et codeur créatif travaillant en design web, avec un parcours en beaux-arts. Actuellement disponible.",
    "home.taglineOpposite": "is a front-end engineer and creative coder working in web design and development, with a background in fine arts. Currently open for work.",
    "home.selectedWork": "Travaux Sélectionnés :",
    "home.selectedWorkOpposite": "Selected Work:",
    "home.otherProjects": "Autres Projets :",
    "home.otherProjectsOpposite": "Other Projects:",

    "code.maggiePeachTitle": "",
    "code.maggiePeachTitleOpposite": "",
    "code.maggiePeachDescription": "",
    "code.maggiePeachDescriptionOpposite": "",

    "code.etteTitle": "Portfolio « Ette » :",
    "code.etteTitleOpposite": "Ette Designer Portfolio",
    "code.etteDescription": "Portfolio site for Toronto-based furniture and interior designer Kate Richard.  \n\n Led UI/UX and developed the site with GatsbyJS and Contentful CMS. Built an infinite-scrolling, lazy-loaded gallery to handle a large volume of imagery while keeping performance smooth.",
    "code.etteDescriptionOpposite": "Portfolio site for Toronto-based furniture and interior designer Kate Richard. \n\n Led UI/UX and developed the site with GatsbyJS and Contentful CMS. Built an infinite-scrolling, lazy-loaded gallery to handle a large volume of imagery while keeping performance smooth.",

    "code.playWorkGroupTitle": "Sites web corporatifs pour Novos Growth Partners et Apollo Care",
    "code.playWorkGroupTitleOpposite": "Novos Growth Partners & Apollo Care Corporate Websites",
    "code.playWorkGroupDescription": "Deux sites web informatifs pour le secteur de la santé, réalisés avec une agence de New York pour l'entreprise pharmaceutique Novos Growth Partners, basée à Chicago, et sa filiale Apollo Care.\n\nDéveloppement principal réalisé avec Next.js et Contentful. Accent mis sur un design épuré et professionnel, une structure de contenu fluide, et une architecture optimisée pour le référencement (SEO).",
    "code.playWorkGroupDescriptionOpposite": "Two informational healthcare websites built with a NYC agency for Chicago-based pharma company Novos Growth Partners and its subsidiary Apollo Care.\n\nLed primary development using Next.js and Contentful. Focused on clean, professional design, strong content flow, and SEO-friendly architecture.",

    "code.danseCiteTitle": "Refonte de marque et site web pour le 40e anniversaire de Danse-Cité",
    "code.danseCiteTitleOpposite": "Danse-Cité 40th Anniversary Rebrand and Website",
    "code.danseCiteDescription": "Refonte visuelle et web complète pour la compagnie de danse contemporaine Danse-Cité à l'occasion de son 40e anniversaire, incluant une image de marque, un langage visuel et une présence numérique renouvelés.\n\nDéveloppement du site avec Next.js et Contentful CMS, à partir de l'identité visuelle créée par Steven Steffen et d'un design web/UI conçu en duo. Conception d'une expérience moderne et facilement navigable, incluant une archive triable de 40 ans de spectacles, avec formation de l'équipe pour une gestion autonome du contenu.",
    "code.danseCiteDescriptionOpposite": "Full visual and website redesign for contemporary dance company Danse-Cité's 40th anniversary, including updated branding, visual language, and digital presence.\n\nDeveloped the site using Next.js and Contentful CMS, based on branding by Steven Steffen and web/UI design created collaboratively as a duo. Built a modern, highly navigable experience featuring a sortable archive of 40 years of performances, and trained the team to manage content independently.",

    "code.materialMattersTitle": "Material Matters - Emily Carr University of Art and Design",
    "code.materialMattersTitleOpposite": "Material Matters - Emily Carr University of Art and Design",
    "code.materialMattersDescription": "Website for Material Matters, a research initiative at Emily Carr University of Art and Design. \n\n Consulted on UI/UX and developed the site with GatsbyJS and Contentful CMS. Designed a sortable homepage layout with intentional blank space to create visual rhythm, and trained the team to manage content independently.",
    "code.materialMattersDescriptionOpposite":  "Website for Material Matters, a research initiative at Emily Carr University of Art and Design. \n\n Consulted on UI/UX and developed the site with GatsbyJS and Contentful CMS. Designed a sortable homepage layout with intentional blank space to create visual rhythm, and trained the team to manage content independently.",

    "projects.artworkTitle": "Œuvres Personnelles",
    "projects.artworkTitleOpposite": "Personal Artwork",
    "projects.artworkDescription": "Since graduating from art school, I maintain a small artistic practice, primarily of paintings and charcoal drawings. I have exhibited my artwork in solo and group exhibitions both locally and abroad, in places such as Winnipeg, Glasgow, and Shanghai. ",
    "projects.artworkDescriptionOpposite": "Since graduating from art school, I maintain a small artistic practice, primarily of paintings and charcoal drawings. I have exhibited my artwork in solo and group exhibitions both locally and abroad, in places such as Winnipeg, Glasgow, and Shanghai. ",

    "projects.eolithTitle": "Projet curatorial Eolith",
"projects.eolithTitleOpposite": "Eolith Curatorial Project",
"projects.eolithDescription": "De 2022 à 2024, j'ai co-organisé et co-commissarié une série d'expositions d'art hors-site avec un ami. Chaque lieu qu'on choisissait devenait la source d'inspiration pour notre curation et pour les artistes qu'on invitait à participer. Notre but était de traiter les œuvres comme des artefacts, en invitant à les interpréter à travers le prisme d'un lieu précis. On planifiait habituellement nos expositions autour des thèmes de la préhistoire, de l'archéologie, des sciences oubliées et du temps. On a depuis mis fin à ce projet au profit de notre galerie, Ermitage 308.",
"projects.eolithDescriptionOpposite": "From 2022 until 2024, I co-curated and co-organized a series of off-site art exhibitions alongside a friend. Each site that would choose became the inspiration for our curation and artists we asked to participate. Our goal was to treat the artworks as artifacts, inviting interpretation through the lens of a specific location. We usually planned our exhibitions around the themes of prehistory, archaeology, forgotten science and time. We have since retired this project in favour of our gallery, Ermitage 308.",

    "projects.ermitageTitle": "",
    "projects.ermitageTitleOpposite": "",
    "projects.ermitageDescription": "",
    "projects.ermitageDescriptionOpposite": "",

    "footer.contact": "Contact",
  },
} satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof (typeof dictionaries)["en"];

export function translate(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale][key] ?? dictionaries.en[key] ?? key;
}