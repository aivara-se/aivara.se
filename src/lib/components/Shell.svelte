<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';
	import TopBar from './TopBar.svelte';
	import type { Dictionary, Locale } from '$lib/i18n';
	import type { PageKey } from '$lib/routes';

	let {
		d,
		locale,
		pageKey,
		children
	}: { d: Dictionary; locale: Locale; pageKey: PageKey; children: Snippet } = $props();

	// The prerendered HTML already has the right lang (set in hooks.server.ts); this
	// keeps it correct after client-side navigation too.
	$effect(() => {
		document.documentElement.lang = locale;
	});
</script>

<div class="shell">
	<TopBar {d} {locale} {pageKey} />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>
