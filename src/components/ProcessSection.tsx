'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Consulta & Visión',
    description:
      'Una primera conversación para entender tu visión, necesidades y aspiraciones. Evaluamos el proyecto y establecemos la hoja de ruta.',
    duration: '1–2 semanas',
  },
  {
    number: '02',
    title: 'Diseño & Planificación',
    description:
      'Nuestro equipo crea un proyecto a medida, con planos detallados, selección de materiales y presupuesto cerrado.',
    duration: '4–8 semanas',
  },
  {
    number: '03',
    title: 'Construcción Premium',
    description:
      'Ejecución impecable con los mejores materiales y artesanos. Control de calidad en cada fase, con seguimiento semanal.',
    duration: '6–18 meses',
  },
  {
    number: '04',
    title: 'Entrega & Postventa',
    description:
      'Entrega del proyecto con inspección exhaustiva. Garantía completa y servicio postventa personalizado.',
    duration: '2 semanas',
  },
]

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-[#0A0A0A] py-24 lg:py-36">
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
              <div className="w-8 h-px bg-[#C4A97C]" />
              <span className="text-[#C4A97C] text-xs tracking-[0.35em] uppercase font-light">
                Metodología
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.1]">
              Tu proyecto en
              <br />
              <span className="italic text-[#C4A97C]">cuatro etapas</span>
            </h2>
          </div>
          <p className="text-white/30 max-w-xs text-sm leading-relaxed font-light">
            Un proceso transparente y estructurado para garantizar resultados excepcionales
            en plazo y presupuesto.
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
                  <div className="w-[6.5rem] h-[6.5rem] border border-white/10 group-hover:border-[#C4A97C]/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="font-display text-3xl text-white/15 group-hover:text-[#C4A97C]/50 font-light transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-[#C4A97C] text-xs tracking-[0.2em] uppercase mb-4 font-light">
                    {step.duration}
                  </p>
                  <h3 className="font-display text-2xl text-white mb-4 font-light">
                    {step.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
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
            className="inline-flex items-center gap-4 px-12 py-5 border border-white/15 hover:border-[#C4A97C] text-white/50 hover:text-[#C4A97C] text-xs tracking-[0.2em] uppercase font-light transition-all duration-400 group"
          >
            Comenzar mi proyecto
            <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
