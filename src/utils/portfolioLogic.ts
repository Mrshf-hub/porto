import type { ProjectCategory, ProjectItem } from '../data/portfolio';

export type NavSectionId = 'hero' | 'profile' | 'projects' | 'contact';

export function filterProjects(
  projects: readonly ProjectItem[],
  category: ProjectCategory
): ProjectItem[] {
  if (category === 'ALL') {
    return [...projects];
  }
  return projects.filter((project) => project.category === category);
}

export function getCategoryCounts(
  projects: readonly ProjectItem[]
): Record<ProjectCategory, number> {
  const counts: Record<ProjectCategory, number> = {
    ALL: projects.length,
    'VIDEO & MUSIC': 0,
    'IT OSIS & DESIGN': 0,
    'E-SPORT & TECH': 0,
  };

  for (const project of projects) {
    counts[project.category] += 1;
  }

  return counts;
}

export function findProjectById(
  projects: readonly ProjectItem[],
  id: string | null
): ProjectItem | null {
  if (!id) {
    return null;
  }
  return projects.find((project) => project.id === id) ?? null;
}

export function formatProjectMeta(project: Pick<ProjectItem, 'period' | 'role'>): string {
  return `${project.period} · ${project.role}`;
}

export function isInternalAnchor(url: string): boolean {
  return url.startsWith('#');
}

export function getBentoCardSpan(
  project: ProjectItem,
  activeCategory: ProjectCategory,
  filteredCount: number
): string {
  if (activeCategory === 'ALL') {
    return project.spanClass;
  }
  if (filteredCount === 1) {
    return 'lg:col-span-12';
  }
  if (filteredCount === 2) {
    return 'lg:col-span-6';
  }
  return 'lg:col-span-4';
}
