import React from 'react';
import Header from '@/components/Header';
import PortfolioProjectGrid from '@/components/PortfolioProjectGrid';
import ContactSection from '@/components/ContactSection';

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header isLight={true} />
            <PortfolioProjectGrid />
            <ContactSection />
        </main>
    );
}
