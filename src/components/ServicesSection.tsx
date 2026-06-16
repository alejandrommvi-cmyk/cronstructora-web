'use client'

import { motion } from 'framer-motion'
import { Home, Ruler, Zap, Leaf, Wrench, Key } from 'lucide-react'

const services = [
  {
    Icon: Home,
    title: 'Vivienda modular de lujo',
    description: 'Diseño y fabricación de viviendas modulares de una planta con acabados premium, materiales de alta gama y arquitectura contemporánea.',
  },
  {
    Icon: Ruler,
    title: 'Diseño a medida',
    description: 'Cada hogar es único. Nuestro equipo de arquitectos crea un proyecto personalizado adaptado a tu parcela, estilo de vida y visión.',
  },
  {
    Icon: Key,
    title: 'Llave en mano',
    description: 'Nos encargamos de todo: diseño, permisos, fabricación, instalación y acabados. Tú solo llegas el día de la entrega.',
  },
  {
    Icon: Zap,
    title: 'Eficiencia energética A+',
    description: 'Todas nuestras viviendas alcanzan la máxima calificación energética. Ahorra hasta un 80% en consumo con nuestra tecnología modular.',
  },
  {
    Icon: Leaf,
    title: 'Arquitectura bioclimática',
    description: 'Diseño que aprovecha el clima canario: orientación solar, ventilación natural y materiales sostenibles de bajo impacto.',
  },
  {
    Icon: Wrench,
    title: 'Mantenimiento integral',
    description: 'Servicio postventa con garantía de 10 años y plan de mantenimiento preventivo para mantener tu hogar en perfecto estado.',
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
              Todo incluido,
              <br /><span className="italic text-[#C8881A]">sin sorpresas</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0F0E0E]/45 max-w-sm text-sm leading-relaxed font-light"
          >
            Del concepto a las llaves en mano. Un único interlocutor, un único proceso, un resultado excepcional.
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
