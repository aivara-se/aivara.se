<script lang="ts">
	import { logs } from '$lib/data/logs';
	import type { Agent } from '$lib/data/agents';
	import type { Dictionary } from '$lib/i18n';

	// The agent's log, ported from the log page of its own site: the same 620px column, the
	// same entry cards, newest first, and a footer that sits at the bottom of a short page.
	// Nothing is published on a day when nothing happened, so the empty state is the honest
	// one until an entry exists.
	let { d, agent }: { d: Dictionary; agent: Agent } = $props();

	const entries = $derived(logs[agent.id] ?? []);
</script>

<div class="log">
	<header class="head">
		<h1 id="agent-log-heading">{d.agentPage.logTitle}</h1>
		<p class="sub">
			{d.agent[agent.id].logLede}
			{d.agentPage.logTail.replace('{name}', agent.name)}
			<a href="https://aivara.se">{d.title}</a>.
		</p>
	</header>

	<section aria-labelledby="agent-log-heading" class="entries">
		{#if entries.length === 0}
			<p class="empty">{d.agentPage.logEmpty}</p>
		{:else}
			{#each entries as entry (entry.date + entry.title)}
				<article class="entry">
					<h2 class="entry-title">{entry.title}</h2>
					<p class="date">{entry.date}</p>
					{#each entry.body as paragraph}
						<p>{paragraph}</p>
					{/each}
				</article>
			{/each}
		{/if}
	</section>

	<footer class="foot">
		{d.agentPage.partOf}
		<a href="https://aivara.se">{d.title}</a>
	</footer>
</div>

<style>
	.log {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
		max-width: 620px;
		margin: 0 auto;
		/* 72px clears the header, which is out of the flow and sits at 20px */
		padding: 72px 24px 80px;
		/* The lab's body sets 1.55; the agent's log page had no line-height of its own, and the
		   elements that need one set it themselves. */
		line-height: normal;
	}

	.head {
		margin-bottom: 36px;
	}

	h1 {
		margin-bottom: 6px;
		font-size: clamp(28px, 7vw, 36px);
		font-weight: 700;
		letter-spacing: -0.02em;
		/* No line-height of its own, as on the agent's own log page: `normal` is what makes the
		   heading 36px tall at a phone width rather than 31px. */
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
		color: var(--text-strong);
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

	/* margin-top: auto pushes it to the bottom of the viewport on a short page */
	.foot {
		margin-top: auto;
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
