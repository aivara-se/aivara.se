<script lang="ts">
	import type { Bot } from '$lib/data/lab';

	let { bot, size = 40 }: { bot: Bot; size?: number } = $props();

	const arriving = $derived(bot.status === 'arriving');
	const accent = $derived(bot.accent ?? 'var(--ring-dark)');
</script>

<span class="ring" class:arriving style="--size: {size}px; --accent: {accent};" aria-hidden="true">
	{#if bot.avatar}
		<img src={bot.avatar} alt="" width={size - 6} height={size - 6} />
	{:else}
		<span class="initial">{bot.name.slice(0, 1)}</span>
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
