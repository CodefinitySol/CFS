import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import GrowthSection from '@/components/services/GrowthSection';
import ContactSection from '@/components/ContactSection';

const DEVOPS_FEATURES = [
    {
        title: 'Infrastructure setup',
        description:
            'Cloud environments designed around your product’s architecture and usage patterns',
        icon: '/services-section/offer-item-1.webp',
    },
    {
        title: 'Deployment systems',
        description:
            'Automated pipelines for consistent, reliable releases without manual overhead',
        icon: '/services-section/offer-item-2.webp',
    },
    {
        title: 'Monitoring and observability',
        description:
            'Systems to track performance, detect issues early, and maintain uptime',
        icon: '/services-section/offer-item-3.webp',
    },
    {
        title: 'Scalability and performance',
        description:
            'Infrastructure designed to handle growth without breaking under load',
        icon: '/services-section/offer-item-4.webp',
    },
    {
        title: 'Security and access control',
        description:
            'Structured access, permissions, and best practices to protect systems and data',
        icon: '/services-section/offer-item-5.webp',
    },
    {
        title: 'Ongoing infrastructure support',
        description:
            'Support for incidents, updates, and evolving system requirements',
        icon: '/services-section/offer-item-6.webp',
    },
];

const TECH_STACK = [
    'Cloud platforms',
    'CI/CD pipelines',
    'Containerized environments',
    'Monitoring systems',
    'Infrastructure automation',
];

export default function DevOpsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Infrastructure"
                ctaText="Book a 20-min call"
                title={
                    <span
                        className="block bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                        }}
                    >
                        Systems that keep products stable at scale
                    </span>
                }
                description={
                    'We design and manage infrastructure that keeps your product reliable, observable, and ready to handle growth. Everything is built to support real usage, not just initial deployment.\n\nThe focus is simple: systems should run predictably, scale when needed, and not require constant intervention.'
                }
                imageSrc="/services-section/ecommer-hero-img.webp"
            />
            <GrowthSection
                variant="light"
                badge="What we offer"
                title="Infrastructure aligned with how your product operates"
                description="We build and manage the systems behind your product so teams can ship features without worrying about stability, deployments, or scaling issues."
                techStack={TECH_STACK}
                features={DEVOPS_FEATURES}
            />
            <ContactSection />
        </main>
    );
}
