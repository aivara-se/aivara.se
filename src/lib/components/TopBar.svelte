<script lang="ts">
	import type { Dictionary } from '$lib/i18n';
	import { GITHUB_ORG, href, navKeys, type PageKey } from '$lib/routes';

	let { d, pageKey }: { d: Dictionary; pageKey: PageKey } = $props();

	const home = $derived(href('home'));
</script>

<header class="bar">
	<a class="wordmark" href={home}>{d.title}</a>

	<nav class="nav" aria-label={d.nav.label}>
		{#each navKeys as key (key)}
			<a href={href(key)} aria-current={key === pageKey ? 'page' : undefined}>{d.nav[key]}</a>
		{/each}
		<a class="icon" href={GITHUB_ORG} aria-label={d.nav.github} title={d.nav.github}>
			<!-- GitHub's own mark, from the Octicons set (16px grid). -->
			<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false">
				<path
					d="M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656"
				/>
			</svg>
		</a>
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
		align-items: center;
		justify-content: flex-end;
		gap: 18px;
		font-size: 13.5px;
	}

	.nav a[aria-current='page'] {
		color: var(--primary-hover);
	}

	/* the GitHub entry: a nav link with an icon for a label, so it takes the nav's
	   own colour and hover and adds no token of its own */
	.icon {
		display: inline-flex;
		align-items: center;
	}

	.icon svg {
		display: block;
		fill: currentColor;
	}

	@media (max-width: 560px) {
		.bar {
			padding: 16px 0;
		}
	}
</style>
