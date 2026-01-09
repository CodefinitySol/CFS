import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import GrowthSection from '@/components/services/GrowthSection';
import ServiceWhyChooseSection from '@/components/services/ServiceWhyChooseSection';
import PricingSection from '@/components/PricingSection';
import WhoAmISection from '@/components/services/WhoAmISection';
import PlatformSelectionSection from '@/components/services/PlatformSelectionSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const WHY_CHOOSE_ITEMS = [
    {
        title: "Certified Squarespace Expertise",
        description: "As experienced Squarespace experts, we know the platform inside and out, allowing us to push its capabilities to deliver a truly unique website.",
        icon: "/services-section/choose-item-1.webp"
    },
    {
        title: "Client-Centered Approach",
        description: "We prioritize your input at every step, ensuring your website feels authentically you.",
        icon: "/services-section/choose-item-2.webp"
    },
    {
        title: "Proven Results",
        description: "With 700+ successful projects completed, We've helped businesses like yours achieve their online goals with style and ease.",
        icon: "/services-section/choose-item-3.webp"
    }
];

const GROWTH_FEATURES = [
    {
        title: "Squarespace, Mastered",
        description: "We've built hundreds of Squarespace websites. We know how to push the platform without breaking it—and when to add custom code to elevate function.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Strategic Design",
        description: "We don't design in a vacuum. Every layout decision is informed by your goals, your audience, and your brand voice.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Built To Convert",
        description: "Strong visuals are important—but structure is what converts. We make sure your site does both.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Seamless Functionality",
        description: "Whether it's an online store, booking system, portfolio, or blog—to ensure your website works as hard as you do.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Collaborative Process",
        description: "We work with you directly throughout. No handoffs. No surprises.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "You Own Your Site",
        description: "No ongoing retainers, no confusing IP clauses. You'll walk away with a website you can confidently manage—or have us continue to manage it for you.",
        icon: "/services-section/offer-item-6.webp"
    }
];

const WEB_PRICING_PLANS = [
    {
        name: 'Essentials',
        price: '$4,500',
        description: 'Perfect for lean builds and fast turnarounds. Built directly in Squarespace—no code, no fuss. A sleek, functional design that reflects your brand’s ambitions.',
        features: [
            'Up to 4 pages',
            'No-code build',
            '1 round of revisions',
            '2-week timeline cap',
            'Direct-to-Squarespace design'
        ],
        isDark: true
    },
    {
        name: 'Premium',
        price: '$9,500',
        description: 'For businesses that need more flexibility and finesse. A hybrid approach for extra polish and performance that helps your organisation scale quickly.',
        features: [
            'Up to 7 pages',
            'Custom styling (CSS)',
            '2 rounds of revisions',
            '5-week timeline cap',
            'Hybrid build'
        ],
        isDark: true
    },
    {
        name: 'Enterprise',
        price: "Let's Talk",
        description: 'Our flagship offer for high-level organisations that demand excellence. A bespoke solution combining strategy, innovation, and cutting-edge design. Best for complex builds.',
        features: [
            'Unlimited pages',
            'Unlimited code',
            'Unlimited revisions',
            'No timeline cap',
            'Dedicated design phase'
        ],
        isDark: false
    }
];

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
            <GrowthSection
                badge="What we offer"
                title="Designed For Growth, Not Just Launch"
                description="Your website is your first impression. It's also your infrastructure. That's why our custom Squarespace web design projects are built with your future in mind. From scalable page architecture to CMS-integrated content systems, we design sites that can evolve with your business."
                features={GROWTH_FEATURES}
            />
            <ServiceWhyChooseSection
                badge="Why choose us"
                title={<>Designing Websites With<br />Purpose And Passion</>}
                items={WHY_CHOOSE_ITEMS}
            />
            <PricingSection
                badge="Pricing"
                title="Flexible Web Design Packages"
                description="Find the Perfect Plan for Your Business"
                plans={WEB_PRICING_PLANS}
            />
            <WhoAmISection />
            <PlatformSelectionSection
                title="Choosing The Right Platform"
                description={<>Grab the free Squarespace vs. WordPress vs. Webflow vs. Wix whitepaper and discover which one&apos;s best for custom web design.</>}
                imageSrc="/services-section/platform.webp"
            />
            <ServiceFAQSection />
        </main>
    );
}


