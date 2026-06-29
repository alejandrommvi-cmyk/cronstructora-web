'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Los 90 días son reales?',
    a: 'Sí. El plazo arranca desde la firma del contrato y cubre diseño final, fabricación en taller, transporte, montaje en parcela e instalaciones y acabados. La clave es que la mayor parte del tiempo ocurre bajo techo en nuestras instalaciones — sin esperas por lluvia, sin retrasos por permisos menores. En la primera reunión te mostramos el cronograma real de proyectos anteriores.',
  },
  {
    q: '¿Puedo modificar la distribución a mitad del proceso?',
    a: 'Antes de que empiece la fabricación, sí — casi todo. Por eso la fase de diseño no tiene prisa: trabajamos contigo hasta que cada detalle esté claro. Distribución, materiales, alturas, orientación. Una vez arranca el taller, los cambios estructurales no son posibles. Pero si llegamos a ese punto con dudas, algo habremos hecho mal nosotros.',
  },
  {
    q: '¿Cuánto cuesta aproximadamente?',
    a: 'Nuestra horquilla habitual va de 1.800 a 2.800 €/m² para viviendas de una planta con calificación A+ y equipamiento incluido. El precio final depende de metros, distribución, acabados y accesibilidad de la parcela. En la primera reunión te damos una estimación orientativa sin ningún compromiso.',
  },
  {
    q: '¿Trabajáis en todas las islas Canarias?',
    a: 'En todas: Gran Canaria, Tenerife, Lanzarote, Fuerteventura, La Palma, La Gomera y El Hierro. La logística de transporte modular entre islas forma parte de nuestro proceso estándar. También realizamos proyectos en la Península Ibérica y Portugal.',
  },
  {
    q: '¿Qué ventaja real tiene frente a la construcción tradicional?',
    a: 'El control. En obra tradicional hay tres variables que no puedes dominar: el tiempo, las subcontratas y los imprevistos. Aquí la vivienda se fabrica bajo techo, con el mismo equipo, con tolerancias de milímetros. El resultado es más preciso, más eficiente energéticamente — calificación A+ de serie — y se entrega cuando dijimos.',
  },
  {
    q: '¿Cómo empezamos?',
    a: 'Con una conversación. Cuéntanos qué tienes en mente: parcela, metros aproximados, estilo de vida y presupuesto orientativo. Hacemos un estudio de viabilidad gratuito y te decimos si el proyecto es viable antes de que te comprometas a nada. Escríbenos por el formulario o por WhatsApp — respondemos en menos de 24 horas.',
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
