import HeroSection from '@/components/HeroSection';
import Meet from '@/components/Meet';
import LatestWork from '@/components/LatestWork';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Meet />
      <LatestWork />
      <ProcessSection />
      <ServicesSection />
      <PricingSection />
      <IntegrationsSection />
      <ContactSection />
    </main>
  );
}
