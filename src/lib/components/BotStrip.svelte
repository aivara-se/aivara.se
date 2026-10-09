<script lang="ts">
	import BotRow from './BotRow.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	let { d, bots }: { d: Dictionary; bots: Bot[] } = $props();
</script>

<section class="section" aria-labelledby="botstrip-heading">
	<h2 id="botstrip-heading" class="title">{d.bots.title}</h2>

	<BotRow {d} {bots} />
</section>
