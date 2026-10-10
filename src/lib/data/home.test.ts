import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { en } from '../i18n/en';

// Run from the repository root: `bun test`.
const root = process.cwd();
const source = (path: string) => readFileSync(join(root, path), 'utf8');

// Two facts of the home page that nothing else states: what its nav carries, and the order of
// its two rows. Both are claims about a component's own source rather than about data, so they
// are read off that source — the way `agents.test.ts` reads the routes and the pages.
describe('the front page', () => {
	test('the nav carries the code alone, not the board', () => {
		expect(Object.keys(en.nav)).toEqual(['label', 'github']);
		expect(source('src/lib/components/TopBar.svelte').toLowerCase()).not.toContain('board');
	});
});
