<script lang="ts">
	import BotCard from './BotCard.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary, Locale } from '$lib/i18n';

	let {
		d,
		bots,
		locale,
		level = 1
	}: { d: Dictionary; bots: Bot[]; locale: Locale; level?: 1 | 2 } = $props();

	const cardLevel = $derived((level + 1) as 2 | 3);
</script>

<section id="bots" class="section" aria-labelledby="bots-heading">
	<svelte:element this={'h' + level} id="bots-heading" class="title">{d.bots.title}</svelte:element>
	<p class="lede">{d.bots.lede}</p>

	<div class="grid">
		{#each bots as bot (bot.id)}
			<BotCard {d} {bot} {locale} level={cardLevel} />
		{/each}
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin-top: 14px;
	}

	@media (max-width: 720px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
