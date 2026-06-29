import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Aviso Legal | Canary Modular System',
  description: 'Aviso legal e información corporativa de Canary Modular System, S.L.',
}

export default function AvisoLegalPage() {
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
            Aviso Legal
          </h1>
          <p className="text-[#0F0E0E]/45 text-sm font-light">Última actualización: junio de 2025</p>
        </div>

        <div className="prose-legal">

          <h2>1. Datos identificativos</h2>
          <p>En cumplimiento con el deber de información recogido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular del sitio web:</p>
          <ul>
            <li><strong>Denominación social:</strong> Canary Modular System, S.L.</li>
            <li><strong>CIF:</strong> B-XXXXXXXX</li>
            <li><strong>Domicilio social:</strong> Av. de Anaga, 35, 38001 Santa Cruz de Tenerife, España</li>
            <li><strong>Correo electrónico:</strong> hola@cmscanarias.com</li>
            <li><strong>Teléfono:</strong> +34 900 000 000</li>
            <li><strong>Registro Mercantil:</strong> Inscrita en el Registro Mercantil de Santa Cruz de Tenerife</li>
          </ul>

          <h2>2. Objeto y ámbito de aplicación</h2>
          <p>
            El presente Aviso Legal regula las condiciones de acceso y uso del sitio web <strong>cmscanarias.com</strong> (en adelante, «el Sitio Web»), del que es titular Canary Modular System, S.L. El acceso al Sitio Web implica la aceptación plena de las presentes condiciones. Si no está de acuerdo con ellas, le rogamos que se abstenga de utilizar este sitio.
          </p>

          <h2>3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del Sitio Web —incluyendo, sin carácter limitativo, textos, fotografías, gráficos, logotipos, iconos, imágenes, archivos de audio y vídeo, así como el diseño gráfico y el código fuente— son propiedad exclusiva de Canary Modular System, S.L. o de sus licenciantes, y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de estos contenidos sin autorización escrita previa de Canary Modular System, S.L., salvo en los casos previstos por la legislación vigente.
          </p>

          <h2>4. Condiciones de uso</h2>
          <p>El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal y las buenas costumbres. En particular, se prohíbe:</p>
          <ul>
            <li>Realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
            <li>Introducir o difundir contenidos que sean falsos, ofensivos, discriminatorios, obscenos o que atenten contra los derechos de terceros.</li>
            <li>Utilizar medios técnicos que puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web o los sistemas informáticos de Canary Modular System, S.L.</li>
            <li>Utilizar los contenidos del Sitio Web con fines comerciales sin autorización expresa.</li>
          </ul>

          <h2>5. Exclusión de responsabilidad</h2>
          <p>
            Canary Modular System, S.L. no garantiza la disponibilidad continuada e ininterrumpida del Sitio Web y no se responsabiliza de los daños o perjuicios que pudieran derivarse de interrupciones, fallos técnicos, virus informáticos o desconexiones no imputables a la empresa.
          </p>
          <p>
            La información contenida en el Sitio Web tiene carácter meramente orientativo. Canary Modular System, S.L. se reserva el derecho a modificar, suspender, cancelar o restringir el acceso al Sitio Web o a sus contenidos en cualquier momento y sin previo aviso.
          </p>
          <p>
            Los presupuestos, plazos y características técnicas publicados en el Sitio Web son orientativos y no constituyen una oferta contractual vinculante. La información definitiva se formalizará en el correspondiente contrato.
          </p>

          <h2>6. Enlaces a terceros</h2>
          <p>
            El Sitio Web puede contener enlaces a páginas web de terceros. Canary Modular System, S.L. no tiene control sobre dichos sitios y no se hace responsable de sus contenidos, política de privacidad o prácticas. El acceso a sitios enlazados se realiza bajo la exclusiva responsabilidad del usuario.
          </p>

          <h2>7. Legislación aplicable y jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales de Santa Cruz de Tenerife, salvo que la normativa aplicable establezca otro fuero imperativo.
          </p>

          <h2>8. Modificaciones del aviso legal</h2>
          <p>
            Canary Modular System, S.L. se reserva el derecho a modificar el presente Aviso Legal en cualquier momento. Las modificaciones serán publicadas en el Sitio Web y entrarán en vigor desde el momento de su publicación.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-[#0F0E0E]/10 flex gap-6">
          <Link href="/privacidad" className="text-[#0F0E0E]/40 hover:text-[#F5A623] text-xs uppercase tracking-widest font-light transition-colors">Privacidad →</Link>
          <Link href="/cookies" className="text-[#0F0E0E]/40 hover:text-[#F5A623] text-xs uppercase tracking-widest font-light transition-colors">Política de cookies →</Link>
        </div>
      </main>

      <footer className="bg-[#0A0908] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-white/15 text-xs font-light text-center">© 2025 Canary Modular System. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
