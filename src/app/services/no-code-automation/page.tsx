import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import GrowthSection from '@/components/services/GrowthSection';
import ContactSection from '@/components/ContactSection';

const NO_CODE_FEATURES = [
    {
        title: 'Workflow automation',
        description:
            'Automated systems that remove repetitive work and improve operational efficiency',
        icon: '/services-section/offer-item-1.webp',
    },
    {
        title: 'System integrations',
        description:
            'Connecting internal tools, APIs, and platforms into a unified workflow',
        icon: '/services-section/offer-item-2.webp',
    },
    {
        title: 'Internal tools and dashboards',
        description:
            'Custom systems to manage operations, reporting, and team processes',
        icon: '/services-section/offer-item-3.webp',
    },
    {
        title: 'Rapid system builds',
        description:
            'Quick implementation of operational systems without unnecessary complexity',
        icon: '/services-section/offer-item-4.webp',
    },
    {
        title: 'Optimization and reliability',
        description:
            'Ongoing improvements to keep systems stable, efficient, and easy to manage',
        icon: '/services-section/offer-item-5.webp',
    },
    {
        title: 'Ongoing support',
        description: 'Support for updates, fixes, and evolving operational needs',
        icon: '/services-section/offer-item-6.webp',
    },
];

const TECH_STACK = [
    'N8N',
    'CMS platforms',
    'Internal tools',
    'API integrations',
    'Cloud services',
];

export default function NoCodeAutomationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Automation systems"
                ctaText="Book a 20-min call"
                title={
                    <span
                        className="block bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                        }}
                    >
                        Operational systems that remove manual work
                    </span>
                }
                description={
                    'We design and build automation systems that streamline workflows, reduce operational overhead, and keep teams focused on what actually matters.\n\nThis is not about quick hacks. Every system is structured to be reliable, maintainable, and aligned with how your product or operations evolve over time.'
                }
                imageSrc="/services-section/website-migration.webp"
            />
            <GrowthSection
                variant="light"
                badge="What we offer"
                title="Automation built into real workflows, not disconnected tools"
                description={
                    <>
                        <p>
                            We create systems that connect your tools, processes, and data into a single flow. The goal is simple: fewer manual steps, fewer errors, and better visibility across operations.
                        </p>
                    </>
                }
                techStack={TECH_STACK}
                features={NO_CODE_FEATURES}
            />
            <ContactSection />
        </main>
    );
}
