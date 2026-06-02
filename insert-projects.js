import { createClient } from '@supabase/supabase-js'

// Configuration Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://skyrfaznqsgoprfmtmaw.supabase.co'
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_G7reDVPe-qi_zxaI0AuCOg_1J5kpiII'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Projets à insérer (valeurs en millions FCFA pour éviter integer overflow)
const projects = [
  {
    title: 'Centre Commercial N\'Djamena',
    description: 'Centre commercial moderne de 15 000 m² avec espaces de vente, restaurants et cinémas au cœur de la capitale tchadienne.',
    location: 'N\'Djamena, Tchad',
    status: 'in_progress',
    progress: 65,
    investment: 5000, // 5 milliards FCFA = 5000 millions
    surface: 15000,
    features: ['Espaces commerciaux', 'Restaurants', 'Cinéma', 'Parking souterrain', 'Climatisation centrale'],
    images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800'],
    year: 2025
  },
  {
    title: 'Résidence Les Jardins de Chagoua',
    description: 'Ensemble résidentiel haut de gamme de 120 appartements avec piscine, espaces verts et sécurité 24/7.',
    location: 'Chagoua, N\'Djamena',
    status: 'planned',
    progress: 0,
    investment: 3500, // 3.5 milliards FCFA = 3500 millions
    surface: 8500,
    features: ['Appartements 2-4 pièces', 'Piscine', 'Espaces verts', 'Sécurité 24/7', 'Parking'],
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'],
    year: 2026
  },
  {
    title: 'Complexe Agro-Industriel du Logone',
    description: 'Complexe agro-industriel intégré pour la transformation des produits agricoles locaux avec unités de production et stockage.',
    location: 'Moundou, Tchad',
    status: 'completed',
    progress: 100,
    investment: 2800, // 2.8 milliards FCFA = 2800 millions
    surface: 12000,
    features: ['Unité de transformation', 'Entrepôts frigorifiques', 'Laboratoire qualité', 'Centre logistique'],
    images: ['https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800'],
    year: 2024
  }
]

async function insertProjects() {
  console.log('🚀 Insertion des projets dans Supabase...\n')
  
  for (const project of projects) {
    try {
      console.log(`📝 Insertion du projet: ${project.title}`)
      
      const { data, error } = await supabase
        .from('projects')
        .insert([project])
        .select()
      
      if (error) {
        console.error(`❌ Erreur pour "${project.title}":`, error.message)
      } else {
        console.log(`✅ Projet "${project.title}" inséré avec succès (ID: ${data[0].id})`)
      }
    } catch (err) {
      console.error(`❌ Erreur pour "${project.title}":`, err)
    }
  }
  
  console.log('\n🎉 Insertion terminée!')
}

insertProjects()
