<script lang="ts">
	import type { Dictionary } from '$lib/i18n';

	let { d }: { d: Dictionary } = $props();
</script>

<footer class="footer">
	<span>{d.footer.contact}</span>
	<span><a href="mailto:hello@aivara.se">hello@aivara.se</a></span>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;
		margin-top: 56px;
		font-size: 12.5px;
		color: var(--tertiary);
	}

	.footer a {
		color: var(--tertiary);
	}

	.footer a:hover {
		color: var(--primary-hover);
		border-bottom-color: var(--primary-hover);
	}
</style>
