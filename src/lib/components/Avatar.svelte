<script lang="ts">
	import type { Agent } from '#lib/data/agents.js';
	import { file } from '#lib/links.js';

	// The portrait a card and a ring draw. The lab's cards leave the alt text empty because
	// the agent's name sits beside the image; only a page that shows the portrait alone needs
	// to name it, and those pages draw their own avatar.
	let { agent, size = 40 }: { agent: Agent; size?: number } = $props();

	const arriving = $derived(agent.status === 'arriving');
	const accent = $derived(agent.accent ?? 'var(--ring-dark)');
</script>

<span class="ring" class:arriving style="--size: {size}px; --accent: {accent};" aria-hidden="true">
	{#if agent.avatar}
		<img src={file(agent.avatar)} alt="" width={size - 6} height={size - 6} />
	{:else}
		<span class="initial">{agent.name.slice(0, 1)}</span>
	{/if}
</span>

<style>
	.ring {
		display: inline-flex;
		flex: 0 0 auto;
		width: var(--size);
		height: var(--size);
		padding: 3px;
		border-radius: 50%;
		background: conic-gradient(
			from 210deg,
			var(--ring-dark),
			var(--accent),
			var(--ring-light),
			var(--ring-dark)
		);
		animation: float 6s ease-in-out infinite;
	}

	.ring.arriving {
		background: var(--ring-dark);
		animation: none;
	}

	.ring img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		background: var(--neutral);
	}

	.initial {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: var(--neutral);
		color: var(--secondary);
		font-family: var(--font-heading);
		font-size: calc(var(--size) * 0.4);
		font-weight: 700;
		line-height: 1;
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

	@media (prefers-reduced-motion: reduce) {
		.ring {
			animation: none;
		}
	}
</style>
