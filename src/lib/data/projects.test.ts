import { describe, expect, test } from 'bun:test';
import { projects, validateProjects } from './projects';

function entry(overrides: Record<string, unknown> = {}) {
	return {
		slug: 'provar',
		name: 'provar',
		repo: 'https://github.com/aivara-se/provar',
		language: 'Go',
		status: 'active',
		summary: 'Summary',
		...overrides
	};
}

describe('validateProjects', () => {
	test('accepts a well-formed entry', () => {
		const result = validateProjects({ projects: [entry()] });
		expect(result).toHaveLength(1);
		expect(result[0].slug).toBe('provar');
	});

	test('rejects an entry with a missing slug', () => {
		const { slug: _slug, ...rest } = entry();
		expect(() => validateProjects({ projects: [rest] })).toThrow();
	});

	test('rejects an entry with an unknown status', () => {
		expect(() => validateProjects({ projects: [entry({ status: 'flying' })] })).toThrow();
	});

	test('rejects an entry with a missing summary', () => {
		const { summary: _summary, ...rest } = entry();
		expect(() => validateProjects({ projects: [rest] })).toThrow();
	});

	test('rejects a payload without a projects array', () => {
		expect(() => validateProjects({})).toThrow();
	});
});

describe('curated projects.json', () => {
	test('loads and validates the curated entries', () => {
		expect(projects).toHaveLength(2);
		expect(projects.map((project) => project.slug)).toEqual(['provar', 'aivara']);
	});
});
