import Image from 'next/image'
import { Instagram, Linkedin, Facebook } from 'lucide-react'

const navLinks = [
  { href: '#galeria', label: 'Galería' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Sobre CMS' },
  { href: '#proceso', label: 'Nuestro proceso' },
  { href: '#contacto', label: 'Contacto' },
]

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0909] border-t border-white/4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/logo-dark.png" alt="CMS Logo" fill className="object-contain" />
              </div>
              <div>
                <span className="text-[#F5A623] text-sm tracking-[0.3em] uppercase font-medium block">CMS</span>
                <span className="text-white/25 text-xs tracking-[0.15em] uppercase font-light">Canary Modular System</span>
              </div>
            </div>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs font-light">
              Viviendas modulares de lujo de una planta. Diseño exclusivo, eficiencia A+ y entrega llave en mano en toda Canarias.
            </p>
            <div className="flex gap-3 mt-8">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 border border-white/8 flex items-center justify-center text-white/30 hover:text-[#F5A623] hover:border-[#F5A623]/30 transition-all duration-300">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/15 text-xs tracking-[0.3em] uppercase mb-6 font-light">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/30 hover:text-white/70 text-sm font-light transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/15 text-xs tracking-[0.3em] uppercase mb-6 font-light">Contacto</h4>
            <ul className="space-y-3">
              <li className="text-white/30 text-sm font-light">hola@cmscanarias.com</li>
              <li className="text-white/30 text-sm font-light">+34 900 000 000</li>
              <li className="text-white/30 text-sm font-light leading-relaxed">
                Av. de Anaga, 35<br />
                38001 · Santa Cruz de Tenerife
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-white/15 text-xs tracking-[0.2em] uppercase mb-2 font-light">Zonas de actuación</p>
              <p className="text-white/25 text-xs font-light">Canarias · Península · Portugal</p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/15 text-xs font-light">© 2025 Canary Modular System. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            {['Privacidad', 'Aviso legal', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-white/15 hover:text-white/40 text-xs font-light transition-colors duration-300">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
