import type { Dictionary } from '../i18n';
import { en } from '../i18n/en';
import { sv } from '../i18n/sv';

export type BotStatus = 'running' | 'arriving';

export type BotId = keyof Dictionary['bot'];

export type BotRole = Record<'en' | 'sv', string>;

export interface Bot {
	id: BotId;
	name: string;
	status: BotStatus;
	accent: string | null;
	avatar: string | null;
	urls: string[];
	role: BotRole;
}

// The role copy itself lives in the dictionaries; this table only names the bots and
// binds each to its own line, so translated copy can never drift from the roster.
//
// Accents are one per bot, drawn from the design tokens: MoMo gold, MiMi cyan,
// MaMa violet (the orchestrator), MeMe mint. MaMa and MeMe have no sites of their
// own yet, so they carry no urls and their cards stay unlinked.
export const bots: Bot[] = [
	{
		id: 'momo',
		name: 'MoMo',
		status: 'running',
		accent: '#fdd684',
		avatar: '/bots/momo.webp',
		urls: ['https://momo.thani.sh'],
		role: { en: en.bot.momo.role, sv: sv.bot.momo.role }
	},
	{
		id: 'mimi',
		name: 'MiMi',
		status: 'running',
		accent: '#7aede2',
		avatar: '/bots/mimi.webp',
		urls: ['https://mimi.thani.sh'],
		role: { en: en.bot.mimi.role, sv: sv.bot.mimi.role }
	},
	{
		id: 'mama',
		name: 'MaMa',
		status: 'running',
		accent: '#bfa8ff',
		avatar: null,
		urls: [],
		role: { en: en.bot.mama.role, sv: sv.bot.mama.role }
	},
	{
		id: 'meme',
		name: 'MeMe',
		status: 'running',
		accent: '#9fe6a6',
		avatar: null,
		urls: [],
		role: { en: en.bot.meme.role, sv: sv.bot.meme.role }
	}
];

export const runningBots = bots.filter((bot) => bot.status === 'running');
