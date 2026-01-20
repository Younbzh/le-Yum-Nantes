// 📁 src/config/siteConfig.ts - LE CONTAINER BORDEAUX
export const siteConfig = {
  clubName: "Le Container",
  city: "Bordeaux",
  positioning: "Sauna pour tous les genres et toutes les sexualités • Tolérance et Respect",
  accentMode: "dark" as "dark" | "light",

  tone: {
    keywords: [
      "inclusif",
      "tolérant",
      "respectueux",
      "diversifié",
      "accueillant",
      "bienveillant",
      "ouvert"
    ],
    promise:
      "Au Container, tout est question de Tolérance et de Respect. Notre clientèle bisexuelle, gay, lesbienne, pansexuelle, cisgenre, transgenre, non binaire, travestie et/ou kinky trouve son bonheur dans nos 300m² d'aire de jeu et de détente.",
  },

  hero: {
    title: "Bienvenue au Container",
    subtitle: "Sauna libertin à Bordeaux",
    tagline: "\"Chez nous tout est question de Tolérance et de Respect\"",
    description: "Frédéric et Amandine vous accueillent dans un espace ouvert à tous les genres et toutes les sexualités",
    cta: "Découvrir Le Container"
  },

  audience: {
    primary: "Tous genres et toutes sexualités",
    secondary: "Bisexuels, gay, lesbiennes, pansexuels",
    tertiary: "Cisgenres, transgenres, non-binaires, travestis, kinky",
    philosophy: "Le Container est un sauna pour tous les genres et toutes les sexualités. Que vous soyez novice ou expérimenté•e, vous aimerez le Container dans toute sa différence et c'est vous qui en ferez son succès."
  },

  spaces: [
    {
      title: "Espace Balnéo",
      emoji: "🌊",
      description: "Hammam spacieux et deux jacuzzis communicants",
      details: "Un grand hammam et 2 jacuzzis qui communiquent par une plage agréable pour une détente absolue"
    },
    {
      title: "Piste de Danse",
      emoji: "💃",
      description: "Dancefloor avec barre de Pole Dance",
      details: "Une piste de danse animée avec barre de Pole Dance pour des soirées enflammées"
    },
    {
      title: "Espace BDSM",
      emoji: "⛓️",
      description: "Un espace dédié aux pratiques BDSM",
      details: "Un espace équipé pour les amateurs de pratiques kinky dans le respect et la sécurité"
    },
    {
      title: "Cabines Privées",
      emoji: "🚪",
      description: "Une douzaine de cabines et espaces de jeux thématiques",
      details: "Cabines au rez-de-chaussée et à l'étage avec prévention et protection maximales"
    },
    {
      title: "Bar Convivial",
      emoji: "☕",
      description: "Grand bar central avec espace salon",
      details: "Café, eau et serviettes fournis. Espace convivial pour faire connaissance"
    },
    {
      title: "Fumoir",
      emoji: "🚬",
      description: "Grand fumoir spacieux",
      details: "Un espace fumeur confortable pour les moments de détente"
    }
  ],

  values: [
    { text: "Ouvert à tous•tes", icon: "🏳️‍🌈" },
    { text: "Tolérance & Respect", icon: "💖" },
    { text: "Prévention maximale", icon: "🛡️" },
    { text: "Accès facile tram", icon: "🚊" },
    { text: "300m² sur 2 niveaux", icon: "🏢" }
  ],

  dressCode: {
    ladies: "Pas de dress code strict - Confort et bien-être avant tout",
    gentlemen: "Serviette fournie - Ambiance décontractée",
    spirit: "Au Container, nous privilégions la tolérance, le respect et l'ouverture d'esprit. L'important est que chacun•e se sente bien."
  },

  events: [
    {
      title: "Lundi à Jeudi",
      schedule: "13h - 00h",
      description: "Ouvert à tous les genres et orientations",
      atmosphere: "Ambiance détendue en semaine, idéal pour découvrir les lieux"
    },
    {
      title: "Jeudi Soir",
      schedule: "Sur inscription",
      description: "Soirées thématiques spéciales",
      atmosphere: "Consultez Instagram ou Facebook pour les thématiques du moment"
    },
    {
      title: "Vendredi & Samedi",
      schedule: "14h - 02h",
      description: "Week-end festif et animé",
      atmosphere: "Événements thématiques la plupart des week-ends"
    },
    {
      title: "Dimanche",
      schedule: "14h - 00h",
      description: "Fin de week-end en douceur",
      atmosphere: "Parfait pour prolonger le plaisir du week-end"
    }
  ],

  pricing: {
    couples: [
      { label: "Couples mixtes (cis ou trans)", price: "25€", note: "Homme-femme" }
    ],
    singles: [
      { label: "Hommes", price: "25€", note: "22€ avant 14h du lundi au jeudi" },
      { label: "Femmes & travestis", price: "12€", note: "" }
    ],
    includes: "Mercredis : tarif unique non-genré à 20€ • Café, eau et serviettes fournis"
  },

  contact: {
    address: {
      street: "69 cours Le Rouzic",
      city: "33100 Bordeaux",
      region: "Quartier Benauge",
      access: "Tram ligne A - Arrêt Jardin Botanique ou Thiers Benauge"
    },
    phone: "05 48 35 65 78",
    email: "contact@lecontainer.fr",
    website: "www.lecontainer.fr",
    hours: [
      { day: "Lundi au Jeudi", time: "13h - 00h" },
      { day: "Jeudi soir", time: "Soirées sur inscription" },
      { day: "Vendredi & Samedi", time: "14h - 02h" },
      { day: "Dimanche", time: "14h - 00h" }
    ],
    parking: "Parking gratuit à proximité dans un quartier calme"
  },

  highlights: [
    "300m² d'aire de jeu et de détente sur deux niveaux",
    "Ouvert à tous les genres et toutes les sexualités",
    "Espace BDSM dédié aux pratiques kinky",
    "Accès facile en tram (ligne A)",
    "Événements thématiques réguliers",
    "Prévention et protection maximales",
    "Entrée discrète par porte cochère et sas sécurisé",
    "Équipe accueillante dirigée par Frédéric et Amandine"
  ],

  features: [
    "Hammam spacieux",
    "2 jacuzzis communicants",
    "Piste de danse avec barre de Pole Dance",
    "Grand bar convivial",
    "Espace fumeur confortable",
    "Cabines de jeux thématiques",
    "Espace BDSM équipé",
    "2 vestiaires confortables",
    "Douches et WC"
  ],

  strategy: {
    goal:
      "Mettre en avant l'ouverture et l'inclusivité du Container, un espace où tous les genres et toutes les sexualités sont les bienvenus dans une ambiance de tolérance et de respect.",
    explanation:
      "Une présentation moderne et accueillante qui reflète les valeurs d'inclusivité du Container et attire une clientèle diverse en quête d'un lieu bienveillant et respectueux.",
  },

  disclaimer:
    "Maquette illustrative non contractuelle, destinée à montrer le potentiel d'une version moderne du site du Container.",
};