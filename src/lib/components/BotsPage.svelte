<script lang="ts">
	import Bots from './Bots.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import { bots } from '$lib/data/lab';
	import type { Dictionary, Locale } from '$lib/i18n';

	let { d, locale }: { d: Dictionary; locale: Locale } = $props();
</script>

<Seo {locale} pageKey="bots" title={`${d.bots.title} · ${d.title}`} description={d.bots.lede} />

<Shell {d} {locale} pageKey="bots">
	<Bots {d} {bots} {locale} level={1} />
</Shell>
