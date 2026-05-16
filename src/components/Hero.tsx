import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Building2 } from 'lucide-react'

const heroImage = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stallion Investment"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-sm mb-6"
          >
            <Building2 className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium tracking-wide">INVESTISSEMENT & DÉVELOPPEMENT STRATÉGIQUE</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
              Stallion Investment
            </span>
          </motion.h1>

          {/* Subtitle with decorative line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-gold-400 font-semibold text-lg tracking-widest uppercase">
              Capital · Innovation · Excellence
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </motion.div>

          {/* Description - Concise and visible */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
                <span className="text-gold-400 font-bold">Stallion Investment</span> — Société d'<span className="text-gold-300">investissement</span> et de <span className="text-gold-300">développement stratégique</span> spécialisée dans la conception, le financement et la réalisation de projets à forte valeur ajoutée.
              </p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-gray-300 leading-relaxed">
                  Secteurs clés : <span className="text-gold-300 font-semibold">Infrastructures · Aviation · Transport · Immobilier · Hôtellerie · Agriculture</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projets"
              className="inline-flex items-center justify-center gap-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-colors shadow-lg shadow-gold-900/50"
            >
              Découvrir Nos Projets
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Nous Contacter
            </Link>
          </motion.div>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-6 border-t border-white/20"
          >
            <p className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">Nos piliers</p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold-500/30 backdrop-blur-sm">
                <span className="text-gold-400 text-sm font-bold">01</span>
                <span className="text-white text-sm">Rigueur stratégique</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold-500/30 backdrop-blur-sm">
                <span className="text-gold-400 text-sm font-bold">02</span>
                <span className="text-white text-sm">Innovation maîtrisée</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold-500/30 backdrop-blur-sm">
                <span className="text-gold-400 text-sm font-bold">03</span>
                <span className="text-white text-sm">Impact durable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
