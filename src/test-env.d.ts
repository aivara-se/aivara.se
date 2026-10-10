// Types for what the tests and the build's config read from the environment. The repository
// declares its own node surface by hand (see `bun-test.d.ts`) rather than pulling in `@types/node`
// and `bun-types`, and these are the only node APIs it uses: reading the tree and the stylesheet,
// and the two variables the Pages workflow sets for `vite.config.ts`.
declare module 'node:fs' {
	export function existsSync(path: string): boolean;
	export function readdirSync(path: string): string[];
	export function readFileSync(path: string, encoding: 'utf8'): string;
}

declare module 'node:path' {
	export function join(...parts: string[]): string;
}

declare const process: {
	cwd(): string;
	env: Record<string, string | undefined>;
};
