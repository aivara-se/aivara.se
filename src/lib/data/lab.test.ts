import { describe, expect, test } from 'bun:test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { bots } from './lab';
import { agentHref, agentKeys, routes } from '../routes';
import type { AgentKey } from '../routes';
import { en } from '../i18n/en';

// Run from the repository root: `bun test`.
const root = process.cwd();

// The roster, the route table and the filesystem are three places that have to agree about
// which pages exist. Nothing else checks that, so this does: a bot added to one of them and
// not to the others fails here instead of 404ing in production.
describe('the agent pages', () => {
	test('the route table lists exactly the bots in the dictionary', () => {
		expect([...agentKeys].sort()).toEqual(Object.keys(en.bot).sort());
	});

	test('every route directory is a page or a bot, and every bot has one', () => {
		const pageDirs = routes.map((route) => route.path.replace('/', '')).filter(Boolean);
		const listed = [...pageDirs, ...agentKeys].sort();
		const onDisk = readdirSync(join(root, 'src/routes'))
			.filter((name) => !name.startsWith('+'))
			.sort();

		expect(onDisk).toEqual(listed);

		for (const key of agentKeys) {
			expect(existsSync(join(root, 'src/routes', key, '+page.svelte'))).toBe(true);
			expect(existsSync(join(root, 'src/routes', key, '+page.ts'))).toBe(true);
		}
	});

	test('a bot points at its own page', () => {
		for (const bot of bots) {
			expect(agentHref(bot.id as AgentKey)).toBe(bot.path);
		}
	});

	test('every bot accent is a design token in the stylesheet', () => {
		const css = readFileSync(join(root, 'src/app.css'), 'utf8').toUpperCase();
		for (const bot of bots) {
			expect(css).toContain((bot.accent ?? '').toUpperCase());
		}
	});

	test('every bot portrait is committed', () => {
		for (const bot of bots) {
			expect(bot.avatar).toBeTruthy();
			expect(existsSync(join(root, 'static', bot.avatar ?? ''))).toBe(true);
		}
	});
});
