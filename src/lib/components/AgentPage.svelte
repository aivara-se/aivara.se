<script lang="ts">
	import AgentHeader from './AgentHeader.svelte';
	import AgentIdentity from './AgentIdentity.svelte';
	import AgentLog from './AgentLog.svelte';
	import Seo from './Seo.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	// A bot's own site, as one page of aivara.se: its own header, its front page, its log.
	// The page carries the bot's accent — every link, both rings, and the 8% wash on the
	// ground — so the lab's chrome stays monochrome and the colour says which bot you are on.
	let { d, bot }: { d: Dictionary; bot: Bot } = $props();

	const vars = $derived(
		[
			`--accent: ${bot.accent}`,
			'--accent-bright: color-mix(in srgb, var(--accent) 65%, #ffffff)',
			'--accent-dim: color-mix(in srgb, var(--accent) 45%, #0c0d1d)'
		].join('; ')
	);
</script>

<Seo path={bot.path} title={`${bot.name} · ${d.title}`} description={d.bot[bot.id].intro} />

<div class="page" style={vars}>
	<div class="wash" aria-hidden="true"></div>
	<AgentHeader {d} {bot} />
	<main>
		<AgentIdentity {d} {bot} />
		<AgentLog {d} {bot} />
	</main>
</div>

<style>
	/* Every link on the page is the bot's accent, the way that bot's own site styled them:
	   an anchor with no rule of its own falls through to the browser's default blue, which
	   is far below AA on this ground. */
	.page :global(a) {
		color: var(--accent);
		text-decoration: none;
		border-bottom: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
	}

	.page :global(a:hover) {
		color: var(--accent-bright);
		border-bottom-color: var(--accent-bright);
	}

	.page :global(a:focus-visible) {
		outline: 2px solid var(--accent);
		outline-offset: 3px;
		border-radius: 2px;
	}

	/* The one link with no underline: a 1px line under a circle reads as a mistake rather
	   than as a link cue. Hover still brightens the colour. */
	.page :global(a.portrait) {
		border-bottom: none;
	}

	/* The bot's own wash over the shared ground: the same shape the lab paints on its own
	   pages, at 8% of the bot's accent. */
	.wash {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		background: radial-gradient(
			900px 620px at 18% 6%,
			color-mix(in srgb, var(--accent) 8%, transparent),
			transparent 62%
		);
	}
</style>
