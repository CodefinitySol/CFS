'use client';

import PricingHeroSection from '@/components/PricingHeroSection';
import ContactSection from '@/components/ContactSection';
import PricingSection from '@/components/PricingSection';
import GrowthSection from '@/components/services/GrowthSection';
import IntegrationsSection from '@/components/IntegrationsSection';

import WhyChooseSquarespace from '@/components/WhyChooseSquarespace';
import AdditionalCostsSection from '@/components/AdditionalCostsSection';
import PackagesSection from '@/components/PackagesSection';
import WhyChooseStatsSection from '@/components/WhyChooseStatsSection';
import IndustriesSection from '@/components/IndustriesSection';

const GROWTH_FEATURES = [
    {
        title: "Fully Responsive Design",
        description: "Your website will look stunning on desktop, tablet, and mobile devices.",
        icon: "/services-section/offer-item-6.webp"
    },
    {
        title: "Content Formatting",
        description: "Professional styling and organization of all your content.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Domain & SSL Setup",
        description: "Secure connection and professional domain configuration included.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "SEO-Ready Setup",
        description: "Meta tags, clean structure, and alt text optimized for search engines.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Analytics Integration",
        description: "Google Analytics and tracking setup for insights into your audience.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Training & Handover",
        description: "Complete walkthrough so you can confidently manage your site.",
        icon: "/services-section/offer-item-5.webp"
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <PricingHeroSection />
            <WhyChooseSquarespace />
            <PricingSection />
            <GrowthSection
                badge="What’s included"
                title={"What's Included in Our Design"}
                description="Every package includes these essential features to ensure your success."
                // techStack={TECH_STACK}
                features={GROWTH_FEATURES}
            />
            <AdditionalCostsSection />
            <IntegrationsSection />
            <PackagesSection />
            <WhyChooseStatsSection />
            <IndustriesSection />
            <ContactSection />
        </main>
    );
} 
