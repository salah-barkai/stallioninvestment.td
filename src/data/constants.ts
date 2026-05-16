export const COMPANY_INFO = {
  name: "Stallion Investment",
  fullName: "Stallion Investment Sarl",
  tagline: "Votre partenaire immobilier de confiance au Tchad",
  founded: 2018,
  director: "Ndiya Kabadi",
  position: "Directeur Général",
  phone: "+235 94756464",
  phoneDisplay: "94 75 64 64",
  whatsapp: "+233203663877",
  whatsappDisplay: "+233 20 366 3877",
  email: "stallion@stallioninvestment.td",
  address: "Radisson Blu Hotel, N'Djamena, Tchad",
  hours: "Lun - Ven: 8h00 - 18h00 | Sam: 9h00 - 14h00",
  description: "Stallion Investment est une entreprise immobilière de premier plan au Tchad, spécialisée dans la construction, la vente, la location et l'installation de biens immobiliers résidentiels et commerciaux."
} as const

export const SERVICES = [
  {
    id: "construction",
    title: "Construction",
    description: "Construction de bâtiments résidentiels et commerciaux selon les normes internationales de qualité.",
    icon: "Building2",
    features: [
      "Bâtiments résidentiels",
      "Immeubles commerciaux",
      "Centres commerciaux",
      "Bureaux modernes",
      "Villas et maisons individuelles"
    ]
  },
  {
    id: "vente",
    title: "Vente Immobilière",
    description: "Achat et vente de propriétés premium avec accompagnement complet tout au long du processus.",
    icon: "Home",
    features: [
      "Appartements luxueux",
      "Villas et maisons",
      "Terrains constructibles",
      "Locaux commerciaux",
      "Conseil en investissement"
    ]
  },
  {
    id: "location",
    title: "Location",
    description: "Service de location de biens immobiliers pour particuliers et entreprises avec contrats flexibles.",
    icon: "Key",
    features: [
      "Appartements meublés",
      "Bureaux équipés",
      "Locaux commerciaux",
      "Résidences temporaires",
      "Gestion locative"
    ]
  },
  {
    id: "installation",
    title: "Installation",
    description: "Services d'aménagement et d'installation pour rendre vos espaces fonctionnels et accueillants.",
    icon: "Settings",
    features: [
      "Aménagement intérieur",
      "Installation électrique",
      "Plomberie et sanitaire",
      "Climatisation",
      "Sécurité et surveillance"
    ]
  }
] as const

export const PROJECTS = [
  {
    id: 1,
    title: "Noir Nouveau Résidences",
    category: "Résidentiel",
    location: "CIA, N'Djamena",
    description: "Résidence moderne de prestige sur 3000m² avec architecture contemporaine et équipements haut de gamme.",
    features: ["3000m²", "Architecture moderne", "Équipements premium", "Sécurité 24/7"],
    status: "Planifié",
    year: 2025,
    image: "/projet-cia.jpeg"
  },
  {
    id: 2,
    title: "Noir Nouveau Townhouses",
    category: "Résidentiel",
    location: "Gradia, N'Djamena",
    description: "Ensemble exclusif de townhouses modernes sur 900m² avec design contemporain et finitions haut de gamme.",
    features: ["900m²", "Townhouses modernes", "Design contemporain", "Finitions premium"],
    status: "Planifié",
    year: 2025,
    image: "/projet-gradia.jpeg"
  },
  {
    id: 3,
    title: "Noir Nouveau Villas",
    category: "Résidentiel",
    location: "Béguinage, N'Djamena",
    description: "Ensemble prestigieux de villas de luxe sur 900m² avec architecture moderne et espaces de vie exceptionnels.",
    features: ["900m²", "Villas de luxe", "Architecture moderne", "Espaces de vie premium"],
    status: "Planifié",
    year: 2025,
    image: "/projet-beguinage.jpeg"
  }
] as const

export const STATS = [
  { value: "150+", label: "Projets Réalisés" },
  { value: "200+", label: "Clients Satisfaits" },
  { value: "25+", label: "Partenaires" },
  { value: "6+", label: "Années d'Expérience" }
] as const

export const TESTIMONIALS = [
  {
    name: "Ahmed Mahamat",
    role: "Propriétaire",
    content: "Stallion Investment a construit notre maison familiale avec un professionnalisme exemplaire. La qualité des finitions et le respect des délais ont dépassé nos attentes.",
    rating: 5
  },
  {
    name: "Marie-Claire Ngaro",
    role: "Directrice d'entreprise",
    content: "Nous avons loué nos bureaux via Stallion Investment. Le service client est impeccable et les locaux sont exactement comme promis.",
    rating: 5
  },
  {
    name: "Jean-Pierre Djonkam",
    role: "Investisseur",
    content: "Excellent accompagnement pour mon investissement immobilier au Tchad. L'équipe connaît parfaitement le marché local.",
    rating: 5
  }
] as const

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/secteurs-investissements", label: "Secteurs d'Investissements" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" }
] as const
