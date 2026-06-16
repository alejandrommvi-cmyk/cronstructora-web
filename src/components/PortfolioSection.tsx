'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Villa Paradiso',
    location: 'Marbella, Málaga',
    category: 'Villa de lujo',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85',
    size: 'large',
  },
  {
    id: 2,
    name: 'Casa Serena',
    location: 'Ibiza, Baleares',
    category: 'Obra nueva',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=85',
    size: 'small',
  },
  {
    id: 3,
    name: 'Residencia Montecarlo',
    location: 'La Moraleja, Madrid',
    category: 'Reforma integral',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=85',
    size: 'small',
  },
  {
    id: 4,
    name: 'Penthouse Eixample',
    location: 'Barcelona',
    category: 'Reforma premium',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85',
    size: 'bottom',
  },
  {
    id: 5,
    name: 'Villa Azul',
    location: 'Sitges, Barcelona',
    category: 'Villa de lujo',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=85',
    size: 'bottom',
  },
  {
    id: 6,
    name: 'Casa del Bosque',
    location: 'Sierra de Guadarrama',
    category: 'Obra nueva',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85',
    size: 'bottom',
  },
]

const filters = ['Todos', 'Villas', 'Reformas', 'Obra nueva']

function ProjectCard({
  project,
  delay = 0,
}: {
  project: (typeof projects)[0]
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div
        className={`relative overflow-hidden ${
          project.size === 'large'
            ? 'aspect-[4/3]'
            : project.size === 'small'
              ? 'aspect-video'
              : 'aspect-[4/3] lg:aspect-[3/2]'
        }`}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:filter-none"
          style={{ filter: 'grayscale(15%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/10 transition-all duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-[#C4A97C] text-xs tracking-[0.25em] uppercase block mb-2">
            {project.category}
          </span>
          <h3 className="font-display text-xl lg:text-2xl text-white mb-1">{project.name}</h3>
          <p className="text-white/50 text-xs tracking-wide">
            {project.location} · {project.year}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase hover:text-white transition-colors group/link">
            Ver proyecto{' '}
            <ArrowUpRight
              size={12}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </div>
        </div>

        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-8 h-8 border border-[#C4A97C]/40 flex items-center justify-center">
            <div className="w-1 h-1 bg-[#C4A97C]" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  return (
    <section id="proyectos" className="bg-[#F5F1EB] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C4A97C]" />
              <span className="text-[#C4A97C] text-xs tracking-[0.35em] uppercase font-light">
                Portfolio selectivo
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#0A0A0A] font-light leading-[1.1]">
              Proyectos que
              <br />
              <span className="italic text-[#6B5B45]">definen espacios</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase font-light transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#0A0A0A] text-white'
                    : 'text-[#0A0A0A]/40 hover:text-[#0A0A0A] border border-transparent hover:border-[#0A0A0A]/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-7">
            <ProjectCard project={projects[0]} delay={0} />
          </div>
          <div className="lg:col-span-5 grid grid-rows-2 gap-3">
            <ProjectCard project={projects[1]} delay={0.1} />
            <ProjectCard project={projects[2]} delay={0.2} />
          </div>

          <div className="lg:col-span-4">
            <ProjectCard project={projects[3]} delay={0.1} />
          </div>
          <div className="lg:col-span-4">
            <ProjectCard project={projects[4]} delay={0.2} />
          </div>
          <div className="lg:col-span-4">
            <ProjectCard project={projects[5]} delay={0.3} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 text-[#0A0A0A]/60 hover:text-[#0A0A0A] text-xs tracking-[0.2em] uppercase border-b border-[#0A0A0A]/20 hover:border-[#0A0A0A] pb-1 transition-all duration-300 group"
          >
            Ver todos los proyectos
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
