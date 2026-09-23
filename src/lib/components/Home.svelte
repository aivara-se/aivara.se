<script lang="ts">
	import BotStrip from './BotStrip.svelte';
	import Counts from './Counts.svelte';
	import Hero from './Hero.svelte';
	import Log from './Log.svelte';
	import ProjectList from './ProjectList.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import { bots } from '$lib/data/lab';
	import { projects } from '$lib/data/projects';
	import type { Dictionary } from '$lib/i18n';

	let { d }: { d: Dictionary } = $props();
</script>

<Seo pageKey="home" title={d.title} description={d.metaDescription} />

<Shell {d} pageKey="home">
	<Hero {d} />
	<Counts {d} {projects} {bots} />
	<ProjectList {d} {projects} />
	<BotStrip {d} {bots} />
	<Log {d} />
</Shell>
