import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden" aria-label="Cell Forge DNA hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle radial highlight and gradient tint over the scene (won't block pointer events) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/0 to-white/80" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200 shadow-sm">
              100% animal-free • Endotoxin-free • Ciliate-powered
            </p>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-rose-500 to-blue-600">
                Forge the future of proteins
              </span>
              <span className="block text-gray-900">with living micro-factories.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              We biomanufacture recombinant proteins using advanced ciliate systems—delivering purity, performance, and scalability without animals or endotoxins.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800 transition">
                Request a pilot run
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300">
                Explore the platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
