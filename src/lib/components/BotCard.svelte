<script lang="ts">
	import Avatar from './Avatar.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Locale } from '$lib/i18n';

	let {
		bot,
		locale,
		level = 3,
		variant = 'compact'
	}: { bot: Bot; locale: Locale; level?: 2 | 3; variant?: 'compact' | 'full' } = $props();

	// A bot that is running has somewhere to link to, so the whole card becomes the link.
	// One that has not arrived yet does not, and is not made to look clickable.
	const target = $derived(bot.urls[0]);
	const accent = $derived(bot.accent ?? 'var(--secondary)');
</script>

<svelte:element
	this={target ? 'a' : 'article'}
	href={target}
	class="botcard {variant}"
	class:running={bot.status === 'running'}
	style="--accent: {accent};"
>
	<Avatar {bot} size={variant === 'full' ? 72 : 40} />
	<div class="who">
		<svelte:element this={'h' + level} class="name">{bot.name}</svelte:element>
		<p class="role">{bot.role[locale]}</p>
	</div>
</svelte:element>

<style>
	.botcard {
		display: flex;
		align-items: flex-start;
		gap: 14px;
		padding: 20px;
		border: 1px solid var(--ground-high);
		border-radius: var(--radius-md);
		background: var(--ground-high);
		transition: border-color 0.15s;
	}

	.who {
		display: flex;
		flex-direction: column;
		gap: 4px;
		min-width: 0;
	}

	.name {
		margin: 0;
		font-size: 15px;
		font-weight: 700;
	}

	.role {
		margin: 0;
		font-size: 12.5px;
		color: var(--tertiary);
	}

	.botcard.running .name {
		color: var(--accent);
	}

	.botcard:not(.running) .name {
		color: var(--secondary);
	}

	/* the full-width card: room for more detail later, and a larger avatar */
	.botcard.full {
		align-items: center;
		gap: 24px;
		padding: 28px 30px;
		min-height: 132px;
	}

	.botcard.full .name {
		font-size: 20px;
	}

	.botcard.full .role {
		font-size: 14.5px;
		color: var(--secondary);
		max-width: 64ch;
	}

	a.botcard:hover {
		border-color: var(--ring-dark);
	}

	a.botcard:hover .name {
		color: var(--primary-hover);
	}
</style>
