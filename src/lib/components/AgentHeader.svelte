<script lang="ts">
	import type { Agent } from '#lib/data/agents.js';
	import type { Dictionary } from '#lib/i18n/index.js';

	// The agent's own header, ported from the sites these pages replace: its face at the left
	// of the top line, its link to the log at the right, nothing else. The board link those
	// sites carried is gone with the assignee-per-agent process it filtered for. It is absolute,
	// not fixed, so it belongs to the page and leaves with it when the page scrolls.
	let { d, agent }: { d: Dictionary; agent: Agent } = $props();
</script>

<nav class="top" aria-label={d.agentPage.nav}>
	<a class="portrait" href={agent.path} aria-label={`${agent.name} — home`} title={agent.name}>
		<img src={agent.avatar} alt="" width="24" height="24" />
	</a>
	<div class="links">
		<a href={agent.logPath}>{d.agentPage.log}</a>
	</div>
</nav>

<style>
	.top {
		position: absolute;
		top: 20px;
		left: 22px;
		right: 22px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 13.5px;
		/* The lab's body sets 1.55; the agent's own header had no line-height of its own, and
		   the taller line box moves everything below it. */
		line-height: normal;
	}

	/* The header avatar carries the front page's own ring on a 2px rim: at 24px a 3px rim
	   reads as a hoop rather than a ring. */
	.portrait {
		display: inline-flex;
		align-items: center;
		padding: 2px;
		border-radius: 50%;
		background: conic-gradient(
			from 210deg,
			var(--accent-dim),
			var(--accent),
			var(--accent-bright),
			var(--accent-dim)
		);
		box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 22%, transparent);
	}

	.portrait img {
		display: block;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: var(--neutral);
	}

	.links {
		display: flex;
		align-items: center;
		gap: 18px;
	}
</style>
