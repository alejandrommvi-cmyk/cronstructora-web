'use client'

import { motion } from 'framer-motion'
import { Layers, Sliders, Shield, Timer, Key, MapPin } from 'lucide-react'

const services = [
  {
    Icon: Layers,
    title: 'Construcción industrializada',
    description: 'Fabricación de precisión milimétrica en taller controlado. Sin depender del clima ni de contratiempos de obra. Calidad consistente en cada módulo.',
  },
  {
    Icon: Sliders,
    title: 'Personalización total',
    description: 'Cada vivienda es única. Planta libre, volumetría, materiales premium y acabados completamente a medida según tu visión y tu parcela.',
  },
  {
    Icon: Shield,
    title: 'Estructura de acero estructural',
    description: 'Fabricamos sobre estructura de acero galvanizado de alta resistencia. Durabilidad superior, comportamiento sísmico certificado y garantía de 50 años.',
  },
  {
    Icon: Timer,
    title: 'Rapidez de ejecución',
    description: 'De proyecto a llaves en menos de 90 días. La construcción industrializada elimina tiempos muertos y esperas propias de la obra tradicional.',
  },
  {
    Icon: Key,
    title: 'Gestión integral llave en mano',
    description: 'Un único interlocutor desde el primer boceto hasta la entrega. Diseño, permisos, fabricación, instalación y postventa incluidos.',
  },
  {
    Icon: MapPin,
    title: 'Equipo local en Canarias',
    description: 'Radicados en Gran Canaria, conocemos la normativa, el terreno y el clima de cada isla. Presupuesto cerrado desde el inicio, sin sorpresas.',
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
              <br /><span className="italic text-[#C8881A]">Canary Modular</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0F0E0E]/45 max-w-sm text-sm leading-relaxed font-light"
          >
            No somos constructores tradicionales. Somos fabricantes de viviendas de alta precisión con dominio total del proceso.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#0F0E0E]/8">
          {services.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group border-b border-r border-[#0F0E0E]/8 p-10 lg:p-12 hover:bg-[#0F0E0E] transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 mb-8">
                <div className="w-10 h-10 border border-[#F5A623]/30 group-hover:border-[#F5A623]/60 flex items-center justify-center transition-colors duration-500">
                  <Icon size={16} className="text-[#F5A623] stroke-[1.5]" />
                </div>
              </div>

              <h3 className="font-display text-xl text-[#0F0E0E] group-hover:text-white mb-4 font-light transition-colors duration-500 relative z-10">
                {title}
              </h3>
              <p className="text-[#0F0E0E]/50 group-hover:text-white/40 text-sm leading-relaxed font-light transition-colors duration-500 relative z-10">
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
