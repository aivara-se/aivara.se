export type PageKey = 'home' | 'projects' | 'bots' | 'log';

export const SITE_ORIGIN = 'https://aivara.se';

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

const byKey = new Map<PageKey, Route>(routes.map((route) => [route.key, route]));

export const navKeys = ['projects', 'bots', 'log'] as const satisfies readonly PageKey[];

export function href(key: PageKey): string {
	const route = byKey.get(key);
	if (!route) throw new Error(`Unknown page key: ${key}`);
	return route.path;
}

export function absoluteHref(key: PageKey): string {
	return SITE_ORIGIN + href(key);
}
