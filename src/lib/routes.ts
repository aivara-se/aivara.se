import type { Locale } from './i18n';

export type PageKey = 'home' | 'projects' | 'bots' | 'log';

export const SITE_ORIGIN = 'https://aivara.se';

export interface RoutePair {
	key: PageKey;
	en: string;
	sv: string;
}

// The one place page paths live. Every nav link, language switch and hreflang tag
// is derived from this table, so the two languages cannot drift page by page.
export const routes: readonly RoutePair[] = [
	{ key: 'home', en: '/', sv: '/sv/' },
	{ key: 'projects', en: '/projects', sv: '/sv/projekt' },
	{ key: 'bots', en: '/bots', sv: '/sv/bottar' },
	{ key: 'log', en: '/log', sv: '/sv/logg' }
];

const byKey = new Map<PageKey, RoutePair>(routes.map((route) => [route.key, route]));

export const navKeys = ['projects', 'bots', 'log'] as const satisfies readonly PageKey[];

export function pathsFor(key: PageKey): Record<Locale, string> {
	const route = byKey.get(key);
	if (!route) throw new Error(`Unknown page key: ${key}`);
	return { en: route.en, sv: route.sv };
}

export function href(key: PageKey, locale: Locale): string {
	return pathsFor(key)[locale];
}

export function absoluteHref(key: PageKey, locale: Locale): string {
	return SITE_ORIGIN + href(key, locale);
}

export function otherLocale(locale: Locale): Locale {
	return locale === 'en' ? 'sv' : 'en';
}

// The language switch always maps the *current page* to its counterpart.
export function counterpartHref(key: PageKey, locale: Locale): string {
	return href(key, otherLocale(locale));
}
