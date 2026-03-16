import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Úvod', href: '#uvod' },
  { label: 'Funkcie', href: '#funkcie' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#uvod"
            className="text-xl font-bold text-white tracking-tight transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-2 py-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            FitTrack Pro
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 font-medium transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Objednať
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Prepnúť menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 transition-all duration-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-gray-950/95 backdrop-blur-md border-t border-gray-800 px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-300 font-medium transition-all duration-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Objednať
          </a>
        </div>
      </div>
    </nav>
  )
}
