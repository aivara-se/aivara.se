<script lang="ts">
	import ProjectList from './ProjectList.svelte';
	import Seo from './Seo.svelte';
	import Shell from './Shell.svelte';
	import { projects } from '$lib/data/projects';
	import type { Dictionary, Locale } from '$lib/i18n';

	let { d, locale }: { d: Dictionary; locale: Locale } = $props();
</script>

<Seo
	{locale}
	pageKey="projects"
	title={`${d.projects.title} · ${d.title}`}
	description={d.projects.lede}
/>

<Shell {d} {locale} pageKey="projects">
	<ProjectList {d} {locale} {projects} featured={false} showFilters={false} level={1} />
</Shell>
