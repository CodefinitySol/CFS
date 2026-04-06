import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import GrowthSection from '@/components/services/GrowthSection';
import ContactSection from '@/components/ContactSection';

const GROWTH_FEATURES = [
    {
        title: "AI feature development",
        description: "Design and implementation of AI-driven features tailored to your product’s use case.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Agent workflows",
        description: "Structured AI agents and multi-step workflows built to perform repeatable, controlled tasks.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Product integration",
        description: "Seamless integration of AI into existing systems, interfaces, and user flows.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Model tuning and iteration",
        description: "Refinement, testing, and improvement of AI behavior based on real usage and feedback.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Monitoring and reliability",
        description: "Ongoing checks to keep AI outputs consistent, predictable, and aligned with product goals.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "Priority AI support",
        description: "Responsive support for AI-related issues, updates, and time-sensitive changes.",
        icon: "/services-section/offer-item-6.webp"
    }
];

const TECH_STACK = [
    "Python", "LangChain", "LangGraph", "LLM APIs", "Vector databases", "REST APIs", "Cloud services"
]

export default function AiDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="AI development"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                        }}
                    >
                        AI Systems Built for Real Products
                    </span>
                }
                description={"We build AI systems that are designed to run in production, not sit in demos. From intelligent agents to automation pipelines, we help teams apply AI where it genuinely improves products, workflows, and decision making.\n\n Our focus is simple. Make AI useful, understandable, and reliable over time. No black boxes. No unnecessary complexity."}
                imageSrc="/services-section/website-maintaince-hero-img.webp"
            />
            <GrowthSection
                variant="light"
                badge="What we offer"
                title={"You focus on your product.\n We’ll take care of the AI."}
                description="Our AI development services are designed to support real products at different stages. Whether you need a focused feature, workflow automation, or ongoing AI improvements, we adapt to how your team works and how your product evolves."
                techStack={TECH_STACK}
                features={GROWTH_FEATURES}
            />
            <ContactSection />
        </main>
    );
}
