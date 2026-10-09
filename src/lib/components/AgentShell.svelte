<script lang="ts">
	import type { Snippet } from 'svelte';
	import AgentHeader from './AgentHeader.svelte';
	import type { Agent } from '$lib/data/agents';
	import type { Dictionary } from '$lib/i18n';

	// The chrome of an agent's own site, as one page of aivara.se: its accent, the wash that
	// accent paints on the shared ground, and its header. Everything the agent's pages have in
	// common lives here, so a second page under /<agent> costs nothing to add.
	let { d, agent, children }: { d: Dictionary; agent: Agent; children: Snippet } = $props();

	const vars = $derived(
		[
			`--accent: ${agent.accent}`,
			'--accent-bright: color-mix(in srgb, var(--accent) 65%, #ffffff)',
			'--accent-dim: color-mix(in srgb, var(--accent) 45%, #0c0d1d)'
		].join('; ')
	);
</script>

<div class="page" style={vars}>
	<div class="wash" aria-hidden="true"></div>
	<AgentHeader {d} {agent} />
	<main>
		{@render children()}
	</main>
</div>

<style>
	/* Every link on the page is the agent's accent, the way that agent's own site styled them:
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

	/* The agent's own wash over the shared ground: the same shape the lab paints on its own
	   pages, at 8% of the agent's accent. */
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
