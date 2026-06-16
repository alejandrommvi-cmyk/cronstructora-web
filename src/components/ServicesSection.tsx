'use client'

import { motion } from 'framer-motion'
import { Home, Wrench, Building2, Palette, Waves, Compass } from 'lucide-react'

const services = [
  {
    Icon: Home,
    title: 'Villas de lujo',
    description:
      'Diseño y construcción de villas exclusivas con materiales premium y acabados de alta gama para clientes que exigen lo mejor.',
  },
  {
    Icon: Wrench,
    title: 'Reformas integrales',
    description:
      'Transformamos espacios existentes con una visión arquitectónica moderna y atemporal. Cada detalle, cuidado al milímetro.',
  },
  {
    Icon: Building2,
    title: 'Obra nueva',
    description:
      'Construcción desde cero de residencias exclusivas. Desde el proyecto hasta las llaves, con total control y calidad.',
  },
  {
    Icon: Palette,
    title: 'Interiorismo',
    description:
      'Diseño de interiores de lujo que complementa y eleva cada espacio. Selección de materiales, mobiliario y acabados únicos.',
  },
  {
    Icon: Waves,
    title: 'Piscinas & exteriores',
    description:
      'Espacios exteriores de lujo: piscinas infinitas, jardines de autor y zonas de entretenimiento al más alto nivel.',
  },
  {
    Icon: Compass,
    title: 'Diseño arquitectónico',
    description:
      'Proyectos arquitectónicos únicos que combinan funcionalidad, estética contemporánea y sostenibilidad.',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#F5F1EB] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C4A97C]" />
              <span className="text-[#C4A97C] text-xs tracking-[0.35em] uppercase font-light">
                Nuestros servicios
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#0A0A0A] font-light leading-[1.1]">
              Excelencia en
              <br />
              <span className="italic text-[#6B5B45]">cada detalle</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0A0A0A]/45 max-w-sm text-sm leading-relaxed font-light"
          >
            Ofrecemos una gama completa de servicios de construcción premium para hacer
            realidad los proyectos más ambiciosos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#0A0A0A]/8">
          {services.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group border-b border-r border-[#0A0A0A]/8 p-10 lg:p-12 hover:bg-[#0A0A0A] transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A97C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 mb-8">
                <div className="w-10 h-10 border border-[#C4A97C]/30 group-hover:border-[#C4A97C]/60 flex items-center justify-center transition-colors duration-500">
                  <Icon
                    size={16}
                    className="text-[#C4A97C] stroke-[1.5]"
                  />
                </div>
              </div>

              <h3 className="font-display text-xl text-[#0A0A0A] group-hover:text-white mb-4 font-light transition-colors duration-500 relative z-10">
                {title}
              </h3>

              <p className="text-[#0A0A0A]/50 group-hover:text-white/40 text-sm leading-relaxed font-light transition-colors duration-500 relative z-10">
                {description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[#C4A97C] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 relative z-10">
                Saber más →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
