import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Upload } from 'lucide-react'
import { projectsService, propertiesService, storageService } from '../lib/supabase'
import ImageUpload from '../components/ImageUpload'
import type { Database } from '../lib/supabase/database.types'

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'projects' | 'properties' | 'images'>('projects')
  const [projects, setProjects] = useState<Database['public']['Tables']['projects']['Row']>([])
  const [properties, setProperties] = useState<Database['public']['Tables']['properties']['Row']>([])

  // Form states
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    location: '',
    status: 'planned' as const,
    progress: 0,
    investment: 0,
    surface: 0,
    features: [] as string[],
    images: [] as string[],
    year: new Date().getFullYear()
  })

  const [propertyForm, setPropertyForm] = useState({
    title: '',
    description: '',
    location: '',
    type: 'residential' as const,
    status: 'available' as const,
    price: 0,
    surface: 0,
    bedrooms: 0,
    bathrooms: 0,
    features: [] as string[],
    images: [] as string[],
    featured: false
  })

  // Load data
  useState(() => {
    const loadData = async () => {
      try {
        const [projectsData, propertiesData] = await Promise.all([
          projectsService.getAll(),
          propertiesService.getAll()
        ])
        setProjects(projectsData)
        setProperties(propertiesData)
      } catch (error) {
        console.error('Error loading data:', error)
      }
    }
    loadData()
  })

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newProject = await projectsService.create(projectForm)
      setProjects(prev => [newProject, ...prev])
      setProjectForm({
        title: '',
        description: '',
        location: '',
        status: 'planned',
        progress: 0,
        investment: 0,
        surface: 0,
        features: [],
        images: [],
        year: new Date().getFullYear()
      })
      alert('Projet créé avec succès!')
    } catch (error) {
      alert('Erreur lors de la création du projet')
    }
  }

  const handlePropertySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newProperty = await propertiesService.create(propertyForm)
      setProperties(prev => [newProperty, ...prev])
      setPropertyForm({
        title: '',
        description: '',
        location: '',
        type: 'residential',
        status: 'available',
        price: 0,
        surface: 0,
        bedrooms: 0,
        bathrooms: 0,
        features: [],
        images: [],
        featured: false
      })
      alert('Propriété créée avec succès!')
    } catch (error) {
      alert('Erreur lors de la création de la propriété')
    }
  }

  const handleImagesUpload = async (urls: string[]) => {
    // Store image URLs for later use
    console.log('Images uploaded:', urls)
    alert(`${urls.length} image(s) uploadée(s) avec succès!`)
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Administration Stallion Investment
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          {[
            { id: 'projects', label: 'Projets' },
            { id: 'properties', label: 'Propriétés' },
            { id: 'images', label: 'Images' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-gold-600 text-gold-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Add Project Form */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Ajouter un Projet</h2>
              <form onSubmit={handleProjectSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Titre du projet"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, title: e.target.value }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Localisation"
                    value={projectForm.location}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, location: e.target.value }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    required
                  />
                </div>
                
                <textarea
                  placeholder="Description"
                  value={projectForm.description}
                  onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  rows={3}
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="number"
                    placeholder="Investissement (FCFA)"
                    value={projectForm.investment}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, investment: parseInt(e.target.value) }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  <input
                    type="number"
                    placeholder="Surface (m²)"
                    value={projectForm.surface}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, surface: parseInt(e.target.value) }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  <input
                    type="number"
                    placeholder="Année"
                    value={projectForm.year}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                >
                  Créer le Projet
                </button>
              </form>
            </div>

            {/* Projects List */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Projets Existants ({projects.length})</h3>
              <div className="space-y-2">
                {projects.map(project => (
                  <div key={project.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-sm text-gray-600">{project.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Add Property Form */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Ajouter une Propriété</h2>
              <form onSubmit={handlePropertySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Titre de la propriété"
                    value={propertyForm.title}
                    onChange={(e) => setPropertyForm(prev => ({ ...prev, title: e.target.value }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Localisation"
                    value={propertyForm.location}
                    onChange={(e) => setPropertyForm(prev => ({ ...prev, location: e.target.value }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={propertyForm.type}
                    onChange={(e) => setPropertyForm(prev => ({ ...prev, type: e.target.value as any }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="residential">Résidentiel</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Terrain</option>
                  </select>
                  
                  <input
                    type="number"
                    placeholder="Prix (FCFA)"
                    value={propertyForm.price}
                    onChange={(e) => setPropertyForm(prev => ({ ...prev, price: parseInt(e.target.value) }))}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    required
                  />
                </div>
                
                <textarea
                  placeholder="Description"
                  value={propertyForm.description}
                  onChange={(e) => setPropertyForm(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  rows={3}
                />
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                >
                  Créer la Propriété
                </button>
              </form>
            </div>

            {/* Properties List */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Propriétés Existantes ({properties.length})</h3>
              <div className="space-y-2">
                {properties.map(property => (
                  <div key={property.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{property.title}</p>
                      <p className="text-sm text-gray-600">{property.location} - {property.price.toLocaleString()} FCFA</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Images Tab */}
        {activeTab === 'images' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Upload d'Images</h2>
              <ImageUpload 
                onUploadComplete={handleImagesUpload}
                maxFiles={10}
                accept="image/*"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
