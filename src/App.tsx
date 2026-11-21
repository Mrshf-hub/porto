import { useCallback, useEffect, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProfileSection } from './components/ProfileSection';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import type { ProjectItem } from './data/portfolio';
import type { NavSectionId } from './utils/portfolioLogic';

const SECTION_IDS: NavSectionId[] = ['hero', 'profile', 'projects', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToSection = useCallback((sectionId: NavSectionId) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id') as NavSectionId | null;
            if (id && SECTION_IDS.includes(id)) {
              setActiveSection(id);
            }
          }
        }
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-[#F4F7FB]">
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main>
        <HeroSection onNavigate={scrollToSection} />
        <ProfileSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <ContactSection />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateContact={() => scrollToSection('contact')}
      />
    </div>
  );
}
