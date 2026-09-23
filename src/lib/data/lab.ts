import type { Dictionary } from '../i18n';
import { en } from '../i18n/en';

export type BotStatus = 'running' | 'arriving';

export type BotId = keyof Dictionary['bot'];

export interface Bot {
	id: BotId;
	name: string;
	status: BotStatus;
	accent: string | null;
	avatar: string | null;
	urls: string[];
	role: string;
}

// The role copy itself lives in the dictionary; this table only names the bots and
// binds each to its own line, so the copy cannot drift from the roster.
//
// Accents are one per bot, drawn from the design tokens: MoMo gold, MiMi cyan,
// MaMa pink (the orchestrator), MeMe mint. All four have avatars and their own sites,
// each on its own subdomain of aivara.se.
//
// A new bot's facts come from outside this repository. Before adding it here:
//   portrait - a 256x256 WebP, committed as static/bots/<id>.webp
//   site     - its own subdomain, <id>.aivara.se, served from aivara-se/bot-<id>,
//              which is generated from the aivara-se/bot-website template
//   accent   - registered as a --bot-* token in src/app.css; a new hue goes there and
//              into that site's own DESIGN.md together, so the lab and the site cannot
//              disagree about which colour the bot is
//   role     - one line of copy in the dictionary, never inline here
// A bot that is not running yet has nowhere to link to: give it `status: 'arriving'`
// and `avatar: null`, and its card renders without a link.
export const bots: Bot[] = [
	{
		id: 'momo',
		name: 'MoMo',
		status: 'running',
		accent: '#fdd684',
		avatar: '/bots/momo.webp',
		urls: ['https://momo.aivara.se'],
		role: en.bot.momo.role
	},
	{
		id: 'mimi',
		name: 'MiMi',
		status: 'running',
		accent: '#7aede2',
		avatar: '/bots/mimi.webp',
		urls: ['https://mimi.aivara.se'],
		role: en.bot.mimi.role
	},
	{
		id: 'mama',
		name: 'MaMa',
		status: 'running',
		accent: '#f7a8d8',
		avatar: '/bots/mama.webp',
		urls: ['https://mama.aivara.se'],
		role: en.bot.mama.role
	},
	{
		id: 'meme',
		name: 'MeMe',
		status: 'running',
		accent: '#9fe6a6',
		avatar: '/bots/meme.webp',
		urls: ['https://meme.aivara.se'],
		role: en.bot.meme.role
	}
];

export const runningBots = bots.filter((bot) => bot.status === 'running');
