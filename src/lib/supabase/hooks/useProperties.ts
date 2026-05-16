import { useState, useEffect, useCallback } from 'react'
import { propertiesService } from '../services'
import type { Database } from '../database.types'

type Property = Database['public']['Tables']['properties']['Row']

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchProperties = useCallback(async () => {
    try {
      setLoading(true)
      const data = await propertiesService.getAll()
      setProperties(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erreur lors du chargement des propriétés'))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  return { properties, loading, error, refetch: fetchProperties }
}

export function useFeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true)
        const data = await propertiesService.getFeatured()
        setProperties(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erreur lors du chargement'))
      } finally {
        setLoading(false)
      }
    }

    fetchFeatured()
  }, [])

  return { properties, loading, error }
}

export function usePropertyById(id: string) {
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return
      
      try {
        setLoading(true)
        const data = await propertiesService.getById(id)
        setProperty(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erreur lors du chargement'))
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [id])

  return { property, loading, error }
}
