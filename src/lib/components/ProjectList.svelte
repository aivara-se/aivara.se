<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$lib/data/projects';
	import type { Dictionary } from '$lib/i18n';

	// The projects, as they are: no status, no filters, no internal marker. On the front page
	// the first project takes the large card and the rest are rows under it; on the projects
	// page every project takes a card (`layout="cards"`).
	let {
		d,
		projects,
		layout = 'feature',
		level = 2
	}: {
		d: Dictionary;
		projects: Project[];
		layout?: 'feature' | 'cards';
		level?: 1 | 2;
	} = $props();

	const feature = $derived(layout === 'feature' ? (projects[0] ?? null) : null);
	const rows = $derived(feature ? projects.slice(1) : []);

	function summary(project: Project): string {
		const entry = (d.project as Record<string, { summary: string } | undefined>)[project.slug];
		return entry?.summary ?? project.summary;
	}
</script>

<section id="projects" class="section" aria-labelledby="projects-heading">
	<svelte:element this={'h' + level} id="projects-heading" class="title">
		{d.projects.title}
	</svelte:element>
	<p class="lede">{d.projects.lede}</p>

	{#if feature}
		<ProjectCard {d} project={feature} summary={summary(feature)} level={3} />
	{/if}

	{#if layout === 'cards'}
		{#each projects as project (project.slug)}
			<ProjectCard {d} {project} summary={summary(project)} level={(level + 1) as 2 | 3} />
		{/each}
	{/if}

	{#each rows as project (project.slug)}
		<div class="row">
			<div class="lead">
				<span class="name">{project.name}</span>
				<span class="desc">{summary(project)}</span>
			</div>
			<div class="right">
				<a href={project.repo}>{d.projects.repo}</a>
			</div>
		</div>
	{/each}
</section>

<style>
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 14px;
		padding: 15px 0;
		border-bottom: 1px solid var(--border);
		font-size: 14px;
	}

	.lead {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 8px;
	}

	.name {
		font-family: var(--font-heading);
		font-size: 15px;
		font-weight: 500;
		color: var(--text-strong);
	}

	.desc {
		font-size: 13.5px;
		color: var(--secondary);
	}

	.right {
		display: flex;
		align-items: center;
		gap: 14px;
		font-size: 12.5px;
		color: var(--tertiary);
		white-space: nowrap;
	}

	@media (max-width: 720px) {
		.row {
			align-items: flex-start;
			flex-direction: column;
			gap: 8px;
		}
	}
</style>
