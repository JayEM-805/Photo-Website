// lib/photos.ts
// Add your Cloudinary photo public IDs here.
// After uploading to Cloudinary, find the "Public ID" in the Media Library.
// Example public ID: "portfolio/my-photo" (no file extension needed)

import { Photo } from './cloudinary'

export const photos: Photo[] = [
  // Replace these with your actual Cloudinary public IDs
  // { publicId: 'portfolio/photo-1', title: 'Mountain Sunrise', category: 'landscape', featured: true },
  // { publicId: 'portfolio/photo-2', title: 'Street Life', category: 'street' },
  // { publicId: 'portfolio/photo-3', title: 'Portrait', category: 'portrait', featured: true },
]

// Categories derived from your photos
export const categories = [...new Set(photos.map(p => p.category).filter(Boolean))] as string[]

// Featured photos for the homepage
export const featuredPhotos = photos.filter(p => p.featured)
