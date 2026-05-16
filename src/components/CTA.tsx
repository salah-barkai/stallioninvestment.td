import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { COMPANY_INFO } from '../data/constants'

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-gold-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-600 via-gold-700 to-gold-800 border border-gold-500/50"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,white,transparent_50%)]" />
          </div>

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Prêt à Réaliser Votre Projet Immobilier ?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé gratuit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Commencer un Projet
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Nous Appeler
                  </a>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-white font-semibold text-lg mb-4">Contact Rapide</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white/90">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Téléphone</p>
                        <p className="font-medium">{COMPANY_INFO.phone}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3 text-white/90">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Email</p>
                        <p className="font-medium">{COMPANY_INFO.email}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
