import React from 'react';
import PortfolioHeroSection from '@/components/PortfolioHeroSection';
import PortfolioProjectGrid from '@/components/PortfolioProjectGrid';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <PortfolioHeroSection />
            <PortfolioProjectGrid />
            <ContactSection />
            <BlogSection />
        </main>
    );
}
