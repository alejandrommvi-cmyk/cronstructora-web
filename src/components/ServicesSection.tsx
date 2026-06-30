'use client'

import { motion } from 'framer-motion'
import { Layers, Sliders, Timer, Key, MapPin } from 'lucide-react'

const services = [
  {
    Icon: Layers,
    number: '01',
    title: 'Construcción industrializada',
    description:
      'Construimos en fábrica para ofrecer un resultado superior. Cada módulo se desarrolla en un entorno industrial controlado que garantiza una calidad constante, mayor precisión y una ejecución más eficiente desde el primer día.',
    tag: 'Core',
  },
  {
    Icon: Sliders,
    number: '02',
    title: 'Personalización total',
    description:
      'Cada vivienda es única. Planta libre, volumetría, materiales premium y acabados completamente a medida según tu visión y tu parcela. Sin compromisos de catálogo.',
    tag: 'Diseño',
  },
  {
    Icon: Timer,
    number: '03',
    title: 'Rapidez de ejecución',
    description:
      'La construcción industrializada elimina tiempos muertos y las esperas propias de la obra tradicional. Tu vivienda avanza incluso cuando llueve. El reloj siempre corre a tu favor.',
    tag: 'Proceso',
  },
  {
    Icon: Key,
    number: '04',
    title: 'Llave en mano',
    description:
      'Nos ocupamos de todo para que tú solo te preocupes de disfrutar tu vivienda. Coordinamos cada fase del proyecto, desde el diseño inicial hasta la entrega final, garantizando un proceso ágil, transparente y sin complicaciones.',
    tag: 'Servicio',
  },
  {
    Icon: MapPin,
    number: '05',
    title: 'Equipo local en Canarias',
    description:
      'Radicados en Santa Cruz de Tenerife, conocemos la normativa, el terreno y el clima de cada isla. Presupuesto cerrado desde el inicio — sin sorpresas de última hora.',
    tag: 'Local',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#F4F1EC] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Servicios</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#0F0E0E] font-light leading-[1.08]">
              Por qué elegir
              <br /><span className="italic text-[#C8881A]">Canary Modular System</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0F0E0E]/50 max-w-sm text-sm leading-relaxed font-light"
          >
            No somos constructores tradicionales. Somos fabricantes de viviendas de alta precisión con dominio total del proceso.
          </motion.p>
        </div>

        {/* Services grid — featured first card spans 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0F0E0E]/8">

          {services.map(({ Icon, number, title, description, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden bg-[#F4F1EC] hover:bg-[#0A0908] transition-colors duration-500 cursor-pointer ${
                i === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Top amber reveal line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5A623] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className={`p-10 lg:p-14 ${i === 0 ? 'lg:p-16' : ''}`}>

                {/* Top row: tag + number */}
                <div className="flex items-center justify-between mb-8 lg:mb-10">
                  <span className="text-[#F5A623]/70 text-[9px] tracking-[0.45em] uppercase font-light group-hover:text-[#F5A623] transition-colors duration-400">
                    {tag}
                  </span>
                  <span className="font-display text-[5rem] lg:text-[7rem] text-[#0A0908]/5 group-hover:text-white/5 leading-none transition-colors duration-500 select-none">
                    {number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`mb-8 ${i === 0 ? 'mb-10' : ''}`}>
                  <div className="w-14 h-14 border border-[#F5A623]/25 group-hover:border-[#F5A623]/50 group-hover:bg-[#F5A623]/8 flex items-center justify-center transition-all duration-500">
                    <Icon
                      size={i === 0 ? 22 : 18}
                      className="text-[#F5A623] stroke-[1.5] group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`font-display text-[#0F0E0E] group-hover:text-white font-light transition-colors duration-500 mb-4 leading-snug ${
                    i === 0 ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                  }`}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className={`text-[#0F0E0E]/52 group-hover:text-white/42 font-light leading-relaxed transition-colors duration-500 ${
                    i === 0 ? 'text-sm lg:text-base max-w-lg' : 'text-sm'
                  }`}
                >
                  {description}
                </p>

                {/* Hover CTA */}
                <div className="mt-8 lg:mt-10 flex items-center gap-2 text-[#F5A623] text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 font-light">
                  Saber más
                  <span className="w-5 h-px bg-[#F5A623] inline-block" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
