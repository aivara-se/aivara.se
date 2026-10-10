<script lang="ts">
	import AgentRow from './AgentRow.svelte';
	import type { Agent } from '#lib/data/agents.js';
	import type { Dictionary } from '#lib/i18n/index.js';

	// The row carries no heading of its own: the four portraits and their names say what it is,
	// and the section keeps the word for anything that cannot see them.
	let { d, agents }: { d: Dictionary; agents: Agent[] } = $props();
</script>

<section class="section" aria-label={d.agents.title}>
	<AgentRow {d} {agents} />
</section>
