import { Dna } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-blue-900/30">
              <Dna className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs tracking-[0.22em] text-slate-300 font-semibold">CELL FORGE</p>
              <p className="text-base font-semibold text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-300 transition-colors">
                Biomanufacturing Reinvented
              </p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Technology</a>
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Benefits</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-4 py-2 shadow hover:from-blue-500 hover:to-indigo-500 transition-colors">
              Request a Demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
