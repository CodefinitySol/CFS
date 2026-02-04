'use client';

import AgencyHero from '@/components/AgencyHero';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import LatestWork from '@/components/LatestWork';
import ClientMarquee from '@/components/ClientMarquee';
import TestimonialsSection from '@/components/TestimonialsSection';
import AgencyProcessSection from '@/components/AgencyProcessSection';
import FounderSection from '@/components/FounderSection';
import SupportSection from '@/components/SupportSection';

export default function AgencyPage() {
    return (
        <main className="min-h-screen bg-white">
            <AgencyHero />
            <LatestWork />
            <ClientMarquee />
            <FounderSection />
            <AgencyProcessSection />
            <SupportSection />
            {/* <TestimonialsSection /> */}
            <ContactSection />
            <BlogSection />
            <Footer />
        </main>
    );
}
