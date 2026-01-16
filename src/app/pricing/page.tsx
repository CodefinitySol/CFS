'use client';

import PricingHeroSection from '@/components/PricingHeroSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <PricingHeroSection />
            <ContactSection />
            <BlogSection />
        </main>
    );
} 
