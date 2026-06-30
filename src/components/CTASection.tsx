'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const projectTypes = [
  'Vivienda modular nueva',
  'Ampliación modular',
  'Vivienda bioclimática',
  'Proyecto de inversión',
  'Consulta técnica',
  'Otro',
]

const perks = [
  'Respuesta garantizada en menos de 24h',
  'Visita a nuestro showroom en Canarias',
  'Presupuesto detallado sin compromiso',
]

export default function CTASection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', m2: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85&fit=crop"
          alt="Vivienda modular premium CMS"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0F0E0E]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0E] via-[#0F0E0E]/80 to-[#0F0E0E]/50" />
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
              <div className="w-8 h-px bg-[#F5A623]" />
              <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Empecemos</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white font-light leading-[1.08] mb-8">
              Tu vivienda
              <br /><span className="italic text-[#F5A623]">modular premium</span>
              <br />empieza aquí.
            </h2>

            <p className="text-white/70 text-sm leading-relaxed font-light max-w-md mb-12">
              Cuéntanos tu proyecto. En menos de 24 horas te respondemos con una propuesta inicial y te invitamos a visitar nuestro showroom en Canarias.
            </p>

            <div className="space-y-5 mb-12">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-4">
                  <CheckCircle size={14} className="text-[#F5A623] shrink-0" />
                  <p className="text-white/60 text-sm font-light">{perk}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/34624743682?text=Hola%2C%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20una%20vivienda%20modular%20en%20Canarias."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#F5A623] text-[#0F0E0E] px-8 py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#F7B84B] transition-colors duration-300"
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
                <CheckCircle size={48} className="text-[#F5A623] mb-6" />
                <h3 className="font-display text-2xl text-white mb-3 font-light">Mensaje recibido</h3>
                <p className="text-white/40 text-sm font-light max-w-xs leading-relaxed">
                  Gracias por confiar en CMS. Te contactamos en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display text-2xl text-white mb-8 font-light">Solicita tu presupuesto</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-xs tracking-[0.15em] uppercase mb-2">Nombre</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/35 text-sm outline-none focus:border-[#F5A623] transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs tracking-[0.15em] uppercase mb-2">Teléfono</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+34 624 743 682" className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/35 text-sm outline-none focus:border-[#F5A623] transition-colors" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs tracking-[0.15em] uppercase mb-2">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/35 text-sm outline-none focus:border-[#F5A623] transition-colors" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-xs tracking-[0.15em] uppercase mb-2">Tipo de proyecto</label>
                      <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full bg-transparent border-b border-white/15 py-3 text-sm outline-none focus:border-[#F5A623] transition-colors appearance-none cursor-pointer" style={{ colorScheme: 'dark', color: form.type ? 'white' : 'rgba(255,255,255,0.15)' }} required>
                        <option value="" disabled className="bg-[#111]">Seleccionar</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#111] text-white">{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs tracking-[0.15em] uppercase mb-2">M² aprox.</label>
                      <input type="text" value={form.m2} onChange={(e) => setForm({ ...form, m2: e.target.value })} placeholder="ej. 150 m²" className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/35 text-sm outline-none focus:border-[#F5A623] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs tracking-[0.15em] uppercase mb-2">Cuéntanos tu proyecto</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Ubicación, superficie de parcela, plazo deseado..." rows={3} className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/35 text-sm outline-none focus:border-[#F5A623] transition-colors resize-none" />
                  </div>

                  <button type="submit" className="w-full bg-[#F5A623] text-[#0F0E0E] py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#F7B84B] transition-colors duration-300 mt-2">
                    Solicitar presupuesto gratuito
                  </button>
                  <p className="text-white/45 text-xs text-center font-light">Sin compromiso · Respuesta en 24h</p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
