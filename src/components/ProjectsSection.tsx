import { useState } from 'react';
import {
  FILTER_CATEGORIES,
  PROJECTS_DATA,
  type ProjectCategory,
  type ProjectItem,
} from '../data/portfolio';
import {
  filterProjects,
  formatProjectMeta,
  getBentoCardSpan,
} from '../utils/portfolioLogic';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const filteredProjects = filterProjects(PROJECTS_DATA, activeCategory);

  return (
    <section id="projects" className="min-h-screen w-full px-[6vw] pt-28 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex flex-wrap items-baseline justify-center gap-3 sm:gap-4">
            <h2 className="font-display text-[clamp(36px,4.8vw,64px)] text-[#D6DFE8] text-balance">
              RECAP PROJECT 2026
            </h2>
            <span className="font-condensed text-sm font-bold tracking-[0.14em] text-[#7DD3FC] uppercase">
              2024 – 2026
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Filter kategori proyek"
            className="flex flex-wrap justify-center gap-2.5 mt-7"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap shrink-0 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC] ${
                    isActive
                      ? 'bg-[#DCE8F5] text-[#060A10] border-[#DCE8F5] shadow-[0_0_16px_rgba(220,232,245,0.35)]'
                      : 'bg-[#0C1A2A]/55 text-[#F4F7FB]/70 border-[#DCE8F5]/15 hover:border-[#DCE8F5]/40 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div
          data-testid="bento-grid"
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5"
        >
          {filteredProjects.map((project) => {
            const spanClasses = getBentoCardSpan(
              project,
              activeCategory,
              filteredProjects.length
            );

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => onSelectProject(project)}
                aria-label={`Lihat detail proyek ${project.title}`}
                className={`group relative col-span-1 md:col-span-3 ${spanClasses} min-h-[270px] rounded-[14px] overflow-hidden bg-[#08121E]/75 border border-[#DCE8F5]/15 hover:border-[#7DD3FC]/55 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.65)] transition-all duration-300 p-6 flex flex-col justify-between gap-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]`}
              >
                <ResilientImage
                  src={project.image}
                  alt={project.title}
                  fallbackVariant="studio"
                  showLabel={false}
                  className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 z-0"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#05080D]/95 via-[#05080D]/55 to-[#05080D]/20 z-1"
                />

                <div className="relative z-10 flex items-center justify-between gap-2 w-full">
                  <span className="inline-block bg-[#9E1324]/95 text-white font-condensed text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(158,19,36,0.4)] whitespace-nowrap">
                    {project.metric}
                  </span>
                </div>

                <div className="relative z-10 w-full">
                  <div className="text-[11px] font-bold tracking-[0.12em] text-[#7DD3FC] uppercase mb-1.5">
                    {formatProjectMeta(project)}
                  </div>
                  <h3 className="font-display text-[22px] leading-[1.08] text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#F4F7FB]/75 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
