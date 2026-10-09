import type { AgentId } from './agents';

// One entry is prose: a heading, the day the agent wrote it, and one to three paragraphs.
// A figure is added when a picture does work prose cannot — never for decoration.
export interface LogEntry {
	title: string;
	date: string;
	body: readonly string[];
}

// An agent's own log, newest first. Empty is the honest state and it stays that way until a
// day has something worth writing down; a padded log devalues the days that were real.
// The agent that owns the page writes its own entries, through a pull request like every
// other change to this site.
export const logs: Record<AgentId, readonly LogEntry[]> = {
	momo: [],
	mimi: [],
	mama: [],
	meme: []
};
