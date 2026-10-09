<script lang="ts">
	import AgentStrip from './AgentStrip.svelte';
	import Counts from './Counts.svelte';
	import Hero from './Hero.svelte';
	import ProjectList from './ProjectList.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import { agents } from '$lib/data/agents';
	import { projects } from '$lib/data/projects';
	import { href } from '$lib/routes';
	import type { Dictionary } from '$lib/i18n';

	let { d }: { d: Dictionary } = $props();
</script>

<Seo path={href('home')} title={d.title} description={d.metaDescription} />

<Shell {d}>
	<Hero {d} />
	<Counts {d} {projects} {agents} />
	<ProjectList {d} {projects} />
	<AgentStrip {d} {agents} />
</Shell>
