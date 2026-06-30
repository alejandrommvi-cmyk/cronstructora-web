'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#0A0908]" id="inicio">

      {/* Background — IA generated, copyright-free */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 origin-center">
        <Image
          src="/banner-hero.png"
          alt="Villa modular premium Canary Modular System"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient: dark at top for nav, dark on left for text, open on right to show villa */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/80 via-transparent to-[#0A0908]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/95 via-[#0A0908]/55 to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 min-h-screen flex flex-col">

        {/* Main area: headline left + floating card right */}
        <div className="flex-1 grid lg:grid-cols-2 items-end max-w-[1600px] mx-auto w-full px-6 lg:px-14 pt-36 pb-0">

          {/* LEFT — headline + tagline + CTA */}
          <motion.div
            className="pb-12 lg:pb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-3 mb-9"
            >
              <div className="w-6 h-px bg-[#F5A623]" />
              <span className="text-white/40 text-[9px] tracking-[0.55em] uppercase font-light">
                Canary Modular System · Santa Cruz de Tenerife
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-[3rem] sm:text-[4.2rem] lg:text-[5.5rem] xl:text-[6.8rem] text-white uppercase leading-[0.86] tracking-[-0.02em] mb-7"
            >
              EL HOGAR<br />
              QUE<br />
              <span className="text-[#F5A623]">IMAGINAS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-white/38 text-sm font-light tracking-[0.1em] mb-10"
            >
              / Viviendas modulares premium · Islas Canarias /
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-9 py-4 bg-[#F5A623] text-[#0A0908] text-xs tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#F7B84B] transition-colors duration-300 cursor-none"
              >
                Solicitar presupuesto
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center justify-center px-9 py-4 border border-white/18 text-white/65 text-xs tracking-[0.2em] uppercase font-light rounded-full hover:border-white/40 hover:text-white transition-all duration-300 cursor-none"
              >
                Ver galería
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — floating feature card */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.05, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end pb-12 lg:pb-16"
          >
            <div className="bg-white/7 backdrop-blur-2xl border border-white/10 p-8 w-[330px]">

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Modular', 'Calificación A+', 'Llave en mano'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-white/14 text-white/45 text-[9px] tracking-[0.22em] uppercase font-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Thumbnail */}
              <div className="relative h-44 mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=660&q=85&fit=crop"
                  alt="Proyecto CMS"
                  fill
                  className="object-cover"
                  sizes="330px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <a
                  href="#galeria"
                  className="absolute bottom-4 right-4 bg-[#F5A623] text-[#0A0908] text-[9px] tracking-[0.2em] uppercase font-medium px-3 py-1.5 cursor-none hover:bg-[#F7B84B] transition-colors"
                >
                  Ver galería →
                </a>
              </div>

              {/* Copy */}
              <h3 className="font-display text-white text-lg font-light leading-snug mb-2">
                Diseño exclusivo &<br />eficiencia energética
              </h3>
              <p className="text-white/32 text-xs font-light leading-relaxed">
                Del boceto a las llaves en un tiempo récord. Sin sorpresas ni subcontratas.
              </p>

              {/* Mini stats */}
              <div className="mt-6 pt-5 border-t border-white/7 grid grid-cols-3 gap-2 text-center">
                {[{ v: 'A+', l: 'energía' }, { v: '7', l: 'islas' }, { v: '100%', l: 'llave en mano' }].map(({ v, l }) => (
                  <div key={l}>
                    <p className="font-display text-xl text-white font-light">{v}</p>
                    <p className="text-white/22 text-[8px] tracking-widest uppercase mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="border-t border-white/6 grid grid-cols-1 md:grid-cols-2"
        >
          <div className="px-6 lg:px-14 py-5 md:border-r border-white/6 bg-[#F5A623]/6 flex items-center gap-5">
            <div className="w-10 h-10 bg-[#F5A623]/12 flex items-center justify-center shrink-0">
              <span className="text-[#F5A623] text-xs">◆</span>
            </div>
            <div>
              <p className="text-white/75 text-sm font-light">Construcción industrializada</p>
              <p className="text-white/28 text-[10px] tracking-[0.22em] uppercase font-light mt-0.5">
                Control total de calidad · precisión milimétrica
              </p>
            </div>
          </div>
          <div className="px-6 lg:px-14 py-5 flex items-center justify-between">
            <div>
              <p className="text-white/75 text-sm font-light">7 Islas Canarias</p>
              <p className="text-white/28 text-[10px] tracking-[0.22em] uppercase font-light mt-0.5">
                cobertura total · Península · Portugal
              </p>
            </div>
            <a
              href="#nosotros"
              className="text-white/28 hover:text-[#F5A623] text-[10px] tracking-[0.25em] uppercase font-light border-b border-white/10 hover:border-[#F5A623] pb-0.5 transition-all duration-300 cursor-none hidden sm:block"
            >
              Conócenos →
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute right-12 bottom-28 hidden lg:flex flex-col items-center gap-3 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="text-white/28 text-[9px] tracking-[0.45em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
