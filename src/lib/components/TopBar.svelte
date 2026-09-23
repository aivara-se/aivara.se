<script lang="ts">
	import type { Dictionary } from '$lib/i18n';
	import { href, navKeys, type PageKey } from '$lib/routes';

	let { d, pageKey }: { d: Dictionary; pageKey: PageKey } = $props();

	const home = $derived(href('home'));
</script>

<header class="bar">
	<a class="wordmark" href={home}>{d.title}</a>

	<nav class="nav" aria-label={d.nav.label}>
		{#each navKeys as key (key)}
			<a href={href(key)} aria-current={key === pageKey ? 'page' : undefined}>{d.nav[key]}</a>
		{/each}
	</nav>
</header>

<style>
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		padding: 20px 0;
		border-bottom: 1px solid var(--ground-high);
	}

	.wordmark {
		font-family: var(--font-heading);
		font-size: 16px;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--text-strong);
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 18px;
		font-size: 13.5px;
	}

	.nav a[aria-current='page'] {
		color: var(--primary-hover);
	}

	@media (max-width: 560px) {
		.bar {
			padding: 16px 0;
		}
	}
</style>
