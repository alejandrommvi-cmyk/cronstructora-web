'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Casa Cala Blanca',
    location: 'Lanzarote, Canarias',
    category: 'Vivienda modular lujo',
    year: '2024',
    m2: '280 m²',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=88&fit=crop',
    size: 'large',
  },
  {
    id: 2,
    name: 'Villa Las Palmas',
    location: 'Gran Canaria',
    category: 'Modular premium',
    year: '2024',
    m2: '220 m²',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=88&fit=crop',
    size: 'small',
  },
  {
    id: 3,
    name: 'Residencia El Teide',
    location: 'Tenerife, Canarias',
    category: 'Obra nueva modular',
    year: '2024',
    m2: '195 m²',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=88&fit=crop',
    size: 'small',
  },
  {
    id: 4,
    name: 'Casa Fuerteventura',
    location: 'Fuerteventura',
    category: 'Modular A+',
    year: '2023',
    m2: '175 m²',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=88&fit=crop',
    size: 'bottom',
  },
  {
    id: 5,
    name: 'Chalet Los Gomeros',
    location: 'La Gomera',
    category: 'Vivienda bioclimática',
    year: '2023',
    m2: '245 m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=88&fit=crop',
    size: 'bottom',
  },
  {
    id: 6,
    name: 'Villa Hierro',
    location: 'El Hierro, Canarias',
    category: 'Modular sostenible',
    year: '2023',
    m2: '160 m²',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=88&fit=crop',
    size: 'bottom',
  },
]

const filters = ['Todos', 'Modular lujo', 'Bioclimática', 'Sostenible']

function ProjectCard({ project, delay = 0 }: { project: (typeof projects)[0]; delay?: number }) {
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
          project.size === 'large' ? 'aspect-[4/3]' : project.size === 'small' ? 'aspect-video' : 'aspect-[4/3] lg:aspect-[3/2]'
        }`}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          style={{ filter: 'grayscale(10%) brightness(0.92)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0E]/95 via-[#0F0E0E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#F5A623] text-xs tracking-[0.25em] uppercase">{project.category}</span>
            <span className="text-white/40 text-xs">{project.m2}</span>
          </div>
          <h3 className="font-display text-xl lg:text-2xl text-white mb-1">{project.name}</h3>
          <p className="text-white/50 text-xs tracking-wide">{project.location} · {project.year}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase group/link hover:text-[#F5A623] transition-colors">
            Ver proyecto <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Orange corner accent on hover */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[3px] border-l-[3px] border-[#F5A623] opacity-0 group-hover:opacity-100 group-hover:w-12 group-hover:h-12 transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  return (
    <section id="proyectos" className="bg-[#F4F1EC] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Portfolio</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#0F0E0E] font-light leading-[1.1]">
              Viviendas que
              <br /><span className="italic text-[#C8881A]">transforman vidas</span>
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
                    ? 'bg-[#0F0E0E] text-white'
                    : 'text-[#0F0E0E]/40 hover:text-[#0F0E0E] border border-transparent hover:border-[#0F0E0E]/15'
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
          <div className="lg:col-span-4"><ProjectCard project={projects[3]} delay={0.1} /></div>
          <div className="lg:col-span-4"><ProjectCard project={projects[4]} delay={0.2} /></div>
          <div className="lg:col-span-4"><ProjectCard project={projects[5]} delay={0.3} /></div>
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
            className="inline-flex items-center gap-3 text-[#0F0E0E]/50 hover:text-[#F5A623] text-xs tracking-[0.2em] uppercase border-b border-[#0F0E0E]/15 hover:border-[#F5A623] pb-1 transition-all duration-300 group"
          >
            Ver todos los proyectos
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
