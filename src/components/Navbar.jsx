import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      if (current > lastScrollY.current && current > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = current
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="backdrop-blur-md bg-white/40 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="font-semibold tracking-wide text-gray-900 dark:text-white">
            LIVINGTEK
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#azienda" onClick={(e) => handleNavClick(e, 'azienda')} className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">Azienda</a>
            <a href="#prodotti" onClick={(e) => handleNavClick(e, 'prodotti')} className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">Prodotti</a>
            <a href="#progetti" onClick={(e) => handleNavClick(e, 'progetti')} className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">Progetti</a>
            <a href="#contatti" onClick={(e) => handleNavClick(e, 'contatti')} className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">Contatti</a>
          </div>
          <button
            aria-label="Apri menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/50 dark:bg-white/10 text-gray-900 dark:text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden origin-top transition-all duration-300 overflow-hidden backdrop-blur-md bg-white/60 dark:bg-black/40 ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {[
            { id: 'azienda', label: 'Azienda' },
            { id: 'prodotti', label: 'Prodotti' },
            { id: 'progetti', label: 'Progetti' },
            { id: 'contatti', label: 'Contatti' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="block text-gray-800 dark:text-gray-100 text-base"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
