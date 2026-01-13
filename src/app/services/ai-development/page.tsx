import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import GrowthSection from '@/components/services/GrowthSection';
import PricingSection from '@/components/PricingSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const MAINTENANCE_FAQS = [
    {
        question: "What exactly is included in Squarespace website management?",
        answer: "Our management services cover everything from content updates and image swaps to technical monitoring, security checks, and platform updates. We ensure your site stays current, functional, and secure without you lifting a finger."
    },
    {
        question: "Can I request content updates at any time?",
        answer: "Yes! Depending on your plan, you can send us your content updates (text, images, blog posts, products) and we'll handle the implementation within a guaranteed turnaround time, typically 24-48 hours."
    },
    {
        question: "Do you handle Squarespace platform updates?",
        answer: "Squarespace updates its platform regularly. We monitor these changes to ensure your site's custom code and design remain compatible and bug-free after any backend updates."
    },
    {
        question: "Is technical support included?",
        answer: "Absolutely. If something stops working or you encounter a technical glitch, we're your first point of contact. We troubleshoot and fix issues directly within the Squarespace environment."
    },
    {
        question: "Can I cancel my maintenance plan at any time?",
        answer: "We offer flexible monthly and annual plans. You can cancel or change your plan at the end of your billing cycle with no hidden fees or long-term lock-ins."
    },
    {
        question: "Do you provide reports on my website's performance?",
        answer: "Yes, our premium plans include monthly health and performance reports, giving you insights into your site's traffic, security status, and any optimizations we've performed."
    },
    {
        question: "What if I need a completely new feature added to my site?",
        answer: "Small features are often covered under maintenance. For larger structural changes or new page builds, we offer discounted rates for our active maintenance clients."
    }
];

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

const WHY_CHOOSE_ITEMS = [
    {
        title: "Certified Squarespace Expertise",
        description: "No googling, no learning curves. We manage Squarespace sites daily—and we’ve seen every edge case.",
        icon: "/services-section/choose-item-1.webp"
    },
    {
        title: "Fast, Reliable, Discreet",
        description: "We make changes quickly and communicate clearly. No drama, no chasing.",
        icon: "/services-section/choose-item-2.webp"
    },
    {
        title: "Future-Ready Support",
        description: "Need to expand functionality? Add new sections? Launch something fresh? We’re already on it.",
        icon: "/services-section/choose-item-3.webp"
    }
];

const PRICING_PLANS = [
    {
        name: 'SEO Kickstarter',
        price: '$2,200',
        description: 'Foundational SEO setup with expert guidance—perfect for businesses who want a long-term strategy and have capacity to handle in-house.',
        features: [
            'Up to 5 key pages reviewed',
            'Google tools setup guidance (GA + GSC)',
            'Full SEO & site health audit',
            'Keyword research + mapping',
            'Actionable SEO strategy & next steps',
            'Final PDF report',
            'Personalized video walkthrough',
            'Need more than 5 pages? We\'ll quote you based on your site size.'
        ],
        isDark: true
    },
    {
        name: 'SEO Concierge',
        price: '$2,500',
        priceSuffix: '/mo',
        description: 'A done-for-you SEO solution for brands ready to scale. We handle strategy, implementation, optimization, and tracking—so you can focus on running the business. Best suited for 3–12 month growth goals.',
        features: [
            'Full hands-on implementation (on-page SEO, tech fixes, metadata, etc.)',
            'Keyword & content strategy',
            'Technical SEO & ongoing site improvements',
            'LLM-focused optimization (for future-proofing rankings)',
            'Backlink building strategy',
            'Content briefs (1–2 per month)',
            'Keyword tracking & rank monitoring',
            'GA4 & Search Console reporting',
            'Biweekly updates + monthly reporting dashboard',
            'Dedicated SEO expert - Optional blog writing available at $75/article'
        ],
        isDark: false
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
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        AI Systems Built for Real Products
                    </span>
                }
                description={"We build AI systems that are designed to run in production, not sit in demos. From intelligent agents to automation pipelines, we help teams apply AI where it genuinely improves products, workflows, and decision making.\n\n Our focus is simple. Make AI useful, understandable, and reliable over time. No black boxes. No unnecessary complexity."}
                imageSrc="/services-section/website-maintaince-hero-img.webp"
            />
            <LatestWork />
            <GrowthSection
                badge="What we offer"
                title={"You focus on your product.\n We’ll take care of the AI."}
                description="Our AI development services are designed to support real products at different stages. Whether you need a focused feature, workflow automation, or ongoing AI improvements, we adapt to how your team works and how your product evolves."
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
