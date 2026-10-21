import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, validateContactForm, executeTerminalCommand } from './portfolio';
import { PROJECTS } from '../data/portfolioData';

test('filterProjects filters by category correctly', () => {
  const allProjects = filterProjects(PROJECTS, 'All', '');
  assert.equal(allProjects.length, PROJECTS.length);

  const aiProjects = filterProjects(PROJECTS, 'AI & Career Tools', '');
  assert.ok(aiProjects.length > 0);
  assert.ok(aiProjects.every(p => p.category === 'AI & Career Tools'));

  const businessProjects = filterProjects(PROJECTS, 'Business Websites', '');
  assert.ok(businessProjects.length > 0);
  assert.ok(businessProjects.every(p => p.category === 'Business Websites'));
});

test('filterProjects searches across names and technologies', () => {
  const careerVerse = filterProjects(PROJECTS, 'All', 'CareerVerse');
  assert.equal(careerVerse.length, 1);
  assert.equal(careerVerse[0].id, 'careerverse-ai');

  const reactProjects = filterProjects(PROJECTS, 'All', 'React');
  assert.ok(reactProjects.length >= 2);
});

test('validateContactForm rejects invalid inputs and accepts valid inputs', () => {
  const invalid = validateContactForm({
    name: 'M',
    email: 'not-an-email',
    projectType: 'Web Development',
    budgetRange: '$500 - $1000',
    timeline: '1-2 weeks',
    message: 'Short'
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    projectType: 'Web Development',
    budgetRange: '$1000+',
    timeline: '2-4 weeks',
    message: 'We are looking to build a high-performance interactive website.'
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('executeTerminalCommand returns expected outputs for help, about, and unknown', () => {
  const helpOutput = executeTerminalCommand('help');
  assert.ok(helpOutput.length > 5);
  assert.ok(helpOutput.some(line => line.text.includes('about')));

  const aboutOutput = executeTerminalCommand('about');
  assert.ok(aboutOutput.some(line => line.text.includes('MOHAMMED WASEEM')));

  const unknownOutput = executeTerminalCommand('nonexistentcmd');
  assert.equal(unknownOutput[0].type, 'error');
  assert.ok(unknownOutput[0].text.includes('not recognized'));
});
