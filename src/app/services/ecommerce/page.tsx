import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import GrowthSection from '@/components/services/GrowthSection';
import ServiceWhyChooseSection from '@/components/services/ServiceWhyChooseSection';
import PricingSection from '@/components/PricingSection';
import WhoAmISection from '@/components/services/WhoAmISection';
import PlatformSelectionSection from '@/components/services/PlatformSelectionSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const ECOMMERCE_FEATURES = [
    {
        title: "Product strategy & structure",
        description: "We help you organize your products, variants, and categories for maximum clarity and ease of purchase.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Seamless checkout experiences",
        description: "Customized checkout flows and cart designs that reduce friction and improve conversion rates.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Digital & physical goods",
        description: "Whether you sell ebooks, services, or physical inventory, we set up the right foundations for your business model.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Payment gateway integration",
        description: "Secure setup for Stripe, PayPal, and other major payment providers to ensure smooth transactions.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Inventory & order management",
        description: "We show you how to easily manage stock, fulfill orders, and track your shop's performance.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "Marketing & growth tools",
        description: "Setup for discounts, email subscriptions, and cross-selling to keep your customers coming back.",
        icon: "/services-section/offer-item-6.webp"
    }
];

const WHY_CHOOSE_ITEMS = [
    {
        title: "Designed for Conversion",
        description: "We don't just build shops; we build sales engines. Every design decision is made to guide customers to the 'Buy' button.",
        icon: "/services-section/choose-item-1.webp"
    },
    {
        title: "Scalable Foundations",
        description: "Your shop will be built to grow. Whether you have 5 products or 500, our structure remains high-performing.",
        icon: "/services-section/choose-item-2.webp"
    },
    {
        title: "User-First Experience",
        description: "We focus on a shopping experience that feels as good on mobile as it does on desktop—fast, clean, and intuitive.",
        icon: "/services-section/choose-item-3.webp"
    }
];

const ECOMMERCE_FAQS = [
    {
        question: "Can I sell both digital and physical products on Squarespace?",
        answer: "Yes, Squarespace supports physical products, digital downloads, services, and even memberships. We'll set up the specific fulfillment rules for each type."
    },
    {
        question: "Does Squarespace handle automated taxes and shipping rates?",
        answer: "Absolutely. We can integrate tools like TaxJar for automated sales tax and set up real-time shipping carrier rates or flat-fee rules depending on your needs."
    },
    {
        question: "Can I migrate my existing store from Shopify or WooCommerce?",
        answer: "Yes, we can migrate your product data, customer lists, and core content from other platforms into a much easier-to-manage Squarespace environment."
    },
    {
        question: "Is the checkout process secure?",
        answer: "Yes. All Squarespace commerce transactions are SSL encrypted and PCI compliant, ensuring your customers' payment data is always protected."
    }
];

const PRICING_PLANS = [
  {
    name: 'Essentials',
    price: '$4,500',
    description: 'Perfect for lean builds and fast turnarounds. Built directly in Squarespace—no code, no fuss. A sleek, functional design that reflects your brand’s ambitions.',
    features: [
      'Up to 4 pages',
      'No-code build',
      '1 round of revisions',
      '2-week timeline cap',
      'Direct-to-Squarespace design'
    ],
    isDark: true
  },
  {
    name: 'Premium',
    price: '$9,500',
    description: 'For businesses that need more flexibility and finesse. A hybrid approach for extra polish and performance that helps your organisation scale quickly.',
    features: [
      'Up to 7 pages',
      'Custom styling (CSS)',
      '2 rounds of revisions',
      '5-week timeline cap',
      'Hybrid build'
    ],
    isDark: true
  },
  {
    name: 'Enterprise',
    price: "Let's Talk",
    description: 'Our flagship offer for high-level organisations that demand excellence. A bespoke solution combining strategy, innovation, and cutting-edge design. Best for complex builds.',
    features: [
      'Unlimited pages',
      'Unlimited code',
      'Unlimited revisions',
      'No timeline cap',
      'Dedicated design phase'
    ],
    isDark: false
  }
];

export default function EcommercePage() {
    return (
        <main className="min-h-screen bg-white">
            <ServiceHeroSection
                badgeText="E-commerce design"
                title={
                    <span
                        className="bg-clip-text text-transparent block"
                        style={{
                            backgroundImage: 'linear-gradient(94.13deg,#e8ecf0 .14%,#506c83 153.8%)',
                        }}
                    >
                        Squarespace E-Commerce<br />Web Design
                    </span>
                }
                description="Expert Squarespace ecommerce solutions and refined e-commerce experiences on Squarespace sites that are easy to manage, visually precise, and structured to convert. Whether you're launching your first product or levelling up an existing shop, we create online stores that look good and work flawlessly, front to back."
                imageSrc="/services-section/ecommer-hero-img.webp"
            />
            <LatestWork />
            <ClientMarquee />
            <GrowthSection
                badge="What we offer"
                title="Build A Shop That Works As Hard As You Do"
                description="We combine strategic design with Squarespace’s powerful commerce tools to create stores that don’t just look premium—they sell."
                features={ECOMMERCE_FEATURES}
            />
            <ServiceWhyChooseSection
                badge="Why choose us"
                title={<>Designing Online Stores<br />With Precision And Care</>}
                items={WHY_CHOOSE_ITEMS}
            />
            <PricingSection
                badge="Pricing"
                title="Flexible E-Commerce Packages"
                description="Find the Perfect Plan for Your Shop"
                plans={PRICING_PLANS}
            />
            <WhoAmISection />
            <PlatformSelectionSection
                title="The E-Commerce Edge"
                description="Download our free whitepaper on how to choose the right e-commerce platform for your growing brand."
                imageSrc="/services-section/platform.webp"
            />
            <ServiceFAQSection items={ECOMMERCE_FAQS} />
        </main>
    );
}
