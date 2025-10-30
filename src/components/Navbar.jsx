import { Dna } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-blue-500 text-white">
              <Dna className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm tracking-widest text-gray-500 font-semibold">CELL FORGE</p>
              <p className="text-base font-semibold text-gray-900 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-blue-600 transition-colors">
                Biomanufacturing Reinvented
              </p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Technology</a>
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Benefits</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm px-4 py-2 hover:bg-gray-800 transition-colors">
              Request a Demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
