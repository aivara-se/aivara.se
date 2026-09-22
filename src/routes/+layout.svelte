<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

{@render children()}
