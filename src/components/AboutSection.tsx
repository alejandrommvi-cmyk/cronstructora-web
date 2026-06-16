'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-[#0A0A0A] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#C4A97C]" />
              <span className="text-[#C4A97C] text-xs tracking-[0.35em] uppercase font-light">
                Sobre nosotros
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.1] mb-10">
              No construimos casas.
              <br />
              Construimos{' '}
              <span className="italic text-[#C4A97C]">legados.</span>
            </h2>

            <div className="space-y-5 text-white/45 font-light leading-relaxed text-sm lg:text-base">
              <p>
                Somos una constructora de alto nivel especializada en proyectos donde la
                arquitectura, el diseño y la artesanía se unen para crear espacios únicos e
                irrepetibles.
              </p>
              <p>
                Cada proyecto es una conversación entre el cliente, el espacio y nuestra
                obsesión por el detalle. Trabajamos exclusivamente con los mejores
                arquitectos, diseñadores y artesanos del sector.
              </p>
              <p>
                Nuestro enfoque exclusivo nos permite dedicar la atención y los recursos que
                cada proyecto merece. No tomamos más encargos de los que podemos ejecutar
                con excelencia.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-white/8 grid grid-cols-2 gap-10">
              <div>
                <p className="font-display text-5xl text-white font-light mb-2">2004</p>
                <p className="text-white/25 text-xs tracking-[0.2em] uppercase">
                  Año de fundación
                </p>
              </div>
              <div>
                <p className="font-display text-5xl text-white font-light mb-2">100%</p>
                <p className="text-white/25 text-xs tracking-[0.2em] uppercase">
                  En plazo y presupuesto
                </p>
              </div>
            </div>

            <a
              href="#contacto"
              className="mt-12 inline-flex items-center gap-3 text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase border-b border-white/15 hover:border-[#C4A97C] hover:text-[#C4A97C] pb-2 transition-all duration-300 group"
            >
              Conoce al equipo
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
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
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85"
                alt="Arquitectura de lujo premium"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#C4A97C]/8 mix-blend-multiply" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 lg:-left-10 bg-[#F5F1EB] p-8 max-w-[200px]"
            >
              <p className="font-display text-4xl text-[#0A0A0A] font-light mb-2">98%</p>
              <p className="text-[#0A0A0A]/50 text-xs leading-relaxed font-light">
                Clientes que vuelven a confiar en nosotros
              </p>
            </motion.div>

            <div className="absolute -top-5 -right-5 w-20 h-20 border border-[#C4A97C]/25" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#C4A97C]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
