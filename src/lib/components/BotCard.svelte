<script lang="ts">
	import Avatar from './Avatar.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary, Locale } from '$lib/i18n';

	let {
		d,
		bot,
		locale,
		level = 3
	}: { d: Dictionary; bot: Bot; locale: Locale; level?: 2 | 3 } = $props();

	const statusLabel = $derived(
		bot.status === 'running' ? d.bots.status.running : d.bots.status.arriving
	);
	const accent = $derived(bot.accent ?? 'var(--secondary)');
</script>

<article class="botcard" class:running={bot.status === 'running'} style="--accent: {accent};">
	<Avatar {bot} size={40} />
	<div class="who">
		<svelte:element this={'h' + level} class="name">{bot.name}</svelte:element>
		<p class="role">{bot.role[locale]}</p>
		<div class="foot">
			<span class="pill {bot.status}">{statusLabel}</span>
			{#each bot.urls as url (url)}
				<a href={url}>{url.replace(/^https?:\/\//, '')}</a>
			{/each}
		</div>
	</div>
</article>

<style>
	.botcard {
		display: flex;
		align-items: flex-start;
		gap: 14px;
		padding: 20px;
		border: 1px solid var(--ground-high);
		border-radius: var(--radius-md);
		background: var(--ground-high);
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

	.botcard.running .name {
		color: var(--accent);
	}

	.botcard:not(.running) .name {
		color: var(--secondary);
	}

	.role {
		margin: 0;
		font-size: 12.5px;
		color: var(--tertiary);
	}

	.foot {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 6px;
		font-size: 12.5px;
		color: var(--tertiary);
	}

	.foot a {
		color: var(--tertiary);
	}

	.foot a:hover {
		color: var(--primary-hover);
		border-bottom-color: var(--primary-hover);
	}
</style>
