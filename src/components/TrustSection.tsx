'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    value: 20,
    suffix: '+',
    label: 'Años de experiencia',
    description: 'Desde 2004 creando espacios excepcionales',
  },
  {
    value: 150,
    suffix: '+',
    label: 'Proyectos realizados',
    description: 'Villas, reformas y obra nueva premium',
  },
  {
    value: 120,
    suffix: '+',
    label: 'Clientes satisfechos',
    description: 'Familias que confían en nosotros',
  },
  {
    value: 4,
    suffix: '',
    label: 'Regiones',
    description: 'Madrid · Barcelona · Marbella · Ibiza',
  },
]

const badges = ['ISO 9001', 'COAM', 'CSCAE', 'Green Building', 'Luxury Portfolio']

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const steps = 55
    const interval = duration / steps
    const increment = value / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [active, value])

  return (
    <span className="font-display text-6xl lg:text-7xl xl:text-8xl text-white font-light tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0D0D0D] py-24 lg:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C4A97C]" />
            <span className="text-[#C4A97C] text-xs tracking-[0.35em] uppercase font-light">
              Nuestra trayectoria
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.1] max-w-2xl">
            Dos décadas construyendo{' '}
            <span className="italic text-[#C4A97C]">excelencia</span>
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
          <p className="text-white/15 text-xs tracking-[0.35em] uppercase text-center mb-10">
            Reconocimientos & certificaciones
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
            {badges.map((item) => (
              <span
                key={item}
                className="text-white/15 text-xs tracking-[0.25em] uppercase font-light hover:text-white/40 transition-colors duration-500 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
