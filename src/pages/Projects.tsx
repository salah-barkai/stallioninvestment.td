import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, CheckCircle2, ArrowRight, Filter, Plane, Building2, Home, Leaf, Mountain, Briefcase, Zap } from 'lucide-react'
import { COMPANY_INFO, PROJECTS as SAMPLE_PROJECTS } from '../data/constants'
import { Link } from 'react-router-dom'
import { useProjects } from '../lib/supabase'

const statusOptions = [
  { value: 'Tous', label: 'Tous' },
  { value: 'completed', label: 'Terminé' },
  { value: 'in_progress', label: 'En cours' },
  { value: 'planned', label: 'Planifié' }
]

export default function Projects() {
  const [selectedStatus, setSelectedStatus] = useState('Tous')
  const { projects, loading, error } = useProjects()
  
  const statusColors: Record<string, string> = {
    'completed': 'bg-green-100 text-green-700',
    'in_progress': 'bg-blue-100 text-blue-700',
    'planned': 'bg-amber-100 text-amber-700'
  }

  const statusLabels: Record<string, string> = {
    'completed': 'Terminé',
    'in_progress': 'En cours',
    'planned': 'Planifié'
  }

  const fallbackProjects = SAMPLE_PROJECTS.map((project) => ({
    ...project,
    images: project.image ? [project.image] : ['/placeholder.jpg'],
    progress: 0,
    investment: 0,
    surface: 0
  }))

  const usingFallback = error != null || projects.length === 0
  const displayProjects = usingFallback ? fallbackProjects : projects
  const inProgressProjects = displayProjects.filter((project) => project.status === 'in_progress')
  const filteredProjects = displayProjects.filter((project) => {
    return selectedStatus === 'Tous' || project.status === selectedStatus
  })
  
  if (loading) {
    return (
      <div className="pt-24 lg:pt-32">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des projets...</p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="pt-24 lg:pt-32">
      {error && (
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-sm text-amber-800 text-center">
              Connexion à la base de données indisponible — affichage des projets enregistrés localement.
            </p>
          </div>
        </div>
      )}
      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-900 via-black to-gold-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
              <Briefcase className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-semibold tracking-wider">PORTEFEUILLE DE PROJETS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Nos Projets
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-gold-400 font-medium">Excellence & Impact</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
              Projets d'<span className="text-gold-400 font-semibold">envergure</span> à fort impact économique, pilotés avec expertise multidisciplinaire et <span className="text-gold-400 font-semibold">exécution rigoureuse</span>.
            </p>
          </motion.div>

          {/* Project Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Zap,
                title: 'Infrastructures & Transport',
                short: 'Aviation · Transport · Logistique',
                description: 'Projets structurants renforçant la connectivité et soutenant la croissance économique.'
              },
              {
                icon: Plane,
                title: 'Aviation & Hubs',
                short: 'Aéroports · Hubs régionaux · International',
                description: 'Développement d\'écosystèmes aéroportuaires modernes et optimisation de hubs stratégiques.'
              },
              {
                icon: Building2,
                title: 'Immobilier Premium',
                short: 'Résidentiel · Hôtellerie · Patrimoine',
                description: 'Projets immobiliers d\'exception alliant design, fonctionnalité et valorisation patrimoniale.'
              },
              {
                icon: Leaf,
                title: 'Agriculture & Agro-industrie',
                short: 'Production · Transformation · Distribution',
                description: 'Projets agricoles à grande échelle pour la sécurité alimentaire et chaînes de valeur durables.'
              },
              {
                icon: Mountain,
                title: 'Ressources Naturelles',
                short: 'Exploitation · Gouvernance · Durabilité',
                description: 'Valorisation responsable des ressources avec standards internationaux de durabilité.'
              },
              {
                icon: Home,
                title: 'Zones Économiques',
                short: 'Développement · Pôles industriels',
                description: 'Projets intégrés incluant zones économiques spéciales et initiatives urbaines.'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-gold-400/50 transition-all duration-300 overflow-hidden relative"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-600 to-gold-800 rounded-xl flex items-center justify-center mb-4 border border-gold-500/30 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">{category.title}</h3>
                  <p className="text-xs text-gold-300 font-medium uppercase tracking-wide mb-3">{category.short}</p>
                  <p className="text-sm text-white/80 leading-relaxed">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 bg-white border-b sticky top-20 lg:top-24 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                <Filter className="w-5 h-5 text-gold-600" />
              </div>
              <span className="font-semibold text-gray-900">Filtrer les projets</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">Statut:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white hover:border-gold-300 transition-colors"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-white via-gold-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Projets en cours</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Notre <span className="text-gold-600">Portfolio</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                id={`project-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-200 relative"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.images[0] || '/placeholder.jpg'} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-md ${statusColors[project.status]}`}>
                      {statusLabels[project.status] || project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 text-gold-600" />
                      <span className="font-medium">{project.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 text-gold-600" />
                      <span className="font-medium">{project.year}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs bg-gold-50 text-gold-700 px-3 py-1.5 rounded-full font-medium border border-gold-100"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">Aucun projet ne correspond à vos critères.</p>
            </div>
          )}
        </div>
      </section>

      {inProgressProjects.length > 0 && (
        <section className="pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Focus</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Projets en cours</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-3">
                Découvrez nos projets actuellement en progression, suivis avec rigueur et transparence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressProjects.map((project, index) => (
                <div key={`in-progress-${project.id}-${index}`} className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4 overflow-hidden rounded-3xl bg-white">
                    <img
                      src={project.images[0] || '/placeholder.jpg'}
                      alt={project.title}
                      className="h-52 w-full object-cover"
                    />
                  </div>
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold">En cours</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-3 py-2 text-xs font-medium text-gold-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 flex flex-wrap gap-4">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-gold-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-6">
              <ArrowRight className="w-4 h-4" />
              DISCUTONS DE VOTRE PROJET
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Vous avez un <span className="text-gold-600 font-bold">Projet</span> en Tête ?
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              Parlons de votre vision. Notre équipe est prête à transformer vos idées en <span className="text-gold-600 font-semibold">réalité</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-700 hover:to-gold-800 transition-all shadow-lg shadow-gold-500/30"
              >
                Démarrer un Projet
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold hover:border-gold-400 hover:text-gold-600 transition-colors"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
