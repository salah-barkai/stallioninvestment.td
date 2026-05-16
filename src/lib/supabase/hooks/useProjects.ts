import { useState, useEffect } from 'react'
import { projectsService } from '../services'
import type { Database } from '../database.types'

type Project = Database['public']['Tables']['projects']['Row']

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const data = await projectsService.getAll()
        setProjects(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erreur lors du chargement des projets'))
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}
