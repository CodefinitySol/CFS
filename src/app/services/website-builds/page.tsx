import Header from '@/components/Header';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import Footer from '@/components/Footer'; // Assuming we want footer here too, although layout likely handles it?
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import PricingSection from '@/components/PricingSection';
// The layout.tsx handles Footer globally? Let's check layout.tsx content previously viewed.
// In Step 1605 summary: "Integrated the Footer component globally by adding it to the Root Layout."
// So I don't need to add <Footer /> here.

export default function WebsiteBuildsPage() {
    return (
        <main className="bg-[#181A1D] min-h-screen flex-grow relative">
            <div className="absolute top-0 w-full z-50">
                <Header />
            </div>
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
        </main>
    );
}
