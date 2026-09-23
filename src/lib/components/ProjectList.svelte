<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$lib/data/projects';
	import type { Dictionary, Locale } from '$lib/i18n';

	let {
		d,
		locale,
		projects,
		layout = 'feature',
		showFilters = true,
		level = 2
	}: {
		d: Dictionary;
		locale: Locale;
		projects: Project[];
		layout?: 'feature' | 'cards';
		showFilters?: boolean;
		level?: 1 | 2;
	} = $props();

	type Filter = 'all' | 'active' | 'shipped';

	const filterKeys: Filter[] = ['all', 'active', 'shipped'];

	let filter = $state<Filter>('all');

	const visible = $derived(
		projects.filter((project) => filter === 'all' || project.status === filter)
	);
	const feature = $derived(layout === 'feature' ? (visible[0] ?? null) : null);
	const rows = $derived(feature ? visible.slice(1) : []);

	function summary(project: Project): string {
		const entry = (d.project as Record<string, { summary: string } | undefined>)[project.slug];
		return entry?.summary ?? project.summary[locale];
	}
</script>

<section id="projects" class="section" aria-labelledby="projects-heading">
	<svelte:element this={'h' + level} id="projects-heading" class="title">
		{d.projects.title}
	</svelte:element>
	<p class="lede">{d.projects.lede}</p>

	{#if showFilters}
		<div class="filters">
			{#each filterKeys as key (key)}
				<button
					type="button"
					class="chip"
					aria-pressed={filter === key}
					onclick={() => (filter = key)}
				>
					{d.filters[key]}
				</button>
			{/each}
		</div>
	{/if}

	{#if feature}
		<ProjectCard {d} project={feature} summary={summary(feature)} level={3} />
	{/if}

	{#if layout === 'cards'}
		{#each visible as project (project.slug)}
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
				<span class="pill {project.status}">{d.status[project.status]}</span>
				<a href={project.repo}>{d.projects.repo}</a>
			</div>
		</div>
	{/each}

	{#if visible.length === 0}
		<p class="empty">{d.filters.empty}</p>
	{/if}
</section>

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 26px 0 4px;
	}

	.chip {
		font: inherit;
		font-size: 12.5px;
		padding: 3px 12px;
		border: 1px solid var(--ground-high);
		border-radius: var(--radius-pill);
		color: var(--secondary);
		background: none;
		cursor: pointer;
	}

	.chip:hover {
		color: var(--primary-hover);
		border-color: var(--ring-dark);
	}

	.chip[aria-pressed='true'] {
		color: var(--neutral);
		background: var(--primary);
		border-color: var(--primary);
		font-weight: 500;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 14px;
		padding: 15px 0;
		border-bottom: 1px solid var(--ground-high);
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

	.empty {
		margin: 14px 0 0;
		font-size: 13.5px;
		color: var(--tertiary);
	}

	@media (max-width: 720px) {
		.row {
			align-items: flex-start;
			flex-direction: column;
			gap: 8px;
		}
	}
</style>
