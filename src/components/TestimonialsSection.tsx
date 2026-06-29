'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Llevábamos casi tres años buscando constructora. Visitamos obras, pedimos presupuestos, todo. Con CMS fue diferente desde la primera reunión: nos escucharon, nos enseñaron el taller, nos explicaron exactamente qué pasaría cada semana. Tres meses después abrimos la puerta de nuestra casa y no cambiábamos un solo detalle.',
    name: 'Javier & Lucía Hernández',
    rating: 5,
  },
  {
    quote: 'Yo no entendía nada de construcción modular. Pensaba que sería algo prefabricado y frío. Cuando vi el resultado, no lo podía creer. La terraza, la luz natural, los materiales... es exactamente lo que siempre imaginé. Y sin las obras interminables que vivieron mis vecinos.',
    name: 'María del Carmen Suárez',
    rating: 5,
  },
  {
    quote: 'Lo que más valoro fue la transparencia. Cada semana nos llegaba una actualización del proceso con fotos del taller. Sin llamadas de obra pidiendo más dinero, sin sorpresas de última hora. El presupuesto cerrado fue real — pagamos exactamente lo que nos dijeron desde el primer día.',
    name: 'Antonio & Elena Romero',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F4F1EC] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Testimonios</span>
            <div className="w-8 h-px bg-[#F5A623]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#0F0E0E] font-light leading-[1.1]">
            Familias que ya
            <br /><span className="italic text-[#C8881A]">viven el futuro</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#0F0E0E]/8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-[#F4F1EC] p-10 lg:p-12 flex flex-col hover:bg-[#EDE9E3] transition-colors duration-400"
            >
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#F5A623] text-sm">★</span>
                ))}
              </div>
              <div className="font-display text-7xl text-[#F5A623]/15 leading-none mb-4 select-none">"</div>
              <p className="text-[#0F0E0E]/70 text-sm lg:text-base leading-[1.8] font-light flex-grow">{t.quote}</p>
              <div className="mt-10 pt-8 border-t border-[#0F0E0E]/8">
                <p className="font-display text-[#0F0E0E] text-base font-normal">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
