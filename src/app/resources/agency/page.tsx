'use client';

import AgencyHero from '@/components/AgencyHero';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FounderSection from '@/components/FounderSection';
import SupportSection from '@/components/SupportSection';

export default function AgencyPage() {
    return (
        <main className="min-h-screen bg-white">
            <AgencyHero />
            <FounderSection />
            <SupportSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
