import Header from '@/components/Header';
import AboutHeroSection from '@/components/AboutHeroSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import RecordOfResultsSection from '@/components/RecordOfResultsSection';
import OurOfficesSection from '@/components/OurOfficesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';

export default function AboutPage() {
    return (
        <main className="flex-grow bg-[#191819]">
            <Header />
            <AboutHeroSection />
            <CoreValuesSection />
            <RecordOfResultsSection />
            <ProcessSection />
            <OurOfficesSection />
            <ContactSection />
        </main>
    );
}
