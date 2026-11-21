import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';
import { formatProjectMeta, isInternalAnchor } from '../utils/portfolioLogic';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export function ProjectModal({
  project,
  onClose,
  onNavigateContact,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const internal = isInternalAnchor(project.linkUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 bg-[#040910]/85 backdrop-blur-md flex items-center justify-center p-5"
    >
      <div className="relative bg-[#0A1624] border border-[#DCE8F5]/20 rounded-[18px] max-w-[680px] w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Detail Modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#DCE8F5]/15 hover:bg-[#DCE8F5]/25 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        <div className="w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 bg-[radial-gradient(circle_at_70%_25%,rgba(56,189,248,0.18),rgba(8,18,30,0.95)_65%,#05080D_100%)] border border-[#DCE8F5]/10">
          <ResilientImage
            src={project.image}
            alt={project.title}
            fallbackTitle={project.title}
            fallbackSubtitle={project.metric}
            fallbackVariant="studio"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="bg-[#9E1324] text-white font-condensed text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full">
            {project.metric}
          </span>
          <span className="text-[11px] font-bold tracking-[0.12em] text-[#7DD3FC] uppercase">
            {formatProjectMeta(project)}
          </span>
        </div>

        <h2
          id="project-modal-title"
          className="font-display text-3xl text-white mb-3 leading-tight"
        >
          {project.title}
        </h2>

        <p className="text-[13.5px] text-[#F4F7FB]/80 leading-relaxed mb-5">
          {project.summary}
        </p>

        <ul className="space-y-2.5 mb-6">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-5 text-[13px] text-[#F4F7FB]/75 leading-relaxed"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 text-[#38BDF8] text-xs"
              >
                ✦
              </span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#7DD3FC] mb-7">
          {project.tools.map((tool, index) => (
            <span key={tool} className="inline-flex items-center">
              {tool}
              {index < project.tools.length - 1 && (
                <span aria-hidden="true" className="ml-2 text-white/30">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>

        <div>
          {internal ? (
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white text-xs font-bold tracking-[0.08em] px-5 py-2.5 rounded-full shadow-[0_4px_15px_rgba(2,132,199,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(2,132,199,0.6)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]"
            >
              <span>{project.linkLabel}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          ) : (
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white text-xs font-bold tracking-[0.08em] px-5 py-2.5 rounded-full shadow-[0_4px_15px_rgba(2,132,199,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(2,132,199,0.6)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]"
            >
              <span>{project.linkLabel}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
