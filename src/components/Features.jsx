import { useEffect, useRef } from 'react'

const FEATURES = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Nepretržité monitorovanie tepu',
    description:
      'Optický snímač srdcového tepu pracuje 24 hodín denne a poskytuje presné údaje o vašej tepovej frekvencii počas tréningu aj odpočinku. Okamžite vás upozorní na nezvyčajné hodnoty a pomáha vám trénovať v správnych zónach pre maximálne výsledky.',
    image: 'https://loremflickr.com/800/600/heart,rate,fitness?random=2',
    imageAlt: 'Monitorovanie srdcového tepu počas cvičenia',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Presné GPS sledovanie trás',
    description:
      'Vstavaný GPS modul zaznamenáva každý váš krok s vysokou presnosťou. Sledujte svoju trasu pri behu, cyklistike alebo turistike priamo na displeji. Po tréningu si prezrite podrobnú mapu s údajmi o tempe, prevýšení a vzdialenosti v prehľadnej mobilnej aplikácii.',
    image: 'https://loremflickr.com/800/600/gps,running,route?random=3',
    imageAlt: 'GPS mapa bežeckej trasy zobrazená na displeji',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    title: 'Pokročilá analýza spánku',
    description:
      'Sledujte kvalitu svojho spánku s rozlíšením jednotlivých fáz — ľahký spánok, hlboký spánok a REM fáza. FitTrack Pro analyzuje vaše spánkové vzorce a na základe dát vám ponúka personalizované odporúčania na zlepšenie regenerácie a celkového zdravia.',
    image: 'https://loremflickr.com/800/600/sleep,tracking,health?random=4',
    imageAlt: 'Analýza fáz spánku na obrazovke fitness trackera',
  },
]

export default function Features() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="funkcie" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prečo si vybrať FitTrack Pro
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tri kľúčové funkcie, ktoré robia z FitTrack Pro nepostrádateľného spoločníka
            pre váš aktívny životný štýl.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              ref={(el) => (refs.current[i] = el)}
              className="fade-in bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-gray-600/50"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="mb-4 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg border border-blue-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
