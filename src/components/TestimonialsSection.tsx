'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Teníamos nuestras dudas sobre la construcción modular, pero CMS nos convenció desde el primer momento. La calidad de los acabados es indistinguible de una construcción tradicional, y en 90 días teníamos las llaves. Absolutamente increíble.',
    name: 'Javier & Lucía Hernández',
    location: 'Lanzarote, Canarias',
    rating: 5,
    year: '2024',
    detail: 'Villa 240 m²',
  },
  {
    quote: 'El proceso fue completamente transparente. Nos guiaron en cada paso, desde el diseño personalizado hasta la gestión de permisos. El resultado es una vivienda de una planta espectacular con vistas al mar. CMS superó todas nuestras expectativas.',
    name: 'María del Carmen Suárez',
    location: 'Gran Canaria',
    rating: 5,
    year: '2024',
    detail: 'Residencia 195 m²',
  },
  {
    quote: 'La eficiencia energética A+ nos ha cambiado la vida. Consumimos un 75% menos que en nuestra casa anterior. Además el diseño arquitectónico es precioso — modernos, funcionales y con carácter. CMS es la mejor decisión que hemos tomado.',
    name: 'Antonio & Elena Romero',
    location: 'Tenerife, Canarias',
    rating: 5,
    year: '2023',
    detail: 'Casa bioclimática 175 m²',
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
              <p className="text-[#0F0E0E]/65 text-sm lg:text-base leading-[1.8] font-light flex-grow">{t.quote}</p>
              <div className="mt-10 pt-8 border-t border-[#0F0E0E]/8">
                <p className="font-display text-[#0F0E0E] text-base font-normal">{t.name}</p>
                <p className="text-[#0F0E0E]/35 text-xs tracking-[0.15em] uppercase mt-1.5 font-light">
                  {t.location} · {t.detail} · {t.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
