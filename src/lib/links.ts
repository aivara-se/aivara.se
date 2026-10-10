import { asset, resolve } from '$app/paths';
import type { AssetPath, RouteId } from '$app/types';

// A path the app writes down is not yet the address a browser follows. The same build is served
// from two places — Cloudflare Pages answers for aivara.se, GitHub Pages answers for the project
// site under the repository's name — so the base it is served from is added when a link or a file
// is drawn, not when it is written down. These two are the whole of that, and no component
// prefixes a path of its own.
//
// `resolve` and `asset` are typed against the routes and the files this app actually has, which is
// what the casts trade for: a page or a file that is not there fails here rather than 404ing on
// the host. `file` takes a path relative to `static/`, the way `asset` reads it.
export function link(path: string): string {
	return resolve(path as RouteId);
}

export function file(path: string): string {
	return asset(path as AssetPath);
}
