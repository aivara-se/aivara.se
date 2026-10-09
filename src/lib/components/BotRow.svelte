<script lang="ts">
	import BotCard from './BotCard.svelte';
	import type { Bot } from '$lib/data/lab';

	// The bots, laid out horizontally: one mini card each, sized so the four share a line at
	// 360px wide. Wrapping is the fallback for a phone narrower than that, not the layout.
	let { bots }: { bots: Bot[] } = $props();
</script>

<div class="row">
	{#each bots as bot (bot.id)}
		<BotCard {bot} />
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 10px 20px;
		margin-top: 16px;
	}
</style>
