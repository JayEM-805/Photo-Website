import Link from 'next/link'
import { featuredPhotos } from '@/lib/photos'
import { cloudinaryUrl } from '@/lib/cloudinary'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col justify-end min-h-[90vh] px-8 pb-16 md:px-16">
        <div className="max-w-4xl">
          <p className="fade-up fade-up-delay-1 font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
            Photography
          </p>
          <h1 className="fade-up fade-up-delay-2 font-display text-6xl md:text-8xl leading-none text-ink mb-8">
            Seeing the<br />world differently.
          </h1>
          <div className="fade-up fade-up-delay-3 flex gap-6 items-center">
            <Link
              href="/gallery"
              className="bg-ink text-paper px-8 py-3 font-body text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-300"
            >
              View Gallery
            </Link>
            <Link
              href="/about"
              className="font-body text-sm tracking-widest uppercase text-ink border-b border-ink/30 hover:border-accent hover:text-accent transition-colors duration-300 pb-0.5"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      {featuredPhotos.length > 0 && (
        <section className="px-8 md:px-16 pb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl">Selected Work</h2>
            <Link href="/gallery" className="font-body text-xs tracking-widest uppercase text-ink/50 hover:text-accent transition-colors">
              All Photos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPhotos.map((photo) => (
              <div key={photo.publicId} className="photo-hover aspect-[4/5] bg-ink/5">
                <img
                  src={cloudinaryUrl(photo.publicId, { width: 800, height: 1000, quality: 'auto', format: 'auto' })}
                  alt={photo.title || ''}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty state if no photos yet */}
      {featuredPhotos.length === 0 && (
        <section className="px-8 md:px-16 pb-24">
          <div className="border border-dashed border-ink/20 rounded p-12 text-center">
            <p className="font-body text-ink/40 text-sm">
              Add your featured photos in <code className="bg-ink/5 px-1">lib/photos.ts</code>
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
