export type Locale = "en" | "fr";

export type ProjectEntry = {
  title: string;
  titleOpposite: string;
  description: string;
  descriptionOpposite: string;
  link?: string;
  linkLabel?: string;
  linkLabelOpposite?: string;
};

const ui = {
  en: {
    "home.tagline":
      "My name is Daniel Alexander Fernandes\nand I am a multidisciplinary creative coder working in web design and development, spatial installation, with a background in the fine arts. I work across both digital and physical experiences, collaborating across marketing, design and creative projects.\n\nCurrently open for new opportunities.",
    "home.taglineOpposite":
      "Je m'appelle Daniel Alexander Fernandes.\nJe suis un créatif multidisciplinaire spécialisé en programmation créative, en design et développement web, ainsi qu'en installation dans l'espace. J'ai aussi une formation en arts visuels. Je travaille sur des projets numériques et physiques, en collaboration avec des équipes de marketing, de design et de création.\nJe suis actuellement ouvert à de nouvelles opportunités.",
    "home.selectedWork": "Selected Work:",
    "home.selectedWorkOpposite": "Travaux Sélectionnés :",
    "home.otherProjects": "Other Projects:",
    "home.otherProjectsOpposite": "Autres Projets :",
    "footer.contact": "Contact",
  },
  fr: {
    "home.tagline":
      "Je m'appelle Daniel Alexander Fernandes.\nJe suis un créatif multidisciplinaire spécialisé en programmation créative, en design et développement web, ainsi qu'en installation dans l'espace. J'ai aussi une formation en arts visuels. Je travaille sur des projets numériques et physiques, en collaboration avec des équipes de marketing, de design et de création.\nJe suis actuellement ouvert à de nouvelles opportunités.",
    "home.taglineOpposite":
      "My name is Daniel Alexander Fernandes\nand I am a multidisciplinary creative coder working in web design and development, spatial installation, with a background in the fine arts. I work across both digital and physical experiences, collaborating across marketing, design and creative projects.\n\nCurrently open for new opportunities.",
    "home.selectedWork": "Travaux Sélectionnés :",
    "home.selectedWorkOpposite": "Selected Work:",
    "home.otherProjects": "Autres Projets :",
    "home.otherProjectsOpposite": "Other Projects:",
    "footer.contact": "Contact",
  },
} satisfies Record<Locale, Record<string, string>>;

const projects = {
  en: {
    "code.maggiePeach": {
      title: "Maggie Peach Portfolio Website",
      titleOpposite: "Site web portfolio de Maggie Peach",
      description:
        "Website for artist and performer Maggie Peach, alongside the principal designer Joel Lee.\n\nAlong with being the primary developer, I was consulted to guide the designs into a useable website with cohesive architecture. The website was created using Next.js and Sanity CMS.",
      descriptionOpposite:
        "Site web pour l'artiste et performeuse Maggie Peach, réalisé avec le designer principal Joel Lee.\n\nEn plus d'être le développeur principal du projet, j'ai participé à la réflexion sur le design afin de transformer les maquettes en un site facile à utiliser, avec une structure claire et cohérente. Le site a été développé avec Next.js et le CMS Sanity.",
      link: "",
      linkLabel: "Visit website",
      linkLabelOpposite: "Voir le site web",
    },
    "code.ette": {
      title: "Ette Designer Portfolio",
      titleOpposite: "Portfolio « Ette » ",
      description:
        "Portfolio site for Toronto-based furniture and interior designer Kate Richard.\n\nI was the primary UI/UX designer and developer. The site uses GatsbyJS and Contentful CMS. The primary feature is an infinite-scrolling, lazy-loaded gallery to handle a large volume of images with smooth performance.",
      descriptionOpposite:
        "Site portfolio pour Kate Richard, designer de mobilier et d'intérieur basée à Toronto.\n\nJ'étais le principal designer UI/UX et développeur du projet. Le site utilise GatsbyJS et le CMS Contentful.\n\nLa fonction principale du site est une galerie avec défilement infini et chargement progressif des images. Cette solution permet de présenter un grand nombre d'images tout en gardant une navigation fluide.",
      link: "",
      linkLabel: "Visit website",
      linkLabelOpposite: "Voir le site web",
    },
    "code.playWorkGroup": {
      title: "Novos Growth Partners & Apollo Care Websites",
      titleOpposite: "Sites web pour Novos Growth Partners et Apollo Care",
      description:
        "Web developer on several contracted projects for New York City creative agency PlayWorkGroup. Select clients include: Novos Growth Partners and its subsidiary Apollo Care.\n\nI developed these sites using Next.js and Contentful. My focus was on clean, professional design with a strong content flow, and an emphasis on SEO-friendly architecture.",
      descriptionOpposite:
        "Développeur web sur plusieurs projets réalisés pour l'agence créative PlayWorkGroup, basée à New York. Parmi les clients : Novos Growth Partners et sa filiale Apollo Care.\n\nJ'ai développé ces sites avec Next.js et Contentful. Mon travail était centré sur un design simple et professionnel, une bonne organisation du contenu et une structure adaptée au référencement SEO.",
      link: "",
      linkLabel: "Visit website",
      linkLabelOpposite: "Voir le site web",
    },
    "code.danseCite": {
      title: "Danse-Cité 40th Anniversary Rebrand and Website",
      titleOpposite: "Nouveau site et nouvelle image pour les 40 ans de Danse-Cité",
      description:
        "Full visual and website redesign for contemporary dance company Danse-Cité's 40th anniversary, including updated branding, visual language, and digital presence.\n\nDeveloped the site using Next.js and Contentful CMS, based on branding by Steven Steffen and web/UI design created collaboratively as a duo. Built a modern, highly navigable experience featuring a sortable archive of 40 years of performances, and trained the team to manage content independently.",
      descriptionOpposite:
        "Nouveau design et nouveau site web pour la compagnie de danse contemporaine Danse-Cité, pour ses 40 ans. Le projet inclut une nouvelle image de marque et un nouveau site internet.\n\nJ'ai développé le site avec Next.js et Contentful CMS. Le design vient de Steven Steffen. J'ai fait le design web/UI avec une autre personne. Le site est moderne et facile à utiliser. Il y a une archive de 40 ans de spectacles, qu'on peut trier. J'ai aussi montré à l'équipe comment gérer le contenu elle-même.",
      link: "",
      linkLabel: "Visit website",
      linkLabelOpposite: "Voir le site web",
    },
    "code.materialMatters": {
      title: "Material Matters - Emily Carr University of Art and Design",
      titleOpposite: "Material Matters - Université Emily Carr d'art et de design",
      description:
        "Website for Material Matters, a research initiative at Emily Carr University of Art and Design.\n\nFor this project, I consulted on the UI/UX design and developed the site with GatsbyJS and Contentful CMS. This site features a sortable homepage layout with intentional blank space, inserted randomly at page load, to break up visual conformity. Alongside development, I trained the team to manage content independently.\n\nThis website is no longer active after 2025, but still available to view.",
      descriptionOpposite:
        "Site web pour Material Matters, un projet de recherche de l'Emily Carr University of Art and Design.\n\nPour ce projet, j'ai participé au design UI/UX et j'ai développé le site avec GatsbyJS et le CMS Contentful. La page d'accueil utilise une mise en page qui peut être triée et qui contient des espaces vides placés de façon aléatoire au chargement de la page. Cela permet de casser la régularité visuelle de la mise en page.\nEn plus du développement, j'ai formé l'équipe pour qu'elle puisse gérer le contenu du site de façon autonome.\n\nLe site n'est plus actif depuis 2025, mais il est toujours possible de le consulter.",
      link: "",
      linkLabel: "Visit website",
      linkLabelOpposite: "Voir le site web",
    },
    "projects.artwork": {
      title: "Art Practice",
      titleOpposite: "Pratique artistique",
      description:
        "Since graduating from art school in 2017, I maintain a small artistic practice, primarily of paintings and charcoal drawings.\n\nI have exhibited my artwork in solo and group exhibitions both locally and abroad, in places such as Winnipeg, Glasgow, and Shanghai. Below is a small selection of my artwork.",
      descriptionOpposite:
        "Depuis la fin de mes études en arts en 2017, je maintiens une petite pratique artistique, principalement en peinture et en dessin au fusain.\n\nJ'ai présenté mon travail dans des expositions individuelles et collectives, au Canada et à l'étranger, notamment à Winnipeg, Glasgow et Shanghai.\n\nVous trouverez ci-dessous une petite sélection de mes œuvres.",
      link: "",
      linkLabel: "Visit website",
      linkLabelOpposite: "Voir le site web",
    },
    "projects.eolith": {
      title: "Co-founder, Eolith, 2022-2024",
      titleOpposite: "Cofondateur, Eolith, 2022–2024",
      description:
        "I co-curated and organized a series of off-site art exhibitions. The exhibitions were site-specific, which served as the inspiration for our curation and artists we asked to participate. Our goal was to treat the artworks as artifacts, inviting interpretation through the lens of the specific locations. We usually planned our exhibitions around the themes of prehistory, archaeology, forgotten science and time.\n\nWe have since retired this project in favour of our gallery, Ermitage 308.",
      descriptionOpposite:
        "J'ai coorganisé et assuré le commissariat d'une série d'expositions d'art présentées dans différents lieux.\n\nLes expositions étaient conçues spécialement pour chaque lieu. Les espaces eux-mêmes inspiraient notre sélection des œuvres et des artistes invités.\n\nNotre objectif était de présenter les œuvres comme des artéfacts et d'inviter le public à les interpréter en relation avec les lieux où elles étaient présentées.\n\nNos expositions exploraient souvent des thèmes comme la préhistoire, l'archéologie, les sciences oubliées et le temps.\n\nNous avons depuis terminé ce projet pour nous concentrer sur notre galerie, Ermitage 308.",
      link: "",
      linkLabel: "View documentation",
      linkLabelOpposite: "Voir la documentation",
    },
    "projects.ermitage": {
      title: "Co-founder, Ermitage 308, 2025-ongoing",
      titleOpposite: "Cofondateur, Ermitage 308, 2025–aujourd'hui",
      description:
        "Ermitage 308 is an artist-run gallery based in Montréal, QC. Through this space, we curate shows that we want to see, with a focus on our immediate artistic community in and around Montréal. Occasionally, we host events such as film nights and book launches. The project is ongoing.",
      descriptionOpposite:
        "Ermitage 308 est une galerie gérée par des artistes à Montréal, au Québec.\n\nÀ travers cet espace, nous organisons les expositions que nous aimerions voir, avec une attention particulière à notre communauté artistique immédiate à Montréal et dans les environs.\n\nNous organisons aussi parfois d'autres événements, comme des soirées de cinéma et des lancements de livres. Le projet est toujours actif.",
      link: "",
      linkLabel: "Visit website",
      linkLabelOpposite: "Voir le site web",
    },
    "projects.setTechnician": {
      title: "Art Department Technician & Spatial Installation",
      titleOpposite: "Technicien au département artistique et installation dans l'espace",
      description:
        "For the past year, I have worked as an Art Department Technician for various production designers and studios such as Studio Bonnet, Studio TB, Cloé Fortier, and Connor Olthuis. I have worked on commercial projects for various large Canadian and American clients.\n\nMy main responsibility has been to build and decorate sets to implement the production designer's concept, while learning how to balance tight deadlines, deciding when to adjust for client feedback and when to stand by the vision. As these projects move very quickly, creative problem solving is key to make sure the production flows smoothly.\n\nHere is a list of some clients and projects that I have worked on:",
      descriptionOpposite:
        "Depuis la dernière année, je travaille comme technicien au département artistique pour différents designers de production et studios, notamment Studio Bonnet, Studio TB, Cloé Fortier et Connor Olthuis.\n\nJ'ai travaillé sur des projets publicitaires pour plusieurs grandes entreprises canadiennes et américaines.\nMa principale responsabilité est de construire et de décorer des décors afin de réaliser le concept du designer de production.\n\nCe travail m'a aussi appris à travailler avec des délais très courts, à décider quand adapter un projet selon les commentaires du client et quand conserver la direction créative originale.\n\nComme ces projets avancent très rapidement, la résolution créative de problèmes est essentielle pour assurer le bon déroulement de la production.\nVoici quelques clients et projets sur lesquels j'ai travaillé :",
      link: "",
      linkLabel: "Visit website",
      linkLabelOpposite: "Voir le site web",
    },
  },
  fr: {
    "code.maggiePeach": {
      title: "Site web portfolio de Maggie Peach",
      titleOpposite: "Maggie Peach Portfolio Website",
      description:
        "Site web pour l'artiste et performeuse Maggie Peach, réalisé avec le designer principal Joel Lee.\n\nEn plus d'être le développeur principal du projet, j'ai participé à la réflexion sur le design afin de transformer les maquettes en un site facile à utiliser, avec une structure claire et cohérente. Le site a été développé avec Next.js et le CMS Sanity.",
      descriptionOpposite:
        "Website for artist and performer Maggie Peach, alongside the principal designer Joel Lee.\n\nAlong with being the primary developer, I was consulted to guide the designs into a useable website with cohesive architecture. The website was created using Next.js and Sanity CMS.",
      link: "",
      linkLabel: "Voir le site web",
      linkLabelOpposite: "Visit website",
    },
    "code.ette": {
      title: "Portfolio « Ette » :",
      titleOpposite: "Ette Designer Portfolio",
      description:
        "Site portfolio pour Kate Richard, designer de mobilier et d'intérieur basée à Toronto.\n\nJ'étais le principal designer UI/UX et développeur du projet. Le site utilise GatsbyJS et le CMS Contentful.\n\nLa fonction principale du site est une galerie avec défilement infini et chargement progressif des images. Cette solution permet de présenter un grand nombre d'images tout en gardant une navigation fluide.",
      descriptionOpposite:
        "Portfolio site for Toronto-based furniture and interior designer Kate Richard.\n\nI was the primary UI/UX designer and developer. The site uses GatsbyJS and Contentful CMS. The primary feature is an infinite-scrolling, lazy-loaded gallery to handle a large volume of images with smooth performance.",
      link: "",
      linkLabel: "Voir le site web",
      linkLabelOpposite: "Visit website",
    },
    "code.playWorkGroup": {
      title: "Sites web pour Novos Growth Partners et Apollo Care",
      titleOpposite: "Novos Growth Partners & Apollo Care Websites",
      description:
        "Développeur web sur plusieurs projets réalisés pour l'agence créative PlayWorkGroup, basée à New York. Parmi les clients : Novos Growth Partners et sa filiale Apollo Care.\n\nJ'ai développé ces sites avec Next.js et Contentful. Mon travail était centré sur un design simple et professionnel, une bonne organisation du contenu et une structure adaptée au référencement SEO.",
      descriptionOpposite:
        "Web developer on several contracted projects for New York City creative agency PlayWorkGroup. Select clients include: Novos Growth Partners and its subsidiary Apollo Care.\n\nI developed these sites using Next.js and Contentful. My focus was on clean, professional design with a strong content flow, and an emphasis on SEO-friendly architecture.",
      link: "",
      linkLabel: "Voir le site web",
      linkLabelOpposite: "Visit website",
    },
    "code.danseCite": {
      title: "Nouveau site et nouvelle image pour les 40 ans de Danse-Cité",
      titleOpposite: "Danse-Cité 40th Anniversary Rebrand and Website",
      description:
        "Nouveau design et nouveau site web pour la compagnie de danse contemporaine Danse-Cité, pour ses 40 ans. Le projet inclut une nouvelle image de marque et un nouveau site internet.\n\nJ'ai développé le site avec Next.js et Contentful CMS. Le design vient de Steven Steffen. J'ai fait le design web/UI avec une autre personne. Le site est moderne et facile à utiliser. Il y a une archive de 40 ans de spectacles, qu'on peut trier. J'ai aussi montré à l'équipe comment gérer le contenu elle-même.",
      descriptionOpposite:
        "Full visual and website redesign for contemporary dance company Danse-Cité's 40th anniversary, including updated branding, visual language, and digital presence.\n\nDeveloped the site using Next.js and Contentful CMS, based on branding by Steven Steffen and web/UI design created collaboratively as a duo. Built a modern, highly navigable experience featuring a sortable archive of 40 years of performances, and trained the team to manage content independently.",
      link: "",
      linkLabel: "Voir le site web",
      linkLabelOpposite: "Visit website",
    },
    "code.materialMatters": {
      title: "Material Matters - Université Emily Carr d'art et de design",
      titleOpposite: "Material Matters - Emily Carr University of Art and Design",
      description:
        "Site web pour Material Matters, un projet de recherche de l'Emily Carr University of Art and Design.\n\nPour ce projet, j'ai participé au design UI/UX et j'ai développé le site avec GatsbyJS et le CMS Contentful. La page d'accueil utilise une mise en page qui peut être triée et qui contient des espaces vides placés de façon aléatoire au chargement de la page. Cela permet de casser la régularité visuelle de la mise en page.\nEn plus du développement, j'ai formé l'équipe pour qu'elle puisse gérer le contenu du site de façon autonome.\n\nLe site n'est plus actif depuis 2025, mais il est toujours possible de le consulter.",
      descriptionOpposite:
        "Website for Material Matters, a research initiative at Emily Carr University of Art and Design.\n\nFor this project, I consulted on the UI/UX design and developed the site with GatsbyJS and Contentful CMS. This site features a sortable homepage layout with intentional blank space, inserted randomly at page load, to break up visual conformity. Alongside development, I trained the team to manage content independently.\n\nThis website is no longer active after 2025, but still available to view.",
      link: "",
      linkLabel: "Voir le site web",
      linkLabelOpposite: "Visit website",
    },
    "projects.artwork": {
      title: "Pratique artistique",
      titleOpposite: "Art Practice",
      description:
        "Depuis la fin de mes études en arts en 2017, je maintiens une petite pratique artistique, principalement en peinture et en dessin au fusain.\n\nJ'ai présenté mon travail dans des expositions individuelles et collectives, au Canada et à l'étranger, notamment à Winnipeg, Glasgow et Shanghai.\n\nVous trouverez ci-dessous une petite sélection de mes œuvres.",
      descriptionOpposite:
        "Since graduating from art school in 2017, I maintain a small artistic practice, primarily of paintings and charcoal drawings.\n\nI have exhibited my artwork in solo and group exhibitions both locally and abroad, in places such as Winnipeg, Glasgow, and Shanghai. Below is a small selection of my artwork.",
      link: "",
      linkLabel: "Voir le site web",
      linkLabelOpposite: "Visit website",
    },
    "projects.eolith": {
      title: "Cofondateur, Eolith, 2022–2024",
      titleOpposite: "Co-founder, Eolith, 2022-2024",
      description:
        "J'ai coorganisé et assuré le commissariat d'une série d'expositions d'art présentées dans différents lieux.\n\nLes expositions étaient conçues spécialement pour chaque lieu. Les espaces eux-mêmes inspiraient notre sélection des œuvres et des artistes invités.\n\nNotre objectif était de présenter les œuvres comme des artéfacts et d'inviter le public à les interpréter en relation avec les lieux où elles étaient présentées.\n\nNos expositions exploraient souvent des thèmes comme la préhistoire, l'archéologie, les sciences oubliées et le temps.\n\nNous avons depuis terminé ce projet pour nous concentrer sur notre galerie, Ermitage 308.",
      descriptionOpposite:
        "I co-curated and organized a series of off-site art exhibitions. The exhibitions were site-specific, which served as the inspiration for our curation and artists we asked to participate. Our goal was to treat the artworks as artifacts, inviting interpretation through the lens of the specific locations. We usually planned our exhibitions around the themes of prehistory, archaeology, forgotten science and time.\n\nWe have since retired this project in favour of our gallery, Ermitage 308.",
      link: "",
      linkLabel: "Voir la documentation",
      linkLabelOpposite: "View documentation",
    },
    "projects.ermitage": {
      title: "Cofondateur, Ermitage 308, 2025–aujourd'hui",
      titleOpposite: "Co-founder, Ermitage 308, 2025-ongoing",
      description:
        "Ermitage 308 est une galerie gérée par des artistes à Montréal, au Québec.\n\nÀ travers cet espace, nous organisons les expositions que nous aimerions voir, avec une attention particulière à notre communauté artistique immédiate à Montréal et dans les environs.\n\nNous organisons aussi parfois d'autres événements, comme des soirées de cinéma et des lancements de livres. Le projet est toujours actif.",
      descriptionOpposite:
        "Ermitage 308 is an artist-run gallery based in Montréal, QC. Through this space, we curate shows that we want to see, with a focus on our immediate artistic community in and around Montréal. Occasionally, we host events such as film nights and book launches. The project is ongoing.",
      link: "",
      linkLabel: "Voir le site web",
      linkLabelOpposite: "Visit website",
    },
    "projects.setTechnician": {
      title: "Technicien au département artistique et installation dans l'espace",
      titleOpposite: "Art Department Technician & Spatial Installation",
      description:
        "Depuis la dernière année, je travaille comme technicien au département artistique pour différents designers de production et studios, notamment Studio Bonnet, Studio TB, Cloé Fortier et Connor Olthuis.\n\nJ'ai travaillé sur des projets publicitaires pour plusieurs grandes entreprises canadiennes et américaines.\nMa principale responsabilité est de construire et de décorer des décors afin de réaliser le concept du designer de production.\n\nCe travail m'a aussi appris à travailler avec des délais très courts, à décider quand adapter un projet selon les commentaires du client et quand conserver la direction créative originale.\n\nComme ces projets avancent très rapidement, la résolution créative de problèmes est essentielle pour assurer le bon déroulement de la production.\nVoici quelques clients et projets sur lesquels j'ai travaillé :",
      descriptionOpposite:
        "For the past year, I have worked as an Art Department Technician for various production designers and studios such as Studio Bonnet, Studio TB, Cloé Fortier, and Connor Olthuis. I have worked on commercial projects for various large Canadian and American clients.\n\nMy main responsibility has been to build and decorate sets to implement the production designer's concept, while learning how to balance tight deadlines, deciding when to adjust for client feedback and when to stand by the vision. As these projects move very quickly, creative problem solving is key to make sure the production flows smoothly.\n\nHere is a list of some clients and projects that I have worked on:",
      link: "",
      linkLabel: "Voir le site web",
      linkLabelOpposite: "Visit website",
    },
  },
} satisfies Record<Locale, Record<string, ProjectEntry>>;

export type TranslationKey = keyof (typeof ui)["en"];
export type ProjectKey = keyof (typeof projects)["en"];

export function translate(locale: Locale, key: TranslationKey): string {
  return ui[locale][key] ?? ui.en[key] ?? key;
}

export function getProject(locale: Locale, key: ProjectKey): ProjectEntry {
  return projects[locale][key] ?? projects.en[key];
}