import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Building2, Sparkles } from 'lucide-react'
import { PARTNERS, CONVENTIONS, CONVENTION_STATEMENT } from '../data/constants'

const galleryImages = CONVENTIONS.flatMap((c) => c.images).slice(0, 6)

export default function ConventionsPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20 lg:py-28 text-white">
      {/* Blobs animés */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gold-600/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl animate-float-slower" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.12),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            <Globe className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-semibold tracking-wider">CONVENTIONS & PARTENARIATS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 mb-5 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
              Des alliances stratégiques
            </span>
            <br />
            <span className="relative inline-block">
              à l'international
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70"
          >
            {CONVENTION_STATEMENT}
          </motion.p>
        </div>

        {/* Marquee partenaires */}
        <div className="marquee-pause relative mb-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex w-max gap-4">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70"
              >
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                {partner.name}
              </span>
            ))}
          </div>
        </div>

        {/* Partenaires */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link
                to="/conventions"
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors duration-300 hover:border-gold-400/60"
              >
                <div className="shine-sweep pointer-events-none absolute inset-0" />
                <div className="relative flex-1">
                  <div className="mb-4 flex items-center justify-between">
                    {'logo' in partner && partner.logo ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-white/10 shadow-lg overflow-hidden p-1">
                        <img
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600 to-gold-800 text-white shadow-lg">
                        <Building2 className="h-6 w-6" />
                      </div>
                    )}
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-gold-300">
                      {partner.country}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white transition-colors group-hover:text-gold-300">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gold-400">{partner.sector}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-white/55">{partner.description}</p>
                </div>
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mini galerie */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={image}
                alt="Cérémonie de signature"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="relative inline-block">
            <span className="absolute -inset-1 rounded-full bg-gold-500/40 blur-lg animate-pulse" />
            <Link
              to="/conventions"
              className="relative inline-flex items-center gap-2 rounded-full border border-gold-400 bg-gold-600 px-8 py-4 font-semibold text-white transition-all hover:bg-gold-700"
            >
              Voir Nos Partenaires
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
