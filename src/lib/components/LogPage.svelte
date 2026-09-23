<script lang="ts">
	import Log from './Log.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import type { Dictionary } from '$lib/i18n';

	let { d }: { d: Dictionary } = $props();
</script>

<Seo pageKey="log" title={`${d.log.title} · ${d.title}`} description={d.metaDescription} />

<Shell {d} pageKey="log">
	<Log {d} level={1} />
</Shell>
