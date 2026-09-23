<script lang="ts">
	import ProjectList from './ProjectList.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import { projects } from '$lib/data/projects';
	import type { Dictionary } from '$lib/i18n';

	let { d }: { d: Dictionary } = $props();
</script>

<Seo pageKey="projects" title={`${d.projects.title} · ${d.title}`} description={d.projects.lede} />

<Shell {d} pageKey="projects">
	<ProjectList {d} {projects} layout="cards" showFilters={false} level={1} />
</Shell>
