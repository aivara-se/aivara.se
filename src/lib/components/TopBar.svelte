<script lang="ts">
	import Avatar from './Avatar.svelte';
	import { runningBots } from '$lib/data/lab';
	import type { Dictionary, Locale } from '$lib/i18n';
	import { counterpartHref, href, navKeys, type PageKey } from '$lib/routes';

	let { d, locale, pageKey }: { d: Dictionary; locale: Locale; pageKey: PageKey } = $props();

	const home = $derived(href('home', locale));
	const switchTo = $derived(counterpartHref(pageKey, locale));
</script>

<header class="bar">
	<a class="wordmark" href={home}>
		{d.title}
		<em>{d.tagline}</em>
	</a>

	<nav class="nav">
		<div class="links">
			{#each navKeys as key (key)}
				<a href={href(key, locale)} aria-current={key === pageKey ? 'page' : undefined}>
					{d.nav[key]}
				</a>
			{/each}
		</div>

		<div class="agents" aria-hidden="true">
			{#each runningBots as bot (bot.id)}
				<Avatar {bot} size={26} />
			{/each}
		</div>

		<a class="lang" href={switchTo} data-sveltekit-reload>{d.langSwitch}</a>
	</nav>
</header>

<style>
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;
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

	.wordmark em {
		font-style: normal;
		font-weight: 500;
		color: var(--tertiary);
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px;
		font-size: 13.5px;
	}

	.links {
		display: flex;
		gap: 16px;
	}

	.links a[aria-current='page'] {
		color: var(--primary-hover);
	}

	.agents {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.lang {
		font-size: 13.5px;
		color: var(--secondary);
	}

	.lang:hover {
		color: var(--primary-hover);
		border-bottom-color: var(--primary-hover);
	}

	@media (max-width: 720px) {
		.bar {
			padding: 16px 0;
		}
	}
</style>
