import ContactHeroSection from '@/components/ContactHeroSection';
import OurOfficesSection from '@/components/OurOfficesSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const CONTACT_FAQS = [
    {
        question: 'What type of projects do you take on?',
        answer:
            'We work on product development, AI systems, and scalable platforms. Typically with teams building real products, not simple websites.',
    },
    {
        question: 'What happens after we submit?',
        answer:
            'We review your details, understand the scope, and respond with next steps or schedule a call if needed.',
    },
    {
        question: 'Do you work with startups or only established companies?',
        answer:
            'Both. As long as the product requires real engineering and long-term thinking.',
    },
    {
        question: 'Can you work with our existing system?',
        answer:
            'Yes. We regularly work on improving, scaling, or restructuring existing products.',
    },
    {
        question: 'What does engagement typically look like?',
        answer:
            'Project-based builds or dedicated teams, depending on scope and timeline.',
    },
    {
        question: 'How do we get started?',
        answer:
            'Submit your details or book a call. We will align on scope and recommend the best approach.',
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHeroSection />
            <OurOfficesSection />
            <ServiceFAQSection
                items={CONTACT_FAQS}
                badgeText="FAQS"
                title="Common questions"
            />
        </main>
    );
}
