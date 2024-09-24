import FAQ from '@/components/ui/HomePage/FAQ';
import HomeSection from '@/components/ui/HomePage/HomeSection';
import InfoSection from '@/components/ui/HomePage/InfoSection';
import LatestProjectsSection from '@/components/ui/HomePage/LatestProjectsSection';
import Portfolio from '@/components/ui/HomePage/Portfolio';
import ProcessSection from '@/components/ui/HomePage/ProcessSection';
import ServiceSection from '@/components/ui/HomePage/ServiceSection';
import SliderSection from '@/components/ui/HomePage/SliderSection';
import Testimonials from '@/components/ui/HomePage/Testimonials';
import UltimateServicesSection from '@/components/ui/HomePage/UltimateServicesSection';

export default function Home() {
  return (
    <main className="bg-[#f9f9fb]">
      <HomeSection />
      <ServiceSection />
      <SliderSection />
      <ProcessSection />
      <Portfolio />
      <InfoSection />
      <LatestProjectsSection />
      <UltimateServicesSection />
      <Testimonials />
      <FAQ />
    </main>
  );
}
