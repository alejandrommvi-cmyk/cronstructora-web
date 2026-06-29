'use client'

import { motion } from 'framer-motion'
import { Layers, Sliders, Timer, Key, MapPin } from 'lucide-react'

const services = [
  {
    Icon: Layers,
    number: '01',
    title: 'Construcción industrializada',
    description: 'Fabricación de precisión milimétrica en taller controlado. Sin depender del clima ni de contratiempos de obra. Calidad consistente en cada módulo.',
  },
  {
    Icon: Sliders,
    number: '02',
    title: 'Personalización total',
    description: 'Cada vivienda es única. Planta libre, volumetría, materiales premium y acabados completamente a medida según tu visión y tu parcela.',
  },
  {
    Icon: Timer,
    number: '03',
    title: 'Rapidez de ejecución',
    description: 'De proyecto a llaves en menos de 90 días. La construcción industrializada elimina tiempos muertos y esperas propias de la obra tradicional.',
  },
  {
    Icon: Key,
    number: '04',
    title: 'Gestión integral llave en mano',
    description: 'Un único interlocutor desde el primer boceto hasta la entrega. Diseño, permisos, fabricación, instalación y postventa incluidos.',
  },
  {
    Icon: MapPin,
    number: '05',
    title: 'Equipo local en Canarias',
    description: 'Radicados en Santa Cruz de Tenerife, conocemos la normativa, el terreno y el clima de cada isla. Presupuesto cerrado desde el inicio, sin sorpresas.',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#F4F1EC] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8">
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
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#0F0E0E] font-light leading-[1.1]">
              Por qué elegir
              <br /><span className="italic text-[#C8881A]">Canary Modular System</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0F0E0E]/55 max-w-sm text-sm leading-relaxed font-light"
          >
            No somos constructores tradicionales. Somos fabricantes de viviendas de alta precisión con dominio total del proceso.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#0F0E0E]/8">
          {services.map(({ Icon, number, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group border-b border-r border-[#0F0E0E]/8 p-10 lg:p-12 hover:bg-[#0A0908] transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-5 right-8 font-display text-8xl text-[#0A0908]/4 group-hover:text-white/4 transition-colors duration-500 leading-none select-none pointer-events-none">
                {number}
              </div>

              {/* Top border reveal */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5A623] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className="relative z-10 mb-8">
                <div className="w-12 h-12 border border-[#F5A623]/30 group-hover:border-[#F5A623]/65 group-hover:bg-[#F5A623]/8 flex items-center justify-center transition-all duration-500">
                  <Icon size={18} className="text-[#F5A623] stroke-[1.5]" />
                </div>
              </div>

              <h3 className="font-display text-xl text-[#0F0E0E] group-hover:text-white mb-4 font-light transition-colors duration-500 relative z-10">
                {title}
              </h3>
              <p className="text-[#0F0E0E]/55 group-hover:text-white/45 text-sm leading-relaxed font-light transition-colors duration-500 relative z-10">
                {description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[#F5A623] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 relative z-10">
                Saber más →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
