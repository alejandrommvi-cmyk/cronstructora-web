import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Política de Cookies | Canary Modular System',
  description: 'Política de cookies de Canary Modular System, S.L. conforme a la normativa española y europea.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <header className="bg-[#0A0908] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden">
              <Image src="/logo-removebg.png" alt="Canary Modular System" fill className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#F5A623] text-[10px] tracking-[0.38em] uppercase font-medium">CMS</span>
              <span className="text-white/40 text-[9px] tracking-[0.18em] uppercase font-light hidden sm:block">Canary Modular System</span>
            </div>
          </Link>
          <Link href="/" className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase font-light transition-colors">
            ← Volver
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] text-xs tracking-[0.35em] uppercase font-light">Legal</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl text-[#0F0E0E] font-light leading-tight mb-4">
            Política de Cookies
          </h1>
          <p className="text-[#0F0E0E]/45 text-sm font-light">Última actualización: junio de 2026</p>
        </div>

        <div className="prose-legal">

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando este los visita. Permiten al sitio web recordar información sobre su visita, como el idioma preferido y otras configuraciones, lo que facilita la navegación y hace que el sitio resulte más útil.
          </p>

          <h2>2. Tipos de cookies que utilizamos</h2>

          <h3>2.1 Cookies técnicas o esenciales</h3>
          <p>
            Son imprescindibles para el correcto funcionamiento del sitio web. Permiten navegar por él y utilizar sus funcionalidades básicas. Sin estas cookies, el sitio web no puede funcionar correctamente. No requieren consentimiento del usuario conforme al artículo 22.2 de la LSSI-CE.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cms_cookie_consent</td>
                <td>Almacena la decisión del usuario sobre el uso de cookies</td>
                <td>12 meses</td>
              </tr>
              <tr>
                <td>_csrf</td>
                <td>Protección contra ataques CSRF en formularios</td>
                <td>Sesión</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2 Cookies analíticas</h3>
          <p>
            Nos permiten conocer cómo interactúan los usuarios con el sitio web, cuántas páginas visitan, qué contenidos resultan más atractivos y desde qué dispositivos o ubicaciones acceden. Esta información se utiliza para mejorar la experiencia del usuario. Se activan únicamente si el usuario presta su consentimiento.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Proveedor</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics</td>
                <td>Distingue usuarios únicos</td>
                <td>2 años</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Google Analytics</td>
                <td>Mantiene el estado de la sesión</td>
                <td>2 años</td>
              </tr>
            </tbody>
          </table>

          <h3>2.3 Cookies de marketing o publicidad</h3>
          <p>
            Se utilizan para mostrar anuncios relevantes al usuario en otros sitios web. Pueden compartir información con terceros como plataformas de publicidad. Se activan únicamente con el consentimiento expreso del usuario.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Proveedor</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_fbp</td>
                <td>Meta (Facebook)</td>
                <td>Seguimiento de conversiones y remarketing</td>
                <td>3 meses</td>
              </tr>
            </tbody>
          </table>

          <h2>3. Base legal</h2>
          <p>
            El uso de cookies técnicas o esenciales está amparado por el interés legítimo del titular del sitio web (art. 6.1.f RGPD) y exento de consentimiento según el art. 22.2 de la LSSI-CE. El resto de cookies requieren el consentimiento libre, informado, específico e inequívoco del usuario, conforme al art. 6.1.a RGPD y la Guía sobre el uso de las cookies de la AEPD.
          </p>

          <h2>4. Cómo gestionar las cookies</h2>
          <p>Puede gestionar el uso de cookies de las siguientes formas:</p>
          <ul>
            <li><strong>A través de nuestro panel de preferencias:</strong> al acceder al sitio web por primera vez, se muestra un banner que le permite aceptar o rechazar las cookies no esenciales. Puede modificar su decisión en cualquier momento eliminando las cookies de su navegador.</li>
            <li><strong>A través de la configuración del navegador:</strong> puede configurar su navegador para aceptar, rechazar o eliminar cookies. Tenga en cuenta que la desactivación de ciertas cookies puede afectar al correcto funcionamiento del sitio web.</li>
          </ul>
          <p>Instrucciones para los principales navegadores:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h2>5. Transferencias internacionales</h2>
          <p>
            Algunos proveedores de cookies (Google, Meta) pueden transferir datos a servidores ubicados fuera del Espacio Económico Europeo. Dichas transferencias se realizan con las garantías adecuadas establecidas en el RGPD, en particular mediante las cláusulas contractuales tipo aprobadas por la Comisión Europea.
          </p>

          <h2>6. Actualizaciones de la política</h2>
          <p>
            Canary Modular System, S.L. podrá actualizar la presente Política de Cookies en cualquier momento, por ejemplo, cuando se produzcan cambios en las cookies utilizadas o en la normativa aplicable. Le recomendamos revisar esta página periódicamente.
          </p>

          <h2>7. Más información</h2>
          <p>
            Para cualquier consulta sobre el uso de cookies o el tratamiento de sus datos personales, puede contactar con nosotros en canarymodularsystem@gmail.com. Puede obtener información adicional sobre la normativa de cookies en el sitio web de la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-[#0F0E0E]/10 flex gap-6">
          <Link href="/privacidad" className="text-[#0F0E0E]/40 hover:text-[#F5A623] text-xs uppercase tracking-widest font-light transition-colors">Privacidad →</Link>
          <Link href="/aviso-legal" className="text-[#0F0E0E]/40 hover:text-[#F5A623] text-xs uppercase tracking-widest font-light transition-colors">Aviso legal →</Link>
        </div>
      </main>

      <footer className="bg-[#0A0908] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-white/15 text-xs font-light text-center">© 2026 Canary Modular System. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
