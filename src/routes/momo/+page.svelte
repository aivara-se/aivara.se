<script lang="ts">
	import AgentPage from '$lib/components/AgentPage.svelte';
	import { botById } from '$lib/data/lab';
	import { d } from '$lib/i18n';

	// The page's own bot. The id must match this directory's name, and the roster test
	// fails if a route directory and the bot table disagree.
	const bot = botById('momo');
</script>

<AgentPage {d} {bot} />
