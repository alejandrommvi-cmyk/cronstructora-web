'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Primera Reunión',
    description: 'Conocemos tu proyecto: parcela, necesidades, estilo de vida y presupuesto. Establecemos las bases del hogar que vas a construir.',
    duration: '1 semana',
  },
  {
    number: '02',
    title: 'Estudio de Viabilidad',
    description: 'Análisis técnico del terreno, normativa urbanística y factibilidad del proyecto. Validamos que todo es posible antes de comprometerte.',
    duration: '1–2 semanas',
  },
  {
    number: '03',
    title: 'Diseño Arquitectónico',
    description: 'Nuestros arquitectos crean el proyecto personalizado: planos, renders 3D, distribución interior, materiales y acabados exactamente a tu medida.',
    duration: '2–3 semanas',
  },
  {
    number: '04',
    title: 'Ingeniería y Documentación',
    description: 'Proyecto técnico completo, cálculo estructural de acero y gestión íntegra de licencias y permisos con las administraciones competentes.',
    duration: '2–3 semanas',
  },
  {
    number: '05',
    title: 'Fabricación Modular',
    description: 'Los módulos de tu vivienda se fabrican en nuestro taller con control de calidad exhaustivo, en condiciones óptimas y sin depender del clima.',
    duration: '6–8 semanas',
  },
  {
    number: '06',
    title: 'Transporte y Montaje',
    description: 'Los módulos se transportan y ensamblan en parcela en tiempo récord. La estructura completa queda erguida y sellada en cuestión de días.',
    duration: '1 semana',
  },
  {
    number: '07',
    title: 'Acabados y Entrega',
    description: 'Instalaciones, acabados interiores, urbanización exterior y entrega de llaves. Con garantía estructural de 10 años y plan de mantenimiento.',
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
            Siete fases de proceso industrializado, un único interlocutor y cero sorpresas. Así es el método Canary Modular.
          </p>
        </motion.div>

        {/* Steps 01–04 */}
        <div className="relative mb-12 lg:mb-16">
          <div className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-px bg-white/6" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.slice(0, 4).map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
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
                  <h3 className="font-display text-xl lg:text-2xl text-white mb-4 font-light">{step.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed font-light">{step.description}</p>
                </div>
                {i < 3 && (
                  <div className="lg:hidden absolute left-[3.25rem] top-24 w-px h-12 bg-white/8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps 05–07 */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[3.25rem] left-0 w-3/4 h-px bg-white/6" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.slice(4).map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
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
                  <h3 className="font-display text-xl lg:text-2xl text-white mb-4 font-light">{step.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed font-light">{step.description}</p>
                </div>
                {i < 2 && (
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
            className="inline-flex items-center gap-4 px-12 py-5 border border-white/15 hover:border-[#F5A623] text-white/50 hover:text-[#F5A623] text-xs tracking-[0.2em] uppercase font-light transition-all duration-300 group"
          >
            Iniciar mi proyecto modular
            <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
