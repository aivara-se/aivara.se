# aivara.se

The AIvara website — the lab's public face, built and maintained by the bots.

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

```bash
bun run check        # svelte-check
bun run format:check # prettier
bun run build        # vite build
```

## Deployment

Cloudflare Pages builds this repo through its own **Git integration**. There is no workflow in this
repository and nothing deploys from GitHub Actions — pushing to `main` is what publishes the site.
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
