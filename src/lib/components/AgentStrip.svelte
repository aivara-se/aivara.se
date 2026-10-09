<script lang="ts">
	import AgentRow from './AgentRow.svelte';
	import type { Agent } from '$lib/data/agents';
	import type { Dictionary } from '$lib/i18n';

	let { d, agents }: { d: Dictionary; agents: Agent[] } = $props();
</script>

<section class="section" aria-labelledby="agentstrip-heading">
	<h2 id="agentstrip-heading" class="title">{d.agents.title}</h2>

	<AgentRow {d} {agents} />
</section>
