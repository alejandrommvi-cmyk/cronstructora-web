'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Consulta & Diseño',
    description: 'Primera reunión para entender tu visión. Nuestros arquitectos crean el proyecto personalizado con planos, materiales y presupuesto cerrado.',
    duration: '2–3 semanas',
  },
  {
    number: '02',
    title: 'Permisos & Planificación',
    description: 'Nos encargamos de toda la gestión administrativa: licencias de obra, permisos municipales y coordinación con organismos oficiales.',
    duration: '4–6 semanas',
  },
  {
    number: '03',
    title: 'Fabricación modular',
    description: 'Tu vivienda se fabrica en nuestro taller con control de calidad exhaustivo. Módulos construidos en condiciones óptimas, sin depender del clima.',
    duration: '6–8 semanas',
  },
  {
    number: '04',
    title: 'Instalación & Entrega',
    description: 'Los módulos se transportan y ensamblan en tu parcela en pocos días. Instalaciones, acabados y entrega de llaves con garantía de 10 años.',
    duration: '1–2 semanas',
  },
]

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-[#0F0E0E] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-28 gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Metodología</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.1]">
              De cero a llaves
              <br /><span className="italic text-[#F5A623]">en 90 días</span>
            </h2>
          </div>
          <p className="text-white/30 max-w-xs text-sm leading-relaxed font-light">
            El método modular CMS revoluciona los plazos sin comprometer un milímetro de calidad.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-px bg-white/6" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="relative z-10 mb-10">
                  <div className="w-[6.5rem] h-[6.5rem] border border-white/10 group-hover:border-[#F5A623]/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="font-display text-3xl text-white/15 group-hover:text-[#F5A623]/50 font-light transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="relative z-10">
                  <p className="text-[#F5A623] text-xs tracking-[0.2em] uppercase mb-4 font-light">{step.duration}</p>
                  <h3 className="font-display text-2xl text-white mb-4 font-light">{step.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed font-light">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[3.25rem] top-24 w-px h-12 bg-white/8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-16 border-t border-white/5 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-4 px-12 py-5 border border-white/15 hover:border-[#F5A623] text-white/50 hover:text-[#F5A623] text-xs tracking-[0.2em] uppercase font-light transition-all duration-400 group"
          >
            Iniciar mi proyecto modular
            <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
