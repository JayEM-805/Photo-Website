import Link from 'next/link'
import { featuredPhotos } from '@/lib/photos'
import { cloudinaryUrl } from '@/lib/cloudinary'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f2ee]">

      {/* Hero */}
      <section className="relative flex flex-col justify-center min-h-screen px-8 md:px-12">
        <div className="max-w-3xl">
          <h1 className="fade-in fade-in-1 font-display font-light text-[clamp(2rem,5vw,5.5rem)] leading-[1.05] text-[#1c1917] mb-6 whitespace-nowrap">
            Moments of stillness, through the tides.
          </h1>
          <div className="fade-in fade-in-2 flex items-center gap-6 mb-10">
            <Link href="/gallery?category=California" className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1c1917]/50 hover:text-[#1c1917] transition-colors duration-300">California</Link>
            <span className="w-px h-3 bg-[#1c1917]/20" />
            <Link href="/gallery?category=Travel" className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1c1917]/50 hover:text-[#1c1917] transition-colors duration-300">Travel</Link>
            <span className="w-px h-3 bg-[#1c1917]/20" />
            <Link href="/gallery?category=Golf" className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1c1917]/50 hover:text-[#1c1917] transition-colors duration-300">Golf</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fade-in fade-in-3 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-[#1c1917]/20" />
        </div>
      </section>

      {/* Featured grid */}
      {featuredPhotos.length > 0 && (
        <section className="px-8 md:px-12 pb-32">
          <div className="flex flex-col items-center gap-8">
            {featuredPhotos.map((photo, i) => (
              <Link
                key={photo.publicId}
                href={`/gallery?category=${photo.category}`}
                className="photo-hover rounded-2xl overflow-hidden w-full max-w-sm block"
              >
                <div className="relative bg-[#1c1917]/5 rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={cloudinaryUrl(photo.publicId, {
                      width: 900,
                      height: 675,
                      quality: 'auto',
                      format: 'auto',
                    })}
                    alt={photo.title || ''}
                    className="w-full h-full object-cover"
                    style={i === 1 ? { objectPosition: 'center 90%' } : {}}
                  />
                  <div className="absolute inset-0 flex items-end justify-end p-5 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="font-display font-semibold text-[clamp(1rem,2.5vw,1.4rem)] tracking-[0.12em] uppercase text-white/70 drop-shadow-md">
                      {photo.category}.
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
