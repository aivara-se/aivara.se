# aivara.se

The Aivara website. Rebuilt from scratch on a current SvelteKit — a placeholder for now.

## Stack

- SvelteKit 2 / Svelte 5 / Vite 8, TypeScript
- Bun as package manager and runner
- Deployed to **Cloudflare Pages** (SSR, not a static export)

## Developing

```bash
bun install
bun run dev
```

## Checks

`bun run verify` is this repository's gate: the one command humans, agents and CI all run. It is
declared in `AGENTS.md` under "Verify before pushing", and CI runs that same command rather than a
hand-copied list of its steps.

```bash
bun run verify # the gate: svelte-check + prettier + bun test + vite build
```

Its parts, for when one of them is what you need:

```bash
bun run check        # svelte-check
bun run format:check # prettier
bun test             # the tests (src/lib/data/*.test.ts)
bun run build        # vite build
```

## Deployment

Cloudflare Pages builds this repo through its own **Git integration**. Nothing deploys from GitHub
Actions — pushing to `main` is what publishes the site. The repository's only workflow,
`.github/workflows/checks.yml`, runs the gate above and deploys nothing.
A failed build does not take the site down: Pages keeps serving the last successful deployment.

The build settings live in the Cloudflare dashboard, and per
[SvelteKit's Cloudflare adapter docs](https://svelte.dev/docs/kit/adapter-cloudflare) they need to be:

**Settings → Build**

- Framework preset: `SvelteKit`
- Build command: `bun install --frozen-lockfile && bun run build`
- Build output directory: `.svelte-kit/cloudflare`

The install step belongs _inside_ the build command: Pages' current build system runs the build
command as the only step, so without it `node_modules` never exists and the build dies with
`vite: command not found` (exit 127).

**Settings → Runtime**

- Compatibility flag: `nodejs_als` — SvelteKit's server code uses `AsyncLocalStorage`, which needs
  this flag or parts of SSR fail at runtime.

### Testing the production build locally

```bash
bun run build
bunx wrangler pages dev .svelte-kit/cloudflare
```

This runs the same worker Cloudflare serves, which is the closest local equivalent to production.

### Environment variables

Runtime secrets and bindings (for example anything a contact form needs to send mail) are set in the
Cloudflare dashboard under the Pages project's settings. They are not in this repository, and
`.dev.vars` is gitignored for local overrides.

## Notes

- The `static/` directory still holds the existing brand assets (favicons, app icons, `logo.svg`,
  `manifest.json`); only the app code was replaced.
- The previous site remains in git history.
