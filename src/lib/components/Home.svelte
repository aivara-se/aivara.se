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
	import { href } from '$lib/routes';
	import type { Dictionary } from '$lib/i18n';

	let { d }: { d: Dictionary } = $props();

	// The lab's own tooling belongs on the projects page, not in the offer: the homepage
	// stays about work done for others, so its feature card and its project count both
	// read from the projects that are not internal.
	const external = projects.filter((project) => !project.internal);
</script>

<Seo path={href('home')} title={d.title} description={d.metaDescription} />

<Shell {d} pageKey="home">
	<Hero {d} />
	<Counts {d} projects={external} {bots} />
	<ProjectList {d} projects={external} />
	<BotStrip {d} {bots} />
	<Log {d} />
</Shell>
