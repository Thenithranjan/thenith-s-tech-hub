import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import SwarmCursor from "@/components/ui/SwarmCursor";

const Index = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* SwarmCursor overlay — fixed full-screen, pointer-events-none so clicks pass through */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <SwarmCursor
          color="#b71cd0"
          accentColor="#de2de5"
          count={6}
          size={4}
          speed={2.5}
          spread={100}
          wander={0.25}
          trail={0.75}
          scatterOnClick
          className="w-full h-full"
        />
      </div>

      {/* Page content */}
      <main className="min-h-screen bg-background" style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
