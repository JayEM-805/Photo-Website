// lib/cloudinary.ts
// Helper to build Cloudinary image URLs with transformations

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dugbo7xjm'
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`

export function cloudinaryUrl(
  publicId: string,
  options: {
    width?: number
    height?: number
    quality?: number | 'auto'
    format?: 'auto' | 'webp' | 'jpg'
    crop?: 'fill' | 'fit' | 'scale' | 'crop'
  } = {}
) {
  const { width, height, quality = 'auto', format = 'auto', crop = 'fill' } = options

  const transforms: string[] = [`f_${format}`, `q_${quality}`]
  if (width) transforms.push(`w_${width}`)
  if (height) transforms.push(`h_${height}`)
  if (width || height) transforms.push(`c_${crop}`)

  return `${BASE_URL}/${transforms.join(',')}/${publicId}`
}

// Type for a photo item used throughout the site
export interface Photo {
  publicId: string   // e.g. "portfolio/landscape-001"
  title?: string
  category?: string
  featured?: boolean
}
