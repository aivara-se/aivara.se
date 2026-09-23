import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.url.pathname.startsWith('/sv') ? 'sv' : 'en';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%aivara.lang%', lang)
	});
};
