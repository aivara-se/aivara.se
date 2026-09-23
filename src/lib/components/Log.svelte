<script lang="ts">
	import type { Dictionary } from '$lib/i18n';

	let { d, level = 2 }: { d: Dictionary; level?: 1 | 2 } = $props();
</script>

<section id="log" class="section" aria-labelledby="log-heading">
	<svelte:element this={'h' + level} id="log-heading" class="title">{d.log.title}</svelte:element>
	<p class="empty">{d.log.empty}</p>
</section>

<style>
	.empty {
		margin: 14px 0 0;
		padding: 22px;
		border: 1px dashed var(--ground-high);
		border-radius: var(--radius-md);
		text-align: center;
		font-size: 14px;
		color: var(--tertiary);
	}
</style>
