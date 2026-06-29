import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ComparisonSection from '@/components/ComparisonSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import CursorFollower from '@/components/CursorFollower'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <main>
      <CursorFollower />
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      <ComparisonSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </main>
  )
}
