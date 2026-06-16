'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Cronstructora transformó completamente nuestra visión en realidad. La atención al detalle y la calidad de los acabados superaron todas nuestras expectativas. Una experiencia verdaderamente premium de principio a fin.',
    name: 'Carlos & Elena Martínez',
    location: 'Villa en Marbella',
    rating: 5,
    year: '2024',
  },
  {
    quote:
      'El equipo demostró un nivel de profesionalidad excepcional en cada fase del proyecto. Nuestra reforma en Barcelona quedó como una obra de arte viva. Totalmente recomendable para proyectos ambiciosos.',
    name: 'Familia Rodríguez-Vega',
    location: 'Reforma en Barcelona',
    rating: 5,
    year: '2024',
  },
  {
    quote:
      'Trabajar con Cronstructora fue una experiencia única. Entendieron exactamente lo que queríamos y lo ejecutaron con una perfección que pocas empresas pueden ofrecer. La villa superó lo que imaginábamos.',
    name: 'James & Sophie Williams',
    location: 'Villa en Ibiza',
    rating: 5,
    year: '2023',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F5F1EB] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C4A97C]" />
            <span className="text-[#C4A97C] text-xs tracking-[0.35em] uppercase font-light">
              Testimonios
            </span>
            <div className="w-8 h-px bg-[#C4A97C]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#0A0A0A] font-light leading-[1.1]">
            Lo que dicen
            <br />
            <span className="italic text-[#6B5B45]">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#0A0A0A]/8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-[#F5F1EB] p-10 lg:p-12 flex flex-col group hover:bg-[#EDEAE4] transition-colors duration-400"
            >
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#C4A97C] text-sm">
                    ★
                  </span>
                ))}
              </div>

              <div className="font-display text-7xl text-[#C4A97C]/15 leading-none mb-4 select-none">
                "
              </div>

              <p className="text-[#0A0A0A]/65 text-sm lg:text-base leading-[1.8] font-light flex-grow">
                {t.quote}
              </p>

              <div className="mt-10 pt-8 border-t border-[#0A0A0A]/8">
                <p className="font-display text-[#0A0A0A] text-base font-normal">{t.name}</p>
                <p className="text-[#0A0A0A]/35 text-xs tracking-[0.15em] uppercase mt-1.5 font-light">
                  {t.location} · {t.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
