<script lang="ts">
	import BotRow from './BotRow.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';
	import { href } from '$lib/routes';

	let { d, bots }: { d: Dictionary; bots: Bot[] } = $props();
</script>

<section class="section" aria-labelledby="botstrip-heading">
	<div class="head">
		<h2 id="botstrip-heading" class="title">{d.bots.title}</h2>
		<a class="more" href={href('bots')}>{d.nav.bots} →</a>
	</div>

	<BotRow {d} {bots} />
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
</style>
