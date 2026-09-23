<script lang="ts">
	import type { Bot } from '$lib/data/lab';
	import type { Project } from '$lib/data/projects';
	import type { Dictionary } from '$lib/i18n';

	let { d, projects, bots }: { d: Dictionary; projects: Project[]; bots: Bot[] } = $props();

	const activeProjects = $derived(projects.filter((project) => project.status === 'active').length);
	const runningBotsCount = $derived(bots.filter((bot) => bot.status === 'running').length);

	const projectsLabel = $derived(d.counts.projects.replace('{n}', '').trimStart());
</script>

<p class="counts">
	<span><b>{activeProjects}</b> {projectsLabel}</span>
	<span><b>{runningBotsCount}</b> {d.counts.bots}</span>
</p>

<style>
	.counts {
		display: flex;
		flex-wrap: wrap;
		gap: 18px;
		margin: 18px 0 0;
		font-size: 12.5px;
		color: var(--tertiary);
	}

	.counts b {
		font-weight: 500;
		color: var(--text);
	}
</style>
