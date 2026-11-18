import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react'
import VideoPlayer from './video/VideoPlayer'
import { FEATURED_VIDEO_PROJECT as P } from '../data/constants'

/** Bloc « Nouveau projet livré » avec la vidéo, pour l'accueil et la page Projets */
export default function FeaturedVideoProject() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-gold-900 py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl animate-float-slow" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <VideoPlayer src={P.videos.landscape} poster={P.poster} title={`${P.title} — ${P.subtitle}`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">{P.tag}</span>
          </div>

          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            {P.title}
            <span className="mt-1 block text-gradient">{P.subtitle}</span>
          </h2>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold-500" />
              {P.city}, Tchad
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold-500" />
              {P.date}
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-gray-300">{P.description}</p>

          <Link
            to={P.path}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-6 py-3 font-semibold text-white shadow-lg shadow-gold-900/40 transition-all hover:gap-3 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            Voir le projet & partager
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
