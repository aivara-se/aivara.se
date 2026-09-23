<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import type { Dictionary } from '$lib/i18n';

	// The large project card: name, honest status, summary and repository link, with the
	// project's own visual when it declares one. No language or stack anywhere — the lab
	// shows what it made, not what it made it in.
	let {
		d,
		project,
		summary,
		level = 3,
		showShot = true
	}: {
		d: Dictionary;
		project: Project;
		summary: string;
		level?: 2 | 3;
		showShot?: boolean;
	} = $props();

	const shot = $derived(Boolean(project.flow) && showShot);
</script>

<article class="card" class:shot>
	<div class="body">
		<svelte:element this={'h' + level} class="name">
			{project.name}
			<span class="pill {project.status}">{d.status[project.status]}</span>
		</svelte:element>
		<p class="summary">{summary}</p>
		<div class="meta">
			<a href={project.repo}>{d.projects.repo} →</a>
		</div>
	</div>

	{#if shot}
		<div class="visual">
			<svg
				viewBox="0 0 220 150"
				width="100%"
				height="100%"
				role="img"
				aria-label={d.projects.flow.label}
			>
				<defs>
					<marker id="flow-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
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
	{/if}
</article>

<style>
	.card {
		display: grid;
		grid-template-columns: 1fr;
		margin-top: 14px;
		border: 1px solid var(--ground-high);
		border-radius: var(--radius-md);
		background: linear-gradient(180deg, var(--ground-mid), rgba(17, 18, 25, 0.4));
		overflow: hidden;
	}

	.card.shot {
		grid-template-columns: 1.4fr 1fr;
	}

	.body {
		padding: 26px 26px 22px;
	}

	.name {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
		margin: 0;
		font-size: 24px;
		font-weight: 700;
	}

	.summary {
		margin: 10px 0 0;
		max-width: 46ch;
		font-size: 14.5px;
		color: var(--secondary);
	}

	.meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;
		margin-top: 18px;
		font-size: 13px;
		color: var(--tertiary);
	}

	.visual {
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

	@media (max-width: 720px) {
		.card.shot {
			grid-template-columns: 1fr;
		}

		.visual {
			min-height: 130px;
			border-left: 0;
			border-top: 1px solid var(--ground-high);
		}
	}
</style>
