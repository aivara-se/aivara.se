import { describe, expect, test } from 'bun:test';
import { projects, validateProjects } from './projects';

function entry(overrides: Record<string, unknown> = {}) {
	return {
		slug: 'example',
		name: 'example',
		repo: 'https://github.com/example/example',
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
		expect(result[0].slug).toBe('example');
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

	test('reads the internal marker when it is present', () => {
		const [result] = validateProjects({ projects: [entry({ internal: true })] });
		expect(result.internal).toBe(true);
	});

	test('defaults the internal marker to false when it is absent', () => {
		const [result] = validateProjects({ projects: [entry()] });
		expect(result.internal).toBe(false);
	});

	test('rejects an internal marker that is not a boolean', () => {
		expect(() => validateProjects({ projects: [entry({ internal: 'yes' })] })).toThrow();
	});
});

describe('curated projects.json', () => {
	test('loads and validates the curated entries', () => {
		expect(projects).toHaveLength(2);
		expect(projects.map((project) => project.slug)).toEqual(['aivara', 'dispatcher']);
	});

	test('marks the dispatcher as the only internal project', () => {
		expect(projects.filter((project) => project.internal).map((project) => project.slug)).toEqual([
			'dispatcher'
		]);
	});
});
