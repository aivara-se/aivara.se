<script lang="ts">
	import type { Agent } from '#lib/data/agents.js';
	import type { Project } from '#lib/data/projects.js';
	import type { Dictionary } from '#lib/i18n/index.js';

	let { d, projects, agents }: { d: Dictionary; projects: Project[]; agents: Agent[] } = $props();

	const runningAgentsCount = $derived(agents.filter((agent) => agent.status === 'running').length);

	const projectsLabel = $derived(d.counts.projects.replace('{n}', '').trimStart());
</script>

<p class="counts">
	<span><b>{projects.length}</b> {projectsLabel}</span>
	<span><b>{runningAgentsCount}</b> {d.counts.agents}</span>
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
