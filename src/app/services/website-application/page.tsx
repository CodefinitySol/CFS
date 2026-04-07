import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import GrowthSection from '@/components/services/GrowthSection';
import ContactSection from '@/components/ContactSection';

const GROWTH_FEATURES = [
    {
        title: 'Custom product development',
        description:
            'End-to-end development of software products aligned with business goals and real user needs',
        icon: '/services-section/offer-item-1.webp',
    },
    {
        title: 'System architecture',
        description:
            'Design of scalable systems across frontend, backend, and infrastructure with long-term maintainability in mind',
        icon: '/services-section/offer-item-2.webp',
    },
    {
        title: 'API and integrations',
        description:
            'Integration of internal systems, third-party services, and APIs as part of a cohesive product',
        icon: '/services-section/offer-item-3.webp',
    },
    {
        title: 'Performance and reliability',
        description:
            'Optimization to ensure systems remain fast, stable, and predictable under real usage',
        icon: '/services-section/offer-item-4.webp',
    },
    {
        title: 'Scalability and evolution',
        description:
            'Continuous improvements to support growth, new features, and increasing complexity without breaking the system',
        icon: '/services-section/offer-item-5.webp',
    },
    {
        title: 'Ongoing product support',
        description:
            'Support for production systems, updates, and continuous development as the product evolves',
        icon: '/services-section/offer-item-6.webp',
    },
];

const TECH_STACK = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Python',
    'REST APIs',
];

export default function WebsiteApplicationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Product development"
                ctaText="Book a 20-min call"
                title={
                    <span
                        className="block bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                        }}
                    >
                        End-to-end product engineering for real systems
                    </span>
                }
                description={
                    'We design and build production-ready software products, from early-stage builds to full-scale platforms. Every system is built with clean architecture, strong foundations, and long-term scalability in mind.\n\nWe move fast without compromising structure, so teams can ship confidently and continue to build without constant rewrites.'
                }
                imageSrc="/services-section/hero-img.webp"
            />
            <GrowthSection
                variant="light"
                badge="What we offer"
                title="Product development aligned with how real systems grow"
                description="We handle the full product lifecycle, from initial architecture to scaling systems in production. Whether you are building from scratch or improving an existing product, we focus on stability, clarity, and long-term maintainability."
                techStack={TECH_STACK}
                features={GROWTH_FEATURES}
            />
            <ContactSection />
        </main>
    );
}
