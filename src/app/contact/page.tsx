'use client';

import ContactHeroSection from '@/components/ContactHeroSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHeroSection />
            <ServiceFAQSection />
        </main>
    );
}
