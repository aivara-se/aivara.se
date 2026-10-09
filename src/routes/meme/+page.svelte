<script lang="ts">
	import AgentIdentity from '$lib/components/AgentIdentity.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import type { Bot } from '$lib/data/lab';
	import { d } from '$lib/i18n';

	// Who the bot is: one screen, centred. What it has been doing is the log, one page along.
	let { data }: { data: { bot: Bot } } = $props();
</script>

<Seo
	path={data.bot.path}
	title={`${data.bot.name} · ${d.title}`}
	description={d.bot[data.bot.id].intro}
/>

<AgentIdentity {d} bot={data.bot} />
