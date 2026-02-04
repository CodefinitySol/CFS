import Header from '@/components/Header';
import AboutHeroSection from '@/components/AboutHeroSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import RecordOfResultsSection from '@/components/RecordOfResultsSection';
import LatestWork from '@/components/LatestWork';
import OurOfficesSection from '@/components/OurOfficesSection';
import ProcessSection from '@/components/ProcessSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

export default function AboutPage() {
    return (
        <main className="flex-grow bg-[#181A1D]">
            <Header />
            <AboutHeroSection />
            <CoreValuesSection />
            <RecordOfResultsSection />
            <ProcessSection />
            <LatestWork />
            <OurOfficesSection />
            <ContactSection />
            {/* <BlogSection /> */}
        </main>
    );
}
