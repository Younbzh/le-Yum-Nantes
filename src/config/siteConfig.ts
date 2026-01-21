export const siteConfig = {
  // IDENTITÉ
  clubName: "Le Jardin des Trésors",
  city: "Sainte-Hélène",
  positioning: "Maison d'Assistants Maternels bienveillante dans le Morbihan",
  accentMode: "light" as "dark" | "light",

  // TONALITÉ
  tone: {
    keywords: ["bienveillance", "éveil", "confiance", "épanouissement"],
    promise: "Un lieu d'accueil chaleureux où chaque enfant grandit à son rythme, entouré d'une équipe professionnelle et passionnée qui accompagne avec douceur les premiers pas vers l'autonomie et la socialisation."
  },

  // HERO (première section)
  hero: {
    title: "Le Jardin des Trésors",
    subtitle: "Maison d'Assistants Maternels à Sainte-Hélène",
    tagline: "Où chaque enfant est un trésor précieux",
    description: "Un cocon bienveillant pour l'éveil et l'épanouissement de vos tout-petits de 10 semaines à 3 ans",
    cta: "Découvrir notre projet"
  },

  // PUBLIC
  audience: {
    primary: "Enfants de 10 semaines à l'entrée à l'école maternelle",
    secondary: "Parents recherchant un accueil familial et professionnel",
    tertiary: "Familles de Sainte-Hélène et communes environnantes (Merlevenez, Nostang, Plouhinec)",
    philosophy: "Notre MAM offre un accueil à mi-chemin entre la garde individuelle et la crèche collective. Nous proposons un environnement sécurisant et stimulant où chaque enfant est respecté dans son individualité, son rythme et ses besoins, tout en bénéficiant de la richesse de la vie en petit groupe."
  },

  // ESPACES
  spaces: [
    {
      title: "Salle de jeux et d'éveil",
      emoji: "🎨",
      description: "Espace principal d'activités",
      details: "Grande pièce lumineuse aménagée avec différents coins thématiques : coin lecture, espace motricité, jeux symboliques (dinette, poupées), construction. Un environnement pensé pour stimuler la curiosité et l'imagination des enfants."
    },
    {
      title: "Chambre et espace repos",
      emoji: "😴",
      description: "Zone calme pour les siestes",
      details: "Espace dédié au sommeil avec des lits adaptés à chaque âge. Ambiance apaisante et sécurisante où chaque enfant peut se reposer selon son rythme individuel. Chaque enfant a son propre linge de lit personnalisé."
    },
    {
      title: "Coin repas",
      emoji: "🍽️",
      description: "Espace convivial pour les repas",
      details: "Table et chaises adaptées aux tout-petits pour partager les repas dans une ambiance chaleureuse. Moment privilégié d'échange et de découverte gustative, dans le respect du rythme alimentaire de chacun."
    },
    {
      title: "Espace change et soins",
      emoji: "🧸",
      description: "Zone hygiène et bien-être",
      details: "Espace dédié aux changes et aux soins quotidiens, aménagé pour garantir confort et sécurité. Produits d'hygiène adaptés aux peaux sensibles des bébés."
    },
    {
      title: "Jardin extérieur",
      emoji: "🌳",
      description: "Espace de découverte en plein air",
      details: "Jardin clos et sécurisé pour profiter des beaux jours. Jeux d'extérieur, bac à sable, potager pédagogique. Les enfants découvrent la nature, les saisons et développent leur motricité en plein air."
    }
  ],

  // VALEURS
  values: [
    { text: "Bienveillance", icon: "💖" },
    { text: "Respect du rythme", icon: "⏰" },
    { text: "Éveil sensoriel", icon: "🎨" },
    { text: "Sécurité affective", icon: "🛡️" },
    { text: "Autonomie progressive", icon: "🌱" },
    { text: "Travail en équipe", icon: "👥" }
  ],

  // PROJET PÉDAGOGIQUE
  pedagogicalProject: {
    title: "Notre Projet Pédagogique",
    introduction: "Notre projet éducatif s'articule autour de valeurs fortes et d'une approche respectueuse de chaque enfant.",
    principles: [
      {
        title: "Respect du rythme individuel",
        description: "Chaque enfant est unique. Nous respectons son rythme de développement, ses besoins de sommeil, d'alimentation et d'activités. Pas de pression, mais un accompagnement bienveillant vers l'autonomie."
      },
      {
        title: "Sécurité affective",
        description: "L'assistant maternel référent crée un lien privilégié avec l'enfant et sa famille. Ce repère stable permet à l'enfant de développer sa confiance en lui et envers les adultes qui l'entourent."
      },
      {
        title: "Éveil et découvertes",
        description: "Des activités variées et adaptées : peinture, pâte à modeler, comptines, musique, lecture, jeux d'eau, manipulation d'objets sensoriels. Chaque jour est une nouvelle découverte !"
      },
      {
        title: "Socialisation en douceur",
        description: "Le petit groupe permet aux enfants d'apprendre à vivre ensemble : partage, respect des autres, gestion des émotions, tout en conservant une approche individualisée."
      },
      {
        title: "Communication gestuelle associée à la parole",
        description: "Nous utilisons les signes (langue des signes française adaptée) pour faciliter la communication avec les tout-petits. Cela réduit les frustrations et permet aux enfants de s'exprimer avant même de parler."
      },
      {
        title: "Partenariat avec les parents",
        description: "Vous êtes les premiers éducateurs de votre enfant. Nous travaillons main dans la main avec vous, dans le respect de vos choix éducatifs et avec des échanges quotidiens sur le vécu de votre enfant."
      }
    ]
  },

  // JOURNÉE TYPE
  typicalDay: {
    title: "Une journée à la MAM",
    schedule: [
      {
        time: "7h30 - 9h00",
        activity: "Accueil échelonné",
        description: "Arrivée progressive des enfants. Temps d'échange avec les parents. Jeux libres et calmes pour démarrer la journée en douceur."
      },
      {
        time: "9h00 - 9h30",
        activity: "Temps de regroupement",
        description: "Chanson de bienvenue, comptines, rituels du matin. Observation de la météo, du calendrier. Moment de partage pour commencer la journée ensemble."
      },
      {
        time: "9h30 - 11h30",
        activity: "Activités dirigées ou sorties",
        description: "Ateliers créatifs (peinture, collage, pâte à modeler), motricité, lecture, musique. Sorties au RAM (Relais Assistants Maternels), au parc, promenades en forêt selon la météo."
      },
      {
        time: "11h30 - 12h30",
        activity: "Repas",
        description: "Moment convivial et éducatif. Menu équilibré adapté à l'âge de chaque enfant. Apprentissage de l'autonomie (manger seul, utiliser les couverts)."
      },
      {
        time: "12h30 - 15h00",
        activity: "Temps calme et sieste",
        description: "Chaque enfant se repose selon ses besoins. Musique douce, doudous et sucettes disponibles. Respect du sommeil de chacun."
      },
      {
        time: "15h00 - 16h00",
        activity: "Réveil échelonné et goûter",
        description: "Les enfants se réveillent à leur rythme. Goûter sain et équilibré. Moment de câlin et de transition vers les activités de fin de journée."
      },
      {
        time: "16h00 - 18h00",
        activity: "Jeux libres et départs",
        description: "Activités calmes, jeux libres dans le jardin si le temps le permet. Départs progressifs avec transmission quotidienne aux parents."
      },
      {
        time: "18h00 - 18h30",
        activity: "Fin de journée",
        description: "Derniers départs. Rangement et préparation du lendemain."
      }
    ]
  },

  // ÉQUIPE
  team: {
    title: "Notre Équipe",
    description: "Trois assistantes maternelles diplômées et expérimentées, passionnées par leur métier",
    members: [
      {
        name: "À compléter",
        role: "Assistante maternelle agréée",
        description: "Diplômée du CAP Petite Enfance. Expérience en crèche et auprès des familles. Formée aux premiers secours et à la communication gestuelle."
      },
      {
        name: "À compléter",
        role: "Assistante maternelle agréée",
        description: "Formation continue en pédagogies alternatives (Montessori, Pikler). Spécialisée dans l'accompagnement des tout-petits de 2 mois à 1 an."
      },
      {
        name: "À compléter",
        role: "Assistante maternelle agréée",
        description: "Expérience de 15 ans dans l'accueil à domicile. Formée à la langue des signes et à la diversification alimentaire menée par l'enfant (DME)."
      }
    ],
    note: "Chaque assistante maternelle reste le référent privilégié des enfants dont elle a la charge, tout en travaillant en collaboration avec ses collègues pour offrir un accueil de qualité."
  },

  // TARIFS
  pricing: {
    title: "Tarifs et Aides",
    introduction: "Le tarif horaire est défini selon la convention collective nationale des assistants maternels.",
    hourlyRate: {
      label: "Salaire horaire brut de base",
      amount: "Entre 3,50€ et 5,00€ de l'heure",
      note: "À négocier avec l'assistante maternelle référente selon le nombre d'heures et les horaires"
    },
    additionalCosts: [
      {
        label: "Indemnités d'entretien",
        amount: "Selon barème légal",
        description: "Achat de matériel, linge, vaisselle, jeux, charges du local"
      },
      {
        label: "Indemnités de repas",
        amount: "Si fournis par la MAM",
        description: "Coût des repas équilibrés préparés ou livrés"
      },
      {
        label: "Frais d'inscription",
        amount: "À définir",
        description: "Participation aux frais de fonctionnement de la structure"
      }
    ],
    financialAid: {
      title: "Aides financières (CAF)",
      items: [
        "CMG (Complément de libre choix du Mode de Garde) : prise en charge d'une partie du salaire et des cotisations sociales",
        "Montant variable selon vos revenus et le nombre d'enfants",
        "Crédit d'impôt : 50% des sommes versées (dans la limite d'un plafond)",
        "Aide de votre employeur (selon votre convention collective)"
      ]
    },
    includes: "L'accueil inclut : les activités quotidiennes, le matériel pédagogique, les produits d'hygiène, l'accès au jardin, les sorties culturelles et au RAM (Relais Assistants Maternels)."
  },

  // HORAIRES ET FONCTIONNEMENT
  contact: {
    address: {
      street: "Adresse à préciser",
      city: "56700 Sainte-Hélène",
      region: "Morbihan, Bretagne",
      access: "Proche du bourg, accessible depuis Merlevenez, Nostang et Plouhinec. Parking possible à proximité."
    },
    phone: "À compléter",
    email: "lejardindestresors.mam@gmail.com",
    website: "À créer",
    hours: [
      { day: "Lundi au Vendredi", time: "7h30 - 18h30" },
      { day: "Week-end et jours fériés", time: "Fermé" }
    ],
    closures: "La MAM est fermée 5 semaines par an : 3 semaines en été, 1 semaine pendant les fêtes de fin d'année, 1 semaine au printemps. Le calendrier des fermetures est communiqué aux familles en début d'année."
  },

  // INSCRIPTION
  enrollment: {
    title: "Inscription et Adaptation",
    steps: [
      {
        step: "1. Premier contact",
        description: "Contactez-nous par téléphone ou email pour échanger sur vos besoins d'accueil et nos disponibilités."
      },
      {
        step: "2. Visite de la MAM",
        description: "Venez découvrir les lieux avec votre enfant. Rencontre avec l'équipe et présentation du projet pédagogique."
      },
      {
        step: "3. Pré-inscription",
        description: "Si notre projet vous correspond, remplissez la fiche de pré-inscription. Nous étudierons votre demande en fonction de nos places disponibles."
      },
      {
        step: "4. Signature du contrat",
        description: "Contrat de travail entre vous (parents employeurs) et l'assistante maternelle référente. Règlement de fonctionnement de la MAM."
      },
      {
        step: "5. Période d'adaptation",
        description: "Essentielle ! 1 à 2 semaines progressives pour que votre enfant s'habitue en douceur aux lieux, aux adultes et aux autres enfants."
      }
    ],
    requirements: [
      "Carnet de santé à jour (vaccinations obligatoires)",
      "Attestation d'assurance responsabilité civile",
      "Autorisation de sortie et de soins",
      "PAI (Projet d'Accueil Individualisé) si allergie ou traitement médical"
    ]
  },

  // HIGHLIGHTS
  highlights: [
    "Agrément PMI (Protection Maternelle et Infantile)",
    "Assistantes maternelles diplômées et expérimentées",
    "Effectif limité pour un accueil personnalisé (maximum 12 enfants)",
    "Jardin extérieur sécurisé",
    "Utilisation de la communication gestuelle",
    "Activités d'éveil variées et adaptées",
    "Sorties régulières au RAM et dans la nature",
    "Partenariat avec les parents",
    "Local aux normes ERP (Établissement Recevant du Public)",
    "Proche de Lorient, Étel et Plouhinec"
  ],

  // ÉQUIPEMENTS
  features: [
    "Matériel pédagogique adapté à chaque âge",
    "Jeux d'éveil et matériel sensoriel",
    "Bibliothèque enfantine fournie",
    "Matériel de motricité (parcours, tapis)",
    "Instruments de musique pour enfants",
    "Matériel d'arts plastiques (peinture, pâte à modeler)",
    "Lits et matériel de change",
    "Jardin avec bac à sable et jeux d'extérieur",
    "Potager pédagogique",
    "Cuisine équipée pour préparer les repas",
    "Salle de bain adaptée aux enfants",
    "Produits d'hygiène bio et respectueux",
    "Linge de lit personnel pour chaque enfant"
  ],

  // PARTICULARITÉ : LOCALISATION
  location: {
    title: "Sainte-Hélène, un cadre de vie idéal",
    description: "Située dans le Sud Morbihan, Sainte-Hélène est une commune paisible au bord de la ria d'Étel, offrant un cadre naturel exceptionnel pour l'épanouissement des enfants.",
    advantages: [
      "Environnement calme et verdoyant",
      "Proximité de la nature (rivière d'Étel, sentiers de promenade)",
      "À 12 km de Lorient",
      "Communes voisines : Merlevenez, Nostang, Plouhinec, Kervignac",
      "Accès facile depuis la D158"
    ]
  },

  // MÉTA
  strategy: {
    goal: "Présenter la MAM Le Jardin des Trésors comme un lieu d'accueil bienveillant, professionnel et rassurant pour les familles de Sainte-Hélène et environs",
    explanation: "Le site met en avant la qualité de l'accueil, le professionnalisme de l'équipe, le projet pédagogique centré sur le respect de l'enfant, et l'environnement chaleureux de la MAM. L'objectif est de créer un climat de confiance avec les parents."
  },
  disclaimer: "La MAM Le Jardin des Trésors est composée d'assistantes maternelles agréées par le Conseil Départemental du Morbihan (PMI). Les parents sont employeurs directs de l'assistante maternelle référente de leur enfant. Les informations présentées sur ce site sont données à titre indicatif et peuvent être modifiées. Pour toute information complémentaire, n'hésitez pas à nous contacter."
};