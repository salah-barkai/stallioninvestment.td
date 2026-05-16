import { supabase } from '../client'
import type { Database } from '../database.types'

type Property = Database['public']['Tables']['properties']['Row']
type PropertyInsert = Database['public']['Tables']['properties']['Insert']
type PropertyUpdate = Database['public']['Tables']['properties']['Update']

export const propertiesService = {
  // Récupérer tous les biens
  async getAll(): Promise<Property[]> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Récupérer un bien par ID
  async getById(id: string): Promise<Property | null> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Récupérer les biens en vedette
  async getFeatured(): Promise<Property[]> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('featured', true)
      .eq('status', 'available')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Récupérer les biens par type
  async getByType(type: Property['type']): Promise<Property[]> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('type', type)
      .eq('status', 'available')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Récupérer les biens par localisation
  async getByLocation(location: string): Promise<Property[]> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .ilike('location', `%${location}%`)
      .eq('status', 'available')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Créer un bien
  async create(property: PropertyInsert): Promise<Property> {
    const { data, error } = await supabase
      .from('properties')
      .insert(property)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Mettre à jour un bien
  async update(id: string, property: PropertyUpdate): Promise<Property> {
    const { data, error } = await supabase
      .from('properties')
      .update(property)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Supprimer un bien
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('properties')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}
