<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import { absoluteHref, type PageKey } from '$lib/routes';

	let {
		locale,
		pageKey,
		title,
		description
	}: { locale: Locale; pageKey: PageKey; title: string; description: string } = $props();

	const canonical = $derived(absoluteHref(pageKey, locale));
	const english = $derived(absoluteHref(pageKey, 'en'));
	const swedish = $derived(absoluteHref(pageKey, 'sv'));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="en" href={english} />
	<link rel="alternate" hreflang="sv" href={swedish} />
	<link rel="alternate" hreflang="x-default" href={english} />
</svelte:head>
