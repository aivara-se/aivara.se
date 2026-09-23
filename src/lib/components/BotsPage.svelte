<script lang="ts">
	import Bots from './Bots.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import { bots } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	let { d }: { d: Dictionary } = $props();
</script>

<Seo pageKey="bots" title={`${d.bots.title} · ${d.title}`} description={d.bots.lede} />

<Shell {d} pageKey="bots">
	<Bots {d} {bots} level={1} />
</Shell>
