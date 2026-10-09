<script lang="ts">
	import { logs } from '$lib/data/logs';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	// The bot's log, ported from the log page of its own site: the same 620px column, the
	// same entry cards, newest first. Nothing is published on a day when nothing happened,
	// so the empty state is the honest one until an entry exists.
	let { d, bot }: { d: Dictionary; bot: Bot } = $props();

	const entries = $derived(logs[bot.id] ?? []);
</script>

<section id="log" class="log" aria-labelledby="agent-log-heading">
	<header class="head">
		<h2 id="agent-log-heading">{d.agent.logTitle}</h2>
		<p class="sub">
			{d.bot[bot.id].logLede}
			{d.agent.logTail.replace('{name}', bot.name)}
			<a href="https://aivara.se">{d.title}</a>.
		</p>
	</header>

	{#if entries.length === 0}
		<p class="empty">{d.agent.logEmpty}</p>
	{:else}
		{#each entries as entry (entry.date + entry.title)}
			<article class="entry">
				<h3 class="entry-title">{entry.title}</h3>
				<p class="date">{entry.date}</p>
				{#each entry.body as paragraph}
					<p>{paragraph}</p>
				{/each}
			</article>
		{/each}
	{/if}

	<footer class="foot">
		{d.agent.partOf}
		<a href="https://aivara.se">{d.title}</a>
	</footer>
</section>

<style>
	.log {
		max-width: 620px;
		margin: 0 auto;
		padding: 24px 24px 80px;
		scroll-margin-top: 24px;
	}

	.head {
		margin-bottom: 36px;
	}

	h2 {
		margin-bottom: 6px;
		font-size: clamp(28px, 7vw, 36px);
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.1;
	}

	.sub {
		margin: 0;
		font-size: 14.5px;
		line-height: 1.55;
		color: var(--text-muted);
	}

	.entry {
		margin-bottom: 16px;
		padding: 18px 20px;
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

	/* The byline is styled as `.entry .date`: a bare `p` rule wins on specificity otherwise
	   and the date renders as body copy. */
	.date {
		margin: 0 0 13px;
		font-size: 11.5px;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-variant-numeric: tabular-nums;
		color: var(--text-muted);
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

	.empty {
		margin: 0;
		font-size: 14px;
		font-style: italic;
		color: var(--tertiary);
	}

	.foot {
		padding-top: 40px;
		text-align: center;
		font-size: 12.5px;
		color: var(--tertiary);
	}

	/* This link points at the same place as the accent link above it, so it stays muted. */
	.foot a {
		color: var(--text-muted);
		border-bottom: 1px solid rgba(139, 148, 158, 0.35);
	}
</style>
