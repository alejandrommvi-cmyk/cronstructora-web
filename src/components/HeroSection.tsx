'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '90 días', label: 'llave en mano' },
  { value: 'A+', label: 'eficiencia energética' },
  { value: '7 islas', label: 'actuamos en Canarias' },
]

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.24])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden" id="inicio">

      {/* Background with scroll zoom */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 origin-center">
        <Image
          src="/banner.png"
          alt="Villa modular de lujo Canary Modular System"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient — dark at extremes, transparent in centre so the image breathes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/85 via-[#0A0908]/10 to-[#0A0908]/94" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/60 via-transparent to-transparent" />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 h-full flex flex-col justify-between">

        {/* Top — minimal brand eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="px-6 lg:px-12 pt-32 lg:pt-36"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-[#F5A623]" />
            <span className="text-white/40 text-[9px] tracking-[0.55em] uppercase font-light">
              Canary Modular System · Santa Cruz de Tenerife
            </span>
          </div>
        </motion.div>

        {/* Bottom — headline + CTAs + inline stats */}
        <div className="px-6 lg:px-12 pb-14 lg:pb-20 max-w-[1600px] mx-auto w-full">

          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.7rem] sm:text-[3.8rem] lg:text-[5.8rem] xl:text-[7.5rem] text-white font-light leading-[0.92] tracking-[-0.03em] mb-10 lg:mb-12"
          >
            Construimos<br />
            el hogar<br />
            <span className="italic text-[#F5A623]">que imaginas.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.95 }}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16"
          >
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="px-9 py-4 bg-[#F5A623] text-[#0A0908] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#F7B84B] transition-colors duration-300 cursor-none"
              >
                Solicitar presupuesto
              </a>
              <a
                href="#galeria"
                className="px-9 py-4 border border-white/22 text-white/80 text-xs tracking-[0.2em] uppercase font-light hover:border-white/45 hover:text-white transition-all duration-300 cursor-none"
              >
                Ver galería
              </a>
            </div>

            {/* Inline stats — desktop only */}
            <div className="hidden lg:flex items-center gap-10 pl-10 border-l border-white/10">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl text-white font-light leading-none">{value}</p>
                  <p className="text-white/28 text-[9px] tracking-[0.32em] uppercase mt-1.5 font-light">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute right-12 bottom-24 hidden lg:flex flex-col items-center gap-3 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-14 bg-gradient-to-b from-white/45 to-transparent"
        />
        <span className="text-white/30 text-[9px] tracking-[0.45em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
