<script lang="ts">
	import Avatar from './Avatar.svelte';
	import type { Agent } from '#lib/data/agents.js';
	import type { Dictionary } from '#lib/i18n/index.js';
	import { link } from '#lib/links.js';

	// An agent, small: the portrait at the size its own front page wears it, the name under it and
	// the role under that — that page, one row high. An agent that is running has a page of its
	// own, so the whole card is the link; one that has not arrived yet has no page and is not
	// made to look clickable.
	let { d, agent }: { d: Dictionary; agent: Agent } = $props();

	const target = $derived(agent.status === 'running' ? agent.path : null);
	const accent = $derived(agent.accent ?? 'var(--secondary)');
	const role = $derived(d.agent[agent.id].tagline);
</script>

<svelte:element
	this={target ? 'a' : 'article'}
	href={target ? link(target) : undefined}
	class="mini"
	style="--accent: {accent};"
>
	<Avatar {agent} size={92} />
	<span class="name">{agent.name}</span>
	<span class="role">{role}</span>
</svelte:element>

<style>
	.mini {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 7px;
		padding: 4px 2px 6px;
		/* a line under a portrait and a name reads as a mistake, not as a link cue */
		border-bottom: none;
	}

	.name {
		font-family: var(--font-heading);
		font-size: 15px;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--text-strong);
		white-space: nowrap;
	}

	.role {
		font-size: 12.5px;
		line-height: 1.4;
		color: var(--text);
		white-space: nowrap;
	}

	a.mini:hover .name {
		color: var(--primary-hover);
	}

	a.mini:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 4px;
		border-radius: var(--radius-sm);
	}
</style>
