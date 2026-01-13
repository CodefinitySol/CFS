import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import PricingSection from '@/components/PricingSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import GrowthSection from '@/components/services/GrowthSection';

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

const WHY_CHOOSE_SEO_ITEMS = [
    {
        title: "Squarespace Native SEO And AIO",
        description: "We know what is possible, what is not, and how to shape your site so it reads clearly for Google and for AI systems. Clean structure and clear intent help your content show up in both places.",
        icon: "/services-section/choose-item-1.webp"
    },
    {
        title: "Human-Led Search Strategy",
        description: "Our work reads naturally and supports real users. It also gives AI models the clarity they need to summarise your content accurately. Quiet, steady structure that works behind the scenes.",
        icon: "/services-section/choose-item-2.webp"
    },
    {
        title: "Results That Build Over Time",
        description: "We do not promise instant wins. We build search credibility carefully and consistently so your site becomes a trusted source for both search engines and AI tools over time.",
        icon: "/services-section/choose-item-3.webp"
    }
];

const SEO_FAQS = [
    {
        question: "What specific SEO services are provided for Squarespace websites?",
        answer: "We provide comprehensive on-page optimization, technical SEO audits, keyword research, local SEO setup, and content strategy tailored to the Squarespace platform's specific capabilities."
    },
    {
        question: "What is AIO and why does it matter for Squarespace websites?",
        answer: "AIO stands for AI Optimization. It ensures your website content is structured and formatted so that AI search engines and tools (like ChatGPT or Google's AI Overviews) can easily understand and reference your site."
    },
    {
        question: "How long does it take to see results from SEO optimization on a Squarespace site?",
        answer: "SEO is a long-term strategy. While some technical improvements can be indexed quickly, significant ranking changes usually take 3 to 6 months of consistent optimization and content effort."
    },
    {
        question: "Does AIO replace traditional SEO?",
        answer: "No, AIO complements traditional SEO. While SEO targets search engine ranking, AIO focuses on visibility within AI-driven results. Both are necessary for a modern digital presence."
    },
    {
        question: "How is local SEO different from general SEO for a Squarespace website?",
        answer: "Local SEO focuses on helping your business appear in searches within a specific geographic area, optimizing your Google Business Profile and local citations, whereas general SEO aims for broader, often global, reach."
    },
    {
        question: "Does SEO optimization impact website loading speed on Squarespace?",
        answer: "Yes, part of our SEO service involves technical optimization like image compression and code clean-up which actually improves your loading speed—a key ranking factor."
    },
    {
        question: "How are keywords researched and implemented for Squarespace SEO?",
        answer: "We use professional tools to find high-intent keywords your audience is searching for and strategically implement them into your page titles, headers, meta descriptions, and body content without compromising readability."
    },
    {
        question: "Can AIO and SEO be done at the same time?",
        answer: "Absolutely. In fact, we recommend it. Much of the technical foundation for SEO also supports AIO, allowing us to hit two birds with one stone during our optimization phase."
    },
    {
        question: "Can existing content be optimized, or is new content required for SEO improvements?",
        answer: "Both. We start by refining your existing content to meet current SEO standards. If we find gaps in your search visibility, we'll recommend and create new content to target those missing opportunities."
    },
    {
        question: "How do SEO services handle algorithm updates from search engines?",
        answer: "We monitor search engine updates closely and adjust your strategy as needed. Our focus on high-quality, user-first content means your site is better protected against major shifts in ranking logic."
    },
    {
        question: "Will AIO help my business show up in AI Overviews?",
        answer: "Yes, that is a primary goal of AIO. By structuring data and answering questions directly, we increase the likelihood that Google’s AI Overviews will pick up your content as a source."
    },
    {
        question: "What reporting is provided to track SEO progress and performance?",
        answer: "We provide monthly or quarterly reports (depending on your plan) that track keyword rankings, organic traffic, and conversion goals, giving you a clear view of your ROI."
    },
    {
        question: "How does content strategy support SEO goals for a Squarespace website?",
        answer: "Content strategy ensures every piece of content on your site has a purpose. By aligning your blog posts and pages with search intent, we build the topical authority needed to rank for competitive keywords."
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
            <ServiceFAQSection items={SEO_FAQS} />
        </main>
    );
}
