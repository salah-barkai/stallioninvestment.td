import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Check, Facebook, Link2, Linkedin, Mail, Send, Share2, Film } from 'lucide-react'
import { cn } from '../../lib/utils'

type Props = {
  /** Lien de la page du projet (absolu) */
  pageUrl: string
  /** Lien direct du fichier vidéo (absolu) */
  videoUrl: string
  title: string
  text: string
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.46-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.77 6.68c0 5.21-4.24 9.45-9.46 9.45zm8.05-17.5A11.32 11.32 0 0 0 12.04.67C5.77.67.66 5.77.66 12.04c0 2 .52 3.96 1.52 5.68L.57 23.33l5.74-1.5a11.37 11.37 0 0 0 5.43 1.38h.01c6.27 0 11.37-5.1 11.38-11.37 0-3.04-1.18-5.9-3.33-8.04z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  )
}

export default function ShareButtons({ pageUrl, videoUrl, title, text }: Props) {
  const [copied, setCopied] = useState<'page' | 'video' | null>(null)
  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'

  const encUrl = encodeURIComponent(pageUrl)
  const encText = encodeURIComponent(text)
  const encFull = encodeURIComponent(`${text}\n${pageUrl}`)

  const networks: { name: string; href: string; icon: ReactNode; color: string }[] = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encFull}`,
      icon: <WhatsAppIcon className="h-5 w-5" />,
      color: 'hover:bg-[#25D366] hover:border-[#25D366]',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`,
      icon: <Facebook className="h-5 w-5" />,
      color: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?text=${encText}&url=${encUrl}`,
      icon: <XIcon className="h-4 w-4" />,
      color: 'hover:bg-black hover:border-white/40',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}`,
      icon: <Linkedin className="h-5 w-5" />,
      color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
    },
    {
      name: 'Telegram',
      href: `https://t.me/share/url?url=${encUrl}&text=${encText}`,
      icon: <Send className="h-5 w-5" />,
      color: 'hover:bg-[#229ED9] hover:border-[#229ED9]',
    },
    {
      name: 'E-mail',
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encFull}`,
      icon: <Mail className="h-5 w-5" />,
      color: 'hover:bg-gold-600 hover:border-gold-600',
    },
  ]

  const copy = async (value: string, which: 'page' | 'video') => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // Repli pour anciens navigateurs
      const input = document.createElement('textarea')
      input.value = value
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
    setCopied(which)
    window.setTimeout(() => setCopied(null), 2200)
  }

  const nativeShare = () => {
    navigator.share({ title, text, url: pageUrl }).catch(() => {})
  }

  return (
    <div className="w-full min-w-0 rounded-2xl border border-gold-500/20 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
          <Share2 className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-400 sm:tracking-[0.2em]">
            Partager la vidéo
          </p>
          <p className="text-xs text-gray-400">Faites découvrir ce projet à vos proches</p>
        </div>
      </div>

      {/* Réseaux : 3 par ligne sur mobile, 6 sur une ligne dès que la place le permet */}
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
        {networks.map((n, i) => (
          <motion.a
            key={n.name}
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.94 }}
            className={cn(
              'flex min-w-0 flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-1 py-3 text-gray-200 transition-colors duration-300 hover:text-white',
              n.color
            )}
            aria-label={`Partager sur ${n.name}`}
          >
            {n.icon}
            <span className="max-w-full truncate text-[11px] font-medium">{n.name}</span>
          </motion.a>
        ))}
      </div>

      {/* Copier les liens */}
      <div className="mt-5 space-y-3">
        {/* Mobile : lien au-dessus, bouton pleine largeur — dès sm : sur une ligne */}
        <div className="flex flex-col gap-1.5 rounded-xl border border-white/10 bg-black/40 p-1.5 sm:flex-row sm:items-center sm:gap-2 sm:pl-4">
          <div className="flex min-w-0 flex-1 items-center gap-2 px-2.5 py-1.5 sm:p-0">
            <Link2 className="h-4 w-4 shrink-0 text-gold-500" />
            <span className="min-w-0 flex-1 truncate text-sm text-gray-300">{pageUrl}</span>
          </div>
          <button
            type="button"
            onClick={() => copy(pageUrl, 'page')}
            className={cn(
              'flex w-full shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition-all sm:w-auto sm:py-2',
              copied === 'page'
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-gold-500 to-gold-700 text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]'
            )}
          >
            {copied === 'page' ? <Check className="h-4 w-4" /> : null}
            {copied === 'page' ? 'Copié !' : 'Copier le lien'}
          </button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => copy(videoUrl, 'video')}
            className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-gold-500/30 px-3 py-2.5 text-center text-sm font-medium text-gold-300 transition-colors hover:bg-gold-500/10"
          >
            {copied === 'video' ? (
              <Check className="h-4 w-4 shrink-0 text-green-400" />
            ) : (
              <Film className="h-4 w-4 shrink-0" />
            )}
            <span className="min-w-0">
              {copied === 'video' ? 'Lien de la vidéo copié !' : 'Copier le lien de la vidéo'}
            </span>
          </button>

          {canNativeShare && (
            <button
              type="button"
              onClick={nativeShare}
              className="flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gold-50"
            >
              <Share2 className="h-4 w-4 shrink-0" />
              Plus d'options…
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
