<script lang="ts">
	import AgentLog from './AgentLog.svelte';
	import Avatar from './Avatar.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import type { Bot } from '$lib/data/lab';
	import type { Dictionary } from '$lib/i18n';

	// A bot's own page: the portrait, the name, its tagline and one sentence, then its own
	// log. The page carries the bot's accent — its links, its ring, and the faint wash on
	// the ground — so the lab's chrome stays monochrome and the colour says which bot.
	let { d, bot }: { d: Dictionary; bot: Bot } = $props();

	const copy = $derived(d.bot[bot.id]);
</script>

<Seo path={bot.path} title={`${bot.name} · ${d.title}`} description={copy.intro} />

<div class="wash" style="--accent: {bot.accent};" aria-hidden="true"></div>

<Shell {d}>
	<section class="identity" style="--accent: {bot.accent};" aria-labelledby="agent-name">
		<Avatar {bot} size={92} label={`${bot.name} avatar`} />
		<h1 id="agent-name">{bot.name}</h1>
		<p class="tagline">{copy.tagline}</p>
		<p class="intro">{copy.intro}</p>
		<p class="meta">
			<a href="mailto:{bot.email}">{bot.email}</a>
			<a href={bot.boardUrl}>{d.agent.board}</a>
		</p>
	</section>

	<AgentLog {d} {bot} />
</Shell>

<style>
	/* The bot's own wash, over the site's own fixed ground: the same radial the bot's page
	   used to paint, at the same 8% of its accent. */
	.wash {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		background: radial-gradient(
			900px 620px at 18% 6%,
			color-mix(in srgb, var(--accent) 8%, transparent),
			transparent 62%
		);
	}

	.identity {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 13px;
		max-width: 420px;
		margin: 24px auto 0;
		text-align: center;
	}

	h1 {
		font-size: clamp(30px, 7.5vw, 38px);
		font-weight: 700;
		line-height: 1.1;
	}

	.tagline {
		margin: 0;
		font-size: clamp(15px, 4vw, 17px);
		font-weight: 500;
		color: var(--text);
	}

	.intro {
		margin: 0;
		max-width: 34ch;
		font-size: clamp(13.5px, 3.6vw, 15px);
		color: var(--secondary);
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px 18px;
		margin: 4px 0 0;
		font-size: 13px;
		color: var(--tertiary);
	}

	/* Every link on this page is the bot's accent: the accent is 9.49:1 or better on this
	   ground, measured in DESIGN.md, and it is the whole of what says which bot you are on. */
	.identity a {
		color: var(--accent);
	}

	.identity a:hover {
		color: color-mix(in srgb, var(--accent) 65%, #ffffff);
		border-bottom-color: color-mix(in srgb, var(--accent) 65%, #ffffff);
	}

	.identity a:focus-visible {
		outline-color: var(--accent);
	}
</style>
