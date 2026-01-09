import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import GrowthSection from '@/components/services/GrowthSection';
import ServiceWhyChooseSection from '@/components/services/ServiceWhyChooseSection';
import PricingSection from '@/components/PricingSection';
import WhoAmISection from '@/components/services/WhoAmISection';
import PlatformSelectionSection from '@/components/services/PlatformSelectionSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const MIGRATION_FEATURES = [
    {
        title: "Full content audit",
        description: "We review every page, asset, and link to determine what stays, what goes, and what needs reworking.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "New site architecture planning",
        description: "We restructure your navigation and page flow for a cleaner, more logical user experience.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Custom design in Squarespace",
        description: "We rebuild your site from scratch—no templates, no shortcuts—aligned with your brand.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "SEO preservation & redirects",
        description: "We manage all 301 redirects and metadata to preserve your rankings and avoid traffic drops.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Domain & DNS Setup",
        description: "We handle the backend setup—cleanly and securely.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "Domain, DNS & hosting setup",
        description: "We don’t vanish after launch. If anything needs adjusting, we’re on it.",
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

export default function WebsiteMigrationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="Website migration"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        Website Migration To<br />Squarespace
                    </span>
                }
                description="We migrate WordPress to Squarespace along with sites from Wix to squarespace, Webflow to squarespace, and other platforms, into clean, high-performing Squarespace builds. No broken links, no dropped rankings, and no messy handovers. Just a seamless, professional transition without cutting corners or losing critical content."
                imageSrc="/services-section/website-migration.webp"
            />
            <LatestWork />
            <ClientMarquee />
            <GrowthSection
                badge="What we offer"
                title="Here’s what our smooth migration process looks like"
                description="Whether your current site is bloated, outdated, or just unnecessarily complex, we’ll re-platform your brand with care and clarity. It’s not just a new platform. It’s a fresh foundation."
                features={MIGRATION_FEATURES}
            />
            <ServiceWhyChooseSection
                badge="Why choose us"
                title={<>Designing Websites with<br />Purpose and Passion</>}
                items={WHY_CHOOSE_ITEMS}
            />
            <PricingSection
                badge="Pricing"
                title="Flexible Web Design Packages"
                description="Find the Perfect Plan for Your Business"
                plans={PRICING_PLANS}
                containerClassName="grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
            />
            <WhoAmISection />
            <PlatformSelectionSection
                title="Thinking of Switching?"
                description="Read the free whitepaper to help decide if Squarespace, WordPress, Webflow, or Wix is your best next move."
                imageSrc="/services-section/platform.webp"
            />
            <ServiceFAQSection items={MIGRATION_FAQS} />
        </main>
    );
}
