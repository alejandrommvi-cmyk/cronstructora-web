'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    name: 'Casa Las Arenas',
    location: 'Fuerteventura, Canarias',
    category: 'Vivienda modular A+',
    year: '2024',
    m2: '210 m²',
    image: 'https://images.unsplash.com/9v0hHu1WoWI?w=700&q=88&fit=crop',
  },
  {
    id: 2,
    name: 'Villa Las Palmas',
    location: 'Gran Canaria',
    category: 'Modular premium',
    year: '2024',
    m2: '220 m²',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=88&fit=crop',
  },
  {
    id: 3,
    name: 'Residencia El Teide',
    location: 'Tenerife, Canarias',
    category: 'Obra nueva modular',
    year: '2024',
    m2: '195 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=88&fit=crop',
  },
  {
    id: 4,
    name: 'Casa Fuerteventura',
    location: 'Fuerteventura',
    category: 'Modular A+',
    year: '2023',
    m2: '175 m²',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=88&fit=crop',
  },
  {
    id: 5,
    name: 'Chalet Los Gomeros',
    location: 'La Gomera',
    category: 'Vivienda bioclimática',
    year: '2023',
    m2: '245 m²',
    image: 'https://images.unsplash.com/GZezxeKOznc?w=700&q=88&fit=crop',
  },
  {
    id: 6,
    name: 'Casa Cala Blanca',
    location: 'Lanzarote, Canarias',
    category: 'Vivienda modular premium',
    year: '2024',
    m2: '280 m²',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=88&fit=crop',
  },
]

function SplitPanel({
  image, eyebrow, title, btnLabel, href, delay = 0,
}: {
  image: string; eyebrow: string; title: string; btnLabel: string; href: string; delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay }}
      className="relative h-[520px] lg:h-[640px] overflow-hidden group cursor-none"
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </motion.div>
      <div className="absolute inset-0 bg-[#0A0908]/55 group-hover:bg-[#0A0908]/40 transition-colors duration-700" />

      {/* Text */}
      <div className="absolute bottom-10 left-10 right-10">
        <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase block mb-3">{eyebrow}</span>
        <h3 className="font-display text-2xl lg:text-3xl text-white font-light leading-snug">{title}</h3>
      </div>

      {/* Norris-style circular button */}
      <motion.a
        href={href}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#0A0908]/80 backdrop-blur-sm border border-white/15 flex items-center justify-center group/btn cursor-none"
      >
        <span className="text-white text-[10px] tracking-[0.15em] uppercase text-center leading-tight font-light px-2">
          {btnLabel}
        </span>
        <div className="absolute inset-0 rounded-full border border-[#F5A623]/0 group-hover/btn:border-[#F5A623]/60 transition-all duration-400" />
      </motion.a>
    </motion.div>
  )
}

function ProjectCard({ project, delay = 0 }: { project: typeof projects[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-106"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ filter: 'brightness(0.9)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-[#F5A623] text-[10px] tracking-[0.25em] uppercase block mb-1">{project.category}</span>
          <h3 className="font-display text-xl text-white font-light">{project.name}</h3>
          <p className="text-white/45 text-xs mt-1">{project.location} · {project.m2} · {project.year}</p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-white/55 text-[10px] tracking-widest uppercase hover:text-[#F5A623] transition-colors group/lnk">
            Ver proyecto <ArrowUpRight size={11} className="group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-0 h-0 border-t-[2.5px] border-l-[2.5px] border-[#F5A623] opacity-0 group-hover:opacity-100 group-hover:w-10 group-hover:h-10 transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  return (
    <section id="galeria" className="bg-[#0A0908]">

      {/* Norris-style split panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <SplitPanel
          image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=88&fit=crop"
          eyebrow="Hablemos de tu proyecto"
          title={'Solicita una\nconsulta gratuita'}
          btnLabel="Contactar"
          href="#contacto"
          delay={0}
        />
        <SplitPanel
          image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=88&fit=crop"
          eyebrow="Nuestra galería"
          title={'Explora la\ngalería CMS'}
          btnLabel="Ver todo"
          href="#galeria-grid"
          delay={0.1}
        />
      </div>

      {/* Project grid */}
      <div id="galeria-grid" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="w-8 h-px bg-[#F5A623]" />
          <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Galería de proyectos</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
