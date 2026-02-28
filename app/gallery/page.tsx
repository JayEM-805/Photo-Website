'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { photos, categories } from '@/lib/photos'
import { cloudinaryUrl } from '@/lib/cloudinary'
import clsx from 'clsx'

function GalleryContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory)

  const filtered = activeCategory
    ? photos.filter(p => p.category === activeCategory)
    : photos

  return (
    <div className="pt-28 px-8 md:px-12 pb-32 bg-[#ede8e3] min-h-screen">

      {/* Header */}
      <div className="mb-14">
        <h1 className="font-display font-light text-5xl md:text-6xl text-[#1c1917] mb-8">Gallery</h1>

        {/* Filters */}
        {categories.length > 0 && (
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={clsx(
                'font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 pb-px border-b',
                !activeCategory
                  ? 'text-[#1c1917] border-[#1c1917]'
                  : 'text-[#1c1917]/35 border-transparent hover:text-[#1c1917]'
              )}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  'font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 pb-px border-b',
                  activeCategory === cat
                    ? 'text-[#1c1917] border-[#1c1917]'
                    : 'text-[#1c1917]/35 border-transparent hover:text-[#1c1917]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
        {filtered.map((photo) => (
          <div key={photo.publicId} className="photo-hover break-inside-avoid rounded-2xl overflow-hidden">
            <div className="bg-[#1c1917]/5 rounded-2xl overflow-hidden">
              <img
                src={cloudinaryUrl(photo.publicId, { width: 900, quality: 'auto', format: 'auto', crop: 'fit' })}
                alt={photo.title || ''}
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GalleryPage() {
  return (
    <Suspense>
      <GalleryContent />
    </Suspense>
  )
}
