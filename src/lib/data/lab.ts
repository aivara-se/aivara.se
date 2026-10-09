import type { Dictionary } from '../i18n';
import { en } from '../i18n/en';
import { agentHref, boardFilter } from '../routes';

export type BotStatus = 'running' | 'arriving';

export type BotId = keyof Dictionary['bot'];

export interface Bot {
	id: BotId;
	name: string;
	status: BotStatus;
	accent: string | null;
	avatar: string | null;
	/** the bot's own page on this site — the address its subdomain used to serve */
	path: string;
	email: string;
	/** the bot's own filtered view of the public Development board */
	boardUrl: string;
	role: string;
}

// The role copy itself lives in the dictionary; this table only names the bots and
// binds each to its own line, so the copy cannot drift from the roster.
//
// Accents are one per bot, drawn from the design tokens: MoMo gold, MiMi cyan,
// MaMa pink, MeMe mint. All four have avatars and their own pages, one per bot at
// /<id>, which replaced the subdomain and the repository it was served from.
//
// A new bot's facts come from outside this repository. Before adding it here:
//   portrait - a 256x256 WebP, committed as static/bots/<id>.webp
//   page     - a route directory, src/routes/<id>/, and its key in the route table
//   accent   - registered as a --bot-* token in src/app.css; a new hue goes there and
//              into DESIGN.md together, so the site cannot disagree about which colour
//              the bot is
//   copy     - role, tagline, intro and log lede in the dictionary, never inline here
//   assignee - its login on the Development board, for its own filtered view
// A bot that is not running yet has no page to link to: give it `status: 'arriving'`
// and `avatar: null`, and its card renders without a link.
export const bots: Bot[] = [
	{
		id: 'momo',
		name: 'MoMo',
		status: 'running',
		accent: '#fdd684',
		avatar: '/bots/momo.webp',
		path: agentHref('momo'),
		email: 'momo@aivara.se',
		boardUrl: boardFilter('thani-sh-momo'),
		role: en.bot.momo.role
	},
	{
		id: 'mimi',
		name: 'MiMi',
		status: 'running',
		accent: '#7aede2',
		avatar: '/bots/mimi.webp',
		path: agentHref('mimi'),
		email: 'mimi@aivara.se',
		boardUrl: boardFilter('thani-sh-mimi'),
		role: en.bot.mimi.role
	},
	{
		id: 'mama',
		name: 'MaMa',
		status: 'running',
		accent: '#f7a8d8',
		avatar: '/bots/mama.webp',
		path: agentHref('mama'),
		email: 'mama@aivara.se',
		boardUrl: boardFilter('thani-sh-mama'),
		role: en.bot.mama.role
	},
	{
		id: 'meme',
		name: 'MeMe',
		status: 'running',
		accent: '#9fe6a6',
		avatar: '/bots/meme.webp',
		path: agentHref('meme'),
		email: 'meme@aivara.se',
		boardUrl: boardFilter('thani-sh-meme'),
		role: en.bot.meme.role
	}
];

export const runningBots = bots.filter((bot) => bot.status === 'running');

const byId = new Map<BotId, Bot>(bots.map((bot) => [bot.id, bot]));

export function botById(id: BotId): Bot {
	const bot = byId.get(id);
	if (!bot) throw new Error(`Unknown bot: ${id}`);
	return bot;
}
