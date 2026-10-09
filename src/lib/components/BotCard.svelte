<script lang="ts">
	import Avatar from './Avatar.svelte';
	import type { Bot } from '$lib/data/lab';

	// A bot, small: the portrait wearing its accent ring, and the name under it — the front
	// page of that bot's own site, one row high. The portrait is 56px so that four of them
	// and their gaps fit one line at 360px wide, the narrowest phone the site supports. A bot that is running has a page of its own,
	// so the whole card is the link; one that has not arrived yet has no page and is not made
	// to look clickable.
	let { bot }: { bot: Bot } = $props();

	const target = $derived(bot.status === 'running' ? bot.path : null);
	const accent = $derived(bot.accent ?? 'var(--secondary)');
</script>

<svelte:element
	this={target ? 'a' : 'article'}
	href={target}
	class="mini"
	style="--accent: {accent};"
>
	<Avatar {bot} size={56} />
	<span class="name">{bot.name}</span>
</svelte:element>

<style>
	.mini {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 6px 2px;
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

	a.mini:hover .name {
		color: var(--primary-hover);
	}

	a.mini:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 4px;
		border-radius: var(--radius-sm);
	}
</style>
