'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden" id="inicio">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop"
          alt="Villa modular de lujo de una planta Canary Modular System"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E0E]/65 via-[#0F0E0E]/25 to-[#0F0E0E]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0E]/80 via-[#0F0E0E]/30 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-12 max-w-7xl mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-px bg-[#F5A623]" />
          <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">
            Canary Modular System · Canarias
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,7.5vw,8rem)] text-white font-light leading-[0.92] tracking-[-0.02em]"
          >
            Construimos hogares.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,7.5vw,8rem)] text-[#F5A623] font-light leading-[0.92] tracking-[-0.02em] italic"
          >
            Diseñamos
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,7.5vw,8rem)] text-white font-light leading-[0.92] tracking-[-0.02em]"
          >
            libertad.
          </motion.h1>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16"
        >
          <p className="text-white/40 text-sm max-w-xs leading-loose tracking-wide font-light">
            Viviendas modulares de lujo de una planta.
            <br />Diseño exclusivo · Eficiencia A+ · Llave en mano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="px-10 py-4 bg-[#F5A623] text-[#0F0E0E] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#F7B84B] transition-all duration-300"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#proyectos"
              className="px-10 py-4 border border-white/25 text-white text-xs tracking-[0.2em] uppercase font-light hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              Ver proyectos
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute right-12 bottom-28 hidden lg:flex flex-col items-center gap-3"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ArrowDown size={14} className="text-white/30" />
        </motion.div>
        <div className="w-px h-14 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>

      {/* Location tag */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-0 right-0 hidden lg:block"
      >
        <div className="bg-black/40 backdrop-blur-md border-l border-t border-white/8 px-10 py-5">
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase">
            Canarias · Península · Portugal
          </p>
        </div>
      </motion.div>
    </section>
  )
}
