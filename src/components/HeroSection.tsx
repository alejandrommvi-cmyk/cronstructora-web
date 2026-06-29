'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const attributes = ['Precisión', 'Eficiencia A+', 'Diseño exclusivo']

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden" id="inicio">

      {/* Background image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop"
          alt="Villa modular de lujo Canary Modular System"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/75 via-[#0A0908]/30 to-[#0A0908]/92" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/50 to-transparent" />

      {/* Right side attributes — ZROBIM style */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.9 }}
        className="absolute top-36 right-8 lg:right-14 hidden lg:flex flex-col items-end gap-3 z-10"
      >
        <span className="text-white/25 text-[9px] tracking-[0.4em] uppercase mb-1">2025</span>
        {attributes.map((attr, i) => (
          <motion.div
            key={attr}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 + i * 0.1 }}
            className="flex items-center gap-2.5"
          >
            <span className="w-5 h-px bg-white/25" />
            <span className="text-white/35 text-[9px] tracking-[0.3em] uppercase">{attr}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 h-full flex flex-col justify-end">

        {/* Giant oversized headline — ZROBIM style */}
        <div className="px-4 lg:px-10 mb-6 lg:mb-8 overflow-hidden">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="font-display text-white font-light leading-[0.85] tracking-[-0.035em] block"
                style={{ fontSize: 'clamp(4.5rem, 17.5vw, 20rem)' }}
              >
                CANARY
              </span>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="font-display text-[#F5A623] italic font-light leading-[0.85] tracking-[-0.035em] block"
                style={{ fontSize: 'clamp(4.5rem, 17.5vw, 20rem)' }}
              >
                Modular
              </span>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.76, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="font-display text-white/10 font-light leading-[0.85] tracking-[-0.035em] block"
                style={{ fontSize: 'clamp(4.5rem, 17.5vw, 20rem)' }}
              >
                System
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar: info card + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="px-6 lg:px-12 pb-10 lg:pb-14 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 max-w-[1600px] mx-auto w-full"
        >
          {/* ZROBIM-style info card */}
          <div className="bg-white/6 backdrop-blur-md border border-white/10 px-6 py-5 hidden md:block">
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {[
                { label: 'Empresa', value: 'Canary Modular System' },
                { label: 'Sede', value: 'Telde, Gran Canaria' },
                { label: 'Especialidad', value: 'Viviendas modulares A+' },
                { label: 'Plazo', value: '90 días · llave en mano' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-baseline gap-3">
                  <span className="text-white/30 text-[10px] tracking-widest uppercase shrink-0">{label}</span>
                  <span className="text-white/65 text-[11px] font-light">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: tagline + CTAs */}
          <div className="flex flex-col gap-6 items-start lg:items-end">
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase font-light">
              Construimos hogares · Diseñamos libertad
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="px-9 py-4 bg-[#F5A623] text-[#0A0908] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#F7B84B] transition-colors duration-300 cursor-none"
              >
                Solicitar presupuesto
              </a>
              <a
                href="#proyectos"
                className="px-9 py-4 border border-white/20 text-white text-xs tracking-[0.2em] uppercase font-light hover:border-white/45 hover:bg-white/5 transition-all duration-300 cursor-none"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute right-12 bottom-24 hidden lg:flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-14 bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
