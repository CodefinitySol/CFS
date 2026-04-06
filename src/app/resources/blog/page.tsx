'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogGrid from '@/components/BlogGrid';
import ContactSection from '@/components/ContactSection';

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header isLight={true} />
            <BlogGrid />
            <ContactSection />
            <Footer />
        </main>
    );
}
