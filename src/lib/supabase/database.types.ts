export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          location: string
          type: 'residential' | 'commercial' | 'land'
          status: 'available' | 'sold' | 'rented'
          price: number
          surface: number | null
          bedrooms: number | null
          bathrooms: number | null
          features: string[]
          images: string[]
          featured: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          location: string
          type: 'residential' | 'commercial' | 'land'
          status?: 'available' | 'sold' | 'rented'
          price: number
          surface?: number | null
          bedrooms?: number | null
          bathrooms?: number | null
          features?: string[]
          images?: string[]
          featured?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          location?: string
          type?: 'residential' | 'commercial' | 'land'
          status?: 'available' | 'sold' | 'rented'
          price?: number
          surface?: number | null
          bedrooms?: number | null
          bathrooms?: number | null
          features?: string[]
          images?: string[]
          featured?: boolean
        }
      }
      clients: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          type: 'buyer' | 'seller' | 'renter' | 'investor'
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          type: 'buyer' | 'seller' | 'renter' | 'investor'
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          type?: 'buyer' | 'seller' | 'renter' | 'investor'
          notes?: string | null
        }
      }
      appointments: {
        Row: {
          id: string
          created_at: string
          client_id: string
          property_id: string
          date: string
          time: string
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          client_id: string
          property_id: string
          date: string
          time: string
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          client_id?: string
          property_id?: string
          date?: string
          time?: string
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          notes?: string | null
        }
      }
      projects: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          location: string
          status: 'planned' | 'in_progress' | 'completed'
          progress: number
          investment: number
          surface: number
          features: string[]
          images: string[]
          year: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          location: string
          status?: 'planned' | 'in_progress' | 'completed'
          progress?: number
          investment?: number
          surface?: number
          features?: string[]
          images?: string[]
          year?: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          location?: string
          status?: 'planned' | 'in_progress' | 'completed'
          progress?: number
          investment?: number
          surface?: number
          features?: string[]
          images?: string[]
          year?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
