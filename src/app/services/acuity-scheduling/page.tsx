import AcuityHeroSection from '@/components/services/AcuityHeroSection';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import GrowthSection from '@/components/services/GrowthSection';
import ServiceWhyChooseSection from '@/components/services/ServiceWhyChooseSection';
import WhoAmISection from '@/components/services/WhoAmISection';
import PlatformSelectionSection from '@/components/services/PlatformSelectionSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const ACUITY_FEATURES = [
    {
        title: "Seamless Integration",
        description: "We embed Acuity directly into your Squarespace site, ensuring a smooth transition from browsing to booking.",
        icon: "/services-section/offer-item-1.webp"
    },
    {
        title: "Brand Customization",
        description: "We style your booking scheduler's colors, fonts, and layout to match your brand's unique identity perfectly.",
        icon: "/services-section/offer-item-2.webp"
    },
    {
        title: "Automated Workflows",
        description: "Set up automated confirmation emails, reminders, and intake forms to save hours of administrative work.",
        icon: "/services-section/offer-item-3.webp"
    },
    {
        title: "Payment Collection",
        description: "Securely collect deposits or full payments at the time of booking with Stripe, PayPal, or Square integration.",
        icon: "/services-section/offer-item-4.webp"
    },
    {
        title: "Calendar Syncing",
        description: "Sync your Acuity calendar with Google, Outlook, or iCloud to ensure you're never double-booked again.",
        icon: "/services-section/offer-item-5.webp"
    },
    {
        title: "Group classes & Workshops",
        description: "Easily set up and manage group bookings, workshops, and multi-day events with custom capacity limits.",
        icon: "/services-section/offer-item-6.webp"
    }
];

const WHY_CHOOSE_ITEMS = [
    {
        title: "Booking Strategists",
        description: "We don't just 'install' Acuity. We design the entire booking flow to maximize conversions and minimize friction.",
        icon: "/services-section/choose-item-1.webp"
    },
    {
        title: "Technical Excellence",
        description: "From complex CSS styling to advanced API integrations, we handle the technical heavy lifting with precision.",
        icon: "/services-section/choose-item-2.webp"
    },
    {
        title: "Post-Launch Empowerment",
        description: "We provide comprehensive training to ensure you and your team are confident managing your new system.",
        icon: "/services-section/choose-item-3.webp"
    }
];

const ACUITY_FAQS = [
    {
        question: "Do I need a separate Acuity Scheduling subscription?",
        answer: "Yes, Acuity is a separate service owned by Squarespace. While some Squarespace plans include basic scheduling, we recommend a standalone Acuity subscription for full feature access."
    },
    {
        question: "Can I manage multiple staff members or locations?",
        answer: "Absolutely. Acuity is built for scale. We can set up complex schedules for multiple providers, rooms, or locations within a single interface."
    },
    {
        question: "Is it possible to offer gift certificates and packages?",
        answer: "Yes! High-tier Acuity plans allow you to sell gift certificates, subscription packages, and discount codes directly through your booking page."
    },
    {
        question: "Can I integrate my existing intake forms?",
        answer: "We recreate your intake forms directly within Acuity, allowing you to collect all necessary client information at the moment of booking."
    }
];

import AcuityProjectSection from '@/components/services/AcuityProjectSection';
import FounderSection from '@/components/services/FounderSection';
import AcuitySetupSection from '@/components/services/AcuitySetupSection';
import AcuityServiceFeatures from '@/components/services/AcuityServiceFeatures';
import AcuityManagementSection from '@/components/services/AcuityManagementSection';

export default function AcuitySchedulingPage() {
    return (
        <main className="min-h-screen bg-white text-[#1E293B]">
            <AcuityHeroSection />
            <ClientMarquee />
            <AcuitySetupSection />
            <LatestWork />
            <TestimonialsSection />
            <FounderSection />
            <AcuityServiceFeatures />
            <AcuityManagementSection />
            <PlatformSelectionSection
                title="The Scheduling Strategy"
                description="Download our free guide on how to optimize your booking flow to increase appointment volume and reduce no-shows."
                imageSrc="/services-section/platform.webp"
            />
            <AcuityProjectSection />
            <ServiceFAQSection items={ACUITY_FAQS} />
        </main>
    );
}
