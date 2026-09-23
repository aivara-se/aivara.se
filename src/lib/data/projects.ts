import raw from './projects.json';

export type ProjectStatus = 'active' | 'paused' | 'shipped';

export interface ProjectSummary {
	en: string;
	sv: string;
}

export interface Project {
	slug: string;
	name: string;
	repo: string;
	language: string;
	/** Set on projects that have their own diagram to show in the large card. */
	flow?: boolean;
	status: ProjectStatus;
	summary: ProjectSummary;
}

const STATUSES: readonly string[] = ['active', 'paused', 'shipped'];

function isNonEmptyString(value: unknown): value is string {
	return typeof value === 'string' && value.trim().length > 0;
}

function parseSummary(value: unknown, where: string): ProjectSummary {
	if (typeof value !== 'object' || value === null) {
		throw new Error(`${where}: missing summary`);
	}
	const summary = value as Record<string, unknown>;
	if (!isNonEmptyString(summary.en) || !isNonEmptyString(summary.sv)) {
		throw new Error(`${where}: summary must have non-empty "en" and "sv"`);
	}
	return { en: summary.en, sv: summary.sv };
}

function parseProject(value: unknown, index: number): Project {
	if (typeof value !== 'object' || value === null) {
		throw new Error(`projects[${index}]: entry must be an object`);
	}
	const entry = value as Record<string, unknown>;
	const where = `projects[${index}]`;

	if (!isNonEmptyString(entry.slug)) {
		throw new Error(`${where}: missing slug`);
	}
	if (!isNonEmptyString(entry.name)) {
		throw new Error(`${where} (${entry.slug}): missing name`);
	}
	if (!isNonEmptyString(entry.repo)) {
		throw new Error(`${where} (${entry.slug}): missing repo`);
	}
	if (!isNonEmptyString(entry.language)) {
		throw new Error(`${where} (${entry.slug}): missing language`);
	}
	if (typeof entry.status !== 'string' || !STATUSES.includes(entry.status)) {
		throw new Error(`${where} (${entry.slug}): unknown status "${String(entry.status)}"`);
	}

	return {
		slug: entry.slug,
		name: entry.name,
		repo: entry.repo,
		language: entry.language,
		flow: entry.flow === true,
		status: entry.status as ProjectStatus,
		summary: parseSummary(entry.summary, `${where} (${entry.slug})`)
	};
}

export function validateProjects(data: unknown): Project[] {
	if (
		typeof data !== 'object' ||
		data === null ||
		!Array.isArray((data as { projects?: unknown }).projects)
	) {
		throw new Error('projects.json: expected an object with a "projects" array');
	}
	const entries = (data as { projects: unknown[] }).projects;
	if (entries.length === 0) {
		throw new Error('projects.json: "projects" must contain at least one entry');
	}
	return entries.map(parseProject);
}

export const projects: Project[] = validateProjects(raw);
