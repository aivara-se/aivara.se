<script lang="ts">
	import { absoluteHref, type PageKey } from '$lib/routes';

	let { pageKey, title, description }: { pageKey: PageKey; title: string; description: string } =
		$props();

	const canonical = $derived(absoluteHref(pageKey));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
</svelte:head>
