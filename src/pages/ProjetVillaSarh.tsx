import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, CheckCircle2, MapPin, MonitorPlay, Phone, Smartphone, Sparkles } from 'lucide-react'
import VideoPlayer from '../components/video/VideoPlayer'
import ShareButtons from '../components/video/ShareButtons'
import { COMPANY_INFO, FEATURED_VIDEO_PROJECT as P } from '../data/constants'
import { cn } from '../lib/utils'

type Format = 'landscape' | 'vertical'

export default function ProjetVillaSarh() {
  // Sur téléphone, on propose d'abord le format vertical
  const [format, setFormat] = useState<Format>(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches ? 'vertical' : 'landscape'
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    const previous = document.title
    document.title = `${P.title} — ${P.subtitle} | ${COMPANY_INFO.name}`
    return () => {
      document.title = previous
    }
  }, [])

  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const pageUrl = `${origin}${P.path}`
  const videoUrl = `${origin}${P.videos[format]}`
  const shareText = `🏡 ${P.tag} : ${P.title} à ${P.city} (${P.district}) par ${COMPANY_INFO.name}. Regardez la vidéo !`

  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-gold-900 py-14 lg:py-20">
        {/* Halos décoratifs */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold-700/20 blur-3xl animate-float-slower" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/projets"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gold-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les projets
          </Link>

          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">{P.tag}</span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {P.title.split(' ')[0]} <span className="text-gradient">{P.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold-500" />
                {P.subtitle}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gold-500" />
                Livré en {P.date}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-0.5 text-green-400">
                <CheckCircle2 className="h-4 w-4" />
                {P.status}
              </span>
            </div>
          </motion.div>

          {/* Sélecteur de format */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
              {(
                [
                  { id: 'landscape', label: 'Format cinéma', icon: MonitorPlay },
                  { id: 'vertical', label: 'Format mobile', icon: Smartphone },
                ] as const
              ).map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFormat(id)}
                  className={cn(
                    'relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    format === id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  )}
                >
                  {format === id && (
                    <motion.span
                      layoutId="format-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-500 to-gold-700"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className="relative h-4 w-4" />
                  <span className="relative">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Vidéo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={cn('mx-auto', format === 'landscape' ? 'max-w-5xl' : 'max-w-sm')}
          >
            <VideoPlayer
              src={P.videos[format]}
              poster={P.poster}
              title={`${P.title} — ${P.subtitle}`}
              vertical={format === 'vertical'}
            />
          </motion.div>

          {/* Détails + partage */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-0 lg:col-span-2"
            >
              <h2 className="mb-4 text-xl font-semibold text-white">Le projet</h2>
              <p className="leading-relaxed text-gray-300">{P.description}</p>
              <ul className="mt-6 space-y-3">
                {P.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-gray-200">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500/15">
                      <CheckCircle2 className="h-4 w-4 text-gold-400" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-6 py-3 font-semibold text-white shadow-lg shadow-gold-900/40 transition-shadow hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
              >
                <Phone className="h-4 w-4" />
                Je veux un projet similaire
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="min-w-0 lg:col-span-3"
            >
              <ShareButtons pageUrl={pageUrl} videoUrl={videoUrl} title={`${P.title} — ${P.subtitle}`} text={shareText} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
