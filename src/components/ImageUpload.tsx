import { useState, useRef } from 'react'
import { Upload, X, Check } from 'lucide-react'
import { storageService } from '../lib/supabase'

interface ImageUploadProps {
  onUploadComplete: (urls: string[]) => void
  maxFiles?: number
  accept?: string
}

export default function ImageUpload({ 
  onUploadComplete, 
  maxFiles = 5,
  accept = 'image/*' 
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.slice(0, maxFiles)
    setUploadedFiles(validFiles)
  }

  const handleUpload = async () => {
    if (uploadedFiles.length === 0) return

    setUploading(true)
    
    try {
      const urls = await storageService.uploadImages(
        uploadedFiles, 
        `temp-${Date.now()}`
      )
      
      onUploadComplete(urls)
      setUploadedFiles([])
      
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Erreur lors de l\'upload des images')
    } finally {
      setUploading(false)
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-6">
      <div className="space-y-4">
        {/* Upload area */}
        <div className="flex items-center justify-center w-full">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
            disabled={uploading}
          />
          
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2 px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Upload className="w-4 h-4" />
            {uploading ? 'Upload en cours...' : 'Choisir des images'}
          </button>
        </div>

        {/* Selected files */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900 mb-2">
              Images sélectionnées ({uploadedFiles.length}/{maxFiles}):
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  
                  <button
                    onClick={() => removeFile(index)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload button */}
        {uploadedFiles.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {uploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Upload en cours...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Uploader {uploadedFiles.length} image(s)</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Progress indicator */}
        {uploading && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gold-600 h-2 rounded-full transition-all duration-300" style={{ width: '60%' }}></div>
          </div>
        )}
      </div>
    </div>
  )
}
