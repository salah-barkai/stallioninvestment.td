import { supabase } from '../client'

export const storageService = {
  // Uploader une image
  async uploadImage(file: File, path: string): Promise<string> {
    const fileExt = file.name.split('.').pop()
    const fileName = `${path}/${Date.now()}.${fileExt}`
    
    const { data, error } = await supabase.storage
      .from('property-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error

    // Rendre l'image publique
    const { data: publicUrlData, error: publicUrlError } = await supabase.storage
      .from('property-images')
      .getPublicUrl(data.path)

    if (publicUrlError) throw publicUrlError

    return publicUrlData.publicUrl
  },

  // Supprimer une image
  async deleteImage(path: string): Promise<void> {
    const { error } = await supabase.storage
      .from('property-images')
      .remove([path])

    if (error) throw new Error(error.message)
  },

  // Uploader plusieurs images
  async uploadImages(files: File[], propertyId: string): Promise<string[]> {
    const uploadPromises = files.map(file => 
      this.uploadImage(file, `properties/${propertyId}`)
    )

    try {
      const urls = await Promise.all(uploadPromises)
      return urls
    } catch (error) {
      throw error
    }
  },

  // Récupérer l'URL publique d'une image
  getPublicUrl(path: string): string {
    const { data } = supabase.storage
      .from('property-images')
      .getPublicUrl(path)

    return data.publicUrl
  }
}
