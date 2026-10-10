import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterStatic from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Two hosts serve this site while the domain moves. Cloudflare Pages serves https://aivara.se
// from the worker the Cloudflare adapter builds; GitHub Pages serves a static copy at
// https://aivara-se.github.io/.website/ . `DEPLOY_TARGET=pages` — set by the deploy workflow and
// by nothing else — picks the static adapter, so every other build (local, CI, Cloudflare) is the
// one it was. Once the domain points at the Pages site, the Cloudflare half is one commit.
//
// `BASE_PATH` is the path a site is served under: a Pages project site sits under the repository's
// name, and the workflow sets it from that name. It is empty for a site served from the root of a
// domain, which is what a CNAME gives.
const pages = process.env.DEPLOY_TARGET === 'pages';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Nothing behind a static build: every route is prerendered, so a route that cannot be
			// is a failed build rather than a page the host has no answer for.
			adapter: pages
				? adapterStatic({ pages: 'build', assets: 'build', precompress: false })
				: adapterCloudflare(),

			paths: { base: (process.env.BASE_PATH ?? '') as '' | `/${string}` }
		})
	]
});
