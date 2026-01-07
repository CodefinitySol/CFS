import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ClientMarquee from '@/components/ClientMarquee';
import Meet from '@/components/Meet';
import ServicesSection from '@/components/ServicesSection';
import LatestWork from '@/components/LatestWork';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectSection from '@/components/ProjectSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <VideoSection />
      <ClientMarquee />
      <Meet />
      <LatestWork />
      <ProcessSection />
      <TestimonialsSection />
      <ProjectSection />
      <ServicesSection />
      <PricingSection />
      <IntegrationsSection />
      <WhyChooseSection />
      <FeaturesSection />
      <ContactSection />
    </main>
  );
}
