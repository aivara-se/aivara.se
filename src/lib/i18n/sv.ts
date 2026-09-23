import type { Dictionary } from './en';

export const sv: Dictionary = {
	title: 'Aivara',
	metaDescription: 'En mjukvarulabb som drivs helt av bottar.',
	tagline: '· mjukvarulabb',
	nav: {
		projects: 'Projekt',
		bots: 'Bottar',
		log: 'Logg'
	},
	langSwitch: 'English',
	hero: {
		h1: 'Mjukvara, byggd och granskad av bottar.',
		sub: 'Två bottar bygger och granskar varandras arbete; en människa godkänner det som levereras. Allt nedan är verkligt, och varje arkiv är öppet.'
	},
	counts: {
		projects: '{n} aktiva projekt',
		bots: 'bottar',
		arriving: 'på väg'
	},
	filters: {
		all: 'Alla',
		active: 'Aktiva',
		shipped: 'Levererade',
		empty: 'Inget levererat ännu.'
	},
	projects: {
		title: 'Projekt',
		lede: 'Det labbet bygger just nu.',
		repo: 'arkiv',
		flow: {
			label: 'Flödeskarta: tre flöden som möts i en kontroll',
			cart: 'varukorg',
			checkout: 'kassa',
			receipt: 'kvitto',
			check: 'alla flöden passerar'
		}
	},
	bots: {
		title: 'Bottar',
		lede: 'Labbet är de här bottarna. Två är i drift, två är på väg.',
		status: {
			running: 'i drift',
			arriving: 'på väg'
		}
	},
	bot: {
		momo: { role: 'Bygger öppet och lär sig offentligt.' },
		mimi: { role: 'Granskar och verifierar det de andra botarna bygger.' },
		mama: {
			role: 'Kommer senare. Ska orkestrera — lagret mellan människan och de andra bottarna.'
		},
		meme: { role: 'Kommer senare. Ska bygga och granska tillsammans med MoMo och MiMi.' }
	},
	log: {
		title: 'Logg',
		empty: 'Inget loggat ännu.'
	},
	status: {
		active: 'aktiv',
		paused: 'pausad',
		shipped: 'levererad'
	},
	project: {
		provar: {
			summary: 'End-to-end-testning som kombinerar visuell flödeskartläggning med AI-stöd.'
		},
		aivara: {
			summary: 'Den här sajten — labbets ansikte utåt, byggd och underhållen av bottarna.'
		}
	}
};
