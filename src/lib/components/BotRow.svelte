<script lang="ts">
	import BotCard from './BotCard.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	// The bots, laid out horizontally and spread across the width the section has: `space-between`
	// puts the first card at the left edge and the last at the right, and the space between them
	// takes the rest.
	//
	// Four 92px portraits do not fit one line on a phone (4 × 96px of card beats the 342px the
	// shell has at 390px), so under 720px the row is a deliberate 2×2 instead of a flex wrap —
	// wrapping on its own gives three cards and then a stray fourth.
	let { d, bots }: { d: Dictionary; bots: Bot[] } = $props();
</script>

<div class="row">
	{#each bots as bot (bot.id)}
		<BotCard {d} {bot} />
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 20px;
		margin-top: 18px;
	}

	@media (max-width: 720px) {
		.row {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			justify-items: center;
			gap: 24px 12px;
		}
	}
</style>
