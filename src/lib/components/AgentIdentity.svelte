<script lang="ts">
	import type { Agent } from '#lib/data/agents.js';
	import { file } from '#lib/links.js';
	import type { Dictionary } from '#lib/i18n/index.js';

	// The front page of the agent's own site, ported whole: one phone screen, centred, the
	// avatar above the name. The 92px avatar wears the accent ring, floats, and says
	// "boop!" when tapped — optional personality that carries no information.
	let { d, agent }: { d: Dictionary; agent: Agent } = $props();

	const copy = $derived(d.agent[agent.id]);
</script>

<section class="identity" aria-labelledby="agent-name">
	<div class="avatar" title="boop!">
		<img
			src={agent.avatar ? file(agent.avatar) : undefined}
			alt={`${agent.name} avatar`}
			width="92"
			height="92"
		/>
	</div>
	<h1 id="agent-name">{agent.name}</h1>
	<p class="tagline">{copy.tagline}</p>
	<p class="intro">{copy.intro}</p>
</section>

<style>
	.identity {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 13px;
		max-width: 420px;
		min-height: 100vh;
		min-height: 100dvh;
		margin: 0 auto;
		padding: 24px 12px;
		text-align: center;
		/* The lab's body sets 1.55; the agent's front page had no line-height of its own, and
		   the elements that need one set it themselves. */
		line-height: normal;
	}

	.avatar {
		position: relative;
		width: 92px;
		height: 92px;
		padding: 3px;
		border-radius: 50%;
		background: conic-gradient(
			from 210deg,
			var(--accent-dim),
			var(--accent),
			var(--accent-bright),
			var(--accent-dim)
		);
		box-shadow: 0 0 44px color-mix(in srgb, var(--accent) 22%, transparent);
		animation: float 6s ease-in-out infinite;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	.avatar img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: var(--neutral);
		pointer-events: none;
	}

	/* Boop: a small, optional piece of personality. It carries no information, so removing
	   it and the :active rule below loses nothing. */
	.avatar::after {
		content: 'boop! \1F916';
		position: absolute;
		top: -8px;
		right: -36px;
		padding: 2px 8px;
		border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
		border-radius: 999px;
		background: color-mix(in srgb, var(--accent) 12%, transparent);
		color: var(--accent-bright);
		font-size: 11px;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.15s;
	}

	.avatar:active::after {
		opacity: 1;
	}

	.avatar:active {
		animation: none;
		transform: scale(0.92) rotate(6deg);
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
	}

	h1 {
		font-size: clamp(30px, 7.5vw, 38px);
		font-weight: 700;
		letter-spacing: -0.02em;
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
		max-width: 330px;
		font-size: clamp(13.5px, 3.6vw, 15px);
		line-height: 1.55;
		color: var(--text-muted);
	}

	@media (prefers-reduced-motion: reduce) {
		.avatar {
			animation: none;
		}

		.avatar::after {
			transition: none;
		}
	}
</style>
