// 📁 src/config/siteConfig.ts - S64 SAUNA BAYONNE
export const siteConfig = {
  clubName: "S64 Sauna",
  city: "Bayonne",
  positioning: "Le Sauna du Pays Basque • Gay, Bi & Mixte sur 600 m²",
  accentMode: "dark" as "dark" | "light",

  tone: {
    keywords: [
      "ouvert",
      "inclusif",
      "accueillant",
      "propre",
      "varié",
      "festif",
      "tolérant"
    ],
    promise:
      "Le plus grand sauna du Pays Basque depuis plus de 10 ans. Un espace de près de 600 m² entièrement climatisé, élégant et propre, où chacun peut profiter d'un moment de détente et de plaisir dans le respect et la convivialité.",
  },

  hero: {
    title: "Bienvenue au S64",
    subtitle: "Le Sauna du Pays Basque",
    tagline: "\"600 m² de détente et de plaisir à Bayonne\"",
    description: "Le seul sauna de Bayonne et du Pays Basque avec une programmation complète : Gay, Bi et Mixte",
    cta: "Découvrir le S64"
  },

  audience: {
    primary: "Public Gay",
    secondary: "Couples mixtes et bi",
    tertiary: "Toutes orientations selon programmation",
    philosophy: "Au S64, nous proposons une programmation diversifiée pour accueillir tous les publics. Que vous soyez gay, bi, ou en couple mixte, vous trouverez des journées dédiées à vos envies. Notre tarif est le même pour tous, sans discrimination. La bisexualité masculine est omniprésente lors des soirées mixtes, une sexualité open est donc vivement conseillée."
  },

  spaces: [
    {
      title: "Jacuzzi",
      emoji: "🌊",
      description: "Bain bouillonnant spacieux",
      details: "Un grand bain à bulles où vous pourrez vous détendre et faire des rencontres dans une ambiance chaleureuse"
    },
    {
      title: "Sauna Finlandais",
      emoji: "🔥",
      description: "Chaleur sèche traditionnelle",
      details: "Un sauna maintenu à la température parfaite pour une détente profonde et des moments intenses"
    },
    {
      title: "Hammam",
      emoji: "💨",
      description: "Vapeur et chaleur humide",
      details: "Espace hammam pour une purification complète dans une atmosphère sensuelle"
    },
    {
      title: "Cabines Privées",
      emoji: "🚪",
      description: "Multiples espaces de jeux",
      details: "Cabines sobrement décorées avec gel et préservatifs à disposition. Propreté irréprochable"
    },
    {
      title: "Douches Premium",
      emoji: "🚿",
      description: "Espace douches moderne",
      details: "Douches spacieuses incluant une cabine pour douche intime comme on aimerait en voir partout"
    },
    {
      title: "Salles de Repos",
      emoji: "🛋️",
      description: "Zones de détente",
      details: "Nombreuses salles de repos climatisées pour récupérer entre deux moments chauds"
    }
  ],

  values: [
    { text: "600 m² d'espace", icon: "🏢" },
    { text: "Entièrement climatisé", icon: "❄️" },
    { text: "Tarif unique pour tous", icon: "💰" },
    { text: "Soirées thématiques", icon: "🎉" },
    { text: "Plus de 10 ans", icon: "🎂" }
  ],

  dressCode: {
    ladies: "Tenue sauna standard - Serviette fournie",
    gentlemen: "Tenue sauna standard - Serviette fournie",
    spirit: "Au S64, l'ambiance est décontractée et conviviale. Venez comme vous êtes, une serviette vous sera fournie à l'entrée."
  },

  // Planning unique du S64 avec rotation Gay/Bi/Mixte
  weeklySchedule: [
    {
      day: "Dimanche",
      hours: "14h - 00h",
      orientation: "100% Gay",
      theme: "Soirée Mousse",
      description: "La soirée mousse incontournable du S64"
    },
    {
      day: "Lundi",
      hours: "14h - 00h",
      orientation: "100% Gay",
      theme: "Black Cabine",
      description: "Soirée spéciale dans le noir pour plus de sensations"
    },
    {
      day: "Mardi",
      hours: "14h - 02h",
      orientation: "Mixte",
      theme: "Soirée Minets",
      description: "Toutes tendances bienvenues. Spécial -25 ans à 7€"
    },
    {
      day: "Mercredi",
      hours: "14h - 00h",
      orientation: "100% Gay",
      theme: "Naturiste",
      description: "Soirée naturiste 100% gay"
    },
    {
      day: "Jeudi",
      hours: "14h - 02h",
      orientation: "Bi",
      theme: "Soirée Bi",
      description: "Dédiée à la bisexualité, ouvert à tous"
    },
    {
      day: "Vendredi",
      hours: "14h - 02h",
      orientation: "Mixte",
      theme: "Week-end Mixte",
      description: "Toutes tendances pour bien démarrer le week-end"
    },
    {
      day: "Samedi",
      hours: "14h - 02h",
      orientation: "100% Gay",
      theme: "Soirées thématiques",
      description: "Bears, Fluo, et autres thématiques variées"
    }
  ],

  events: [
    {
      title: "Soirées 100% Gay",
      schedule: "Dimanche, Lundi, Mercredi, Samedi",
      description: "Clientèle exclusivement masculine",
      atmosphere: "L'essentiel de la programmation avec des soirées thématiques variées"
    },
    {
      title: "Soirée Mousse du Dimanche",
      schedule: "Chaque dimanche 14h-00h",
      description: "La soirée phare du S64",
      atmosphere: "Ambiance festive garantie dans une mer de mousse"
    },
    {
      title: "Black Cabine du Lundi",
      schedule: "Chaque lundi 14h-00h",
      description: "Soirée dans le noir",
      atmosphere: "Laissez vos autres sens prendre le dessus pour plus d'intensité"
    },
    {
      title: "Mercredi Naturiste",
      schedule: "Chaque mercredi 14h-00h",
      description: "100% gay et 100% naturiste",
      atmosphere: "Liberté totale dans le plus simple appareil"
    },
    {
      title: "Jeudi Bi",
      schedule: "Chaque jeudi 14h-02h",
      description: "Soirée dédiée à la bisexualité",
      atmosphere: "Pour ceux qui apprécient tous les plaisirs sans distinction"
    },
    {
      title: "Mardi & Vendredi Mixtes",
      schedule: "14h-02h",
      description: "Couples et célibataires, toutes orientations",
      atmosphere: "Ambiance open avec forte présence de bisexualité masculine"
    },
    {
      title: "Samedi Thématique",
      schedule: "Samedi 14h-02h",
      description: "Bears, Fluo, et autres thèmes",
      atmosphere: "Consultez le site pour les thématiques du mois"
    }
  ],

  pricing: {
    gay: [
      { label: "Entrée standard", price: "20€", note: "Dim, Lun, Mer, Sam" },
      { label: "Moins de 25 ans", price: "7€", note: "Tarif jeune" },
      { label: "Formule DUO", price: "33€", note: "Couple ou amis" },
      { label: "Happy Night", price: "15€", note: "Dès 19h (21h samedi)" }
    ],
    bi: [
      { label: "Homme seul", price: "25€", note: "Jeudi toute la journée" },
      { label: "Couple", price: "20€", note: "Jeudi" },
      { label: "Femme seule", price: "Gratuit", note: "Jeudi" }
    ],
    mixte: [
      { label: "Homme seul", price: "25€", note: "Mardi & Vendredi" },
      { label: "Couple", price: "20€", note: "Mardi & Vendredi" },
      { label: "Femme seule", price: "Gratuit", note: "Mardi & Vendredi" }
    ],
    includes: "Serviette fournie • Gel et préservatifs à disposition • Vestiaire sécurisé"
  },

  contact: {
    address: {
      street: "70 boulevard Alsace-Lorraine",
      city: "64100 Bayonne",
      region: "Pays Basque",
      access: "Centre-ville de Bayonne"
    },
    phone: "À confirmer",
    email: "infos@s64-sauna-bayonne.com",
    website: "www.s64-sauna-bayonne.com",
    hours: [
      { day: "Dimanche", time: "14h - 00h (100% Gay)" },
      { day: "Lundi", time: "14h - 00h (100% Gay)" },
      { day: "Mardi", time: "14h - 02h (Mixte)" },
      { day: "Mercredi", time: "14h - 00h (100% Gay)" },
      { day: "Jeudi", time: "14h - 02h (Bi)" },
      { day: "Vendredi", time: "14h - 02h (Mixte)" },
      { day: "Samedi", time: "14h - 02h (100% Gay)" }
    ],
    parking: "Stationnement en centre-ville de Bayonne"
  },

  highlights: [
    "Le plus grand sauna du Pays Basque (600 m²)",
    "Plus de 10 ans d'expérience",
    "Entièrement climatisé",
    "Programmation variée : Gay, Bi, Mixte",
    "Tarif unique pour tous - Pas de discrimination",
    "Soirées thématiques régulières",
    "Propreté reconnue et irréprochable",
    "Équipements de qualité",
    "Jacuzzi spacieux",
    "Cabine douche intime unique",
    "Gel et préservatifs partout",
    "Ambiance conviviale et accueillante"
  ],

  features: [
    "Jacuzzi / Bain bouillonnant",
    "Sauna finlandais",
    "Hammam",
    "Multiples cabines de jeux",
    "Douches modernes",
    "Cabine douche intime",
    "Salles de repos",
    "Vestiaires sécurisés",
    "Climatisation intégrale",
    "Bar"
  ],

  thematicEvents: [
    { name: "Soirée Mousse", day: "Dimanche", icon: "🫧" },
    { name: "Black Cabine", day: "Lundi", icon: "🖤" },
    { name: "Minets", day: "Mardi", icon: "👔" },
    { name: "Naturiste", day: "Mercredi", icon: "🌿" },
    { name: "Bi", day: "Jeudi", icon: "🔀" },
    { name: "Bears", day: "Variable", icon: "🐻" },
    { name: "Fluo", day: "Variable", icon: "💡" }
  ],

  strategy: {
    goal:
      "Mettre en avant la spécificité unique du S64 : le seul sauna du Pays Basque avec une programmation complète Gay/Bi/Mixte. Souligner les 600 m² d'espace, la propreté, la climatisation et la politique tarifaire équitable.",
    explanation:
      "Une présentation moderne qui valorise la diversité de la programmation, l'inclusion, et la qualité des installations dans le plus grand sauna de la région.",
  },

  disclaimer:
    "Maquette illustrative non contractuelle, destinée à présenter une version moderne du site du S64 Sauna Bayonne.",
};