import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { FEATURED_VIDEO_PROJECT as P } from './src/data/constants'

const SITE_URL = 'https://stallioninvestment.td'

type SharePage = {
  /** Chemin de la page (sans .html), doit correspondre à une rewrite dans vercel.json */
  route: string
  title: string
  description: string
  image: string
  imageWidth?: number
  imageHeight?: number
  video?: string
}

const SHARE_PAGES: SharePage[] = [
  {
    route: P.path,
    title: `${P.tag} : ${P.title} — ${P.subtitle} | Stallion Investment`,
    description: P.description,
    image: P.poster,
    imageWidth: 1920,
    imageHeight: 1080,
    video: P.videos.landscape,
  },
]

const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/**
 * WhatsApp, Facebook, etc. n'exécutent pas le JavaScript : ils ne lisent que le HTML.
 * Après le build, on crée une copie de index.html par page partageable, avec son propre
 * titre / description / image d'aperçu. vercel.json sert cette copie pour la page concernée.
 */
function sharePreviewPages(): Plugin {
  let outDir = 'dist'
  return {
    name: 'share-preview-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    writeBundle() {
      const indexHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8')
      for (const page of SHARE_PAGES) {
        const url = `${SITE_URL}${page.route}`
        const tags = [
          `<meta property="og:type" content="${page.video ? 'video.other' : 'website'}" />`,
          `<meta property="og:site_name" content="Stallion Investment" />`,
          `<meta property="og:locale" content="fr_FR" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:title" content="${esc(page.title)}" />`,
          `<meta property="og:description" content="${esc(page.description)}" />`,
          `<meta property="og:image" content="${SITE_URL}${page.image}" />`,
          page.imageWidth ? `<meta property="og:image:width" content="${page.imageWidth}" />` : '',
          page.imageHeight ? `<meta property="og:image:height" content="${page.imageHeight}" />` : '',
          page.video ? `<meta property="og:video" content="${SITE_URL}${page.video}" />` : '',
          page.video ? `<meta property="og:video:secure_url" content="${SITE_URL}${page.video}" />` : '',
          page.video ? `<meta property="og:video:type" content="video/mp4" />` : '',
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${esc(page.title)}" />`,
          `<meta name="twitter:description" content="${esc(page.description)}" />`,
          `<meta name="twitter:image" content="${SITE_URL}${page.image}" />`,
          `<link rel="canonical" href="${url}" />`,
        ]
          .filter(Boolean)
          .join('\n    ')

        const html = indexHtml
          .replace(/<!-- og:start[\s\S]*?<!-- og:end -->/, tags)
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
          .replace(
            /<meta name="description" content="[^"]*"/,
            `<meta name="description" content="${esc(page.description)}"`
          )

        const file = path.join(outDir, `${page.route.replace(/^\//, '')}.html`)
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), sharePreviewPages()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
