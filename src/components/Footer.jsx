export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#uvod"
              className="text-xl font-bold text-white transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2 py-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              FitTrack Pro
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Váš inteligentný fitness partner na zápästí.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#uvod"
              className="text-gray-400 text-sm transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1 py-1"
            >
              Úvod
            </a>
            <a
              href="#funkcie"
              className="text-gray-400 text-sm transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1 py-1"
            >
              Funkcie
            </a>
            <a
              href="#kontakt"
              className="text-gray-400 text-sm transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1 py-1"
            >
              Kontakt
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 FitTrack Pro. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  )
}
