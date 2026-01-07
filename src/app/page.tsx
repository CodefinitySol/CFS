import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ClientMarquee from '@/components/ClientMarquee';
import MeetSam from '@/components/Meet';
import LatestWork from '@/components/LatestWork';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <VideoSection />
      <ClientMarquee />
      <MeetSam />
      <LatestWork />
      <ProcessSection />
      <TestimonialsSection />
    </main>
  );
}
