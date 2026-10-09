<script lang="ts">
	import AgentCard from './AgentCard.svelte';
	import type { Agent } from '$lib/data/agents';
	import type { Dictionary } from '$lib/i18n';

	// The agents, laid out horizontally and spread across the width the section has: `space-around`
	// gives every card the same room on both sides, so no card sits flush against an edge.
	//
	// Four 92px portraits do not fit one line on a phone (4 × 96px of card beats the 342px the
	// shell has at 390px), so under 720px the row is a deliberate 2×2 instead of a flex wrap —
	// wrapping on its own gives three cards and then a stray fourth.
	let { d, agents }: { d: Dictionary; agents: Agent[] } = $props();
</script>

<div class="row">
	{#each agents as agent (agent.id)}
		<AgentCard {d} {agent} />
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-around;
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
