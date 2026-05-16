import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function SupabaseTest() {
  const [status, setStatus] = useState<string>('')
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test de connexion
        const { error } = await supabase
          .from('projects')
          .select('count')
          .single()

        if (error) {
          setStatus(`❌ Erreur de connexion: ${error.message}`)
        } else {
          setStatus(`✅ Connexion Supabase réussie!`)
          
          // Test de récupération des projets
          const { data: projectsData, error: projectsError } = await supabase
            .from('projects')
            .select('*')
            .limit(3)

          if (projectsError) {
            setStatus(`❌ Erreur récupération projets: ${projectsError.message}`)
          } else {
            setProjects(projectsData || [])
            setStatus(`✅ ${projectsData?.length || 0} projet(s) trouvé(s)`)
          }
        }
      } catch (err) {
        setStatus(`❌ Erreur générale: ${err}`)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Test de Connexion Supabase
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg text-center ${
            status.includes('✅') ? 'bg-green-50 text-green-700' : 
            status.includes('❌') ? 'bg-red-50 text-red-700' : 
            'bg-blue-50 text-blue-700'
          }`}>
            <p className="font-medium">{status}</p>
          </div>

          {projects.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Projets trouvés:
              </h3>
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-medium text-gray-900">{project.title}</p>
                    <p className="text-sm text-gray-600">{project.location}</p>
                    <p className="text-xs text-gray-500">Statut: {project.status}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Configuration:
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">URL:</span>
              <span className="font-mono text-gray-900">
                {import.meta.env.VITE_SUPABASE_URL ? '✅ Configurée' : '❌ Manquante'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Clé ANON:</span>
              <span className="font-mono text-gray-900">
                {import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Configurée' : '❌ Manquante'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 bg-gold-600 text-white px-6 py-3 rounded-lg hover:bg-gold-700 transition-colors"
          >
            Retour au site
          </a>
        </div>
      </div>
    </div>
  )
}
