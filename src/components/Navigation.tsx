'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-[#0F0E0E]/96 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">

            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image src="/logo-dark.png" alt="CMS Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-medium">CMS</span>
                <span className="text-white/50 text-[10px] tracking-[0.18em] uppercase font-light mt-0.5 hidden sm:block">
                  Canary Modular System
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-white/50 hover:text-white text-xs tracking-[0.15em] uppercase font-light transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F5A623] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <a
              href="#contacto"
              className="hidden lg:inline-flex items-center px-8 py-3 border border-[#F5A623] text-[#F5A623] text-xs tracking-[0.15em] uppercase font-light hover:bg-[#F5A623] hover:text-[#0F0E0E] transition-all duration-300"
            >
              Solicitar presupuesto
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 z-10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0F0E0E] flex flex-col justify-center px-10"
          >
            <div className="flex items-center gap-3 absolute top-6 left-6">
              <div className="relative w-9 h-9">
                <Image src="/logo-dark.png" alt="CMS Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#F5A623] text-sm tracking-[0.3em] uppercase font-medium">CMS</span>
                <span className="text-white/40 text-[9px] tracking-[0.18em] uppercase font-light mt-0.5">Canary Modular System</span>
              </div>
            </div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-5xl text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="inline-block px-10 py-4 bg-[#F5A623] text-[#0F0E0E] text-xs tracking-[0.2em] uppercase font-medium"
              >
                Solicitar presupuesto
              </a>
            </motion.div>
            <div className="absolute bottom-10 left-10 text-white/20 text-xs tracking-widest uppercase">
              Canarias · Península · Internacional
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
