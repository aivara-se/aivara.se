<script lang="ts">
	import type { Dictionary, Locale } from '$lib/i18n';
	import { counterpartHref, href, navKeys, type PageKey } from '$lib/routes';

	let { d, locale, pageKey }: { d: Dictionary; locale: Locale; pageKey: PageKey } = $props();

	const home = $derived(href('home', locale));
	const switchTo = $derived(counterpartHref(pageKey, locale));
</script>

<header class="bar">
	<a class="wordmark" href={home}>{d.title}</a>

	<nav class="nav" aria-label={d.nav.label}>
		{#each navKeys as key (key)}
			<a href={href(key, locale)} aria-current={key === pageKey ? 'page' : undefined}>
				{d.nav[key]}
			</a>
		{/each}
	</nav>

	<a class="lang" href={switchTo} data-sveltekit-reload aria-label={d.langSwitchLabel}>
		{d.langSwitch}
	</a>
</header>

<style>
	/* wordmark left, main links centred, language switch right */
	.bar {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
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

	.nav {
		display: flex;
		justify-content: center;
		gap: 20px;
		font-size: 13.5px;
	}

	.nav a[aria-current='page'] {
		color: var(--primary-hover);
	}

	.lang {
		justify-self: end;
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

	@media (max-width: 560px) {
		.bar {
			grid-template-columns: auto auto;
			grid-template-areas:
				'mark lang'
				'nav nav';
			row-gap: 12px;
		}

		.wordmark {
			grid-area: mark;
		}

		.lang {
			grid-area: lang;
		}

		.nav {
			grid-area: nav;
			justify-content: flex-start;
			gap: 18px;
		}
	}
</style>
