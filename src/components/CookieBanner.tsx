'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cms_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cms_cookie_consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cms_cookie_consent', 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0A0908]/97 backdrop-blur-xl border-t border-white/8"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-white/70 text-sm font-light leading-relaxed max-w-2xl">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenidos.
                Puedes aceptarlas todas o configurar tus preferencias.{' '}
                <Link href="/cookies" className="text-[#F5A623] hover:underline">
                  Más información
                </Link>
                {' '}y{' '}
                <Link href="/privacidad" className="text-[#F5A623] hover:underline">
                  Política de privacidad
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={reject}
                className="px-6 py-2.5 border border-white/15 text-white/40 text-xs tracking-[0.15em] uppercase font-light hover:border-white/30 hover:text-white/65 transition-all duration-300"
              >
                Solo esenciales
              </button>
              <button
                onClick={accept}
                className="px-6 py-2.5 bg-[#F5A623] text-[#0A0908] text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#F7B84B] transition-colors duration-300"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
