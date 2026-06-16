import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: 'CMS — Construcción Modular Canarias | Viviendas de lujo llave en mano',
  description:
    'Construcción modular de lujo en Canarias. Viviendas de una planta, diseño exclusivo, eficiencia A+ y entrega llave en mano. Solicita tu presupuesto.',
  keywords:
    'construcción modular canarias, viviendas modulares lujo, casas modulares canarias, arquitectura modular, viviendas prefabricadas lujo, CMS canarias',
  openGraph: {
    title: 'CMS — Construcción Modular Canarias',
    description: 'Viviendas modulares de lujo de una planta. Diseño exclusivo, eficiencia A+.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
