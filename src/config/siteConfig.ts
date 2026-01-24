export const siteConfig = {
  // IDENTITÉ
  fullName: "Cindy Lamon",
  title: "Professionnelle Dynamique & Polyvalente",
  tagline: "Dynamique • Rigoureuse • Polyvalente",
  location: "Saint-Thélo (22460), Côtes-d'Armor",
  
  // CONTACT
  contact: {
    phone: "06 69 02 22 92",
    email: "cindylamon22@gmail.com",
    address: {
      street: "98 La motte d'Onon",
      city: "22460 Saint-Thélo",
      region: "Côtes-d'Armor, Bretagne"
    }
  },

  // PROFIL
  profile: {
    title: "À propos",
    description: "Professionnelle polyvalente avec plus de 10 ans d'expérience dans divers secteurs (agroalimentaire, logistique, vente, digital). Titulaire du permis C, je combine rigueur opérationnelle et créativité digitale. Reconnue pour mon dynamisme, ma ponctualité et ma capacité d'adaptation.",
    qualities: [
      { text: "Ponctuelle", icon: "⏰" },
      { text: "Dynamique", icon: "⚡" },
      { text: "Rigoureuse", icon: "✓" },
      { text: "Polyvalente", icon: "🎯" }
    ]
  },

  // EXPÉRIENCE PROFESSIONNELLE
  experience: {
    title: "Expérience Professionnelle",
    jobs: [
      {
        period: "2025",
        title: "Livreuse en Blanchisserie",
        company: "Secteur Blanchisserie",
        location: "Loudéac",
        current: false,
        missions: [
          "Collecte, livraison et remise du linge auprès des particuliers et professionnels",
          "Organisation et planification de la tournée quotidienne",
          "Vérification de la conformité des articles (quantité, état)",
          "Relation clientèle : accueil et remise des articles"
        ],
        skills: ["Logistique", "Relation client", "Organisation", "Conduite VL"]
      },
      {
        period: "2024 - 2025",
        title: "Créatrice de Contenu Digital",
        company: "Freelance",
        location: "Remote",
        current: false,
        missions: [
          "Création de posts à destination de professionnels",
          "Rédaction de contenus engageants",
          "Conception de visuels attractifs",
          "Gestion de publications sur LinkedIn, Facebook, etc.",
          "Stratégie de communication digitale"
        ],
        skills: ["Rédaction", "Design", "Réseaux sociaux", "Communication", "Marketing digital"]
      },
      {
        period: "2019 - 2021",
        title: "Entrepreneuse",
        company: "Ypsilon",
        location: "Loudéac",
        missions: [
          "Vente de produits de tiers",
          "Gestion d'appareils de distribution automatique",
          "Diffusion d'annonces publicitaires",
          "Gestion administrative et commerciale"
        ],
        skills: ["Entrepreneuriat", "Commerce", "Gestion", "Marketing"]
      },
      {
        period: "2018",
        title: "Conseillère en Vente à Domicile",
        company: "L&R",
        location: "Secteur Loudéac",
        missions: [
          "Promotion d'articles de bien-être et de santé au naturel",
          "Présentation produits auprès des clients",
          "Conseil personnalisé",
          "Développement de portefeuille clients"
        ],
        skills: ["Vente", "Conseil", "Présentation", "Relation client"]
      },
      {
        period: "2016 - 2017",
        title: "Livreuse de Journaux",
        company: "Ouest France",
        location: "Loudéac",
        missions: [
          "Organisation et planification de la livraison (VL) des journaux",
          "Gestion d'un secteur défini",
          "Respect des horaires de distribution",
          "Conduite en autonomie"
        ],
        skills: ["Logistique", "Organisation", "Conduite", "Autonomie"]
      },
      {
        period: "2012 - 2015",
        title: "Ouvrière Agroalimentaire",
        company: "Secteur Agroalimentaire",
        location: "Loudéac",
        missions: [
          "Respect des consignes de sécurité et d'hygiène",
          "Préparation et alimentation en matières premières",
          "Contrôle qualité des produits",
          "Travail en équipe sur ligne de production"
        ],
        skills: ["Qualité", "Hygiène", "Production", "Rigueur"]
      }
    ]
  },

  // FORMATION
  education: {
    title: "Formation",
    diplomas: [
      {
        period: "04/2023 - 09/2023",
        title: "Permis C - Conductrice Poids Lourds",
        school: "AFPA Loudéac",
        description: "Obtention du permis C pour exercer en tant que conductrice poids lourds",
        icon: "🚚"
      }
    ]
  },

  // COMPÉTENCES
  skills: {
    title: "Compétences",
    categories: [
      {
        title: "Logistique & Transport",
        icon: "🚚",
        color: "from-blue-500 to-cyan-600",
        items: [
          "Permis C (Poids lourd)",
          "Permis B (VL)",
          "Organisation de tournées",
          "Gestion de livraisons",
          "Relation client en livraison"
        ]
      },
      {
        title: "Digital & Communication",
        icon: "💻",
        color: "from-purple-500 to-pink-600",
        items: [
          "Création de contenu",
          "Rédaction web",
          "Design de visuels",
          "Gestion réseaux sociaux",
          "Communication digitale"
        ]
      },
      {
        title: "Commerce & Vente",
        icon: "💼",
        color: "from-orange-500 to-red-600",
        items: [
          "Vente conseil",
          "Relation client",
          "Développement commercial",
          "Présentation produits",
          "Gestion entrepreneuriale"
        ]
      },
      {
        title: "Qualités Personnelles",
        icon: "⭐",
        color: "from-green-500 to-emerald-600",
        items: [
          "Ponctualité",
          "Dynamisme",
          "Rigueur",
          "Polyvalence",
          "Autonomie"
        ]
      }
    ]
  },

  // SECTEURS D'ACTIVITÉ
  sectors: {
    title: "Secteurs d'expérience",
    list: [
      { name: "Agroalimentaire", icon: "🏭", years: "3 ans" },
      { name: "Logistique & Livraison", icon: "🚚", years: "4+ ans" },
      { name: "Commerce & Vente", icon: "🛍️", years: "3 ans" },
      { name: "Digital & Marketing", icon: "💻", years: "1 an" },
      { name: "Entrepreneuriat", icon: "🚀", years: "2 ans" }
    ]
  },

  // ATOUTS
  strengths: {
    title: "Mes atouts",
    items: [
      {
        icon: "🎯",
        title: "Polyvalence",
        description: "Expérience variée dans de multiples secteurs"
      },
      {
        icon: "⚡",
        title: "Dynamisme",
        description: "Énergie et motivation au quotidien"
      },
      {
        icon: "✓",
        title: "Rigueur",
        description: "Respect des procédures et de la qualité"
      },
      {
        icon: "⏰",
        title: "Ponctualité",
        description: "Fiabilité et respect des horaires"
      },
      {
        icon: "🤝",
        title: "Relationnel",
        description: "Excellente communication client"
      },
      {
        icon: "🚗",
        title: "Mobilité",
        description: "Permis B et C - Véhicule personnel"
      }
    ]
  },

  // DISPONIBILITÉ
  availability: {
    title: "Disponibilité",
    status: "Disponible immédiatement",
    details: [
      "Temps plein ou temps partiel",
      "Horaires flexibles",
      "Mobilité sur le secteur de Loudéac",
      "Démarrage immédiat possible"
    ]
  },

  // LANGUES
  languages: [
    { name: "Français", level: "Langue maternelle", icon: "🇫🇷" }
  ],

  // CENTRES D'INTÉRÊT
  interests: {
    title: "Centres d'intérêt",
    items: [
      { name: "Communication digitale", icon: "💻" },
      { name: "Entrepreneuriat", icon: "🚀" },
      { name: "Bien-être naturel", icon: "🌿" }
    ]
  },

  // CTA
  cta: {
    title: "Intéressé(e) par mon profil ?",
    subtitle: "N'hésitez pas à me contacter",
    primaryButton: "Me contacter",
    secondaryButton: "Télécharger mon CV"
  },

  // SEO
  seo: {
    title: "Cindy Lamon - CV en ligne | Professionnelle Dynamique & Polyvalente",
    description: "CV en ligne de Cindy Lamon : professionnelle dynamique et polyvalente avec expérience en logistique, digital, vente et agroalimentaire. Permis C. Disponible secteur Loudéac (22).",
    keywords: "CV Cindy Lamon, conductrice poids lourd, logistique, livraison, Loudéac, permis C, polyvalente, dynamique, rigoureuse"
  },

  // THÈME
  theme: {
    primary: "purple", // Professionnel et créatif
    secondary: "cyan", // Moderne et tech
    accent: "orange", // Dynamique
    mode: "light" // Mode clair pour CV plus classique et lisible
  }
};