import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingNav from "@/components/ui/FloatingNav";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <OpenSourceSection />
      <ContactSection />
    </main>
  );
}
