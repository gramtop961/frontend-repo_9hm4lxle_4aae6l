import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function HeroSpline() {
  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-[#0c0c0c]">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for resin-like glow (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] rounded-t-full blur-3xl opacity-40"
           style={{
             background:
               'radial-gradient(50% 60% at 50% 50%, rgba(213,182,118,0.35) 0%, rgba(240,209,138,0.15) 40%, rgba(0,0,0,0) 80%)',
           }}
      />

      {/* Headline content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
            Handcrafted resin elements for bathrooms and furniture
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
            A premium, cinematic experience where materiality meets motion. Fluid transitions, tactile depths, and a luxurious visual system.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#prodotti"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 text-gray-900 px-5 py-2.5 hover:bg-white transition-colors"
            >
              Esplora Prodotti
            </a>
            <a
              href="#progetti"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-5 py-2.5 hover:bg-white/10 transition-colors"
            >
              Vedi Progetti
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
