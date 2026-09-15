import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Home, Key, Settings, Check, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '../data/constants'
import { Link } from 'react-router-dom'

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-900 via-black to-gold-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6"
          >
            <Settings className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-semibold tracking-wider">EXPERTISE & EXCELLENCE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
              Nos Services
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-gold-400 font-medium text-lg">Cycle complet de vie des projets</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Une <span className="text-gold-400 font-semibold">offre intégrée</span> de services stratégiques, 
            de la <span className="text-gold-400 font-semibold">conception</span> à 
            l'<span className="text-gold-400 font-semibold">exploitation</span>
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-white via-gold-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Notre Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Solutions sur mesure pour chaque projet</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                number: '01',
                title: 'Structuration et ingénierie de projets',
                description: 'Conception et structuration de projets complexes avec modèles économiques solides et stratégies de financement optimisées (PPP).',
                highlight: 'PPP & Structuration'
              },
              {
                icon: Building2,
                number: '02',
                title: 'Investissement et financement',
                description: 'Mobilisation de capitaux et accès aux financements institutionnels. Intervention en tant qu\'investisseur ou arrangeur financier.',
                highlight: 'Capital & Financement'
              },
              {
                icon: Home,
                number: '03',
                title: 'Développement d\'infrastructures',
                description: 'Pilotage de projets stratégiques : aviation, transport, énergie, immobilier, hôtellerie et agriculture.',
                highlight: 'Projets Stratégiques'
              },
              {
                icon: Key,
                number: '04',
                title: 'Conseil stratégique institutionnel',
                description: 'Accompagnement des gouvernements dans la définition de politiques sectorielles et programmes structurants.',
                highlight: 'Conseil & Stratégie'
              },
              {
                icon: Check,
                number: '05',
                title: 'Gestion et exécution opérationnelle',
                description: 'Gestion rigoureuse de la planification à la livraison. Respect des délais, budgets et standards internationaux.',
                highlight: 'Excellence Opérationnelle'
              },
              {
                icon: ArrowRight,
                number: '06',
                title: 'Développement territorial durable',
                description: 'Croissance locale, création d\'emplois, renforcement des chaînes de valeur et pratiques durables.',
                highlight: 'Impact & Durabilité'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gold-200 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Header with number and icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-600 to-gold-800 rounded-xl flex items-center justify-center border border-gold-500/50 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-gold-200/50">{service.number}</span>
                  </div>

                  {/* Highlight badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold mb-3">
                    {service.highlight}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-white to-gold-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-6">
              <ArrowRight className="w-4 h-4" />
              Parlons de votre projet
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Prêt à <span className="text-gold-600">développer</span> votre projet ?
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour étudier votre projet 
              et vous proposer la meilleure <span className="text-gold-600 font-semibold">solution stratégique</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-700 hover:to-gold-800 transition-all shadow-lg shadow-gold-500/30"
              >
                Nous Contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-gray-800 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/30"
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
