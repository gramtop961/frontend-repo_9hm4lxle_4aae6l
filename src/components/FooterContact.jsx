import { motion } from 'framer-motion'

export default function FooterContact() {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer id="contatti" className="bg-[#0c0c0c] text-white">
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase tracking-[0.2em] text-xs text-white/60">CONTATTI</p>
          <h3 className="mt-3 text-3xl sm:text-4xl font-semibold">Parliamo del tuo progetto</h3>
          <p className="mt-4 text-white/80 max-w-xl">
            Materiali, campioni, finiture e consulenza: raccontaci cosa immagini e diamo forma insieme alla tua idea.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70">Nome</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg bg-white/10 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#d5b676] focus:border-transparent px-3 py-2 transition"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg bg-white/10 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#d5b676] focus:border-transparent px-3 py-2 transition"
                placeholder="nome@azienda.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-white/70">Messaggio</label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-lg bg-white/10 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#f0d18a] focus:border-transparent px-3 py-2 transition"
              placeholder="Raccontaci del tuo progetto..."
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-2.5 hover:bg-white/90 transition shadow-[0_10px_30px_rgba(213,182,118,0.25)]"
            >
              Invia richiesta
            </button>
          </div>
        </motion.form>
      </section>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} LIVINGTEK — Tutti i diritti riservati</p>
          <nav className="mt-3 sm:mt-0 flex items-center gap-6 text-sm text-white/70">
            <a href="#azienda" className="hover:text-white transition-colors">Azienda</a>
            <a href="#prodotti" className="hover:text-white transition-colors">Prodotti</a>
            <a href="#progetti" className="hover:text-white transition-colors">Progetti</a>
            <a href="#contatti" className="hover:text-white transition-colors">Contatti</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
