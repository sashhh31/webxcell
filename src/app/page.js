import HeroSection from './components/sections/HeroSection';
import ProjectsGrid from './components/sections/ProjectsGrid';
import TechnologiesSection from './components/sections/TechnologySection';
import LatestBlogsSection from './components/sections/LatestBlogsSection';
import ConsultationCTA from './components/sections/ConsultationCTA';
import ServicesGrid from './components/sections/ServicesGrid';
import DigitalAgencySection from './components/sections/DigitalAgencySection';
import TrustedClientSection from './components/sections/TrustedClientSection';
import AboutExcellenceSection from './components/sections/AboutExcellenceSection';

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <AboutExcellenceSection />
      <ServicesGrid />
      <TrustedClientSection />
      <DigitalAgencySection />
      <ProjectsGrid />
      <ConsultationCTA />
      <LatestBlogsSection />
      <TechnologiesSection />

    </div>
  );
}