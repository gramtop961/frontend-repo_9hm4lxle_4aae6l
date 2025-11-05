import { motion } from 'framer-motion'

const products = [
  {
    title: 'Lavabo Resinico',
    image:
      'https://images.unsplash.com/photo-1618222153715-3a159a7252d6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Piano di Appoggio',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Rivestimento Doccia',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a4009f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Mensole e Dettagli',
    image:
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop',
  },
]

function ProductCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between">
        <h3 className="text-white text-lg font-medium drop-shadow">{item.title}</h3>
        <div className="h-9 w-9 rounded-full bg-white/90 text-gray-900 grid place-items-center font-semibold">
          →
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductSection() {
  return (
    <section id="prodotti" className="relative py-24 bg-[#f8f8f8] dark:bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gray-500 dark:text-gray-400">COLLEZIONE</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
            Prodotti in resina con finitura premium
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Superfici continue, morbide al tatto e resistenti. Linee pulite, dettagli
            curati e tonalità calde dall’accento dorato.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, i) => (
            <ProductCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
