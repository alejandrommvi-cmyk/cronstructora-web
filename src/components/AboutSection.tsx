'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-[#0F0E0E] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Quiénes somos</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.1] mb-10">
              Construimos el futuro
              <br />de Canarias,
              <br /><span className="italic text-[#F5A623]">modulo a módulo.</span>
            </h2>

            <div className="space-y-5 text-white/60 font-light leading-relaxed text-sm lg:text-base">
              <p>
                Canary Modular System nació de una convicción: que construir una vivienda de máxima
                calidad debía ser un proceso transparente, eficiente y totalmente personalizado.
                Somos especialistas en viviendas modulares industrializadas de lujo en las Islas Canarias.
              </p>
              <p>
                Nuestro método combina tecnología de construcción de alta precisión con acabados
                de primera gama. Cada vivienda se fabrica módulo a módulo en nuestro taller,
                con control total de calidad y al margen de las incidencias de la obra tradicional.
              </p>
              <p>
                Con sede en Santa Cruz de Tenerife, actuamos en todas las islas y en la Península.
                Nuestro equipo de arquitectos, ingenieros y maestros de obra garantiza un resultado
                excepcional — y un presupuesto cerrado desde el primer día.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-white/8 grid grid-cols-2 gap-10">
              <div>
                <p className="font-display text-4xl text-white font-light mb-2">90 días</p>
                <p className="text-white/25 text-xs tracking-[0.2em] uppercase">Plazo medio de entrega</p>
              </div>
              <div>
                <p className="font-display text-4xl text-white font-light mb-2">A+</p>
                <p className="text-white/25 text-xs tracking-[0.2em] uppercase">Calificación energética</p>
              </div>
            </div>

            <a
              href="#contacto"
              className="mt-12 inline-flex items-center gap-3 text-white/50 hover:text-[#F5A623] text-xs tracking-[0.2em] uppercase border-b border-white/15 hover:border-[#F5A623] pb-2 transition-all duration-300 group"
            >
              Conoce al equipo
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/project-4.jpeg"
                alt="Vivienda modular de lujo Canary Modular System"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#F5A623]/8 mix-blend-multiply" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 lg:-left-10 bg-[#F4F1EC] p-8 max-w-[210px]"
            >
              <p className="font-display text-4xl text-[#0F0E0E] font-light mb-2">98%</p>
              <p className="text-[#0F0E0E]/50 text-xs leading-relaxed font-light">
                Clientes que vuelven a confiar en CMS para nuevos proyectos
              </p>
            </motion.div>

            <div className="absolute -top-5 -right-5 w-20 h-20 border border-[#F5A623]/25" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#F5A623]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
