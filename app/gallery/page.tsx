'use client'

import { useState } from 'react'
import { photos, categories } from '@/lib/photos'
import { cloudinaryUrl } from '@/lib/cloudinary'
import clsx from 'clsx'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? photos.filter(p => p.category === activeCategory)
    : photos

  return (
    <div className="pt-28 px-8 md:px-12 pb-32 bg-[#f8f7f5] min-h-screen">

      {/* Header */}
      <div className="mb-14">
        <h1 className="font-display font-light text-5xl md:text-6xl text-[#1a1a1a] mb-8">Gallery</h1>

        {/* Filters */}
        {categories.length > 0 && (
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={clsx(
                'font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 pb-px border-b',
                !activeCategory
                  ? 'text-[#1a1a1a] border-[#1a1a1a]'
                  : 'text-[#1a1a1a]/35 border-transparent hover:text-[#1a1a1a]'
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
                    ? 'text-[#1a1a1a] border-[#1a1a1a]'
                    : 'text-[#1a1a1a]/35 border-transparent hover:text-[#1a1a1a]'
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
          <div key={photo.publicId} className="photo-hover break-inside-avoid">
            <div className="bg-[#1a1a1a]/5">
              <img
                src={cloudinaryUrl(photo.publicId, { width: 900, quality: 'auto', format: 'auto', crop: 'fit' })}
                alt={photo.title || ''}
                className="w-full"
                loading="lazy"
              />
            </div>
            {photo.title && (
              <div className="flex items-center justify-between mt-2 mb-6">
                <p className="font-body text-xs text-[#1a1a1a]/40 tracking-wide">{photo.title}</p>
                {photo.category && (
                  <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#1a1a1a]/25">{photo.category}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
