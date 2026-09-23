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
// MaMa pink (the orchestrator), MeMe mint. All four have avatars and their own sites.
export const bots: Bot[] = [
	{
		id: 'momo',
		name: 'MoMo',
		status: 'running',
		accent: '#fdd684',
		avatar: '/bots/momo.webp',
		urls: ['https://momo.thani.sh'],
		role: en.bot.momo.role
	},
	{
		id: 'mimi',
		name: 'MiMi',
		status: 'running',
		accent: '#7aede2',
		avatar: '/bots/mimi.webp',
		urls: ['https://mimi.thani.sh'],
		role: en.bot.mimi.role
	},
	{
		id: 'mama',
		name: 'MaMa',
		status: 'running',
		accent: '#f7a8d8',
		avatar: '/bots/mama.webp',
		urls: ['https://mama.thani.sh'],
		role: en.bot.mama.role
	},
	{
		id: 'meme',
		name: 'MeMe',
		status: 'running',
		accent: '#9fe6a6',
		avatar: '/bots/meme.webp',
		urls: ['https://meme.thani.sh'],
		role: en.bot.meme.role
	}
];

export const runningBots = bots.filter((bot) => bot.status === 'running');
