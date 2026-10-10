export type PageKey = 'home';

export const SITE_ORIGIN = 'https://aivara.se';

// The nav's GitHub destination. It lives here with the other fixed URLs so the top bar
// does not hard-code a destination of its own.
export const GITHUB_ORG = 'https://github.com/aivara-se';

export interface Route {
	key: PageKey;
	path: string;
}

// The one place page paths live. Every nav link and canonical tag is derived from
// this table, so the paths cannot drift page by page.
//
// The lab has one page of its own. Everything else is either a row on it — the agents, the
// projects — or a page an agent owns. There is no lab log, no separate projects page and no
// separate agents page: the front page is the whole introduction, and the top bar carries
// the code.
export const routes: readonly Route[] = [{ key: 'home', path: '/' }];

// An agent's own page. The key is the agent's id, and the path is its address on this site:
// the page an agent's own subdomain used to serve lives at /<agent>/ now.
export type AgentKey = 'mama' | 'meme' | 'mimi' | 'momo';

export const agentKeys = ['mama', 'meme', 'mimi', 'momo'] as const satisfies readonly AgentKey[];

export interface AgentRoute {
	key: AgentKey;
	path: string;
}

// The trailing slash is the address the host serves: the build writes `<path>/index.html` for it
// (see `trailingSlash` in `+layout.ts`) and the bare path is a 301 to the same page.
export const agentRoutes: readonly AgentRoute[] = agentKeys.map((key) => ({
	key,
	path: `/${key}/`
}));

const byKey = new Map<PageKey, Route>(routes.map((route) => [route.key, route]));
const agentsByKey = new Map<AgentKey, AgentRoute>(agentRoutes.map((route) => [route.key, route]));

export function href(key: PageKey): string {
	const route = byKey.get(key);
	if (!route) throw new Error(`Unknown page key: ${key}`);
	return route.path;
}

export function agentHref(key: AgentKey): string {
	const route = agentsByKey.get(key);
	if (!route) throw new Error(`Unknown agent key: ${key}`);
	return route.path;
}

// An agent's log is a page of its own, the way its own site had one: /<agent>/ is who the agent
// is, /<agent>/log/ is what it has been doing.
export function agentLogHref(key: AgentKey): string {
	return `${agentHref(key)}log/`;
}
