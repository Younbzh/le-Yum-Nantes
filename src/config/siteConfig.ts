// 📁 src/config/siteConfig.ts - LE LIBERTY STATION
export const siteConfig = {
  clubName: "Le Liberty Station",
  city: "Prinquiau",
  positioning: "Club libertin d'exception — Parité, élégance et qualité depuis près de 20 ans",
  accentMode: "dark" as "dark" | "light",

  tone: {
    keywords: [
      "élégant",
      "raffiné",
      "équilibré",
      "exigeant",
      "qualitatif",
      "prestigieux",
      "respectueux"
    ],
    promise:
      "Entre Nantes et Saint-Nazaire, un établissement qui privilégie la qualité à la quantité, avec une attention permanente à la parité homme-femme et au confort de sa clientèle.",
  },

  hero: {
    title: "Bienvenue au Liberty Station",
    subtitle: "Club libertin d'exception à Prinquiau",
    tagline: "\"Vous ne reviendrez pas chez nous par hasard !\"",
    description: "Depuis près de 20 ans, Isa et Jean-Louis ont créé l'un des meilleurs établissements libertins de France",
    cta: "Découvrir le Liberty"
  },

  audience: {
    primary: "Couples",
    secondary: "Dames seules",
    tertiary: "Hommes seuls (créneaux sélectionnés)",
    philosophy: "Au Liberty, nous privilégions toujours l'équilibre et la parité homme-femme lors de nos soirées mixtes, au détriment de la clientèle de masse non filtrée. Attirer la quantité au détriment de la qualité ne correspond pas à l'image que nous voulons donner de notre établissement."
  },

  spaces: [
    {
      title: "Liberty Beach",
      emoji: "🌊",
      description: "Espace balnéo complet avec hammam, sauna et jacuzzis",
      details: "Deux bains à bulles dont un pouvant accueillir plusieurs personnes, un sauna spacieux et un magnifique hammam pour une détente absolue"
    },
    {
      title: "Le Dancefloor",
      emoji: "✨",
      description: "Piste de danse animée pour des soirées enflammées",
      details: "Ambiance hot and sexy avec DJ et thématiques régulières"
    },
    {
      title: "Le Kokinou",
      emoji: "🍽️",
      description: "Le restaurant libertin",
      details: "Un concept unique alliant gastronomie et sensualité"
    },
    {
      title: "Salons Câlins",
      emoji: "🛋️",
      description: "Multiples espaces intimistes réaménagés régulièrement",
      details: "Des alcôves décorées avec soin pour vos moments de complicité"
    },
    {
      title: "Bar Central",
      emoji: "🍸",
      description: "Point de ralliement convivial",
      details: "L'art du cocktail et des échanges subtils dans une ambiance feutrée"
    },
    {
      title: "Vestiaires & Douches",
      emoji: "🚿",
      description: "Installations impeccables",
      details: "Propreté irréprochable, l'engagement du Liberty"
    }
  ],

  values: [
    { text: "Parité H/F respectée", icon: "⚖️" },
    { text: "Qualité avant quantité", icon: "💎" },
    { text: "Propreté irréprochable", icon: "✨" },
    { text: "Dress code strict", icon: "👔" },
    { text: "20 ans d'expérience", icon: "🏆" }
  ],

  dressCode: {
    ladies: "Tenue sexy exigée (pantalons strictement interdits)",
    gentlemen: "Tenue de ville obligatoire (jeans, baskets, etc. interdits)",
    spirit: "Au Liberty, nous sommes toujours séduits par l'élégance, le savoir-vivre et le respect des autres et de nos installations."
  },

  events: [
    {
      title: "Soirées Mixtes en Journée",
      schedule: "Lundi 15h-19h, Jeudi 15h-19h, Dimanche 15h-20h",
      description: "Accès espace balnéo dans une ambiance détendue",
      atmosphere: "Idéal pour une découverte en douceur"
    },
    {
      title: "Soirées Mixtes du Vendredi",
      schedule: "Vendredi 21h-3h",
      description: "Couples, dames seules et messieurs sélectionnés",
      atmosphere: "Parité rigoureusement maintenue pour une soirée équilibrée"
    },
    {
      title: "Soirées Couples du Samedi",
      schedule: "Samedi 22h-5h",
      description: "Réservé exclusivement aux couples et dames seules",
      atmosphere: "L'élite de nos soirées dans une ambiance ultra-raffinée"
    },
    {
      title: "Jeudi Soir Mixte",
      schedule: "Jeudi 15h-23h",
      description: "Entre journée détente et soirée festive",
      atmosphere: "Une soirée qui démarre en douceur pour finir en apothéose"
    }
  ],

  pricing: {
    journee: [
      { label: "Hommes seuls", price: "30€", note: "Lundi et Jeudi après-midi" },
      { label: "Couples", price: "20€", note: "Journée" },
      { label: "Femmes seules", price: "Gratuit", note: "Toutes journées" }
    ],
    vendredi: [
      { label: "Hommes seuls", price: "40€", note: "Sélection à l'entrée" },
      { label: "Couples", price: "20€", note: "" },
      { label: "Femmes seules", price: "5€", note: "" }
    ],
    samedi: [
      { label: "Couples", price: "45-50€", note: "Avec conso par personne" },
      { label: "Femmes seules", price: "10€", note: "" }
    ],
    includes: "Tarifs incluant une consommation par personne • Vestiaire et serviettes fournis"
  },

  contact: {
    address: {
      street: "Les Basses Landes",
      city: "44260 Prinquiau",
      region: "Entre Nantes et Saint-Nazaire",
      access: "Facile d'accès via la 4 voies"
    },
    phone: "02 40 56 79 01",
    email: "isaetluigi@wanadoo.fr",
    website: "www.lelibertystation.fr",
    hours: [
      { day: "Lundi", time: "15h - 19h (Mixte)" },
      { day: "Mardi & Mercredi", time: "Fermé" },
      { day: "Jeudi", time: "15h - 23h (Mixte)" },
      { day: "Vendredi", time: "21h - 3h (Mixte)" },
      { day: "Samedi", time: "22h - 5h (Couples uniquement)" },
      { day: "Dimanche", time: "15h - 20h (Mixte)" }
    ],
    parking: "Parking privé et sécurisé sur place"
  },

  highlights: [
    "Près de 20 ans d'expérience au service de la clientèle libertine",
    "Un des meilleurs établissements libertins de France",
    "Transformations et aménagements constants pour toujours plus de confort",
    "Équipe attentive dirigée par Isa et Jean-Louis",
    "Propreté irréprochable de tous les espaces",
    "Parité homme-femme rigoureusement respectée",
    "Visite virtuelle 360° disponible sur le site"
  ],

  features: [
    "Liberty Beach : espace balnéo complet",
    "Le Kokinou : restaurant libertin unique",
    "Multiples salons câlins thématiques",
    "Dancefloor avec DJ",
    "Bar central convivial",
    "Carte de membre disponible",
    "Livre d'or et suggestions en ligne",
    "Soirées thématiques régulières"
  ],

  strategy: {
    goal:
      "Renforcer l'image d'excellence et d'exigence du Liberty Station, tout en mettant en avant ses 20 ans d'expérience, sa philosophie de qualité et ses installations exceptionnelles.",
    explanation:
      "Une présentation visuelle moderne permet de refléter la vraie qualité de l'établissement et d'attirer une clientèle en phase avec les valeurs du club : élégance, respect et raffinement.",
  },

  disclaimer:
    "Maquette illustrative non contractuelle, destinée à montrer le potentiel d'une version moderne du site du Liberty Station.",
};