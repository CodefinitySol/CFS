import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import PricingSection from '@/components/PricingSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import GrowthSection from '@/components/services/GrowthSection';
import ServiceWhyChooseSection from '@/components/services/ServiceWhyChooseSection';
import WhoAmISection from '@/components/services/WhoAmISection';
import PlatformSelectionSection from '@/components/services/PlatformSelectionSection';

const SEO_FEATURES = [
    {
        title: "Site Audit & Indexability Review",
        description: "We look at how your site is built, how it is crawled, and how it appears in search results. If something blocks visibility, we fix it. This gives Google a clear path to index your pages and gives AI systems a clean source of information to draw from.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "On-Page Optimization",
        description: "Titles, descriptions, headings, internal linking, images, and readability are refined until the intent is clear. Search engines and AI models respond well to clean hierarchy. Your pages become easier to understand and easier to place in the right search results.",
        icon: "/services/HandGrabbing.webp"
    },
    {
        title: "SEO Copywriting (If Needed)",
        description: "If your content needs strengthening, we write what your audience is actually looking for. Short, clear answers help with traditional rankings and increase the chance of being referenced inside AI summaries and AI Overviews.",
        icon: "/services/ArrowsClockwise.webp"
    },
    {
        title: "Local SEO Setup",
        description: "We build your Google Business Profile correctly, check map data, and add local schema. This helps you appear in local searches and gives AI models accurate location information when answering questions.",
        icon: "/services/GearSix.webp"
    },
    {
        title: "Content Strategy Support",
        description: "We show you what to keep, what to refine, and what to remove. A focused site helps search engines understand your topics and helps AI systems interpret your expertise clearly.",
        icon: "/services/GraduationCap.webp"
    },
    {
        title: "Ongoing Monitoring",
        description: "We review your performance regularly and make quiet adjustments in the background. Your site grows steadily without extra work on your end.",
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

const SEO_PRICING_PLANS = [
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

export default function SEOPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Search engine optimization"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        SEO And AIO For Squarespace<br />Websites | by Crawford
                    </span>
                }
                description={
                    <div className="space-y-6">
                        <p className="font-medium text-white text-xl sm:text-2xl">Search clarity for Google and AI systems</p>
                        <div className="space-y-4 text-[#E8ECF0]/80">
                            <p>Most websites need support in two areas today. Traditional SEO that helps you show up on Google. AIO that helps you appear in AI Overviews and AI search results. We build both into your Squarespace site so search engines and AI models can read your content clearly and present it accurately.</p>
                            <p>Our work focuses on structure, intent, and meaningful content that answers real questions. No jargon. No noise. Just clarity that works quietly in the background.</p>
                        </div>
                    </div>
                }
                imageSrc="/services-section/seo-hero-img.webp"
                titleClassName="text-3xl sm:text-4xl lg:text-4xl"
                descriptionClassName="text-base"
                sectionBgColor="#516C83"
                imageOpacity={0.5}
            />
            <LatestWork />
            <ClientMarquee />
            <GrowthSection
                badge="What we offer"
                title="SEO For Squarespace That Supports Both SEO And AIO Visibility"
                description={
                    <p>There is no mystery. We build SEO systems that work for search engines and AI models by focusing on clarity, structure, and aligned content. Less clutter. More purpose.</p>
                }
                features={SEO_FEATURES}
            />
            <ServiceWhyChooseSection
                badge="Why choose us"
                title={<>SEO And AIO Services<br />Designed To Grow With You</>}
                items={WHY_CHOOSE_SEO_ITEMS}
            />
            <PricingSection
                badge="Pricing"
                title="SEO For Squarespace Pricing"
                description="Find the Perfect Plan for Your Business"
                plans={SEO_PRICING_PLANS}
                containerClassName="grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
            />
            <WhoAmISection />
            <PlatformSelectionSection
                title="The SEO Platform Showdown"
                description="Find out which platform performs best for SEO in our free Squarespace vs. WordPress vs. Webflow vs. Wix whitepaper."
                imageSrc="/services-section/platform.webp"
            />
            <ServiceFAQSection items={SEO_FAQS} />
        </main>
    );
}
