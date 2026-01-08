import Header from '@/components/Header';
import AboutHeroSection from '@/components/AboutHeroSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import RecordOfResultsSection from '@/components/RecordOfResultsSection';
import LatestWork from '@/components/LatestWork';
import ClientReviewsSection from '@/components/ClientReviewsSection';
import OurOfficesSection from '@/components/OurOfficesSection';
import ProcessSection from '@/components/ProcessSection';
import StartProjectSection from '@/components/StartProjectSection';
import FAQSection from '@/components/FAQSection';

export default function AboutPage() {
    return (
        <main className="flex-grow bg-[#181A1D]">
            <Header />
            <AboutHeroSection />
            <CoreValuesSection />
            <RecordOfResultsSection />
            <ProcessSection />
            <LatestWork />
            <ClientReviewsSection />
            <OurOfficesSection />
            <StartProjectSection />
            <FAQSection />
        </main>
    );
}
