import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import PricingSection from '@/components/PricingSection';
import GrowthSection from '@/components/services/GrowthSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const MOBILE_APP_FEATURES = [
    {
        title: "Custom mobile application development",
        description: "Design and development of mobile applications tailored to your product goals and user requirements.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Cross-platform development",
        description: "Mobile applications built to run consistently across platforms using a shared, maintainable codebase.",
        icon: "/services/HandGrabbing.webp"
    },
    {
        title: "Backend and API integration",
        description: "Seamless integration between mobile apps and backend systems, APIs, and services.",
        icon: "/services/ArrowsClockwise.webp"
    },
    {
        title: "Performance and stability optimization",
        description: "Testing and optimization to keep applications fast, responsive, and reliable under real-world conditions.",
        icon: "/services/GearSix.webp"
    },
    {
        title: "Feature iteration and improvements",
        description: "Ongoing refinement of features based on user feedback, analytics, and product growth.",
        icon: "/services/GraduationCap.webp"
    },
    {
        title: "OnPriority mobile support",
        description: "Responsive support for updates, fixes, releases, and time-sensitive production issues.",
        icon: "/services/File.webp"
    }
];

const TECH_STACK = [
    "JavaScript", "TypeScript", "React Native", "API services", "Backend Integrations", "Cloud services"
]

export default function MobileApplicationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Mobile application development"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        Mobile Apps Built for Real Users
                    </span>
                }
                description={"We build mobile applications that are stable, scalable, and ready for real-world usage. From early-stage apps to production systems with growing user bases, we focus on performance, reliability, and clean integration with your backend. \n\n Our approach prioritizes long-term usability over rushed releases, so your app continues to perform as it grows."}
                imageSrc="/services-section/seo-hero-img.webp"
                titleClassName="text-3xl sm:text-4xl lg:text-4xl"
                descriptionClassName="text-base"
                sectionBgColor="#516C83"
                imageOpacity={0.5}
            />
            <LatestWork />
            <GrowthSection
                badge="What we offer"
                title={"You focus on your users.\n We’ll build the mobile experience."}
                description={
                    <p>Our mobile application development services support products at every stage. Whether you are launching a new app or improving an existing one, we build with clarity, ownership, and long-term stability in mind.</p>
                }
                techStack={TECH_STACK}
                features={MOBILE_APP_FEATURES}
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
