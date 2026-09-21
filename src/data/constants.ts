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
    status: "planned",
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
    status: "planned",
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
    status: "planned",
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
  { href: "/conventions", label: "Conventions" },
  { href: "/secteurs-investissements", label: "Investissements" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" }
] as const


// Message unique affiché pour l'ensemble des conventions
export const CONVENTION_STATEMENT =
  "Un partenariat et une convention signés avec des partenaires étrangers."

// Article mis en avant sur la page d'accueil
export const LATEST_NEWS = {
  tag: "Actualité",
  date: "Septembre 2026",
  location: "N'Djamena, Tchad",
  title: "Signature d'une nouvelle convention de partenariat",
  excerpt:
    "Stallion Investment a réuni ses équipes et ses partenaires autour d'une séance de travail consacrée à la signature d'une nouvelle convention. Une étape de plus dans la structuration de nos projets et le renforcement de notre réseau de partenaires.",
  image: "/conventions/c6-03.jpeg",
  link: "/conventions#convention-6",
  linkLabel: "Voir les photos de la séance"
} as const

// Séances de signature (photos)
export const CONVENTIONS = [
  {
    id: "convention-1",
    location: "Maroc",
    year: 2025,
    images: [
      "/conventions/c1-01.jpeg",
      "/conventions/c1-02.jpeg",
      "/conventions/c1-03.jpeg",
      "/conventions/c1-05.jpeg",
      "/conventions/c1-04.jpeg",
      "/conventions/c1-07.jpeg",
      "/conventions/c1-06.jpeg"
    ]
  },
  {
    id: "convention-2",
    location: "Casablanca, Maroc",
    year: 2025,
    images: ["/conventions/c2-01.jpeg", "/conventions/c2-02.jpeg"]
  },
  {
    id: "convention-3",
    location: "Casablanca, Maroc",
    year: 2025,
    images: ["/conventions/c3-01.jpeg", "/conventions/c3-02.jpeg"]
  },
  {
    id: "convention-4",
    location: "Maroc",
    year: 2025,
    images: ["/conventions/c4-02.jpeg", "/conventions/c4-01.jpeg"]
  },
  {
    id: "convention-5",
    location: "Maroc",
    year: 2025,
    images: ["/conventions/c5-01.jpeg", "/conventions/c5-02.jpeg", "/conventions/c5-03.jpeg"]
  },
  {
    id: "convention-6",
    location: "N'Djamena, Tchad",
    year: 2026,
    images: [
      "/conventions/c6-01.jpeg",
      "/conventions/c6-02.jpeg",
      "/conventions/c6-03.jpeg",
      "/conventions/c6-04.jpeg",
      "/conventions/c6-05.jpeg"
    ]
  }
] as const

// Partenaires étrangers de Stallion Investment
export const PARTNERS = [
  {
    id: "gtic-maroc",
    name: "GTIC Maroc",
    fullName: "Groupement des Techniques Industrielles et Civiles Maroc",
    country: "Maroc",
    sector: "BTP & Génie civil",
    description:
      "Entreprise marocaine de bâtiment et travaux publics spécialisée en génie civil, assainissement et électricité. Fondée en 1999, elle est implantée à Casablanca et El Jadida.",
    website: "https://gtic.ma",
    websiteLabel: "gtic.ma",
    logo: "/partners/gtic.jpeg"
  },
  {
    id: "futur-union",
    name: "Futur Union",
    fullName: "Futur Union",
    country: "International",
    sector: "Développement & structuration de projets",
    description:
      "Partenaire étranger accompagnant Stallion Investment dans le développement, la structuration et le financement de ses projets.",
    website: "https://futur-union.com",
    websiteLabel: "futur-union.com"
  },
  {
    id: "travaux-lahlou",
    name: "Sté Nouvelle des Travaux Lahlou et Consorts",
    fullName: "Société Nouvelle des Travaux Lahlou et Consorts",
    country: "Maroc",
    sector: "Travaux publics & Construction",
    description:
      "Entreprise marocaine de travaux publics et de construction — bâtiment, voirie et réseaux divers (VRD) et infrastructures — basée à Casablanca.",
    website: "",
    websiteLabel: ""
  },
  {
    id: "bank-assafa",
    name: "Bank Assafa",
    fullName: "Bank Assafa — Groupe Attijariwafa Bank",
    country: "Maroc",
    sector: "Banque participative",
    description:
      "Banque participative 100% marocaine, filiale du groupe Attijariwafa Bank (créée en 2017). Forte de plus de 80 agences, elle est spécialiste du financement participatif (Mourabaha) et de l'épargne conforme aux avis du Conseil Supérieur des Oulémas.",
    website: "https://www.bankassafa.com",
    websiteLabel: "bankassafa.com"
  },
  {
    id: "amesis",
    name: "AMESIS",
    fullName: "Africa & Middle East Sustainable Investment Solutions",
    country: "Maroc",
    sector: "Conseil en investissement & développement de projets",
    description:
      "Cabinet basé à Rabat jouant un rôle d'interface stratégique entre investisseurs, porteurs de projets et partenaires institutionnels en Afrique et au Moyen-Orient. Plus de 20 ans d'expérience en développement d'affaires et partenariats internationaux, sur l'industrie, les énergies renouvelables, les technologies et l'immobilier.",
    website: "",
    websiteLabel: "",
    logo: "/partners/amesis.jpeg",
    pdf: "/documents/amesis-presentation.pdf"
  },
  {
    id: "fsppi",
    name: "FSPPI",
    fullName: "Fonds Spécial pour la Préparation des Projets d'Infrastructure au Tchad",
    country: "Tchad",
    sector: "Préparation de projets d'infrastructure",
    description:
      "Fonds public tchadien dédié à la préparation et à la structuration des projets d'infrastructure, en partenariat avec des institutions telles que l'AUDA-NEPAD pour accompagner le développement des infrastructures nationales.",
    website: "https://fsppi.org",
    websiteLabel: "fsppi.org",
    logo: "/partners/fsppi.png"
  }
] as const
