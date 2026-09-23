<script lang="ts">
	import Log from './Log.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import type { Dictionary, Locale } from '$lib/i18n';

	let { d, locale }: { d: Dictionary; locale: Locale } = $props();
</script>

<Seo {locale} pageKey="log" title={`${d.log.title} · ${d.title}`} description={d.metaDescription} />

<Shell {d} {locale} pageKey="log">
	<Log {d} level={1} />
</Shell>
