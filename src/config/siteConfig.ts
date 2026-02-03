export const siteConfig = {
  // Informations générales
  name: "Les Huîtres RICOU",
  tagline: "Ostréiculteurs de père en fils depuis 5 générations",
  slogan: "La tradition au cœur de l'océan",
  description: "Ostréiculteurs familiaux sur l'île d'Oléron depuis 5 générations. Huîtres nées en mer, élevées et affinées dans nos claires du bassin Marennes-Oléron. Vente en gros, semi-gros et au détail sur nos marchés.",
  
  // Entreprise
  company: {
    legalName: "EARL Huîtres RICOU",
    responsable: "Jérémy RICOU",
    generations: 5,
    since: "Depuis plus d'un siècle",
    speciality: "Ostréiculture traditionnelle"
  },
  
  // Contact
  contact: {
    email: "leshuitresricou@outlook.fr",
    phone: "06 13 16 24 60",
    client_email: "youenndarsel.oc@gmail.com" // Contact commercial
  },
  
  // Adresses de production
  production: {
    main: {
      name: "Exploitation ostréicole",
      address: "La Fontaine - Chenal d'Ors",
      city: "Le Château-d'Oléron",
      postalCode: "17480",
      region: "Île d'Oléron, Charente-Maritime",
      coordinates: {
        lat: 45.8833,
        lng: -1.2000
      }
    },
    secondary: {
      name: "Site de production",
      address: "Le Grésillon, 23 rue du Moulin",
      city: "Le Château-d'Oléron",
      postalCode: "17480"
    }
  },
  
  // Histoire & Savoir-faire
  about: {
    story: "La famille RICOU cultive les huîtres sur l'île d'Oléron depuis 5 générations. Ostréiculteurs de père en fils, nous perpétuons un savoir-faire ancestral transmis de génération en génération. Nos huîtres naissent en mer, grandissent dans les meilleurs parcs du prestigieux bassin Marennes-Oléron, puis sont affinées avec soin dans nos claires pour vous offrir des huîtres d'exception.",
    values: [
      "Tradition familiale de 5 générations",
      "Savoir-faire artisanal",
      "Respect du cycle naturel",
      "Qualité premium garantie",
      "Affinage en claires traditionnel",
      "Traçabilité totale"
    ],
    heritage: "Plus d'un siècle d'expertise ostréicole transmise de père en fils sur les terres marines de l'île d'Oléron.",
    commitment: "Nous sommes engagés dans une démarche de qualité respectueuse de l'environnement et des traditions ostréicoles du bassin Marennes-Oléron."
  },
  
  // Bassin Marennes-Oléron
  terroir: {
    name: "Bassin Marennes-Oléron",
    igp: "Indication Géographique Protégée depuis 2009",
    description: "Le bassin de Marennes-Oléron est le premier centre européen d'affinage et de production d'huîtres. Nos huîtres bénéficient d'un terroir d'exception reconnu par une IGP.",
    specificites: [
      "Affinage en claires (anciens marais salants)",
      "Eau riche en plancton et nutriments",
      "Navicule bleue (algue donnant la couleur verte)",
      "Savoir-faire unique reconnu",
      "Qualité supérieure garantie"
    ],
    process: "Nos huîtres sont élevées en pleine mer dans les meilleurs parcs du bassin, puis affinées plusieurs semaines dans nos claires pour développer leur goût unique et leur qualité exceptionnelle."
  },
  
  // Gamme de produits
  products: {
    categories: [
      {
        name: "Fines de Claire",
        igp: true,
        description: "Huîtres peu charnues, riches en eau, au goût marin raffiné et équilibré. Affinées minimum 28 jours en claires.",
        caracteristiques: [
          "Peu charnues, riches en eau",
          "Goût marin équilibré",
          "Affinage minimum 28 jours",
          "Coquille de qualité supérieure",
          "Saveur de terroir subtile"
        ],
        icon: "🦪"
      },
      {
        name: "Fines de Claire Vertes",
        labelRouge: true,
        igp: true,
        description: "Huîtres au goût raffiné avec une teinte verte caractéristique des branchies, témoignage de l'affinage en claire avec navicule bleue.",
        caracteristiques: [
          "Teinte verte caractéristique",
          "Goût prolongé en bouche",
          "Affinage en présence de navicule bleue",
          "Label Rouge + IGP",
          "Non laiteuses (octobre à mai)"
        ],
        icon: "🌿"
      },
      {
        name: "Spéciales de Claire",
        igp: true,
        description: "Huîtres charnues et croquantes, sélectionnées pour leur forme. Chair plus abondante, équilibre parfait entre douceur et salinité.",
        caracteristiques: [
          "Chair affirmée et croquante",
          "Sélection par forme",
          "Volume en bouche remarquable",
          "Équilibre douceur/salinité",
          "Affinage prolongé"
        ],
        icon: "⭐"
      }
    ],
    calibres: [
      { numero: "N°0", poids: "150g et +", description: "Très grosse" },
      { numero: "N°1", poids: "120-150g", description: "Grosse" },
      { numero: "N°2", poids: "90-120g", description: "Moyenne" },
      { numero: "N°3", poids: "70-90g", description: "Petite" },
      { numero: "N°4", poids: "50-70g", description: "Très petite" }
    ]
  },
  
  // Vente professionnelle
  professional: {
    title: "Vente en Gros & Semi-Gros",
    description: "Nous proposons nos huîtres aux professionnels : restaurateurs, poissonniers, comités d'entreprise et collectivités.",
    services: [
      "Livraison possible selon quantités",
      "Conditionnement adapté aux professionnels",
      "Tarifs dégressifs",
      "Disponibilité toute l'année",
      "Conseils personnalisés"
    ],
    clients: "Restaurateurs, Poissonniers, Comités d'entreprise, Traiteurs, Collectivités"
  },
  
  // Points de vente (marchés)
  markets: {
    description: "Retrouvez nos huîtres fraîches sur nos points de vente hebdomadaires dans l'Indre",
    period: "De septembre à mai",
    locations: [
      {
        city: "La Châtre",
        day: "Samedi",
        hours: "8h00 - 13h00",
        place: "Place du Marché",
        frequency: "Hebdomadaire"
      },
      {
        city: "Issoudun",
        day: "Vendredi & Samedi",
        hours: "Matin",
        place: "Place du 10 Juin 1944",
        frequency: "Hebdomadaire"
      },
      {
        city: "Vatan",
        day: "Samedi",
        hours: "Matin",
        place: "Centre-ville",
        frequency: "Hebdomadaire"
      },
      {
        city: "Ardentes",
        day: "Samedi",
        hours: "Matin",
        place: "Marché",
        frequency: "Hebdomadaire"
      },
      {
        city: "Neuvy-Saint-Sépulchre",
        day: "Dimanche",
        hours: "Matin",
        place: "Marché",
        frequency: "Semaines impaires"
      },
      {
        city: "Le Poinçonnet",
        day: "Dimanche",
        hours: "Matin",
        place: "Marché",
        frequency: "Semaines impaires"
      }
    ]
  },
  
  // Conseils & Conservation
  conseils: {
    conservation: [
      "Conserver au frais (5-15°C)",
      "Stocker à plat, face bombée en bas",
      "Consommer sous 8-10 jours",
      "Ne jamais mettre dans l'eau",
      "Sortir 30min avant dégustation"
    ],
    degustation: [
      "Ouvrir juste avant de servir",
      "Vérifier la fraîcheur (odeur marine agréable)",
      "Jeter la première eau",
      "Déguster avec du citron ou une sauce échalote",
      "Accompagner de pain de seigle et beurre salé"
    ],
    ouverture: [
      "Utiliser un couteau à huître",
      "Tenir l'huître dans un torchon",
      "Insérer la lame dans le talon",
      "Faire levier pour ouvrir",
      "Détacher le muscle"
    ]
  },
  
  // Certifications & Labels
  certifications: [
    {
      name: "IGP Marennes-Oléron",
      description: "Indication Géographique Protégée garantissant l'origine et la qualité",
      year: "2009"
    },
    {
      name: "Label Rouge",
      description: "Qualité supérieure pour nos Fines de Claire Vertes",
      conditions: "Cahier des charges strict"
    },
    {
      name: "Groupement Qualité HMO",
      description: "Adhérent au Groupement Qualité Huîtres Marennes Oléron",
      engagement: "Démarche qualité et traçabilité"
    }
  ],
  
  // Recettes & Idées
  recettes: [
    {
      name: "Huîtres nature",
      description: "Dégustez-les nature pour apprécier toute la finesse de leur goût marin"
    },
    {
      name: "Huîtres chaudes gratinées",
      description: "Au four avec une persillade ou un sabayon"
    },
    {
      name: "Huîtres à la plancha",
      description: "Saisies avec une noix de beurre et un trait de jus de citron"
    },
    {
      name: "Tartare d'huîtres",
      description: "En tartare avec échalotes, citron et huile d'olive"
    }
  ],
  
  // SEO
  seo: {
    keywords: [
      "huîtres Marennes-Oléron",
      "huîtres RICOU",
      "ostréiculteur Oléron",
      "fines de claire",
      "spéciales de claire",
      "huîtres IGP",
      "huîtres La Châtre",
      "huîtres Issoudun",
      "huîtres Indre",
      "achat huîtres gros",
      "huîtres marchés Indre",
      "huîtres Château-d'Oléron"
    ],
    og: {
      title: "Les Huîtres RICOU - Ostréiculteurs depuis 5 générations | Marennes-Oléron IGP",
      description: "Ostréiculteurs familiaux sur l'île d'Oléron depuis 5 générations. Fines et Spéciales de Claire IGP affinées dans nos claires. Vente professionnelle et sur marchés dans l'Indre."
    }
  },
  
  // Informations pratiques
  practical: {
    saison: "Huîtres disponibles toute l'année",
    meilleure_periode: "Septembre à mai (huîtres non laiteuses)",
    commande: "Sur demande pour les professionnels",
    minimum_commande: "À définir selon besoin",
    expedition: "Possible selon quantités"
  }
};