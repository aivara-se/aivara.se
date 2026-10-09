export type PageKey = 'home' | 'projects' | 'bots' | 'log';

export const SITE_ORIGIN = 'https://aivara.se';

// The nav's GitHub destination. It lives here with the other fixed URLs so the top bar
// does not hard-code a destination of its own.
export const GITHUB_ORG = 'https://github.com/aivara-se';

// The board where every card the bots work on lives. Registered here for the same
// reason as GITHUB_ORG: the top bar does not hard-code a destination of its own.
export const DEVELOPMENT_BOARD = 'https://github.com/orgs/aivara-se/projects/2';

// The board's single view. A bot's own link filters it by assignee, which is the only
// part of the address that differs per bot.
const BOARD_VIEW = `${DEVELOPMENT_BOARD}/views/1`;

export function boardFilter(assignee: string): string {
	return `${BOARD_VIEW}?filterQuery=assignee%3A${encodeURIComponent(assignee)}`;
}

export interface Route {
	key: PageKey;
	path: string;
}

// The one place page paths live. Every nav link and canonical tag is derived from
// this table, so the paths cannot drift page by page.
export const routes: readonly Route[] = [
	{ key: 'home', path: '/' },
	{ key: 'projects', path: '/projects' },
	{ key: 'bots', path: '/bots' },
	{ key: 'log', path: '/log' }
];

// A bot's own page. The key is the bot's id, and the path is its address on this site:
// the page a bot's own subdomain used to serve lives at /<bot> now.
export type AgentKey = 'mama' | 'meme' | 'mimi' | 'momo';

export const agentKeys = ['mama', 'meme', 'mimi', 'momo'] as const satisfies readonly AgentKey[];

export interface AgentRoute {
	key: AgentKey;
	path: string;
}

export const agentRoutes: readonly AgentRoute[] = agentKeys.map((key) => ({
	key,
	path: `/${key}`
}));

const byKey = new Map<PageKey, Route>(routes.map((route) => [route.key, route]));
const agentsByKey = new Map<AgentKey, AgentRoute>(agentRoutes.map((route) => [route.key, route]));

export const navKeys = ['projects', 'bots', 'log'] as const satisfies readonly PageKey[];

export function href(key: PageKey): string {
	const route = byKey.get(key);
	if (!route) throw new Error(`Unknown page key: ${key}`);
	return route.path;
}

export function absoluteHref(key: PageKey): string {
	return SITE_ORIGIN + href(key);
}

export function agentHref(key: AgentKey): string {
	const route = agentsByKey.get(key);
	if (!route) throw new Error(`Unknown agent key: ${key}`);
	return route.path;
}

// A bot's log is a page of its own, the way its own site had one: /<bot> is who the bot is,
// /<bot>/log is what it has been doing.
export function agentLogHref(key: AgentKey): string {
	return `${agentHref(key)}/log`;
}

export function absoluteAgentHref(key: AgentKey): string {
	return SITE_ORIGIN + agentHref(key);
}
