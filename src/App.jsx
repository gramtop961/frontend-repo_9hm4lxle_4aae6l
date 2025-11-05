import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSpline from './components/HeroSpline'
import ProductSection from './components/ProductSection'
import FooterContact from './components/FooterContact'
import { motion } from 'framer-motion'

function App() {
  // Auto theme detection (light/dark)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      if (mq.matches) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const galleryImages = [
    'https://images.unsplash.com/photo-1600585154340-1e4ce9a9f8fc?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616594039964-ae9021a4009f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505692795793-20f543407193?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582582717697-891e9b67a0cd?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-[#0c0c0c] text-gray-900 dark:text-white">
      <Navbar />
      <HeroSpline />

      {/* Azienda / Storytelling */}
      <section id="azienda" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <p className="uppercase tracking-[0.2em] text-xs text-gray-500 dark:text-gray-400">AZIENDA</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
              Lavorazioni in resina dal carattere tattile e senza tempo
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              LIVINGTEK crea elementi per bagni e arredi in resina, combinando tecniche artigianali con finiture contemporanee. Ogni superficie è progettata per trasmettere morbidezza, continuità e luce.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop"
                alt="Dettaglio materiale in resina"
                loading="lazy"
                className="w-full h-[360px] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#d5b676]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <ProductSection />

      {/* Progetti Gallery (cinematic strip) */}
      <section id="progetti" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="uppercase tracking-[0.2em] text-xs text-gray-500 dark:text-gray-400">PROGETTI</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Galleria cinematica</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
              Selezione di installazioni e realizzazioni con transizioni morbide e continuità visiva.
            </p>
          </motion.div>

          <div className="mt-10 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 min-w-max">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-[70vw] sm:w-[420px] h-[280px] rounded-2xl overflow-hidden flex-shrink-0 border border-black/5 dark:border-white/10 bg-white dark:bg-white/5"
                >
                  <img
                    src={src}
                    alt={`Progetto ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterContact />
    </div>
  )
}

export default App
