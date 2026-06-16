'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden" id="inicio">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90"
          alt="Villa de lujo premium"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/30 to-[#0A0A0A]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-12 max-w-7xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-px bg-[#C4A97C]" />
          <span className="text-[#C4A97C] text-xs tracking-[0.35em] uppercase font-light">
            Arquitectura de alto nivel
          </span>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,8vw,8rem)] text-white font-light leading-[0.92] tracking-[-0.02em]"
          >
            Construimos
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,8vw,8rem)] text-[#C4A97C] font-light leading-[0.92] tracking-[-0.02em] italic"
          >
            espacios
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,8vw,8rem)] text-white font-light leading-[0.92] tracking-[-0.02em]"
          >
            excepcionales.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16"
        >
          <p className="text-white/45 text-sm lg:text-base max-w-xs leading-loose tracking-wide font-light">
            Villas de lujo, reformas premium y obra nueva de alto nivel.
            <br />Más de 20 años de excelencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="px-10 py-4 bg-[#C4A97C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E2C99E] transition-all duration-300"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#proyectos"
              className="px-10 py-4 border border-white/25 text-white text-xs tracking-[0.2em] uppercase font-light hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Ver proyectos
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute right-12 bottom-28 lg:flex flex-col items-center gap-3 hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-white/30" />
        </motion.div>
        <div className="w-px h-14 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-0 right-0 hidden lg:block"
      >
        <div className="bg-black/40 backdrop-blur-md border-l border-t border-white/8 px-10 py-5">
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase">
            Madrid · Barcelona · Marbella · Ibiza
          </p>
        </div>
      </motion.div>
    </section>
  )
}
