import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="uvod"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div ref={ref} className="fade-in text-center lg:text-left">
            <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-blue-500/20">
              Nová generácia fitness technológie
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Váš nový fitness partner na zápästí
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              FitTrack Pro je revolučný mobilný fitness tracker, ktorý kombinuje presné
              monitorovanie tepu, GPS sledovanie trás a pokročilú analýzu spánku v jednom
              elegantnom zariadení. Navrhnutý pre aktívnych ľudí, ktorí chcú mať prehľad
              o svojom zdraví kedykoľvek a kdekoľvek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Predobjednať teraz
              </a>
              <a
                href="#funkcie"
                className="inline-flex items-center justify-center border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-gray-400 hover:text-white hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Zistiť viac
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Uvedenie na trh: jar 2026 · Limitovaná edícia · Bezplatné doručenie
            </p>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-md aspect-square">
              <img
                src="https://loremflickr.com/800/800/fitness,tracker,smartwatch?random=1"
                alt="Nový mobilný fitness tracker FitTrack Pro na zápästí"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
