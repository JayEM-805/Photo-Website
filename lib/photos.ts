import { Photo } from './cloudinary'

export const photos: Photo[] = [
  { publicId: 'Brazil_1_-_IMG_5354_kkjvqt', title: 'Brazil', category: 'Travel', featured: true },
  { publicId: 'Spain_1_-_P1070582_dyvns0', title: 'Spain', category: 'Golf', featured: true },
  { publicId: 'Carp_1_-_P2190976_wsljgh', title: 'Carpinteria', category: 'California', featured: true },
  { publicId: 'Presidio_-_IMG_2907_lnuhmi', title: 'Presidio', category: 'California', featured: false },
  { publicId: 'Big_Sur_1_-_P2190874_qlzfid', title: 'Big Sur', category: 'California', featured: false },
  { publicId: 'Sedona_1_-_9ADB349D-0A30-4801-8839-3F418641AF94_njshsd', title: 'Sedona', category: 'California', featured: false },
  ]

export const categories = ['California', 'Golf', 'Travel'] as const

export const featuredPhotos = photos.filter(p => p.featured)

// One cover photo per section
export const sectionCovers: Record<string, string> = {
    California: 'Carp_1_-_P2190976_wsljgh',
    Golf: 'Spain_1_-_P1070582_dyvns0',
    Travel: 'Brazil_1_-_IMG_5354_kkjvqt',
}
