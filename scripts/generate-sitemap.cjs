const fs = require('fs')
const path = require('path')

// Vos routes exactes (copié de votre code)
const routes = [
  '/', 
  '/les-metiers', 
  '/les-metiers/juges-aux-affaires-familiales', 
  '/les-metiers/juge-application-des-peines', 
  '/les-metiers/juge-civil', 
  '/les-metiers/juge-correctionnel', 
  '/les-metiers/juge-des-contentieux-protection', 
  '/les-metiers/juge-des-enfants', 
  '/les-metiers/juge-instruction', 
  '/les-metiers/substitut-du-procureur', 
  '/les-etapes-proces', 
  '/ENM', 
  '/carriere-dans-la-magistrature', 
  '/rencontrons-nous', 
  '/classes-prepas-talents-enm', 
  '/quiz', 
  '/mentions-legales', 
  '/politique-confidentialite', 
  '/accessibilite'
]

const baseUrl = 'https://etre-magistrat-cest-quoi.fr'
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

routes.forEach(routePath => {
  sitemap += `
  <url>
    <loc>${baseUrl}${routePath}</loc>
    <lastmod>2026-01-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${routePath === '/' ? '1.0' : '0.8'}</priority>
  </url>`
})

sitemap += '\n</urlset>'

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap)
console.log('✅ sitemap.xml généré dans /public/ (19 URLs)')
