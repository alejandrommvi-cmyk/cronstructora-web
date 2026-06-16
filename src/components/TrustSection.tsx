'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 12, suffix: '+', label: 'Años de experiencia', description: 'Pioneros en construcción modular de lujo en Canarias' },
  { value: 85, suffix: '+', label: 'Viviendas entregadas', description: 'Hogares modulares de una planta en toda España' },
  { value: 98, suffix: '%', label: 'Satisfacción cliente', description: 'Clientes que recomendarían CMS a su entorno' },
  { value: 90, suffix: ' días', label: 'Plazo medio', description: 'Desde diseño aprobado hasta llaves en mano' },
]

const badges = ['Clase Energética A+', 'ISO 9001', 'CE Certificado', 'Garantía 10 años', 'Financiación propia']

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let current = 0
    const steps = 55
    const increment = value / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 1800 / steps)
    return () => clearInterval(timer)
  }, [active, value])
  return (
    <span className="font-display text-6xl lg:text-7xl xl:text-8xl text-white font-light tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0F0E0E] py-24 lg:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Nuestra trayectoria</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.1] max-w-2xl">
            Líderes en construcción
            <br /><span className="italic text-[#F5A623]">modular de lujo</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="border-l border-white/8 pl-8 pr-6 py-10 first:border-l-0"
            >
              <Counter value={stat.value} suffix={stat.suffix} active={inView} />
              <p className="text-white/70 text-sm font-light mt-3 mb-1">{stat.label}</p>
              <p className="text-white/25 text-xs leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-14 border-t border-white/5"
        >
          <p className="text-white/15 text-xs tracking-[0.35em] uppercase text-center mb-10">Calidad certificada</p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
            {badges.map((item) => (
              <span key={item} className="text-white/15 text-xs tracking-[0.25em] uppercase font-light hover:text-[#F5A623]/50 transition-colors duration-500 cursor-default">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
