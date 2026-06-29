import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TrustSection from '@/components/TrustSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import CursorFollower from '@/components/CursorFollower'

export default function Home() {
  return (
    <main>
      <CursorFollower />
      <Navigation />
      <HeroSection />
      <TrustSection />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
