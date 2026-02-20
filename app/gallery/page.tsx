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
    <div className="pt-28 px-8 md:px-16 pb-24">
      <div className="mb-12">
        <h1 className="font-display text-5xl md:text-7xl mb-8 fade-up">Gallery</h1>

        {/* Category filter */}
        {categories.length > 0 && (
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setActiveCategory(null)}
              className={clsx(
                'font-body text-xs tracking-widest uppercase pb-0.5 border-b transition-colors duration-200',
                !activeCategory ? 'border-ink text-ink' : 'border-transparent text-ink/40 hover:text-ink'
              )}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  'font-body text-xs tracking-widest uppercase pb-0.5 border-b transition-colors duration-200',
                  activeCategory === cat ? 'border-ink text-ink' : 'border-transparent text-ink/40 hover:text-ink'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((photo) => (
            <div key={photo.publicId} className="photo-hover break-inside-avoid">
              <img
                src={cloudinaryUrl(photo.publicId, { width: 900, quality: 'auto', format: 'auto', crop: 'fit' })}
                alt={photo.title || ''}
                className="w-full"
                loading="lazy"
              />
              {photo.title && (
                <p className="font-body text-xs text-ink/40 mt-2 tracking-wide">{photo.title}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-ink/20 rounded p-16 text-center">
          <p className="font-body text-ink/40 text-sm mb-2">No photos yet.</p>
          <p className="font-body text-ink/30 text-xs">
            Add your Cloudinary public IDs to <code className="bg-ink/5 px-1">lib/photos.ts</code>
          </p>
        </div>
      )}
    </div>
  )
}
