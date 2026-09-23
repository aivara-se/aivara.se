<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';
	import TopBar from './TopBar.svelte';
	import type { Dictionary } from '$lib/i18n';
	import type { PageKey } from '$lib/routes';

	let { d, pageKey, children }: { d: Dictionary; pageKey: PageKey; children: Snippet } = $props();
</script>

<div class="shell">
	<TopBar {d} {pageKey} />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>
