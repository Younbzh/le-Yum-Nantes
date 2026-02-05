export const siteConfig = {
  name: "Maison Bahia",
  tagline: "Meubles & Décoration",
  baseline: "L'art de vivre marocain au cœur du Mans",
  description: "Boutique de décoration orientale au Mans. Mobilier original, artisanat marocain de qualité, céramiques, tapis berbères, luminaires. Un voyage inspiré par le Maroc pour sublimer votre intérieur.",
  
  opening: {
    date: "5 février 2026",
    isNew: true,
    announcement: "Ouverture officielle le jeudi 5 février 2026"
  },

  contact: {
    address: "8, rue du Cornet",
    postalCode: "72000",
    city: "Le Mans",
    department: "Sarthe",
    fullAddress: "8, rue du Cornet, 72000 Le Mans",
    coordinates: {
      lat: 47.9956,
      lng: 0.1965
    },
    phone: null, // À compléter si disponible
    email: null, // À compléter si disponible
    website: null
  },

  access: {
    tram: "Ligne T1 - Arrêt République (2 min à pied)",
    bus: "Lignes multiples - Arrêt Éperon",
    parking: [
      "Parking République (couvert, payant)",
      "Parking des Halles (couvert, payant)",
      "Parking Filles-Dieu (couvert, payant)",
      "Places de stationnement : Place de l'Éperon, Place de l'Hôpital"
    ]
  },

  hours: {
    monday: { open: false },
    tuesday: { open: true, hours: "10h00 - 19h00" },
    wednesday: { open: true, hours: "10h00 - 19h00" },
    thursday: { open: true, hours: "10h00 - 19h00" },
    friday: { open: true, hours: "10h00 - 19h00" },
    saturday: { open: true, hours: "10h00 - 19h00" },
    sunday: { open: false },
    note: "Ouvert du mardi au samedi de 10h à 19h"
  },

  social: {
    instagram: "https://www.instagram.com/maison.bahia72/",
    instagramHandle: "@maison.bahia72",
    facebook: "https://www.facebook.com/people/MAISON-BAHIA/61585205961546/",
    pinterest: null
  },

  about: {
    owner: "Laura Dauphin",
    age: 27,
    background: "Après avoir travaillé dans la restauration puis le commerce de prêt-à-porter, Laura a toujours rêvé d'ouvrir sa propre boutique de décoration.",
    story: "Un voyage au Maroc avec son compagnon et la révélation d'une maladie ont été les déclencheurs qui ont poussé Laura à réaliser son rêve. Face au cancer, elle a pris conscience qu'il fallait profiter de chaque instant. Ouvrir ce magasin est devenu impérieux.",
    inspiration: "Lors d'un séjour au Maroc, Laura a trouvé le fil conducteur qui l'anime depuis toujours : la décoration. De retour en France, elle a décidé de partager sa passion en créant Maison Bahia.",
    philosophy: "Dans un petit espace très chaleureux, Laura présente des produits de qualité issus de l'artisanat et quelques pièces de marque de niche. Les collections évolueront sans cesse au gré de ses envies et de ses découvertes.",
    values: [
      "Artisanat de qualité",
      "Authenticité marocaine",
      "Collections évolutives",
      "Sélection pointue",
      "Prix accessibles",
      "Ambiance chaleureuse"
    ]
  },

  products: {
    categories: [
      {
        name: "Luminaires",
        description: "Lampes en raphia, luminaires en Doum, suspensions artisanales",
        featured: true
      },
      {
        name: "Tapis & Textiles",
        description: "Tapis berbères authentiques, coussins, plaids",
        featured: true
      },
      {
        name: "Céramique",
        description: "Céramiques faites à la main, vaisselle artisanale",
        featured: true
      },
      {
        name: "Mobilier",
        description: "Meubles originaux aux accents orientaux",
        featured: false
      },
      {
        name: "Vannerie",
        description: "Paniers Doum, accessoires en fibres naturelles",
        featured: false
      },
      {
        name: "Décoration",
        description: "Objets déco, bougies, senteurs d'intérieur",
        featured: false
      }
    ],
    signature: {
      color: "Bleu Majorelle",
      description: "Verrerie cobalt, céramiques turquoise, textiles rayés bleu et blanc",
      priceExample: "Fleurs de cire à partir de 7,50€"
    },
    evolution: "Les collections évoluent sans cesse au gré des envies et des découvertes"
  },

  occasions: {
    current: {
      name: "Saint-Valentin",
      date: "Semaine prochaine",
      suggestion: "Fleurs de cire, bougies parfumées, objets déco pour offrir"
    }
  },

  features: [
    {
      title: "Artisanat authentique",
      description: "Produits de qualité issus de l'artisanat marocain"
    },
    {
      title: "Marques de niche",
      description: "Sélection pointue de pièces uniques"
    },
    {
      title: "Collections évolutives",
      description: "Nouveautés régulières au gré des découvertes"
    },
    {
      title: "Espace chaleureux",
      description: "Petit cocon pour découvrir les produits dans une ambiance intimiste"
    }
  ],

  press: [
    {
      title: "Laura ouvre un magasin de décoration au Mans",
      quote: "Un voyage et ma maladie ont joué dans le fait de me lancer",
      description: "À 27 ans, Laura Dauphin réalise son rêve en ouvrant Maison Bahia dans le centre-ville du Mans. Une boutique où elle propose objets de décoration et mobilier original aux accents exotiques."
    }
  ],

  location: {
    region: "Pays de la Loire",
    department: "Sarthe (72)",
    city: "Le Mans",
    district: "Centre-ville",
    nearbyLandmarks: [
      "Place de la République",
      "Cathédrale Saint-Julien",
      "Cité Plantagenêt"
    ]
  },

  seo: {
    keywords: [
      "décoration orientale Le Mans",
      "boutique décoration marocaine Sarthe",
      "artisanat marocain Le Mans",
      "tapis berbère Le Mans",
      "luminaire oriental Le Mans",
      "céramique artisanale Le Mans",
      "mobilier marocain",
      "Maison Bahia",
      "décoration ethnique Le Mans",
      "bleu Majorelle",
      "magasin décoration centre-ville Le Mans",
      "artisanat authentique Sarthe"
    ],
    title: "Maison Bahia - Décoration Orientale & Artisanat Marocain | Le Mans",
    metaDescription: "Boutique de décoration orientale au centre du Mans. Mobilier original, céramiques, tapis berbères, luminaires. Artisanat marocain authentique. Ouverture 5 février 2026.",
    og: {
      title: "Maison Bahia - L'art de vivre marocain au cœur du Mans",
      description: "Découvrez notre sélection d'artisanat marocain : luminaires, tapis berbères, céramiques faites main. Ouverture le 5 février 2026 au 8 rue du Cornet.",
      image: "/og-image-maison-bahia.jpg",
      type: "website"
    }
  },

  branding: {
    primaryColor: "#A67B5B", // Terracotta (from logo)
    secondaryColor: "#2B5F9E", // Bleu Majorelle
    accentColor: "#5BA8A0", // Turquoise
    neutralLight: "#F5EBE0", // Crème
    neutralDark: "#3D3028", // Brun foncé
    backgroundColor: "#FFFBF7", // Blanc cassé chaud
    textColor: "#3D3028",
    logoStyle: "Geometric Art Deco diamond pattern with nested shapes"
  },

  specialties: {
    signature: "Bleu Majorelle",
    materials: [
      "Céramique faite main",
      "Tapis berbères authentiques",
      "Luminaires en Doum",
      "Lampes en raphia",
      "Vannerie naturelle"
    ],
    priceRange: "Accessible (ex: fleurs de cire à 7,50€)",
    style: "Oriental contemporain, méditerranéen chic"
  }
};