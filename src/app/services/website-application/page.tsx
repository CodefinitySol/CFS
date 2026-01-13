import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import GrowthSection from '@/components/services/GrowthSection';
import PricingSection from '@/components/PricingSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const GROWTH_FEATURES = [
    {
        title: "Custom web application development",
        description: "Design and development of web applications tailored to your product requirements and user needs.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Frontend and backend architecture",
        description: "Structured frontend and backend systems built for clarity, performance, and long-term maintainability.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "API and system integration",
        description: "Seamless integration with third-party services, internal systems, and external APIs.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Performance optimization",
        description: "Identification and resolution of bottlenecks to keep applications fast, responsive, and stable.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Scalability and refactoring",
        description: "Ongoing improvements to support growth, new features, and increasing user demand without breaking existing functionality.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "Priority web support",
        description: "Responsive support for production issues, updates, and time-sensitive changes.",
        icon: "/services-section/offer-item-6.webp"
    }
];

const TECH_STACK = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Python", "REST APIs"
]

export default function WebsiteApplicationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Web application development"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        Web Applications Built for Scale and Stability
                    </span>
                }
                description={"We build web applications that are designed to grow with your product and your users. From early MVPs to mature platforms, our focus is on clean architecture, performance, and long-term maintainability. \n\n Our work balances speed with structure, so teams can ship confidently without creating problems later."}
                imageSrc="/services-section/hero-img.webp"
            />
            <LatestWork />
            <GrowthSection
                badge="What we offer"
                title={"You focus on the product. \n We’ll handle the web application."}
                description="Our web application development services adapt to your product stage and technical needs. Whether you are building from scratch or improving an existing system, we work in a way that supports steady progress and clear ownership."
                techStack={TECH_STACK}
                features={GROWTH_FEATURES}
            />
            <PricingSection
                badge="Augmentation for everyone"
                title="Flexible Engagement Models"
                description="Choose a setup that fits your product stage, team size, and level of complexity"
            />
            <ContactSection />
            <BlogSection />
        </main>
    );
}


