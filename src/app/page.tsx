import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandSection } from "@/components/brand-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { InnovationSection } from "@/components/innovation-section"
import { PlansSection } from "@/components/plans-section"
import { AdditionalServicesSection } from "@/components/additional-services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/parallax-container"
import { BrandDnaSection } from "@/components/brand-dna-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <BrandDnaSection />
        <BrandSection />
        <ServicesSection />
        <StatsSection />
        <InnovationSection />
        <PlansSection />
        <AdditionalServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
