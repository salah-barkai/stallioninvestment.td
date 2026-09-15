import { motion } from 'framer-motion'
import { 
  Building2, 
  Home, 
  Leaf, 
  Factory, 
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Globe,
  Users,
  MapPin,
  Key,
  Settings,
  Train,
  Cpu,
  Sprout
} from 'lucide-react'
import { Link } from 'react-router-dom'

const investmentSectors = [
  {
    id: 'immobilier-residentiel',
    icon: Home,
    title: 'Immobilier Résidentiel',
    description: 'Développement de projets résidentiels de luxe à N\'Djamena, des villas aux appartements haut de gamme.',
    color: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    subSectors: [
      {
        name: 'Villas de Luxe',
        description: 'Ensemble prestigieux de villas modernes avec architecture contemporaine et espaces de vie exceptionnels.',
        icon: Home,
        investments: 'Villas, piscines, jardins, sécurité',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80'
      },
      {
        name: 'Townhouses Modernes',
        description: 'Ensemble exclusif de townhouses avec design contemporain et finitions haut de gamme.',
        icon: Building2,
        investments: 'Townhouses, espaces verts, parkings',
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80'
      },
      {
        name: 'Résidences Services',
        description: 'Résidences modernes avec services intégrés et équipements premium.',
        icon: Building2,
        investments: 'Appartements, conciergerie, espaces communs',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80'
      }
    ],
    stats: {
      projects: '15+',
      investment: '300+ Millions FCFA',
      locations: '5',
      units: '200+'
    }
  },
  {
    id: 'immobilier-commercial',
    icon: Building2,
    title: 'Immobilier Commercial',
    description: 'Développement de bureaux, centres commerciaux et locaux commerciaux au cœur de N\'Djamena.',
    color: 'from-blue-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    subSectors: [
      {
        name: 'Bureaux Modernes',
        description: 'Immeubles de bureaux avec design moderne et équipements haut de gamme.',
        icon: Building2,
        investments: 'Bureaux, parkings, sécurité, climatisation',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80'
      },
      {
        name: 'Centres Commerciaux',
        description: 'Espaces commerciaux dynamiques avec boutiques et services intégrés.',
        icon: ShoppingBag,
        investments: 'Boutiques, restaurants, parkings, sécurité',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80'
      },
      {
        name: 'Locaux Spécialisés',
        description: 'Espaces adaptés pour activités spécifiques avec aménagement sur mesure.',
        icon: Factory,
        investments: 'Entrepôts, showrooms, ateliers, locaux techniques',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80'
      }
    ],
    stats: {
      projects: '12+',
      investment: '180+ Millions FCFA',
      locations: '4',
      surface: '25000m²+'
    }
  },
  {
    id: 'services-immobiliers',
    icon: Settings,
    title: 'Services Immobiliers',
    description: 'Services complets de gestion, location et installation pour optimiser vos investissements.',
    color: 'from-gold-600 to-gold-800',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    subSectors: [
      {
        name: 'Gestion Locative',
        description: 'Gestion complète de biens immobiliers pour particuliers et entreprises.',
        icon: Key,
        investments: 'Gestion, maintenance, location, administratif',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80'
      },
      {
        name: 'Installation & Aménagement',
        description: 'Services d\'aménagement et installation pour espaces fonctionnels et modernes.',
        icon: Settings,
        investments: 'Aménagement, électrique, plomberie, climatisation',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80'
      },
      {
        name: 'Conseil Immobilier',
        description: 'Expertise conseil pour investissements immobiliers et optimisation patrimoniale.',
        icon: Users,
        investments: 'Conseil, expertise, accompagnement, négociation',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80'
      }
    ],
    stats: {
      projects: '100+',
      investment: '30+ Millions FCFA',
      clients: '200+',
      satisfaction: '98%'
    }
  },
  {
    id: 'developpement-territorial',
    icon: MapPin,
    title: 'Développement Territorial',
    description: 'Participation au développement urbain de N\'Djamena avec projets structurants.',
    color: 'from-purple-600 to-purple-800',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    subSectors: [
      {
        name: 'Aménagement Urbain',
        description: 'Participation aux projets d\'aménagement et de développement urbain.',
        icon: MapPin,
        investments: 'Aménagement, voiries, réseaux, espaces publics',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80'
      },
      {
        name: 'Infrastructures Locales',
        description: 'Développement d\'infrastructures de soutien aux projets immobiliers.',
        icon: Building2,
        investments: 'Voiries, réseaux, éclairage, sécurité',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80'
      },
      {
        name: 'Éco-quartiers',
        description: 'Développement de quartiers durables avec espaces verts et services intégrés.',
        icon: Leaf,
        investments: 'Quartiers, espaces verts, services, durabilité',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80'
      }
    ],
    stats: {
      projects: '8+',
      investment: '120+ Millions FCFA',
      quartiers: '3',
      surface: '50000m²+'
    }
  },
  {
    id: 'agriculture',
    icon: Sprout,
    title: 'Agriculture & Agro-industrie',
    description: 'Développement de projets agricoles modernes et d’industries de transformation agroalimentaire au Tchad.',
    color: 'from-green-600 to-green-800',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    subSectors: [
      {
        name: 'Agriculture Moderne',
        description: 'Exploitations agricoles mécanisées avec systèmes d’irrigation modernes.',
        icon: Sprout,
        investments: 'Fermes, équipements, irrigation, serres',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80'
      },
      {
        name: 'Agro-industrie',
        description: 'Unités de transformation de produits agricoles pour la valeur ajoutée locale.',
        icon: Factory,
        investments: 'Usines, équipements, laboratoires, stockage',
        image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&q=80'
      },
      {
        name: 'Élevage & Pêche',
        description: 'Élevage moderne et infrastructures de conservation du poisson et produits aquatiques.',
        icon: Factory,
        investments: 'Élevages, abattoirs, unités de transformation, chaîne du froid',
        image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80'
      }
    ],
    stats: {
      projects: '20+',
      investment: '150+ Millions FCFA',
      locations: '8',
      surface: '10000ha+'
    }
  },
  {
    id: 'transport-ferroviaire',
    icon: Train,
    title: 'Transport Ferroviaire',
    description: 'Construction et modernisation de lignes ferroviaires pour désenclaver les régions et faciliter le transport.',
    color: 'from-blue-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
    subSectors: [
      {
        name: 'Lignes Ferroviaires',
        description: 'Construction de nouvelles lignes ferroviaires reliant les principales villes du Tchad.',
        icon: Train,
        investments: 'Voies ferrées, gares, signalisation, électrification',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80'
      },
      {
        name: 'Infrastructure Ferroviaire',
        description: 'Développement des infrastructures de soutien au transport ferroviaire.',
        icon: Building2,
        investments: 'Gares, entrepôts, ateliers, ponts, tunnels',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80'
      },
      {
        name: 'Matériel Roulant',
        description: 'Acquisition et maintenance de trains modernes pour le transport de passagers et marchandises.',
        icon: Train,
        investments: 'Locomotives, wagons, maintenance, formation',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80'
      }
    ],
    stats: {
      projects: '5+',
      investment: '500+ Millions FCFA',
      km: '1500+',
      stations: '25+'
    }
  },
  {
    id: 'technologie',
    icon: Cpu,
    title: 'Technologie & Innovation',
    description: 'Développement de solutions technologiques innovantes pour accélérer la transformation numérique.',
    color: 'from-purple-600 to-purple-800',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    subSectors: [
      {
        name: 'Infrastructures Numériques',
        description: 'Développement de centres de données et réseaux de télécommunications haut débit.',
        icon: Cpu,
        investments: 'Data centers, fibre optique, réseaux 5G, cloud',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80'
      },
      {
        name: 'Fintech & Services Digitaux',
        description: 'Développement de solutions financières numériques et services digitaux innovants.',
        icon: DollarSign,
        investments: 'Plateformes, applications, sécurité, IA',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80'
      },
      {
        name: 'Tech Education',
        description: 'Formation aux compétences numériques et développement de talents technologiques locaux.',
        icon: Users,
        investments: 'Centres de formation, programmes, certifications',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80'
      }
    ],
    stats: {
      projects: '15+',
      investment: '80+ Millions FCFA',
      startups: '25+',
      talents: '1000+'
    }
  }
]

export default function SecteursInvestissements() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold-900 via-black to-gold-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
              <TrendingUp className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-semibold tracking-wider">INVESTISSEMENTS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Nos Investissements
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-gold-400 font-medium">Diversification & Excellence</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
              Une <span className="text-gold-400 font-semibold">expertise multisectorielle</span> couvrant le 
              <span className="text-gold-400 font-semibold"> immobilier de luxe</span>, 
              <span className="text-gold-400 font-semibold"> l'agriculture moderne</span>, 
              <span className="text-gold-400 font-semibold"> le transport ferroviaire</span> et la 
              <span className="text-gold-400 font-semibold"> technologie innovante</span> au Tchad.
            </p>
          </motion.div>

          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: '75+', label: 'Projets Réalisés' },
              { value: '1.3+ Millions FCFA', label: 'Investissements' },
              { value: '7+', label: 'Secteurs' },
              { value: '500+', label: 'Clients Satisfaits' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <p className="text-2xl sm:text-3xl font-bold text-gold-300">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-white via-gold-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Nos Domaines d'Expertise Multisectorielle</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
              Une <span className="text-gold-600">Excellence</span> au Service du Développement
            </h2>
          </div>

          <div className="space-y-16">
            {investmentSectors.map((sector, sectorIndex) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectorIndex * 0.1 }}
                className="group"
              >
                {/* Sector Header with Image */}
                <div className="bg-gradient-to-r from-gray-50 to-gold-50/30 rounded-2xl overflow-hidden mb-8 border border-gold-100">
                  <div className="relative h-64 lg:h-80">
                    <img 
                      src={sector.image} 
                      alt={sector.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <sector.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                            {sector.title}
                          </h3>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            {sector.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Sector Stats on Image */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(sector.stats).map(([key, value]) => (
                          <div key={key} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <p className="text-xl font-bold text-gold-300">{value}</p>
                            <p className="text-xs text-gray-300 capitalize">
                              {key === 'projects' ? 'Projets' : 
                               key === 'investment' ? 'Investissements' : 
                               key === 'locations' ? 'Localisations' : 
                               key === 'units' ? 'Unités' : 
                               key === 'surface' ? 'Surface' : 
                               key === 'clients' ? 'Clients' : 
                               key === 'satisfaction' ? 'Satisfaction' : 
                               key === 'quartiers' ? 'Quartiers' : 
                               key === 'km' ? 'Kilomètres' : 
                               key === 'stations' ? 'Stations' : 
                               key === 'startups' ? 'Startups' : 
                               key === 'talents' ? 'Talents' : key}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-sectors with Images */}
                <div className="grid md:grid-cols-2 gap-6">
                  {sector.subSectors.map((subSector, subIndex) => (
                    <motion.div
                      key={subSector.name}
                      initial={{ opacity: 0, x: subIndex % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (sectorIndex * 0.1) + (subIndex * 0.05) }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-gold-200 transition-all duration-300 group"
                    >
                      <div className="relative h-40">
                        <img 
                          src={subSector.image} 
                          alt={subSector.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${sector.color} rounded-lg flex items-center justify-center`}>
                            <subSector.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                          {subSector.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {subSector.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gold-600 font-medium">
                          <DollarSign className="w-3 h-3" />
                          <span>{subSector.investments}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gold-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              INVESTISSEZ AVEC NOUS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Prêt à <span className="text-gold-600">Investir</span> dans l'Avenir ?
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              Rejoignez-nous pour développer des projets structurants qui transforment 
              <span className="text-gold-600 font-medium"> le Tchad</span> et créent de la 
              <span className="text-gold-600 font-medium"> valeur durable</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-700 hover:to-gold-800 transition-all shadow-lg shadow-gold-500/30"
              >
                Discuter d'un Projet
                <TrendingUp className="w-5 h-5" />
              </Link>
              <Link
                to="/projets"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold hover:border-gold-400 hover:text-gold-600 transition-colors"
              >
                Voir Nos Projets
                <Building2 className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
