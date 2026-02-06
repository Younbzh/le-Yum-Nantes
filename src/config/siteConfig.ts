export const siteConfig = {
  name: "Croûte",
  fullName: "Fromagerie Croûte",
  tagline: "Fromagerie engagée & décalée",
  description: "Fromagerie artisanale à Nantes proposant des fromages locaux, bio et raisonnés. Restaurant le midi avec une offre fromagère sur place ou à emporter.",
  
  contact: {
    address: "37 Rue Fouré, 44000 Nantes",
    quartier: "Champ de Mars / Olivettes",
    phone: "02 28 44 59 90",
    instagram: "https://www.instagram.com/fromageriecroute/",
    location: {
      lat: 47.2184,
      lng: -1.5536
    }
  },

  hours: {
    schedule: {
      lundi: "9h30 - 19h",
      mardi: "9h30 - 19h",
      mercredi: "9h30 - 19h",
      jeudi: "9h30 - 19h",
      vendredi: "9h30 - 19h",
      samedi: "9h - 13h",
      dimanche: "Fermé"
    },
    restaurant: "Service le midi du lundi au vendredi"
  },

  founders: {
    regis: {
      name: "Régis Ferré",
      origin: "Vendéen de Challans",
      experience: "15 ans avec Pascal Bellevaire (Machecoul-Paris)",
      expertise: "Expert fromager, formé sur les marchés de Vendée"
    },
    virginie: {
      name: "Virginie Bercegeay",
      background: "10 ans assistante du président de la CCI Nantes",
      reconversion: "Passionnée de gastronomie, reconversion dans le fromage et la cuisine"
    }
  },

  story: {
    meeting: "Janvier 2024",
    opening: "Mai 2025",
    concept: "Une fromagerie qui allie engagement local, produits raisonnés et une offre de restauration fromagère unique à Nantes. Les deux associés habitaient déjà le quartier et ont voulu créer un lieu qui manquait : une fromagerie avec restaurant.",
    values: ["Local & Bio", "Bien-être animal", "Saisonnalité", "Prix accessibles"]
  },

  fromages: {
    locaux: [
      {
        name: "Tomme de Retz",
        type: "Vache bio",
        description: "Produite en bio dans la région"
      },
      {
        name: "Curé Nantais",
        type: "Vache lait cru",
        description: "Traditionnel fromage nantais, pâte tendre et croûte orange"
      },
      {
        name: "Pavé du Gois",
        type: "Création Beillevaire",
        description: "Hommage au célèbre passage de Noirmoutier"
      },
      {
        name: "Machecoulais",
        type: "Vache lait cru",
        description: "Petit pain de fromage à pâte molle en corbeille bois"
      },
      {
        name: "Tomme au fenugrec",
        type: "Vache bio",
        description: "Cousin régional du Saint-Nectaire"
      },
      {
        name: "Chèvres du Hallay",
        type: "Chèvre",
        description: "Secs ou frais aux fleurs"
      }
    ],
    origine: ["France", "Espagne", "Italie"]
  },

  restaurant: {
    concept: "Cuisine végétarienne centrée sur le fromage",
    formula: "Plat du jour + dessert",
    planche: "Planche de fromages avec accompagnement de saison (salade ou velouté)",
    philosophy: "Le fromage se suffit à lui-même - nous le sublimmons"
  },

  epicerie: {
    products: [
      "Œufs bio du Petit Chemin de la Ferme (Montaigu)",
      "Yaourts locaux",
      "Soda rennais Okipic",
      "Vins des bords de Loire en conversion bio (Morille-Luneau)",
      "Charcuterie (à venir)"
    ]
  },

  services: [
    {
      title: "Fromages artisanaux",
      description: "Sélection de fromages locaux, bio et raisonnés de France, Espagne et Italie",
      icon: "cheese"
    },
    {
      title: "Restaurant le midi",
      description: "Plat du jour végétarien sublimant le fromage + planches fromagères",
      icon: "utensils"
    },
    {
      title: "Épicerie fine",
      description: "Produits locaux : œufs bio, yaourts, boissons artisanales, vins",
      icon: "shopping-basket"
    },
    {
      title: "AMAP & Livraison",
      description: "Accueil de l'AMAP du quartier + livraison en vélocargo",
      icon: "bike"
    }
  ],

  engagement: [
    {
      title: "Local & Bio",
      description: "Produits de Loire-Atlantique, Vendée et Bretagne prioritairement",
      icon: "map-pin"
    },
    {
      title: "Bien-être animal",
      description: "Fromages issus d'élevages respectueux",
      icon: "heart"
    },
    {
      title: "Saisonnalité",
      description: "Respect du rythme des saisons et des terroirs",
      icon: "leaf"
    },
    {
      title: "Prix justes",
      description: "Accessibilité pour tous avec des prix négociés équitablement",
      icon: "euro"
    }
  ],

  reviews: {
    rating: 5.0,
    count: 22,
    platform: "Google"
  },

  seo: {
    title: "Croûte | Fromagerie Artisanale & Restaurant - Nantes Champ de Mars",
    description: "Fromagerie artisanale à Nantes : fromages locaux bio, restaurant le midi, épicerie fine. Produits de Loire-Atlantique, Vendée, France, Espagne, Italie. Rue Fouré. ☎ 02 28 44 59 90",
    keywords: [
      "fromagerie Nantes",
      "fromage artisanal Nantes",
      "Croûte Nantes",
      "restaurant fromager Nantes",
      "fromage local Loire-Atlantique",
      "Curé Nantais",
      "fromagerie Champ de Mars",
      "fromagerie Olivettes",
      "fromage bio Nantes",
      "restaurant midi Nantes",
      "Régis Ferré",
      "rue Fouré Nantes",
      "épicerie fine Nantes",
      "fromage terroir 44"
    ],
    og: {
      title: "Croûte - Fromagerie Artisanale & Restaurant à Nantes",
      description: "Fromages locaux, bio et raisonnés + restaurant le midi. L'engagement fromager au cœur du quartier Champ de Mars.",
      image: "/og-image.jpg",
      type: "website"
    }
  },

  colors: {
    cream: "#f5ede4", // Crème fromage
    ochre: "#d4a574", // Ocre pain
    terracotta: "#c87850", // Terracotta croûte
    wood: "#6b5744", // Bois marron
    sage: "#8a9a7b", // Vert sauge
    darkBrown: "#3d2f24", // Brun foncé
    white: "#ffffff"
  }
};