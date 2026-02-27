import Link from 'next/link'
import { featuredPhotos } from '@/lib/photos'
import { cloudinaryUrl } from '@/lib/cloudinary'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f7f5]">

      {/* Hero */}
      <section className="relative flex flex-col justify-center min-h-screen px-8 md:px-12">
        <div className="max-w-3xl">
          <h1 className="fade-in fade-in-1 font-display font-light text-[clamp(1.5rem,4vw,4rem)] leading-[1.05] text-[#1a1a1a] mb-6 whitespace-nowrap">
            Finding moments of stillness through the tides.
          </h1>
          <div className="fade-in fade-in-2 flex items-center gap-6 mb-10">
            <Link href="/gallery?category=California" className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors duration-300">California</Link>
            <span className="w-px h-3 bg-[#1a1a1a]/20" />
            <Link href="/gallery?category=Travel" className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors duration-300">Travel</Link>
            <span className="w-px h-3 bg-[#1a1a1a]/20" />
            <Link href="/gallery?category=Golf" className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors duration-300">Golf</Link>
          </div>
          <div className="fade-in fade-in-3 flex items-center gap-8">
            <Link
              href="/gallery"
              className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#1a1a1a]/50 hover:border-[#1a1a1a]/50 transition-colors duration-300"
            >
              View Gallery
            </Link>
            <span className="w-12 h-px bg-[#1a1a1a]/20" />
            <Link
              href="/about"
              className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors duration-300"
            >
              About
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fade-in fade-in-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a]/30">Scroll</span>
          <div className="w-px h-8 bg-[#1a1a1a]/20" />
        </div>
      </section>

      {/* Featured grid */}
      {featuredPhotos.length > 0 && (
        <section className="px-8 md:px-12 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {featuredPhotos.map((photo, i) => (
              <div
                key={photo.publicId}
                className={`photo-hover ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative bg-[#1a1a1a]/5 ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={cloudinaryUrl(photo.publicId, {
                      width: i === 0 ? 1600 : 900,
                      height: i === 0 ? 900 : 675,
                      quality: 'auto',
                      format: 'auto',
                    })}
                    alt={photo.title || ''}
                    className="w-full h-full object-cover"
                  />
                </div>
                {photo.title && (
                  <div className="flex items-center justify-between mt-3">
                    <p className="font-body text-xs text-[#1a1a1a]/40 tracking-wide">{photo.title}</p>
                    {photo.category && (
                      <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#1a1a1a]/25">{photo.category}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
