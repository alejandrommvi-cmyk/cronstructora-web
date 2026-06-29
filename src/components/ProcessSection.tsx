'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Primera reunión',
    description: 'Conocemos tu proyecto: parcela, necesidades, estilo de vida y presupuesto. Sin prisa. Establecemos juntos las bases del hogar que vas a construir.',
  },
  {
    number: '02',
    title: 'Estudio de viabilidad',
    description: 'Análisis técnico del terreno, normativa urbanística y factibilidad del proyecto. Validamos que todo es posible antes de que te comprometas a nada.',
  },
  {
    number: '03',
    title: 'Diseño arquitectónico',
    description: 'Nuestros arquitectos crean el proyecto personalizado: planos, renders 3D, distribución interior, materiales y acabados exactamente a tu medida.',
  },
  {
    number: '04',
    title: 'Ingeniería y documentación',
    description: 'Proyecto técnico completo, cálculo estructural de acero y gestión íntegra de licencias y permisos con las administraciones competentes.',
  },
  {
    number: '05',
    title: 'Fabricación modular',
    description: 'Los módulos de tu vivienda se fabrican en nuestro taller con control de calidad exhaustivo, en condiciones óptimas y con precisión milimétrica.',
  },
  {
    number: '06',
    title: 'Transporte y montaje',
    description: 'Los módulos se transportan y ensamblan en parcela en tiempo récord. La estructura completa queda erguida y sellada en cuestión de días.',
  },
  {
    number: '07',
    title: 'Acabados y entrega',
    description: 'Instalaciones, acabados interiores, urbanización exterior y entrega de llaves. Revisión final exhaustiva y plan de mantenimiento incluidos.',
  },
]

export default function ProcessSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="proceso" className="bg-[#0A0908] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Metodología</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.08]">
              De cero a llaves
              <br /><span className="italic text-[#F5A623]">más rápido de lo que imaginas</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <p className="text-white/35 text-sm font-light leading-relaxed max-w-xs lg:text-right">
              Siete fases de proceso industrializado, un único interlocutor y cero sorpresas.
            </p>
          </div>
        </motion.div>

        {/* Steps — interactive numbered rows */}
        <div className="border-t border-white/6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.06 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`border-b border-white/6 transition-all duration-400 cursor-none relative overflow-hidden ${
                active === i ? 'bg-white/[0.025]' : ''
              }`}
            >
              {/* Left amber accent bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F5A623]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: active === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />

              <div className="flex items-start gap-6 lg:gap-14 py-7 lg:py-10 pl-4 lg:pl-6">

                {/* Step number */}
                <span
                  className={`font-display text-4xl lg:text-6xl xl:text-7xl font-light leading-none shrink-0 w-12 lg:w-20 transition-colors duration-400 ${
                    active === i ? 'text-[#F5A623]' : 'text-white/10'
                  }`}
                >
                  {step.number}
                </span>

                {/* Title + expandable description */}
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center justify-between gap-6">
                    <h3
                      className={`font-display text-xl lg:text-2xl xl:text-[1.75rem] font-light leading-snug transition-colors duration-400 ${
                        active === i ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white/38 text-sm leading-relaxed font-light overflow-hidden max-w-2xl"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Arrow */}
                <motion.span
                  animate={{ x: active === i ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`shrink-0 text-base pt-1 hidden sm:block transition-colors duration-400 ${
                    active === i ? 'text-[#F5A623]' : 'text-white/10'
                  }`}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-white/6 flex justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-4 px-12 py-5 border border-white/14 hover:border-[#F5A623] text-white/35 hover:text-[#F5A623] text-xs tracking-[0.22em] uppercase font-light transition-all duration-300 group cursor-none"
          >
            Iniciar mi proyecto modular
            <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
