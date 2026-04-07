import AugmentationHeroSection from '@/components/services/AugmentationHeroSection';
import AugmentationServiceFeatures from '@/components/services/AugmentationServiceFeatures';
import ContactSection from '@/components/ContactSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const AUGMENTATION_FAQS = [
    {
        question: "How are engineers priced?",
        answer: "Based on role, experience, and engagement model. We align during the initial call and recommend profiles within your budget."
    },
    {
        question: "Do you stay involved after onboarding?",
        answer: "Yes. We ensure ongoing alignment, performance, and continuity as your product evolves."
    },
    {
        question: "Why not hire directly?",
        answer: "You can. We provide continuity, accountability, and remove hiring risk. If something changes, we handle it without disrupting delivery."
    },
    {
        question: "Can we scale the team?",
        answer: "Yes. From a single engineer to a full team, depending on your roadmap."
    },
    {
        question: "How do you handle security?",
        answer: "We follow standard security practices and align with your internal tooling and requirements."
    },
    {
        question: "How do we get started?",
        answer: "Submit details or book a call. We'll align on scope and recommend the right setup."
    },
];

export default function AugmentationPage() {
    return (
        <main className="min-h-screen bg-white text-[#191819]">
            <AugmentationHeroSection />
            <AugmentationServiceFeatures />
            <ServiceFAQSection items={AUGMENTATION_FAQS} badgeText="FAQS" title="Common questions" />
            <ContactSection />
        </main>
    );
}
