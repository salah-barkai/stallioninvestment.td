import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { LATEST_NEWS } from '../data/constants'

export default function LatestNews() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-gold-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group grid gap-8 overflow-hidden rounded-2xl border border-gold-100 bg-white shadow-sm lg:grid-cols-2 lg:gap-0"
        >
          <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[340px]">
            <img
              src={LATEST_NEWS.image}
              alt={LATEST_NEWS.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10">
            <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-700">
              {LATEST_NEWS.tag}
            </span>

            <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gold-600" />
                {LATEST_NEWS.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold-600" />
                {LATEST_NEWS.location}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 transition-colors group-hover:text-gold-600">
              {LATEST_NEWS.title}
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">{LATEST_NEWS.excerpt}</p>

            <Link
              to={LATEST_NEWS.link}
              className="mt-6 inline-flex w-fit items-center gap-2 font-medium text-gold-600 transition-all hover:gap-3"
            >
              {LATEST_NEWS.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
