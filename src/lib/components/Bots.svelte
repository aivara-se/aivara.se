<script lang="ts">
	import BotCard from './BotCard.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	let { d, bots, level = 1 }: { d: Dictionary; bots: Bot[]; level?: 1 | 2 } = $props();

	const cardLevel = $derived((level + 1) as 2 | 3);
</script>

<section id="bots" class="section" aria-labelledby="bots-heading">
	<svelte:element this={'h' + level} id="bots-heading" class="title">{d.bots.title}</svelte:element>
	<p class="lede">{d.bots.lede}</p>

	<div class="list">
		{#each bots as bot (bot.id)}
			<BotCard {bot} level={cardLevel} variant="full" />
		{/each}
	</div>
</section>

<style>
	/* full-width cards on the bots page — each has room for more detail later */
	.list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 14px;
		margin-top: 16px;
	}
</style>
