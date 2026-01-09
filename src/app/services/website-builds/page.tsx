import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import PricingSection from '@/components/PricingSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

export default function WebsiteBuildsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Website design"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        Custom Squarespace<br />Web Design
                    </span>
                }
                description="Specializing in custom Squarespace web design, We build custom Squarespace websites for brands that want more than just a “nice-looking site.” Our clients come to us when it’s time to evolve when the business has outgrown the DIY phase, when the brand has matured, and when their online presence needs to catch up."
                imageSrc="/services-section/hero-img.webp"
            />
            <LatestWork />
            <ClientMarquee />
            <PricingSection />
            <ServiceFAQSection />
        </main>
    );
}
