<script lang="ts">
	import { file } from '#lib/links.js';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={file('favicon.png')} />
	<link rel="apple-touch-icon" href={file('apple-touch-icon.png')} />
	<link rel="manifest" href={file('manifest.json')} />
</svelte:head>

{@render children()}
