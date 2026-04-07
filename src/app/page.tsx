import HeroSection from '@/components/HeroSection';
import ClientMarquee from '@/components/ClientMarquee';
import Meet from '@/components/Meet';
import LatestWork from '@/components/LatestWork';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ClientMarquee />
      <Meet />
      <LatestWork />
      <TestimonialsSection />
      <ProcessSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
