import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, MapPin, Calendar, ArrowRight, ExternalLink, Building2, X, ChevronLeft, ChevronRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CONVENTIONS, PARTNERS, CONVENTION_STATEMENT, COMPANY_INFO } from '../data/constants'

type Lightbox = { images: readonly string[]; index: number } | null

export default function Conventions() {
  const [lightbox, setLightbox] = useState<Lightbox>(null)

  const closeLightbox = () => setLightbox(null)
  const move = (delta: number) =>
    setLightbox((current) =>
      current
        ? { ...current, index: (current.index + delta + current.images.length) % current.images.length }
        : current
    )

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gold-900 via-black to-gold-800 py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gold-600/20 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl animate-float-slower" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <Globe className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-semibold tracking-wider">CONVENTIONS & PARTENARIATS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Nos Partenaires Étrangers
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-gold-400 font-medium">Confiance & Impact</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <p className="text-lg sm:text-xl text-white/90">{CONVENTION_STATEMENT}</p>
          </motion.div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 bg-gradient-to-br from-white via-gold-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">Ils nous font confiance</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
              Des <span className="text-gold-600">partenaires</span> de référence
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-gold-100 bg-white p-6 shadow-sm transition-colors hover:border-gold-300"
              >
                <div className="shine-sweep pointer-events-none absolute inset-0" />
                <div className="relative">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    {'logo' in partner && partner.logo ? (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white border border-gold-100 shadow-md overflow-hidden p-1.5">
                        <img
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600 to-gold-800 text-white shadow-md">
                        <Building2 className="h-7 w-7" />
                      </div>
                    )}
                    <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700 border border-gold-100">
                      {partner.country}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gold-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-1">{partner.fullName}</p>
                  <p className="text-sm font-medium text-gold-600 mb-3">{partner.sector}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{partner.description}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
                      >
                        {partner.websiteLabel}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {'pdf' in partner && partner.pdf && (
                      <a
                        href={partner.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
                      >
                        Présentation (PDF)
                        <FileText className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* En images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest">En images</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
              Cérémonies de <span className="text-gold-600">signature</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">{CONVENTION_STATEMENT}</p>
          </div>

          <div className="space-y-12">
            {CONVENTIONS.map((convention, index) => (
              <motion.div
                key={convention.id}
                id={convention.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="text-gold-500 font-semibold uppercase tracking-widest">
                    Convention {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
                    <MapPin className="h-4 w-4 text-gold-600" />
                    <span className="font-medium">{convention.location}</span>
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
                    <Calendar className="h-4 w-4 text-gold-600" />
                    <span className="font-medium">{convention.year}</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {convention.images.map((image, i) => (
                    <button
                      type="button"
                      key={image}
                      onClick={() => setLightbox({ images: convention.images, index: i })}
                      className="group relative aspect-square overflow-hidden rounded-xl border border-gold-100 shadow-sm"
                    >
                      <img
                        src={image}
                        alt={`Signature de convention ${index + 1} — photo ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              DEVENIR PARTENAIRE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Construisons un <span className="text-gold-600">partenariat</span> durable
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              Institutions, banques, investisseurs et groupes industriels : rejoignez notre réseau de partenaires
              engagés dans la transformation des économies africaines.
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
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold hover:border-gold-400 hover:text-gold-600 transition-colors"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); move(-1) }}
                className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); move(1) }}
                className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <img
            src={lightbox.images[lightbox.index]}
            alt="Convention"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
