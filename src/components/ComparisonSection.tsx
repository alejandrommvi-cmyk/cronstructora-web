'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

const rows = [
  {
    aspect: 'Control de calidad',
    modular: 'Fabricación en taller con condiciones constantes y tolerancias de milímetros',
    traditional: 'Variable según cuadrilla, subcontratas y condiciones climatológicas',
  },
  {
    aspect: 'Plazo de ejecución',
    modular: 'Significativamente inferior al de obra tradicional equivalente',
    traditional: 'Imprevistos, lluvias y cambios de personal pueden multiplicar los plazos',
  },
  {
    aspect: 'Eficiencia energética',
    modular: 'Calificación A+ de serie. Aislamiento superior y puentes térmicos controlados',
    traditional: 'Difícil alcanzar A+ sin inversión adicional específica',
  },
  {
    aspect: 'Presupuesto cerrado',
    modular: 'Precio acordado desde el inicio. Sin partidas imprevistas ni sorpresas al final',
    traditional: 'Habitual que el coste final supere en un 15-30% el presupuesto inicial',
  },
  {
    aspect: 'Interlocutor único',
    modular: 'Un solo equipo gestiona diseño, fabricación, permisos, montaje y postventa',
    traditional: 'Múltiples subcontratas sin coordinación centralizada',
  },
  {
    aspect: 'Sostenibilidad',
    modular: 'Menos residuos de obra, materiales optimizados y menor huella de carbono',
    traditional: 'Mayor volumen de escombros y desperdicio de material en obra',
  },
  {
    aspect: 'Adaptabilidad futura',
    modular: 'Posibilidad de ampliar o reconfigurar la vivienda añadiendo módulos',
    traditional: 'Ampliaciones costosas que requieren obra a gran escala',
  },
]

export default function ComparisonSection() {
  return (
    <section className="bg-[#F4F1EC] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Modular vs. Tradicional</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#0F0E0E] font-light leading-[1.08] max-w-3xl">
            Las ventajas reales de
            <br /><span className="italic text-[#C8881A]">construir en modular</span>
          </h2>
          <p className="mt-6 text-[#0F0E0E]/50 text-sm leading-relaxed font-light max-w-xl">
            No se trata de moda. La construcción industrializada resuelve los problemas crónicos de la obra convencional con evidencias concretas.
          </p>
        </motion.div>

        {/* Table header */}
        <div className="hidden lg:grid grid-cols-[2fr_3fr_3fr] gap-px mb-2">
          <div />
          <div className="bg-[#0A0908] px-8 py-4 flex items-center gap-3">
            <CheckCircle size={14} className="text-[#F5A623]" />
            <span className="text-[#F5A623] text-xs tracking-[0.3em] uppercase font-light">Canary Modular System</span>
          </div>
          <div className="bg-[#0F0E0E]/8 px-8 py-4 flex items-center gap-3">
            <XCircle size={14} className="text-[#0F0E0E]/30" />
            <span className="text-[#0F0E0E]/35 text-xs tracking-[0.3em] uppercase font-light">Construcción tradicional</span>
          </div>
        </div>

        {/* Rows */}
        <div className="border-t border-[#0F0E0E]/10">
          {rows.map((row, i) => (
            <motion.div
              key={row.aspect}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="grid grid-cols-1 lg:grid-cols-[2fr_3fr_3fr] gap-px border-b border-[#0F0E0E]/10"
            >
              {/* Aspect */}
              <div className="px-0 lg:px-4 py-6 lg:py-8">
                <span className="text-[#0F0E0E]/45 text-xs tracking-[0.25em] uppercase font-light">{row.aspect}</span>
              </div>

              {/* Modular */}
              <div className="bg-[#0A0908]/3 px-4 lg:px-8 py-5 lg:py-8 flex gap-4 items-start">
                <CheckCircle size={14} className="text-[#F5A623] shrink-0 mt-0.5" />
                <p className="text-[#0F0E0E]/75 text-sm font-light leading-relaxed">{row.modular}</p>
              </div>

              {/* Traditional */}
              <div className="px-4 lg:px-8 py-5 lg:py-8 flex gap-4 items-start">
                <XCircle size={14} className="text-[#0F0E0E]/22 shrink-0 mt-0.5" />
                <p className="text-[#0F0E0E]/38 text-sm font-light leading-relaxed">{row.traditional}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#0A0908] text-white text-xs tracking-[0.2em] uppercase font-light hover:bg-[#F5A623] hover:text-[#0A0908] transition-all duration-300"
          >
            Solicitar presupuesto sin compromiso
          </a>
          <p className="text-[#0F0E0E]/35 text-xs font-light">Respuesta en menos de 24 horas · Sin coste</p>
        </motion.div>
      </div>
    </section>
  )
}
