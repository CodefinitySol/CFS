import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import GrowthSection from '@/components/services/GrowthSection';
import ContactSection from '@/components/ContactSection';

const DEVOPS_FEATURES = [
    {
        title: "Cloud infrastructure setup",
        description: "Design and configuration of cloud environments tailored to your application and usage needs.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Deployment pipelines",
        description: "Automated build and deployment pipelines that support consistent and repeatable releases.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Monitoring and logging",
        description: "System monitoring and logging to track performance, detect issues early, and reduce downtime.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Scalability and performance",
        description: "Infrastructure planning and optimization to support growth without instability.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Security and access control",
        description: "Configuration of secure environments, permissions, and best practices to protect systems and data.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "Priority DevOps support",
        description: "Responsive support for incidents, updates, and time-sensitive operational needs.",
        icon: "/services-section/offer-item-6.webp"
    }
];

const TECH_STACK = [
    "Cloud platforms", "CI/CD tools", "Containerization tools", "Monitoring and logging systems", "Infrastructure automation tools"
]

export default function DevOpsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="DevOps and infrastructure"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#2B2A2B 153.8%)',
                        }}
                    >
                        Infrastructure That Keeps Products Running
                    </span>
                }
                description={"Good infrastructure stays out of the way until it is needed. We design and manage systems that keep applications stable, observable, and ready to scale as usage grows.\n\n Our focus is on reliability, clarity, and control, so teams can operate confidently without constant firefighting."}
                imageSrc="/services-section/ecommer-hero-img.webp"
            />
            <GrowthSection
                variant="light"
                badge="What we offer"
                title={"You focus on building features.\n We’ll keep the system running."}
                description="Our DevOps and infrastructure services support products at every stage, from early deployment to large-scale systems. We help teams ship faster while keeping operations predictable and secure."
                techStack={TECH_STACK}
                features={DEVOPS_FEATURES}
            />
            <ContactSection />
        </main>
    );
}
