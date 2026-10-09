<script lang="ts">
	import BotRow from './BotRow.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	let { d, bots, level = 1 }: { d: Dictionary; bots: Bot[]; level?: 1 | 2 } = $props();
</script>

<section id="bots" class="section" aria-labelledby="bots-heading">
	<svelte:element this={'h' + level} id="bots-heading" class="title">{d.bots.title}</svelte:element>
	<p class="lede">{d.bots.lede}</p>

	<BotRow {d} {bots} />
</section>
