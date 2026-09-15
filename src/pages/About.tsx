import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '../data/constants'
import { Link } from 'react-router-dom'

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, avec des standards de qualité internationaux."
  },
  {
    icon: Eye,
    title: "Transparence",
    description: "Une communication claire et honnête à chaque étape de votre projet immobilier."
  },
  {
    icon: Award,
    title: "Intégrité",
    description: "Des pratiques commerciales éthiques et une intégrité sans compromis."
  },
  {
    icon: Users,
    title: "Client d'Abord",
    description: "Votre satisfaction est notre priorité absolue. Nous vous accompagnons du début à la fin."
  }
]

const team = [
  {
    name: "Ndiya Kabadi",
    role: "Directeur Général",
    description: "Visionnaire et leader, M. Kabadi guide Stallion Investment vers l'excellence depuis sa création."
  },
  {
    name: "Équipe Technique",
    role: "Ingénieurs & Architectes",
    description: "Des professionnels qualifiés qui garantissent la qualité de chaque construction."
  },
  {
    name: "Équipe Commerciale",
    role: "Conseillers Immobiliers",
    description: "Des experts du marché tchadien pour vous accompagner dans vos choix."
  },
  {
    name: "Équipe Administrative",
    role: "Support Client",
    description: "À votre service pour une expérience client fluide et agréable."
  }
]

export default function About() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-900 via-black to-gold-800 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-4">
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm font-semibold tracking-wider">NOTRE HISTOIRE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-6">
                <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                  {COMPANY_INFO.name}
                </span>
              </h1>

              <div className="text-base text-white/90 leading-relaxed">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <p className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-4">
                    Né d'une vision : bâtir des <span className="text-gold-400 font-bold">projets structurants</span> transformant durablement les économies africaines.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Approche <span className="text-gold-300 font-semibold">ambitieuse</span>, <span className="text-gold-300 font-semibold">rigoureuse</span> et ancrée dans la réalité des territoires. 
                    Catalyseur dans les <span className="text-gold-300 font-semibold">infrastructures, aviation, transport, immobilier, agriculture</span> et <span className="text-gold-300 font-semibold">ressources naturelles</span>.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
                    <p className="text-gold-300 italic font-medium text-center">
                      "Une vision en action"
                    </p>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 bg-gradient-to-br from-white via-gold-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-4">
              <Target className="w-4 h-4" />
              NOS FONDEMENTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Ce qui <span className="text-gold-600">Nous Guide</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-5 shadow-sm border border-gold-100 hover:shadow-lg hover:border-gold-300 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-600 to-gold-800 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gold-500/50 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-gold-600 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{value.description}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
              
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl relative">
                <img
                  src="/ndiya.jpeg"
                  alt={COMPANY_INFO.director}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-gold-500/20">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Co-Directeur</p>
                    <p className="text-white text-xl font-bold">{COMPANY_INFO.director}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-4">
                <Users className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm font-semibold tracking-wider">LEADERSHIP</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 mb-3">
                <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                  {COMPANY_INFO.director}
                </span>
              </h2>
              <p className="text-lg text-gold-300 mb-6 font-medium">Co-Directeur – Stallion Investment</p>
              
              <div className="text-white/80 text-sm leading-relaxed">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl">
                  <p className="text-base text-white font-semibold mb-3">
                    Nouvelle génération de décideurs
                  </p>
                  <p className="leading-relaxed mb-3">
                    À la croisée de la <span className="text-gold-300 font-semibold">vision stratégique</span>, de l'<span className="text-gold-300 font-semibold">exécution</span> et de l'<span className="text-gold-300 font-semibold">ambition de transformation</span>.
                  </p>
                  <p className="leading-relaxed text-white/70">
                    <span className="text-gold-300 font-semibold">Architecte de projets complexes</span> mobilisant capital et expertise. 
                    Chaque projet devient un <span className="text-gold-300 font-semibold">levier structurant</span> au service des nations.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
                    <p className="text-gold-400 italic font-medium text-center">
                      "Bâtisseur d'héritage durable"
                    </p>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10 bg-gradient-to-br from-white via-gold-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              COLLABORATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Une Équipe <span className="text-gold-600">d'Experts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-5 shadow-sm border border-gold-100 text-center hover:shadow-lg hover:border-gold-300 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/50 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-gold-600 transition-colors">{member.name}</h3>
                  <p className="text-gold-600 font-semibold text-sm mb-2 uppercase tracking-wide">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-white to-gold-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-6">
              <ArrowRight className="w-4 h-4" />
              REJOIGNEZ-NOUS
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Prêt à construire <span className="text-gold-600">l'avenir</span> ensemble ?
            </h2>
            
            <p className="text-base text-gray-700 mb-8 max-w-xl mx-auto">
              Partenaires, investisseurs, institutions : collaborez avec nous pour transformer 
              <span className="text-gold-600 font-medium"> vos visions en réalité</span>.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-colors shadow-lg"
            >
              Nous Contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
