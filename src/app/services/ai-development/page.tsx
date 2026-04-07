import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import GrowthSection from '@/components/services/GrowthSection';
import ContactSection from '@/components/ContactSection';

const GROWTH_FEATURES = [
    {
        title: 'AI feature development',
        description:
            'Design and implementation of AI-powered features aligned with real product use cases',
        icon: '/services-section/offer-item-1.webp',
    },
    {
        title: 'Agent workflows',
        description:
            'Structured agents and multi-step workflows designed for controlled, repeatable execution',
        icon: '/services-section/offer-item-2.webp',
    },
    {
        title: 'Product integration',
        description:
            'Embedding AI into existing systems, interfaces, and user flows without breaking core functionality',
        icon: '/services-section/offer-item-3.webp',
    },
    {
        title: 'Model tuning and iteration',
        description:
            'Continuous improvement of AI behavior based on real usage, feedback, and performance data',
        icon: '/services-section/offer-item-4.webp',
    },
    {
        title: 'Monitoring and reliability',
        description:
            'Systems to track outputs, maintain consistency, and ensure predictable behavior over time',
        icon: '/services-section/offer-item-5.webp',
    },
    {
        title: 'Priority AI support',
        description:
            'Ongoing support for updates, issues, and improvements as your AI systems evolve',
        icon: '/services-section/offer-item-6.webp',
    },
];

const TECH_STACK = [
    "Python", "LangChain", "LangGraph", "LLM APIs", "Vector databases", "REST APIs", "Cloud services"
]

export default function AiDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="AI systems"
                ctaText="Book a 20-min call"
                title={
                    <span
                        className="block bg-clip-text text-transparent"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                        }}
                    >
                        AI built for production, not experiments
                    </span>
                }
                description={
                    'We design and implement AI systems that operate reliably inside real products. From agents to automation workflows, everything is built to be stable, predictable, and usable in production environments.\n\nWe focus on making AI practical. Clear outputs, controlled behavior, and systems that improve over time based on real usage. No black boxes. No unnecessary complexity.'
                }
                imageSrc="/services-section/ai-development.png"
            />
            <GrowthSection
                variant="light"
                badge="What we offer"
                title="AI systems designed to fit how your product actually works"
                description="We build AI features, workflows, and integrations that align with your product, not isolated demos. Everything is structured for real usage, scalability, and long-term maintainability."
                techStack={TECH_STACK}
                features={GROWTH_FEATURES}
            />
            <ContactSection />
        </main>
    );
}
