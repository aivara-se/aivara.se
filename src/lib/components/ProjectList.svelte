<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import type { Dictionary, Locale } from '$lib/i18n';

	let {
		d,
		locale,
		projects,
		featured = true,
		showFilters = true,
		level = 2
	}: {
		d: Dictionary;
		locale: Locale;
		projects: Project[];
		featured?: boolean;
		showFilters?: boolean;
		level?: 1 | 2;
	} = $props();

	type Filter = 'all' | 'active' | 'shipped';

	const filterKeys: Filter[] = ['all', 'active', 'shipped'];

	let filter = $state<Filter>('all');

	const visible = $derived(
		projects.filter((project) => filter === 'all' || project.status === filter)
	);
	const feature = $derived(featured ? (visible[0] ?? null) : null);
	const rows = $derived(feature ? visible.slice(1) : visible);

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
		<article class="feature">
			<div class="body">
				<h3 class="feature-name">
					{feature.name}
					<span class="pill {feature.status}">{d.status[feature.status]}</span>
				</h3>
				<p class="feature-summary">{summary(feature)}</p>
				<div class="meta">
					<span>{feature.language}</span>
					<a href={feature.repo}>{d.projects.repo} →</a>
				</div>
			</div>
			<div class="shot">
				<svg
					viewBox="0 0 220 150"
					width="100%"
					height="100%"
					role="img"
					aria-label={d.projects.flow.label}
				>
					<defs>
						<marker
							id="flow-arrow"
							markerWidth="6"
							markerHeight="6"
							refX="5"
							refY="3"
							orient="auto"
						>
							<path class="arrow-head" d="M0,0 L6,3 L0,6 z" />
						</marker>
					</defs>
					<rect class="box" x="14" y="14" width="76" height="26" rx="6" />
					<text class="label" x="52" y="31" text-anchor="middle">{d.projects.flow.cart}</text>
					<rect class="box" x="14" y="60" width="76" height="26" rx="6" />
					<text class="label" x="52" y="77" text-anchor="middle">{d.projects.flow.checkout}</text>
					<rect class="box" x="14" y="106" width="76" height="26" rx="6" />
					<text class="label" x="52" y="123" text-anchor="middle">{d.projects.flow.receipt}</text>
					<path class="line" d="M92 27 H128 V68" marker-end="url(#flow-arrow)" />
					<path class="line" d="M92 73 H128" marker-end="url(#flow-arrow)" />
					<path class="line" d="M92 119 H128 V78" marker-end="url(#flow-arrow)" />
					<circle class="check" cx="168" cy="73" r="26" />
					<path class="tick" d="M156 73 l8 9 17 -19" />
					<text class="note" x="168" y="118" text-anchor="middle">{d.projects.flow.check}</text>
				</svg>
			</div>
		</article>
	{/if}

	{#each rows as project (project.slug)}
		<div class="row">
			<div class="lead">
				<span class="name">{project.name}</span>
				<span class="desc">{summary(project)}</span>
			</div>
			<div class="right">
				<span class="pill {project.status}">{d.status[project.status]}</span>
				<span class="lang">{project.language}</span>
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

	.feature {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		margin-top: 14px;
		border: 1px solid var(--ground-high);
		border-radius: var(--radius-md);
		background: linear-gradient(180deg, var(--ground-mid), rgba(17, 18, 25, 0.4));
		overflow: hidden;
	}

	.feature .body {
		padding: 26px 26px 22px;
	}

	.feature-name {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
		margin: 0;
		font-size: 24px;
		font-weight: 700;
	}

	.feature-summary {
		margin: 10px 0 0;
		max-width: 46ch;
		font-size: 14.5px;
		color: var(--secondary);
	}

	.feature .meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;
		margin-top: 18px;
		font-size: 13px;
		color: var(--tertiary);
	}

	.feature .shot {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 190px;
		padding: 20px;
		border-left: 1px solid var(--ground-high);
		background:
			radial-gradient(400px 240px at 70% 30%, rgba(245, 245, 247, 0.07), transparent 65%),
			var(--neutral);
	}

	.box {
		fill: none;
		stroke: var(--ground-high);
	}

	.label {
		fill: var(--tertiary);
		font-family: Inter, sans-serif;
		font-size: 9px;
	}

	.line {
		fill: none;
		stroke: var(--ring-dark);
		stroke-width: 1;
	}

	.arrow-head {
		fill: var(--ring-dark);
	}

	.check {
		fill: none;
		stroke: var(--primary);
		stroke-width: 1.5;
	}

	.tick {
		fill: none;
		stroke: var(--primary);
		stroke-width: 2;
	}

	.note {
		fill: var(--tertiary);
		font-family: Inter, sans-serif;
		font-size: 8.5px;
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
		.feature {
			grid-template-columns: 1fr;
		}

		.feature .shot {
			min-height: 130px;
			border-left: 0;
			border-top: 1px solid var(--ground-high);
		}

		.row {
			align-items: flex-start;
			flex-direction: column;
			gap: 8px;
		}
	}
</style>
