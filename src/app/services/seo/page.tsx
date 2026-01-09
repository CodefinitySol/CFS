import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import PricingSection from '@/components/PricingSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import GrowthSection from '@/components/services/GrowthSection';
import ServiceWhyChooseSection from '@/components/services/ServiceWhyChooseSection';

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
            <PricingSection />
            <ServiceFAQSection />
        </main>
    );
}

