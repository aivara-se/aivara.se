<script lang="ts">
	import type { Snippet } from 'svelte';
	import AgentShell from '$lib/components/AgentShell.svelte';
	import type { Bot } from '$lib/data/lab';
	import { d } from '$lib/i18n';

	// The bot's own chrome, on every page under /mimi: its accent, its wash, its header.
	let { data, children }: { data: { bot: Bot }; children: Snippet } = $props();
</script>

<AgentShell {d} bot={data.bot}>{@render children()}</AgentShell>
