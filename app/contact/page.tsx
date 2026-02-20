export default function ContactPage() {
  return (
    <div className="pt-28 px-8 md:px-16 pb-24 min-h-screen">
      <div className="max-w-xl">
        <h1 className="font-display text-5xl md:text-7xl mb-12 fade-up">Contact</h1>

        <div className="space-y-4 fade-up fade-up-delay-1">
          <p className="font-body text-ink/60 leading-relaxed">
            For commissions, licensing, or just to say hello — reach out below.
          </p>

          {/* Update with your email */}
          <a
            href="mailto:your@email.com"
            className="block font-display text-2xl text-ink hover:text-accent transition-colors duration-300 mt-8"
          >
            your@email.com
          </a>

          {/* Social links — update hrefs */}
          <div className="flex gap-6 mt-8 pt-8 border-t border-ink/10">
            <a href="#" className="font-body text-xs tracking-widest uppercase text-ink/40 hover:text-ink transition-colors">
              Instagram
            </a>
            <a href="#" className="font-body text-xs tracking-widest uppercase text-ink/40 hover:text-ink transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
