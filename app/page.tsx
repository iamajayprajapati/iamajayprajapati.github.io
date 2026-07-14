import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TeachingSection from "@/components/sections/TeachingSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import ContactSection from "@/components/sections/ContactSection";
import StatsSection from "@/components/sections/StatsSection";

/**
 * Home page – renders all sections of the academic portfolio
 * in a single-page layout with smooth scroll navigation.
 */
export default function Home() {
  return (
    <>
      {/* Hero / Landing */}
      <HeroSection />

      {/* Research Metrics Dashboard */}
      <StatsSection />

      {/* Biography + Education */}
      <AboutSection />

      {/* Research Interests */}
      <ResearchSection />

      {/* Publications (journal + conference + preprints) */}
      <PublicationsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Experience Timeline */}
      <ExperienceSection />

      {/* Teaching & Mentoring */}
      <TeachingSection />

      {/* Workshops & Training */}
      <WorkshopsSection />

      {/* Skills & Expertise */}
      <SkillsSection />

      {/* Awards & Achievements */}
      <AwardsSection />

      {/* Contact */}
      <ContactSection />
    </>
  );
}
