import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Cell Forge 3D hero">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Zoom-in cinematic layer (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />
        {/* Animated radial texture that slowly scales for a subtle zoom-video feel */}
        <div className="absolute inset-0 opacity-60 mix-blend-soft-light animate-[zoomPulse_16s_ease-in-out_infinite]" style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(250, 204, 21, 0.12), transparent 35%), radial-gradient(circle at 80% 70%, rgba(56, 189, 248, 0.10), transparent 40%), radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.10), transparent 45%)',
        }} />
        {/* Directional color wash to echo the yellow ray/circle theme */}
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_70%_30%,rgba(250,204,21,0.10),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10 shadow-sm">
              Dark. Sleek. Ciliate-powered biomanufacturing.
            </p>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-sky-200 to-indigo-200">
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
          </motion.div>
        </div>
      </div>

      {/* Keyframes for subtle zoom effect */}
      <style>{`
        @keyframes zoomPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  )
}
