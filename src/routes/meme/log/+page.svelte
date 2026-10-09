<script lang="ts">
	import AgentLog from '$lib/components/AgentLog.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import type { Bot } from '$lib/data/lab';
	import { d } from '$lib/i18n';

	// What the bot has been doing, written down the day it happened. The chrome around it —
	// accent, wash, header — is the layout's.
	let { data }: { data: { bot: Bot } } = $props();
</script>

<Seo
	path={data.bot.logPath}
	title={`${d.log.title} · ${data.bot.name} · ${d.title}`}
	description={d.bot[data.bot.id].logLede}
/>

<AgentLog {d} bot={data.bot} />
