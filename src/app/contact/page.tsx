'use client';

import ContactHeroSection from '@/components/ContactHeroSection';
import BlogSection from '@/components/BlogSection';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHeroSection />
            {/* <TestimonialsSection /> */}
            <ServiceFAQSection />
            <BlogSection />
        </main>
    );
}
