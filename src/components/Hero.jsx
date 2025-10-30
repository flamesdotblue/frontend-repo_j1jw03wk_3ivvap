import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden" aria-label="Cell Forge 3D hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient tints and highlights over the scene (won't block pointer events) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/10 via-transparent to-blue-600/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10 shadow-sm">
              Dark. Sleek. Ciliate-powered biomanufacturing.
            </p>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300">
                Forge the future of proteins
              </span>
              <span className="block text-white">with living micro-factories.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              Advanced ciliate systems deliver high-purity recombinant proteins without animals or endotoxins—precision engineered for scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:from-blue-500 hover:to-indigo-500 transition-colors">
                Request a pilot run
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15">
                Explore the platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
