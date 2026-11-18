import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { cn } from '../../lib/utils'

type Props = {
  src: string
  poster: string
  title: string
  vertical?: boolean
  className?: string
}

/**
 * Lecteur vidéo élégant : affiche d'abord l'aperçu avec un gros bouton doré,
 * puis bascule sur les contrôles natifs au lancement (plein écran, son, etc.).
 * preload="none" : rien n'est téléchargé tant que le visiteur ne clique pas.
 */
export default function VideoPlayer({ src, poster, title, vertical = false, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  // Changement de format : on revient à l'aperçu
  useEffect(() => {
    setStarted(false)
  }, [src])

  const handlePlay = () => {
    setStarted(true)
    // play() après le rendu pour que les contrôles soient actifs
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {})
    })
  }

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-black shadow-2xl shadow-gold-900/40 ring-1 ring-gold-500/30',
        vertical ? 'mx-auto aspect-[9/16] w-full max-w-sm' : 'aspect-video w-full',
        className
      )}
    >
      <video
        key={src}
        ref={videoRef}
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={started}
        onEnded={() => setStarted(false)}
        className="h-full w-full object-cover"
        aria-label={title}
      />

      <AnimatePresence>
        {!started && (
          <motion.button
            type="button"
            onClick={handlePlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/20 to-black/30"
            aria-label={`Lire la vidéo : ${title}`}
          >
            {/* Anneaux pulsants */}
            <span className="absolute h-24 w-24 rounded-full bg-gold-500/30 animate-ping" />
            <span className="absolute h-32 w-32 rounded-full border border-gold-400/30" />

            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-700 shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-9 w-9 fill-white text-white" />
            </span>

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              Regarder la vidéo
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
