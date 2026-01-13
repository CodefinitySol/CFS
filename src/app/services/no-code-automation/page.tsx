import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import GrowthSection from '@/components/services/GrowthSection';
import ServiceWhyChooseSection from '@/components/services/ServiceWhyChooseSection';
import PricingSection from '@/components/PricingSection';
import WhoAmISection from '@/components/services/WhoAmISection';
import PlatformSelectionSection from '@/components/services/PlatformSelectionSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const NO_CODE_FEATURES = [
    {
        title: "Workflow automation",
        description: "Design and implementation of automated workflows to reduce manual work and operational friction.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "System integrations",
        description: "Connecting tools, platforms, and services into a single, reliable workflow.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Internal tools and dashboards",
        description: "No-code applications built to support operations, reporting, and team workflows.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Rapid product validation",
        description: "Quick builds to test ideas, processes, or features before committing to full development.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Optimization and maintenance",
        description: "Ongoing improvements to keep workflows efficient, stable, and easy to manage.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "Priority automation support",
        description: "Responsive support for updates, fixes, and time-sensitive automation needs.",
        icon: "/services-section/offer-item-6.webp"
    }
];

const WHY_CHOOSE_ITEMS = [
    {
        title: "Certified Squarespace Expertise",
        description: "We know how other platforms work—and how to translate their structure into Squarespace seamlessly.",
        icon: "/services-section/choose-item-1.webp"
    },
    {
        title: "No Downtime",
        description: "We build on a staging site, then launch only when everything is tested and ready.",
        icon: "/services-section/choose-item-2.webp"
    },
    {
        title: "Built to Last",
        description: "Your new site won’t just work. It’ll work better, look cleaner, and be easier to manage from day one.",
        icon: "/services-section/choose-item-3.webp"
    }
];

const MIGRATION_FAQS = [
    {
        question: "Will my website go down during the migration?",
        answer: "No. We build your new site in a staging environment. Your old site stays live until the moment we switch the DNS, ensuring zero downtime for your customers."
    },
    {
        question: "Will I lose my Google rankings?",
        answer: "Our migration process includes a detailed SEO mapping phase. By setting up proper 301 redirects and maintaining a clean site structure, we protect your existing SEO value."
    },
    {
        question: "Can you migrate my blog posts and images?",
        answer: "Yes, we migrate your blog history, images, and page content. We ensure that formatting remains clean and that all assets are properly hosted on your new platform."
    },
    {
        question: "How long does a typical migration take?",
        answer: "Most migrations take between 3 to 6 weeks, depending on the volume of content and the complexity of the custom features being recreated."
    }
];

const TECH_STACK = [
    "N8N", "Wordpress", "Wix", "SquareSpace", "Loveable", "Replit", "API integrations", "Cloud services"
]

export default function NoCodeAutomationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="No-code and automation"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        Fast, Flexible Systems Without Heavy Engineering
                    </span>
                }
                description={"Not every product or workflow needs custom code. We help teams move faster by building reliable systems using no-code and low-code tools where they make sense.\n\n Our focus is on speed, clarity, and control. The result is automation that works, scales, and stays easy to manage."}
                imageSrc="/services-section/website-migration.webp"
            />
            <LatestWork />
            <GrowthSection
                badge="What we offer"
                title={"You focus on the business.\n We’ll handle the workflows."}
                description="Our no-code and automation services are ideal for internal tools, integrations, and rapid product validation. We apply the same discipline as custom development, without unnecessary complexity."
                techStack={TECH_STACK}
                features={NO_CODE_FEATURES}
            />
            <PricingSection
                badge="Augmentation for everyone"
                title="Flexible Engagement Models"
                description="Choose a setup that fits your product stage, team size, and level of complexity"
            />
            <ServiceFAQSection items={MIGRATION_FAQS} />
        </main>
    );
}
