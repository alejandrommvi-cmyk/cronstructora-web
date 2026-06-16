'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const projectTypes = [
  'Villa de lujo',
  'Reforma integral',
  'Obra nueva',
  'Interiorismo',
  'Piscina / Exteriores',
  'Otro',
]

const perks = [
  'Respuesta garantizada en menos de 24h',
  'Consulta inicial completamente gratuita',
  'Presupuesto detallado sin compromiso',
]

export default function CTASection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
          alt="Arquitectura de lujo"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#C4A97C]" />
              <span className="text-[#C4A97C] text-xs tracking-[0.35em] uppercase font-light">
                Empecemos
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.08] mb-8">
              Tu proyecto
              <br />
              <span className="italic text-[#C4A97C]">excepcional</span>
              <br />
              comienza aquí.
            </h2>

            <p className="text-white/35 text-sm leading-relaxed font-light max-w-md mb-12">
              Cuéntanos tu visión. Nos pondremos en contacto contigo en menos de 24 horas
              para una consulta inicial gratuita y sin compromiso.
            </p>

            <div className="space-y-5 mb-12">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-4">
                  <CheckCircle size={14} className="text-[#C4A97C] shrink-0" />
                  <p className="text-white/60 text-sm font-light">{perk}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#1db954] transition-colors duration-300"
            >
              <MessageCircle size={16} />
              Contactar por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/4 backdrop-blur-sm border border-white/8 p-8 lg:p-10"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <CheckCircle size={48} className="text-[#C4A97C] mb-6" />
                <h3 className="font-display text-2xl text-white mb-3 font-light">
                  Mensaje recibido
                </h3>
                <p className="text-white/40 text-sm font-light max-w-xs leading-relaxed">
                  Gracias por tu confianza. Nos pondremos en contacto contigo en menos de 24
                  horas.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display text-2xl text-white mb-8 font-light">
                  Solicita tu presupuesto
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/30 text-xs tracking-[0.15em] uppercase mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Tu nombre"
                        className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/15 text-sm outline-none focus:border-[#C4A97C] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/30 text-xs tracking-[0.15em] uppercase mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/15 text-sm outline-none focus:border-[#C4A97C] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/30 text-xs tracking-[0.15em] uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/15 text-sm outline-none focus:border-[#C4A97C] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/30 text-xs tracking-[0.15em] uppercase mb-2">
                      Tipo de proyecto
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full bg-transparent border-b border-white/15 py-3 text-sm outline-none focus:border-[#C4A97C] transition-colors appearance-none cursor-pointer"
                      style={{ colorScheme: 'dark', color: form.type ? 'white' : 'rgba(255,255,255,0.15)' }}
                      required
                    >
                      <option value="" disabled className="bg-[#111]">
                        Selecciona una opción
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#111] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/30 text-xs tracking-[0.15em] uppercase mb-2">
                      Cuéntanos tu proyecto
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe brevemente tu proyecto, ubicación, superficie..."
                      rows={3}
                      className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/15 text-sm outline-none focus:border-[#C4A97C] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C4A97C] text-[#0A0A0A] py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E2C99E] transition-colors duration-300 mt-2"
                  >
                    Solicitar presupuesto gratuito
                  </button>

                  <p className="text-white/15 text-xs text-center font-light">
                    Sin compromiso · Respuesta en menos de 24h
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
