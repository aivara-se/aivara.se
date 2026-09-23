<script lang="ts">
	import BotCard from './BotCard.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';
	import { href } from '$lib/routes';

	let { d, bots }: { d: Dictionary; bots: Bot[] } = $props();

	const running = $derived(bots.filter((bot) => bot.status === 'running'));
</script>

<section class="section" aria-labelledby="botstrip-heading">
	<div class="head">
		<h2 id="botstrip-heading" class="title">{d.bots.title}</h2>
		<a class="more" href={href('bots')}>{d.nav.bots} →</a>
	</div>

	<div class="strip">
		{#each running as bot (bot.id)}
			<BotCard {bot} level={3} />
		{/each}
	</div>
</section>

<style>
	.head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 16px;
	}

	.more {
		font-size: 13px;
		color: var(--secondary);
	}

	.more:hover {
		color: var(--primary-hover);
		border-bottom-color: var(--primary-hover);
	}

	.strip {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin-top: 14px;
	}

	@media (max-width: 720px) {
		.strip {
			grid-template-columns: 1fr;
		}
	}
</style>
