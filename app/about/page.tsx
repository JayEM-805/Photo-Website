export default function AboutPage() {
  return (
    <div className="pt-28 px-8 md:px-16 pb-24 min-h-screen">
      <div className="max-w-2xl">
        <h1 className="font-display text-5xl md:text-7xl mb-12 fade-up">About</h1>

        <div className="space-y-6 font-body text-ink/70 leading-relaxed text-lg">
          <p className="fade-up fade-up-delay-1">
            {/* Replace with your bio */}
            Based somewhere beautiful, making photographs of the things that matter.
          </p>
          <p className="fade-up fade-up-delay-2">
            {/* Add more about yourself */}
            Available for commissions, collaborations, and conversations.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-ink/10 fade-up fade-up-delay-3">
          <h2 className="font-display text-xl mb-6">Get in touch</h2>
          <a
            href="/contact"
            className="inline-block bg-ink text-paper px-8 py-3 font-body text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
