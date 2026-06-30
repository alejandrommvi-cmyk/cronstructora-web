import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Política de Privacidad | Canary Modular System',
  description: 'Política de privacidad y protección de datos de Canary Modular System, S.L.',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      {/* Nav mínimo */}
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
            Política de Privacidad
          </h1>
          <p className="text-[#0F0E0E]/45 text-sm font-light">Última actualización: junio de 2026</p>
        </div>

        <div className="prose-legal">

          <h2>1. Responsable del tratamiento</h2>
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que el responsable del tratamiento de sus datos personales es:
          </p>
          <ul>
            <li><strong>Denominación social:</strong> Canary Modular System, S.L.</li>
            <li><strong>CIF:</strong> B-XXXXXXXX (en trámite de constitución)</li>
            <li><strong>Domicilio social:</strong> Av. de Anaga, 35, 38001 Santa Cruz de Tenerife</li>
            <li><strong>Correo electrónico:</strong> canarymodularsystem@gmail.com</li>
            <li><strong>Teléfono:</strong> +34 624 743 682</li>
          </ul>

          <h2>2. Finalidad del tratamiento</h2>
          <p>Los datos personales que nos facilite a través del formulario de contacto o por cualquier otro medio serán tratados con las siguientes finalidades:</p>
          <ul>
            <li>Atender y gestionar las solicitudes de información, presupuesto o contacto que nos remita.</li>
            <li>Enviarle comunicaciones comerciales sobre nuestros productos y servicios, únicamente si ha prestado su consentimiento expreso.</li>
            <li>Cumplir con las obligaciones legales que nos resulten de aplicación.</li>
          </ul>

          <h2>3. Legitimación</h2>
          <p>La base jurídica del tratamiento de sus datos es:</p>
          <ul>
            <li><strong>Consentimiento del interesado</strong> (art. 6.1.a RGPD): para el envío de comunicaciones comerciales.</li>
            <li><strong>Ejecución de un contrato o medidas precontractuales</strong> (art. 6.1.b RGPD): para gestionar su solicitud de presupuesto o información.</li>
            <li><strong>Cumplimiento de obligaciones legales</strong> (art. 6.1.c RGPD): cuando sea necesario por normativa aplicable.</li>
          </ul>

          <h2>4. Conservación de los datos</h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para dar cumplimiento a la finalidad para la que fueron recabados y, en todo caso, durante los plazos previstos legalmente. Una vez concluida dicha finalidad, los datos serán bloqueados y, transcurridos los plazos de prescripción legal, eliminados de forma segura.
          </p>

          <h2>5. Destinatarios</h2>
          <p>
            No cederemos sus datos personales a terceros, salvo obligación legal o cuando sea necesario para prestarle el servicio solicitado. En tal caso, los destinatarios estarán sujetos a contratos de encargo del tratamiento con garantías equivalentes a las establecidas en el RGPD.
          </p>
          <p>
            Podemos utilizar proveedores de servicios tecnológicos (CRM, correo electrónico, alojamiento web) que actúan como encargados del tratamiento y que únicamente tratan los datos siguiendo nuestras instrucciones.
          </p>

          <h2>6. Transferencias internacionales</h2>
          <p>
            En caso de utilizar proveedores con servidores fuera del Espacio Económico Europeo, nos aseguraremos de que existan garantías adecuadas conforme al Capítulo V del RGPD (cláusulas contractuales tipo, decisiones de adecuación, etc.).
          </p>

          <h2>7. Derechos de los interesados</h2>
          <p>Puede ejercer en cualquier momento los siguientes derechos reconocidos por el RGPD y la LOPDGDD:</p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos personales suyos tratamos.</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
            <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento de sus datos en determinadas circunstancias.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinados supuestos.</li>
            <li><strong>Retirada del consentimiento:</strong> retirar en cualquier momento el consentimiento otorgado, sin que ello afecte a la licitud del tratamiento previo.</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede dirigirse por escrito a canarymodularsystem@gmail.com, adjuntando copia de su documento de identidad. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <strong>www.aepd.es</strong> si considera que el tratamiento de sus datos no es conforme a la normativa vigente.
          </p>

          <h2>8. Seguridad</h2>
          <p>
            Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, de acuerdo con lo establecido en el RGPD y la normativa española de protección de datos.
          </p>

          <h2>9. Modificaciones de la política</h2>
          <p>
            Canary Modular System, S.L. se reserva el derecho de modificar la presente política de privacidad para adaptarla a novedades legislativas, jurisprudenciales o de práctica empresarial. En caso de modificaciones sustanciales, se lo comunicaremos a través de los medios habituales de contacto o mediante aviso en nuestra web.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-[#0F0E0E]/10 flex gap-6">
          <Link href="/aviso-legal" className="text-[#0F0E0E]/40 hover:text-[#F5A623] text-xs uppercase tracking-widest font-light transition-colors">Aviso legal →</Link>
          <Link href="/cookies" className="text-[#0F0E0E]/40 hover:text-[#F5A623] text-xs uppercase tracking-widest font-light transition-colors">Política de cookies →</Link>
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
