import AugmentationHeroSection from '@/components/services/AugmentationHeroSection';
import LatestWork from '@/components/LatestWork';
import TestimonialsSection from '@/components/TestimonialsSection';
import AugmentationSetupSection from '@/components/services/AugmentationSetupSection';
import AugmentationServiceFeatures from '@/components/services/AugmentationServiceFeatures';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const AUGMENTATION_FAQS = [
    {
        question: "What are the usual rates of individuals?",
        answer: "Rates depend on role, experience level, and engagement type. We typically offer monthly or hourly models that are more predictable than freelance hiring. During the scoping call, we align on budget and recommend profiles that fit both your technical needs and cost expectations."
    },
    {
        question: "What will be your role after hire?",
        answer: "We remain actively involved after onboarding. Our role is to make sure the team stays productive, aligned, and supported. This includes performance check-ins, handling replacements if needed, and helping you scale or adjust the team as your product evolves."
    },
    {
        question: "What is stopping me from hiring the developer directly?",
        answer: "Nothing. You absolutely can. What we provide instead is continuity, accountability, and reduced risk. If a developer becomes unavailable, underperforms, or your needs change, we handle transitions without disrupting your delivery. You are not left managing hiring, contracts, or replacements alone."
    },
    {
        question: "Can we hire the whole team?",
        answer: "Yes. You can augment with a single engineer or a full cross-functional team including frontend, backend, QA, and product support. Teams are built based on your roadmap and can scale up or down as needed."
    },
    {
        question: "What about equipment and security audits?",
        answer: "All engineers work on secured, company-managed environments with access controls in place. We follow standard security practices and can align with your internal compliance, tooling, and audit requirements where needed."
    },
    {
        question: "What about refunds?",
        answer: "We keep things straightforward. If something is not working during the initial engagement period, we address it quickly. This can include role adjustments, replacements, or engagement changes. Specific terms are discussed clearly before onboarding so expectations are aligned from day one."
    },
    {
        question: "How can I contact you?",
        answer: "You can reach us directly through the contact form on this page or by scheduling a call. We keep communication simple and responsive throughout the engagement."
    },
];

export default function AugmentationPage() {
    return (
        <main className="min-h-screen bg-white text-[#1E293B]">
            <AugmentationHeroSection />
            <AugmentationSetupSection />
            <LatestWork />
            <TestimonialsSection />
            <AugmentationServiceFeatures />
            <ServiceFAQSection items={AUGMENTATION_FAQS} />
            <ContactSection />
            <BlogSection />
        </main>
    );
}
