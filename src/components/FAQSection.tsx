'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en estar lista mi vivienda?',
    a: 'El plazo medio es de 90 días desde la firma del contrato hasta la entrega de llaves. Este plazo incluye diseño arquitectónico, fabricación modular en taller, transporte, montaje en parcela y acabados interiores y exteriores.',
  },
  {
    q: '¿Puedo personalizar completamente el diseño?',
    a: 'Totalmente. Cada vivienda se diseña desde cero según tu visión, parcela y necesidades. Trabajamos con planta libre: distribución, materiales, acabados, volumetría exterior y equipamiento son completamente a medida.',
  },
  {
    q: '¿Qué zonas de actuación cubrís?',
    a: 'Operamos en todas las Islas Canarias (Gran Canaria, Tenerife, Lanzarote, Fuerteventura y demás islas), Península Ibérica y Portugal. Realizamos visitas previas y estudio de viabilidad en cada zona.',
  },
  {
    q: '¿Qué incluye el servicio llave en mano?',
    a: 'Incluye diseño arquitectónico, ingeniería estructural, gestión íntegra de licencias y permisos, fabricación modular, transporte, montaje, instalaciones completas (electricidad, fontanería, climatización), acabados interiores y exteriores, y entrega con garantía de 10 años.',
  },
  {
    q: '¿Cómo es la calidad frente a la construcción tradicional?',
    a: 'Superior en múltiples aspectos. La fabricación en taller controlado garantiza precisión milimétrica imposible en obra. La estructura de acero estructural galvanizado supera en resistencia sísmica y durabilidad a la construcción convencional. La calificación energética A+ es estándar en todos nuestros proyectos.',
  },
  {
    q: '¿Cómo empiezo el proceso?',
    a: 'El primer paso es una reunión inicial gratuita donde conocemos tu proyecto: parcela, necesidades, estilo y presupuesto. Puedes solicitarla a través del formulario de contacto o por WhatsApp. En menos de 24h te respondemos para concertar la cita.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-16 lg:gap-28 items-start">

          {/* Left: sticky label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Preguntas frecuentes</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-[3.5rem] text-[#0A0908] font-light leading-[1.08]">
              Tus dudas,
              <br /><span className="italic text-[#C8881A]">aclaradas.</span>
            </h2>
            <p className="mt-6 text-[#0A0908]/40 text-sm leading-relaxed font-light max-w-xs">
              Todo lo que necesitas saber antes de empezar tu proyecto modular con CMS.
            </p>
            <a
              href="#contacto"
              className="mt-10 inline-flex items-center gap-3 text-[#0A0908]/45 hover:text-[#F5A623] text-xs tracking-[0.2em] uppercase border-b border-[#0A0908]/15 hover:border-[#F5A623] pb-2 transition-all duration-300 cursor-none"
            >
              ¿Más preguntas? Escríbenos →
            </a>
          </motion.div>

          {/* Right: accordion — Norris style */}
          <div className="divide-y divide-[#0A0908]/8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group cursor-none"
                >
                  <span className="text-[#0A0908] text-sm lg:text-base font-light leading-snug group-hover:text-[#F5A623] transition-colors duration-300">
                    {faq.q}
                  </span>
                  <div className="shrink-0 w-9 h-9 border border-[#0A0908] group-hover:bg-[#0A0908] flex items-center justify-center transition-all duration-300">
                    <motion.div
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {open === i
                        ? <Minus size={13} className="text-[#0A0908] group-hover:text-white transition-colors duration-300" />
                        : <Plus size={13} className="text-[#0A0908] group-hover:text-white transition-colors duration-300" />
                      }
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-[#0A0908]/50 text-sm leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
