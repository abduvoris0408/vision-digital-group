'use client'

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-sm text-white font-medium">Limited spots available this month</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Grow Your Business with Digital?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Book a free 30-minute strategy call. We'll analyze your current digital presence and show you exactly how to grow — no commitments, no fluff.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-xl"
          >
            Book Free Strategy Call
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
          >
            Explore Services
          </button>
        </div>
        <p className="text-blue-200 text-xs mt-6">No contracts required. Cancel anytime.</p>
      </div>
    </section>
  )
}
