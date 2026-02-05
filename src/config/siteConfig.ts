export const siteConfig = {
  name: "Wine Beer",
  tagline: "Bar & Cave à Vins • Nozay",
  slogan: "Nouvelle ère, nouvelle ambiance",
  statusMessage: "Reprise et rénovation en cours • Nouvelle équipe • Réouverture prochaine",
  description: "Bar à bières et cave à vins au cœur de Nozay. Large sélection de bières artisanales, rhums arrangés, retransmissions sportives et jeux conviviaux dans un espace de 375m² + terrasse de 200m².",
  
  contact: {
    address: "12 Route de Nantes",
    city: "Nozay",
    postalCode: "44170",
    fullAddress: "12 Route de Nantes, 44170 Nozay",
    phone: "02 28 05 77 28",
    email: null,
    siret: "831-180-856-00013",
    coordinates: {
      lat: 47.5683,
      lng: -1.6189
    }
  },

  venue: {
    surfaceIndoor: "375 m²",
    surfaceOutdoor: "200 m²",
    totalSurface: "575 m²",
    history: "Bâtiment historique : anciens salons de la maison Gergaud, lieu emblématique de Nozay connu de plusieurs générations pour ses mariages et fêtes de famille"
  },

  transition: {
    status: "En cours de reprise",
    newNameReveal: "Le nouveau nom sera révélé lors de la réouverture",
    worksInProgress: true,
    reopeningMessage: "Réouverture prévue dans quelques semaines"
  },

  previousOwner: {
    name: "Rodolphe Gourdon",
    duration: "9 ans de gestion",
    opening: "2017",
    legacy: "A fait du Wine Beer un lieu de référence à Nozay pour les soirées sportives et conviviales"
  },

  newOwners: [
    {
      name: "Grégory Jubé",
      age: 24,
      role: "Co-gérant",
      origin: "Nozéen d'origine",
      background: "Diplômé barman, apprentissage au Barberousse (Nantes)",
      vision: "Créer un lieu convivial pour tous, du mercredi au dimanche"
    },
    {
      name: "Guillermo Medina",
      role: "Co-gérant & Associé",
      background: "Ancien patron de Grégory au Barberousse",
      expertise: "Expertise en gestion de bars et ambiance festive"
    }
  ],

  hours: {
    current: {
      lundi: "Fermé",
      mardi: { morning: "10h30 - 13h00", evening: "16h30 - 23h00" },
      mercredi: { morning: "10h30 - 13h00", evening: "16h30 - 23h00" },
      jeudi: { morning: "10h30 - 13h00", evening: "16h30 - 23h00" },
      vendredi: { morning: "10h30 - 13h00", evening: "16h30 - 00h00" },
      samedi: { morning: "10h30 - 13h00", evening: "16h30 - 00h00" },
      dimanche: "17h00 - 23h00"
    },
    future: {
      mercredi: "16h30 - 02h00",
      jeudi: "16h30 - 02h00",
      vendredi: "16h30 - 02h00",
      samedi: "16h30 - 02h00",
      dimanche: "16h30 - 02h00",
      mardi: "Ouvertures exceptionnelles pour retransmissions sportives",
      lundi: "Fermé"
    }
  },

  offerings: {
    beverages: [
      {
        category: "Bières",
        description: "Large panel de bières artisanales et internationales",
        icon: "beer"
      },
      {
        category: "Vins",
        description: "Sélection de vins de qualité, cave à vins",
        icon: "wine"
      },
      {
        category: "Rhums Arrangés",
        description: "Spécialité maison : rhums arrangés aux saveurs variées",
        icon: "flame"
      },
      {
        category: "Spiritueux",
        description: "Large choix de spiritueux et cocktails",
        icon: "glass"
      }
    ],
    food: [
      {
        title: "Planches Apéro",
        description: "Charcuterie, fromages, accompagnements"
      },
      {
        title: "Restauration Rapide",
        description: "Croque-monsieur, snacking"
      },
      {
        title: "Sushis",
        description: "Disponibles sur place"
      }
    ],
    activities: [
      {
        title: "Retransmissions Sportives",
        description: "Grand écran pour tous les matchs importants",
        icon: "tv"
      },
      {
        title: "Jeux de Planches",
        description: "Palet breton, Cornhole, Jeu de Tock",
        icon: "target"
      },
      {
        title: "Pétanque",
        description: "Terrain disponible",
        icon: "circle"
      },
      {
        title: "Soirées à Thème",
        description: "Concerts, karaoké, animations",
        icon: "music"
      }
    ]
  },

  ambiance: {
    style: "Bar convivial et sportif",
    capacity: "Grande capacité d'accueil",
    atmosphere: "Ambiance chaleureuse et festive",
    publicCible: "Tout public, du mercredi au dimanche",
    strengths: [
      "Espace spacieux (575m² au total)",
      "Grande terrasse de 200m²",
      "Lieu historique emblématique",
      "Nouvelle équipe jeune et dynamique",
      "Parfait pour les groupes"
    ]
  },

  services: {
    vente: "Vente à emporter disponible",
    privatisation: "Possibilité de privatisation pour événements",
    accessibilite: "Accès fauteuil roulant",
    parking: "Parking à proximité"
  },

  seo: {
    keywords: [
      "bar Nozay",
      "Wine Beer Nozay",
      "bar à bières Nozay 44170",
      "cave à vins Nozay",
      "retransmission matchs Nozay",
      "bar sportif Loire-Atlantique",
      "rhums arrangés Nozay",
      "terrasse bar Nozay",
      "soirée Nozay",
      "bar convivial 44"
    ],
    metaDescription: "Wine Beer à Nozay : bar à bières et cave à vins. 575m² avec terrasse, retransmissions sportives, rhums arrangés, jeux conviviaux. Reprise par Grégory & Guillermo. Réouverture prochaine.",
    og: {
      title: "Wine Beer - Bar & Cave à Vins Nozay",
      description: "Nouvelle ère, nouvelle ambiance. Bar convivial au cœur de Nozay.",
      type: "website",
      locale: "fr_FR"
    }
  },

  branding: {
    style: "Bar convivial moderne - Chaleureux, sportif, énergique",
    colors: {
      primary: "#2C5F2D", // Vert forêt
      secondary: "#D4A574", // Ambre bière
      accent: "#8B2E3F", // Bordeaux vin
      dark: "#1A1A1A", // Noir profond
      wood: "#8B6F47", // Bois chaleureux
      light: "#F5F1E8" // Crème doux
    },
    vibe: "L'esprit d'un bar de quartier moderne avec l'âme d'un lieu historique"
  },

  testimonials: [
    {
      comment: "Super endroit très spacieux, les propriétaires sont très accueillants et très intéressants je recommande.",
      author: "Client Google"
    },
    {
      comment: "Établissement sympa avec une déco très cool niveau bière il y a du choix je recommande dans un petit village comme Nozay.",
      author: "Client"
    },
    {
      comment: "Le gérant est sympathique. Il conseille sur les boissons. En plus on peut venir avec notre sandwich le midi. Je recommande cet endroit les yeux fermés.",
      author: "Habitué"
    },
    {
      comment: "Très sympa, grand choix de bières et de vins. Belle terrasse. Nozay est un petit village très dynamique !",
      author: "Visiteur"
    }
  ]
};