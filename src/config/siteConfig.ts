export const siteConfig = {
  // IDENTITÉ
  companyName: "Barb&Kut",
  tagline: "Barbier & Salon de coiffure pour hommes",
  slogan: "L'art du rasage traditionnel rencontre le style moderne",
  founders: "Frères Moussaoui",
  
  // HERO
  hero: {
    title: "Barb&Kut",
    subtitle: "Barbier & Coiffure Homme",
    tagline: "Design rétro • Équipe dynamique • Ambiance conviviale",
    description: "Bienvenue chez Barb&Kut, votre barbier au design rétro chaleureux. Fauteuils vintage, ambiance conviviale et équipe passionnée pour prendre soin de votre style.",
    cta: "Prendre rendez-vous"
  },

  // SALONS
  locations: {
    title: "Nos salons",
    subtitle: "Deux adresses pour vous servir",
    salons: [
      {
        name: "Loudéac",
        address: {
          street: "9 rue de Moncontour",
          city: "22600 Loudéac",
          region: "Côtes-d'Armor"
        },
        phone: "06 77 58 85 29",
        email: "loudeac@barbkut.fr",
        team: "Moussaoui et son équipe",
        schedule: [
          { day: "Lundi", hours: "Fermé" },
          { day: "Mardi", hours: "10:00 - 19:00" },
          { day: "Mercredi", hours: "10:00 - 19:00" },
          { day: "Jeudi", hours: "10:00 - 19:00" },
          { day: "Vendredi", hours: "10:00 - 19:00" },
          { day: "Samedi", hours: "09:00 - 19:00" },
          { day: "Dimanche", hours: "Fermé" }
        ],
        booking: "https://www.planity.com/barb-kut-22600-loudeac"
      },
      {
        name: "Pontivy",
        address: {
          street: "12 Place du Martray",
          city: "56300 Pontivy",
          region: "Morbihan"
        },
        phone: "À venir",
        email: "pontivy@barbkut.fr",
        team: "Équipe Pontivy",
        schedule: [
          { day: "Lundi", hours: "Fermé" },
          { day: "Mardi", hours: "10:00 - 19:00" },
          { day: "Mercredi", hours: "10:00 - 19:00" },
          { day: "Jeudi", hours: "10:00 - 19:00" },
          { day: "Vendredi", hours: "10:00 - 19:00" },
          { day: "Samedi", hours: "09:00 - 19:00" },
          { day: "Dimanche", hours: "Fermé" }
        ],
        booking: "https://www.treatwell.fr/salon/barb-kut/"
      }
    ]
  },

  // À PROPOS
  about: {
    title: "L'histoire Barb&Kut",
    story: "Fondé par les frères Moussaoui, Barb&Kut est né d'une passion pour l'art du barbier traditionnel allié au style moderne. Après le succès de notre premier salon à Pontivy, nous avons ouvert une seconde adresse à Loudéac pour répondre à la demande croissante.",
    vision: "Nous avons créé bien plus qu'un simple salon de coiffure : un véritable lieu de vie où les hommes peuvent prendre soin d'eux dans une ambiance conviviale et décontractée.",
    atmosphere: "Design rétro chaleureux avec fauteuils de barbier vintage, murs de briques apparentes, boiseries et moulures. Un coin détente avec TV et console vous attend pendant votre rdv.",
    team: "Notre équipe jeune et dynamique est composée de barbiers passionnés et expérimentés, formés aux techniques traditionnelles comme aux tendances actuelles."
  },

  // SERVICES
  services: {
    title: "Nos services",
    subtitle: "De la coupe classique au style moderne",
    categories: [
      {
        title: "Coupes",
        icon: "✂️",
        color: "from-amber-600 to-orange-700",
        items: [
          "Coupe classique",
          "Coupe moderne",
          "Dégradé",
          "Taper fade",
          "Coupe aux ciseaux",
          "Coupe tondeuse",
          "Coiffage et styling"
        ]
      },
      {
        title: "Barbe",
        icon: "🪒",
        color: "from-red-600 to-rose-700",
        items: [
          "Taille de barbe",
          "Rasage traditionnel",
          "Contour de barbe",
          "Création de moustache",
          "Entretien barbe",
          "Soins de la barbe"
        ]
      },
      {
        title: "Soins",
        icon: "💆",
        color: "from-slate-600 to-gray-700",
        items: [
          "Shampoing",
          "Masque capillaire",
          "Soin du cuir chevelu",
          "Coloration barbe",
          "Décoloration",
          "Traitement cheveux"
        ]
      },
      {
        title: "Forfaits",
        icon: "⭐",
        color: "from-emerald-600 to-teal-700",
        items: [
          "Coupe + Barbe",
          "Coupe + Shampoing",
          "Barbe + Rasage",
          "Forfait complet",
          "Package premium"
        ]
      }
    ]
  },

  // AMBIANCE
  atmosphere: {
    title: "L'ambiance Barb&Kut",
    subtitle: "Un lieu unique où tradition et modernité se rencontrent",
    features: [
      {
        icon: "🪑",
        title: "Fauteuils vintage",
        description: "Authentiques fauteuils de barbier d'époque"
      },
      {
        icon: "🧱",
        title: "Murs de briques",
        description: "Briques apparentes pour un style industriel"
      },
      {
        icon: "🪵",
        title: "Boiseries & moulures",
        description: "Décoration rétro avec finitions soignées"
      },
      {
        icon: "📺",
        title: "Coin détente",
        description: "TV et console pour patienter confortablement"
      },
      {
        icon: "🎵",
        title: "Ambiance musicale",
        description: "Playlist soigneusement sélectionnée"
      },
      {
        icon: "☕",
        title: "Boissons offertes",
        description: "Café, thé ou soft pendant votre visite"
      }
    ]
  },

  // ÉQUIPE
  team: {
    title: "L'équipe",
    subtitle: "Des barbiers passionnés à votre service",
    description: "Notre équipe jeune et dynamique est formée aux techniques traditionnelles du barbier tout en maîtrisant les tendances actuelles. Professionnels, à l'écoute et talentueux, nos barbiers mettent tout en œuvre pour votre satisfaction.",
    values: [
      { text: "Professionnalisme", icon: "👔" },
      { text: "Passion", icon: "❤️" },
      { text: "Écoute", icon: "👂" },
      { text: "Talent", icon: "✨" },
      { text: "Convivialité", icon: "🤝" },
      { text: "Dynamisme", icon: "⚡" }
    ]
  },

  // AVANTAGES
  advantages: {
    title: "Pourquoi choisir Barb&Kut ?",
    items: [
      {
        icon: "⭐",
        title: "Excellente réputation",
        description: "Plus de 100 avis 5 étoiles"
      },
      {
        icon: "🎨",
        title: "Design rétro unique",
        description: "Ambiance chaleureuse et authentique"
      },
      {
        icon: "👨‍🔧",
        title: "Barbiers expérimentés",
        description: "Équipe jeune et talentueuse"
      },
      {
        icon: "📍",
        title: "2 salons",
        description: "Loudéac et Pontivy"
      },
      {
        icon: "💰",
        title: "Tarifs corrects",
        description: "Rapport qualité/prix excellent"
      },
      {
        icon: "📅",
        title: "Réservation en ligne",
        description: "RDV 24/7 sur Planity"
      },
      {
        icon: "🎮",
        title: "Coin détente",
        description: "TV et console pour patienter"
      },
      {
        icon: "🤝",
        title: "Ambiance conviviale",
        description: "Lieu d'échange et de rencontre"
      }
    ]
  },

  // AVIS CLIENTS
  testimonials: {
    title: "Ce que disent nos clients",
    subtitle: "Plus de 100 avis 5 étoiles",
    reviews: [
      {
        name: "Client satisfait",
        rating: 5,
        text: "Super prestation! Je suis venu pour la première fois sans attente particulière et suis reparti extrêmement satisfait. Un bon accueil, une super ambiance et un dégradé parfaitement exécuté 👌"
      },
      {
        name: "Client régulier",
        rating: 5,
        text: "Toujours impeccable, Anatole me coiffe régulièrement, toujours ponctuel aux rendez-vous et coupe soignée, très sympa, efficace, que dire de plus, je recommande!!!"
      },
      {
        name: "Excellent accueil",
        rating: 5,
        text: "Une expérience au top dans ce salon de coiffure ! L'accueil est chaleureux et professionnel, et l'ambiance est à la fois conviviale et stylée."
      },
      {
        name: "Très satisfait",
        rating: 5,
        text: "Très satisfaite du coiffeur qui a coupé les cheveux de mon fils de 5 ans! Très pro, à l'écoute, de bons conseils et très patient. J'ai trouvé le salon de coiffure pour mon fils !"
      }
    ]
  },

  // RÉSERVATION
  booking: {
    title: "Réservez votre rendez-vous",
    subtitle: "Prise de RDV en ligne 24/7",
    description: "Réservez votre créneau en quelques clics sur Planity. Les places se remplissent vite, n'attendez plus !",
    cta: "Réserver maintenant",
    note: "Vous pouvez également nous appeler directement"
  },

  // FAQ
  faq: [
    {
      question: "Faut-il prendre rendez-vous ?",
      answer: "Oui, nous recommandons fortement de prendre rendez-vous car les places se remplissent rapidement. Vous pouvez réserver en ligne 24/7 sur Planity ou nous appeler."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont très corrects et varient selon les prestations. Contactez-nous ou consultez notre page de réservation pour plus de détails."
    },
    {
      question: "Acceptez-vous les enfants ?",
      answer: "Absolument ! Nous avons l'habitude de couper les cheveux des enfants. Nos barbiers sont patients et professionnels avec les plus jeunes."
    },
    {
      question: "Puis-je patienter confortablement ?",
      answer: "Oui, nous avons un coin détente avec TV et console de jeux. Vous pouvez aussi profiter d'un café ou d'un soft offert."
    },
    {
      question: "Faites-vous le rasage traditionnel ?",
      answer: "Oui, nous proposons le rasage traditionnel au rasoir avec serviette chaude, dans la pure tradition du barbier."
    },
    {
      question: "Êtes-vous accessibles aux PMR ?",
      answer: "Oui, notre salon de Loudéac dispose d'un parking PMR et d'une entrée accessible."
    }
  ],

  // RÉSEAUX SOCIAUX
  social: {
    instagram: "@barb_kut",
    facebook: "Barb&Kut",
    followers: "3 500+"
  },

  // SEO
  seo: {
    title: "Barb&Kut - Barbier Rétro | Loudéac & Pontivy",
    description: "Barbier & salon de coiffure pour hommes à Loudéac et Pontivy. Design rétro chaleureux, équipe jeune et dynamique. Coupe, barbe, rasage traditionnel. RDV en ligne.",
    keywords: "barbier Loudéac, barbier Pontivy, coiffeur homme, rasage traditionnel, Barb&Kut, salon rétro, taille barbe, dégradé, fade, 22600, 56300"
  },

  // THÈME
  theme: {
    primary: "amber", // Cuivre/Or rétro
    secondary: "slate", // Gris ardoise industriel
    accent: "red", // Rouge barbier classique
    mode: "dark" // Mode sombre pour ambiance rétro
  }
};