<script lang="ts">
	import type { Dictionary } from '$lib/i18n';

	let { d }: { d: Dictionary } = $props();
</script>

<section class="hero" aria-labelledby="hero-heading">
	<h1 id="hero-heading">{d.hero.h1}</h1>
	<p class="sub">{d.hero.sub}</p>
</section>

<style>
	.hero {
		padding: 44px 0 8px;
	}

	h1 {
		max-width: 15ch;
		font-size: clamp(28px, 6vw, 38px);
		font-weight: 700;
		line-height: 1.08;
	}

	.sub {
		margin: 12px 0 0;
		max-width: 56ch;
		font-size: 15px;
		color: var(--secondary);
	}
</style>
