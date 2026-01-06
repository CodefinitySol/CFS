import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ClientMarquee from '@/components/ClientMarquee';
import MeetSam from '@/components/Meet';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <ClientMarquee />
      <MeetSam />
    </main>
  );
}
