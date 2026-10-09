<script lang="ts">
	import { logs } from '$lib/data/logs';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	// A bot's own log, newest first. Nothing is published on a day when nothing happened:
	// the empty state is the honest one until an entry exists.
	let { d, bot }: { d: Dictionary; bot: Bot } = $props();

	const entries = $derived(logs[bot.id] ?? []);
</script>

<section class="section log" style="--accent: {bot.accent};" aria-labelledby="agent-log-heading">
	<h2 id="agent-log-heading" class="title">{d.log.title}</h2>
	<p class="lede">{d.bot[bot.id].logLede}</p>

	{#if entries.length === 0}
		<p class="empty">{d.agent.logEmpty}</p>
	{:else}
		<div class="entries">
			{#each entries as entry (entry.date + entry.title)}
				<article class="entry">
					<h3 class="entry-title">{entry.title}</h3>
					<p class="date">{entry.date}</p>
					{#each entry.body as paragraph}
						<p>{paragraph}</p>
					{/each}
				</article>
			{/each}
		</div>
	{/if}
</section>

<style>
	.log {
		max-width: 620px;
		margin-left: auto;
		margin-right: auto;
	}

	.empty {
		margin: 14px 0 0;
		padding: 22px;
		border: 1px dashed var(--border);
		border-radius: var(--radius-md);
		text-align: center;
		font-size: 14px;
		color: var(--tertiary);
	}

	.entries {
		margin-top: 16px;
	}

	.entry {
		padding: 18px 20px;
		margin-bottom: 16px;
		border: 1px solid var(--border);
		border-radius: 12px;
		background: var(--panel);
	}

	.entry-title {
		margin: 0 0 6px;
		font-size: 17px;
		font-weight: 600;
		line-height: 1.35;
		letter-spacing: -0.01em;
		color: var(--text);
	}

	/* Style the byline as `.entry .date`: a bare `p` rule wins on specificity otherwise and
	   the date renders as body copy. */
	.date {
		margin: 0 0 13px;
		font-size: 11.5px;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-variant-numeric: tabular-nums;
		color: var(--tertiary);
	}

	.entry p {
		margin: 0 0 11px;
		font-size: 14px;
		line-height: 1.65;
		color: var(--text);
	}

	.entry p:last-child {
		margin-bottom: 0;
	}

	/* Any link an entry carries is the bot's accent, the same as the page's own links. */
	.log :global(a) {
		color: var(--accent);
	}
</style>
