import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS_DATA } from '../data/portfolio';
import {
  filterProjects,
  findProjectById,
  formatProjectMeta,
  getBentoCardSpan,
  getCategoryCounts,
  isInternalAnchor,
} from './portfolioLogic';

test('filterProjects returns all 6 projects for ALL', () => {
  const result = filterProjects(PROJECTS_DATA, 'ALL');
  assert.equal(result.length, 6);
});

test('filterProjects filters accurately by category', () => {
  const videoProjects = filterProjects(PROJECTS_DATA, 'VIDEO & MUSIC');
  assert.equal(videoProjects.length, 3);
  assert.ok(videoProjects.every((p) => p.category === 'VIDEO & MUSIC'));

  const designProjects = filterProjects(PROJECTS_DATA, 'IT OSIS & DESIGN');
  assert.equal(designProjects.length, 1);
  assert.equal(designProjects[0]?.id, 'osis-it-head');

  const techProjects = filterProjects(PROJECTS_DATA, 'E-SPORT & TECH');
  assert.equal(techProjects.length, 2);
});

test('getCategoryCounts totals match project count', () => {
  const counts = getCategoryCounts(PROJECTS_DATA);
  assert.equal(counts.ALL, 6);
  assert.equal(
    counts['VIDEO & MUSIC'] + counts['IT OSIS & DESIGN'] + counts['E-SPORT & TECH'],
    counts.ALL
  );
});

test('findProjectById locates valid project and returns null otherwise', () => {
  const found = findProjectById(PROJECTS_DATA, 'farewell-2026');
  assert.equal(found?.title, 'VIDEO PERPISAHAN ANGKATAN 23');
  assert.equal(findProjectById(PROJECTS_DATA, 'nonexistent'), null);
  assert.equal(findProjectById(PROJECTS_DATA, null), null);
});

test('formatProjectMeta formats period and role with middle dot', () => {
  const project = PROJECTS_DATA[0]!;
  assert.equal(formatProjectMeta(project), 'APRIL 2026 · VIDEO & MUSIK EDITOR');
});

test('getBentoCardSpan adapts cleanly when filtered', () => {
  const fullSpanCard = PROJECTS_DATA.find((p) => p.id === 'laptop-maintenance')!;
  assert.equal(getBentoCardSpan(fullSpanCard, 'ALL', 6), 'lg:col-span-12');
  assert.equal(getBentoCardSpan(fullSpanCard, 'E-SPORT & TECH', 2), 'lg:col-span-6');
  assert.equal(getBentoCardSpan(fullSpanCard, 'IT OSIS & DESIGN', 1), 'lg:col-span-12');
});

test('isInternalAnchor identifies hash links', () => {
  assert.equal(isInternalAnchor('#contact'), true);
  assert.equal(isInternalAnchor('https://www.instagram.com/yoselinefau'), false);
});
