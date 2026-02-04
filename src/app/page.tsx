import HeroSection from '@/components/HeroSection';
import Meet from '@/components/Meet';
import ServicesSection from '@/components/ServicesSection';
import LatestWork from '@/components/LatestWork';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';
import VideoSection from '@/components/VideoSection';

const REASONS = [
  {
    title: 'Built for Real Products, Not Just Demos',
    description: "We focus on software that runs in production and stays there. Our team builds systems that are stable, maintainable, and designed for real users, not one time launches.\n\n From early MVPs to mature platforms, we think through architecture, data flow, and long term usage before writing code. That is why the products we ship continue to run, evolve, and scale.",
    image: '/item-1.png'
  },
  {
    title: 'Strong Engineering, Clear Ownership',
    description: "Every project has clear technical ownership. You work directly with engineers who understand the system end to end and take responsibility for decisions.\n\n This reduces miscommunication, rework, and delays. You get steady progress, realistic timelines, and honest answers when tradeoffs are needed.",
    image: '/item-2.webp'
  },
  {
    title: 'AI Where It Makes Sense, Not Everywhere',
    description: "We work deeply with AI systems, agents, and automation, but we apply them carefully. AI is used when it adds value, not because it sounds impressive.\n\n Whether it is an AI powered workflow or a traditional application, the goal stays the same. Solve the problem cleanly and keep the system understandable for the team running it.",
    image: '/item-3.webp'
  },
  {
    title: 'Flexible Teams That Fit Your Stage',
    description: "Our engagement models are designed to adapt as your needs change. Start lean, scale up, or bring in senior engineers when complexity increases.\n\n Many teams work with us long term because the setup stays flexible without losing quality or continuity.",
    image: '/item-2.webp'
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      {/* <VideoSection /> */}
      <Meet />
      <LatestWork />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <ServicesSection />
      <PricingSection />
      <IntegrationsSection />
      <WhyChooseSection
        badgeText='Why Codefinity Solutions'
        title='Why Teams Choose CFS'
        description='You are not just hiring developers. You are choosing how your product is built, maintained, and scaled. Here is what working with Codefinity Solutions actually looks like.'
        REASONS={REASONS} />
      <ContactSection />
      {/* <BlogSection /> */}
    </main>
  );
}
