export const siteConfig = {
  // IDENTITÉ
  companyName: "Elixir au Féminin",
  tagline: "Institut de beauté & Onglerie",
  slogan: "Sublimez vos mains et vos pieds",
  city: "Uzel",
  region: "Côtes-d'Armor, Bretagne",
  
  // HERO
  hero: {
    title: "Elixir au Féminin",
    subtitle: "Institut de beauté & Onglerie",
    tagline: "Votre moment de beauté à Uzel",
    description: "Spécialisée en onglerie et soins des mains et pieds, je vous accueille dans mon institut chaleureux pour un moment de détente et de beauté. Pose de vernis semi-permanent, nail art, soins complets... Prenez soin de vous !",
    cta: "Prendre rendez-vous"
  },

  // À PROPOS
  about: {
    title: "Bienvenue chez Elixir au Féminin",
    story: "Elixir au Féminin est votre institut de beauté spécialisé en onglerie à Uzel. Passionnée par l'art de l'ongle et le bien-être, je vous accueille dans un cadre chaleureux et féminin pour prendre soin de vos mains et de vos pieds.",
    mission: "Ma mission : vous offrir un moment de détente privilégié tout en sublimant vos ongles avec des techniques professionnelles et des produits de qualité.",
    expertise: "Formée aux dernières techniques de l'onglerie, je maîtrise la pose de vernis semi-permanent, le nail art, la pose complète et tous les soins pour des mains et pieds parfaits.",
    values: "Qualité, écoute et bienveillance sont au cœur de mon approche. Chaque cliente bénéficie d'un service personnalisé et de conseils adaptés."
  },

  // SERVICES
  services: {
    title: "Mes prestations",
    subtitle: "Des mains et des pieds sublimes",
    categories: [
      {
        title: "Manucure",
        icon: "💅",
        color: "from-pink-500 to-rose-600",
        items: [
          {
            name: "Pose complète AVEC NAIL ART",
            duration: "2h",
            price: "55 €",
            description: "Pose complète de vernis semi-permanent avec nail art personnalisé"
          },
          {
            name: "Pose complète SANS Nail Art",
            duration: "2h",
            price: "55 €",
            description: "Pose complète de vernis semi-permanent"
          },
          {
            name: "Remplissage AVEC NAIL ART",
            duration: "2h",
            price: "50 €",
            description: "Remplissage et nail art"
          },
          {
            name: "Remplissage SANS NAIL ART",
            duration: "2h",
            price: "50 €",
            description: "Remplissage simple"
          },
          {
            name: "Gainage AVEC NAIL ART",
            duration: "1h 55min",
            price: "45 €",
            description: "Gainage et nail art"
          }
        ]
      },
      {
        title: "Beauté des pieds",
        icon: "🦶",
        color: "from-purple-500 to-pink-600",
        items: [
          {
            name: "Pose complète AVEC NAIL ART",
            duration: "1h 30min",
            price: "55 €",
            description: "À partir de 6 capsules - Pose complète avec nail art"
          },
          {
            name: "Pose complète SANS NAIL ART",
            duration: "1h 30min",
            price: "55 €",
            description: "À partir de 6 capsules - Pose complète"
          },
          {
            name: "Pose semi-complète AVEC NAIL ART",
            duration: "1h",
            price: "45 €",
            description: "À partir de 2 capsules - Pose semi-complète avec nail art"
          },
          {
            name: "Pose semi-complète SANS NAIL ART",
            duration: "1h",
            price: "45 €",
            description: "À partir de 2 capsules - Pose semi-complète"
          },
          {
            name: "Semi-permanent AVEC NAIL ART",
            duration: "1h",
            price: "40 €",
            description: "Vernis semi-permanent avec nail art"
          }
        ]
      }
    ]
  },

  // AVANTAGES
  advantages: {
    title: "Pourquoi choisir Elixir au Féminin ?",
    items: [
      {
        icon: "⭐",
        title: "Excellente réputation",
        description: "Note de 5/5 sur 12 avis clients"
      },
      {
        icon: "💅",
        title: "Spécialiste onglerie",
        description: "Expertise en nail art et soins des ongles"
      },
      {
        icon: "🎨",
        title: "Nail art personnalisé",
        description: "Créations uniques selon vos envies"
      },
      {
        icon: "✨",
        title: "Produits de qualité",
        description: "Marques professionnelles reconnues"
      },
      {
        icon: "🏠",
        title: "Cadre chaleureux",
        description: "Ambiance cosy et féminine"
      },
      {
        icon: "📅",
        title: "Réservation en ligne",
        description: "RDV 24/7 sur Planity"
      }
    ]
  },

  // AVIS CLIENTS
  testimonials: {
    title: "Vos avis",
    subtitle: "Note globale : 5,0/5 ⭐",
    rating: {
      global: 5.0,
      accueil: 4.9,
      proprete: 5.0,
      cadre: 5.0,
      qualite: 5.0,
      reviewCount: 12
    }
  },

  // HORAIRES
  schedule: {
    title: "Horaires d'ouverture",
    hours: [
      {
        day: "Lundi",
        slots: ["09:30 - 13:45", "14:30 - 18:30", "18:30 - 18:50"]
      },
      {
        day: "Mardi",
        slots: ["09:30 - 13:45", "14:30 - 18:30", "18:30 - 18:50"]
      },
      {
        day: "Mercredi",
        slots: ["14:15 - 18:15"]
      },
      {
        day: "Jeudi",
        slots: ["09:30 - 13:45", "14:30 - 18:30", "18:30 - 18:50"]
      },
      {
        day: "Vendredi",
        slots: ["09:30 - 13:45", "14:30 - 18:30"]
      },
      {
        day: "Samedi",
        slots: ["09:00 - 13:00"]
      },
      {
        day: "Dimanche",
        slots: ["Fermé"]
      }
    ]
  },

  // CONTACT
  contact: {
    title: "Me contacter",
    address: {
      street: "5 Place du Martray",
      city: "22460 Uzel",
      region: "Côtes-d'Armor, Bretagne"
    },
    phone: "À venir",
    email: "contact@elixiraufeminin.fr",
    booking: "https://www.planity.com/elixir-au-feminin-22460-uzel",
    cta: "Réserver sur Planity"
  },

  // SPÉCIALITÉS
  specialties: {
    title: "Mes spécialités",
    items: [
      {
        name: "Nail Art",
        icon: "🎨",
        description: "Créations artistiques personnalisées"
      },
      {
        name: "Semi-permanent",
        icon: "💅",
        description: "Tenue longue durée garantie"
      },
      {
        name: "Pose complète",
        icon: "✨",
        description: "Extensions d'ongles professionnelles"
      },
      {
        name: "Beauté des pieds",
        icon: "🦶",
        description: "Soins complets et pose"
      },
      {
        name: "Gainage",
        icon: "💎",
        description: "Renforcement des ongles naturels"
      },
      {
        name: "Remplissage",
        icon: "🔄",
        description: "Entretien régulier de vos ongles"
      }
    ]
  },

  // PROCESSUS
  process: {
    title: "Comment ça se passe ?",
    steps: [
      {
        number: "01",
        title: "Réservation",
        description: "Prenez RDV en ligne sur Planity 24/7"
      },
      {
        number: "02",
        title: "Accueil",
        description: "Je vous accueille dans mon institut chaleureux"
      },
      {
        number: "03",
        title: "Conseil",
        description: "Nous discutons de vos envies et besoins"
      },
      {
        number: "04",
        title: "Soin",
        description: "Je réalise votre prestation avec soin"
      },
      {
        number: "05",
        title: "Résultat",
        description: "Vous repartez avec des ongles sublimes !"
      }
    ]
  },

  // FAQ
  faq: [
    {
      question: "Combien de temps dure le vernis semi-permanent ?",
      answer: "Le vernis semi-permanent tient en moyenne 3 à 4 semaines selon la pousse de vos ongles et leur entretien."
    },
    {
      question: "Le nail art est-il inclus dans tous les tarifs ?",
      answer: "Non, le nail art est proposé en option. Vous pouvez choisir une pose avec ou sans nail art selon vos préférences et votre budget."
    },
    {
      question: "Faut-il prendre rendez-vous ?",
      answer: "Oui, je travaille uniquement sur rendez-vous. Vous pouvez réserver facilement en ligne sur Planity 24h/24 et 7j/7."
    },
    {
      question: "Utilisez-vous des produits de qualité ?",
      answer: "Oui, je travaille exclusivement avec des marques professionnelles reconnues pour garantir la qualité et la tenue de vos ongles."
    },
    {
      question: "Proposez-vous des soins pour hommes ?",
      answer: "Je suis spécialisée dans les soins féminins, mais n'hésitez pas à me contacter pour discuter de vos besoins."
    },
    {
      question: "Où vous situez-vous exactement ?",
      answer: "Je suis située au cœur d'Uzel, 5 Place du Martray (22460). Un parking est disponible à proximité."
    }
  ],

  // VALEURS
  values: [
    { text: "Qualité", icon: "✨" },
    { text: "Écoute", icon: "👂" },
    { text: "Bienveillance", icon: "💖" },
    { text: "Créativité", icon: "🎨" },
    { text: "Professionnalisme", icon: "⭐" }
  ],

  // POINTS FORTS
  highlights: [
    "Institut spécialisé en onglerie",
    "Note de 5/5 sur Planity",
    "Nail art personnalisé",
    "Produits professionnels",
    "Cadre chaleureux et féminin",
    "Horaires flexibles",
    "Réservation en ligne facile",
    "Au cœur d'Uzel"
  ],

  // SEO
  seo: {
    title: "Elixir au Féminin - Onglerie & Institut de beauté Uzel (22460)",
    description: "Institut de beauté et onglerie à Uzel. Spécialiste nail art, semi-permanent, pose complète. Note 5/5. RDV en ligne sur Planity. 5 Place du Martray, 22460 Uzel.",
    keywords: "onglerie Uzel, nail art, manucure Uzel, beauté des pieds, vernis semi-permanent, pose d'ongles, Elixir au Féminin, institut beauté 22460"
  },

  // THÈME
  theme: {
    primary: "pink", // Rose féminin
    secondary: "purple", // Violet élégant
    accent: "rose", // Rose doux
    mode: "light" // Mode clair pour un aspect frais et lumineux
  }
};