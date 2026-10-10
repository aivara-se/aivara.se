<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';
	import TopBar from './TopBar.svelte';
	import type { Dictionary } from '#lib/i18n/index.js';

	let { d, children }: { d: Dictionary; children: Snippet } = $props();
</script>

<div class="wash" aria-hidden="true"></div>

<div class="shell">
	<TopBar {d} />
	<main>
		{@render children()}
	</main>
	<Footer {d} />
</div>

<style>
	/* The lab's own wash over the shared ground: the same shape the agent pages paint with
	   their agent's accent, at the lab's white. The ground itself is in app.css, because it is
	   the one thing every page shares. */
	.wash {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		background: radial-gradient(
			900px 620px at 18% 6%,
			color-mix(in srgb, var(--primary) 8%, transparent),
			transparent 62%
		);
	}
</style>
