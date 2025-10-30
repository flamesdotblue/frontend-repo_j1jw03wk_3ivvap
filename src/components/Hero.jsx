import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const pages = Array.from({ length: 9 })

  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Hero with 3D shield and cinematic intro">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft vignette to enhance depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/80" />
        {/* Subtle radial color accents matching the superhero theme */}
        <div
          className="absolute inset-0 opacity-70 mix-blend-soft-light animate-[zoomPulse_16s_ease-in-out_infinite]"
          style={{
            backgroundImage:
              'radial-gradient(60rem_60rem at 70% 30%, rgba(252, 211, 77, 0.10), transparent 60%), radial-gradient(45rem_45rem at 25% 65%, rgba(56, 189, 248, 0.08), transparent 55%), radial-gradient(35rem_35rem at 50% 50%, rgba(99, 102, 241, 0.10), transparent 50%)',
          }}
        />

        {/* Marvel Studios-like turning page effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 perspective-[1200px]">
            {pages.map((_, i) => (
              <span
                key={i}
                className="absolute top-0 h-full will-change-transform"
                style={{
                  left: `${i * (100 / (pages.length - 1))}%`,
                  width: `${120 / (pages.length - 1)}%`,
                  transformOrigin: 'left center',
                  animation: `pageFlip 4.5s ease-in-out ${i * 0.25}s infinite`,
                  opacity: 0.12,
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.0))',
                  filter: 'blur(0.2px)',
                  mixBlendMode: 'overlay',
                  maskImage:
                    'linear-gradient(to right, transparent, black 8%, black 85%, transparent)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 8%, black 85%, transparent)',
                }}
              />
            ))}
          </div>

          {/* Faint halftone/texture sweep to sell the filmic page feel */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-soft-light"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 6px)',
            }}
          />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10 shadow-sm">
              Supercharged. Immersive. Interactive.
            </p>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-sky-200 to-indigo-200">
                Enter the Heroverse
              </span>
              <span className="block text-white">cinematic 3D experiences.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              A superhero-grade landing experience with interactive 3D and a page-turn intro inspired by the Marvel Studios identity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:from-blue-500 hover:to-indigo-500 transition-colors">
                Explore Features
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Keyframes for subtle zoom and page flipping */}
      <style>{`
        @keyframes zoomPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes pageFlip {
          0%, 65% { transform: rotateY(0deg) skewY(0.2deg) translateZ(0); opacity: 0.06; }
          70% { transform: rotateY(-65deg) skewY(0.5deg) translateZ(8px); opacity: 0.14; }
          75% { transform: rotateY(-110deg) skewY(0.6deg) translateZ(10px); opacity: 0.18; }
          80% { transform: rotateY(-150deg) skewY(0.5deg) translateZ(6px); opacity: 0.12; }
          85% { transform: rotateY(-180deg) skewY(0.4deg) translateZ(0); opacity: 0.06; }
          100% { transform: rotateY(-180deg); opacity: 0.06; }
        }
      `}</style>
    </section>
  )
}
