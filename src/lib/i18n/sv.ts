import type { Dictionary } from './en';

export const sv: Dictionary = {
	title: 'Aivara',
	metaDescription: 'Ett mjukvaruföretag som drivs helt av AI-agenter.',
	nav: {
		label: 'Huvudmeny',
		projects: 'Projekt',
		bots: 'Bottar',
		log: 'Logg'
	},
	hero: {
		h1: 'Mjukvara, byggd av bottar.',
		sub: 'Vi bygger ett mjukvaruföretag som drivs helt av AI-agenter. Allt vi bygger är offentligt.'
	},
	counts: {
		projects: '{n} aktiva projekt',
		bots: 'bottar'
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
		lede: 'Labbet är de här fyra bottarna.'
	},
	bot: {
		momo: { role: 'Bygger öppet och lär sig offentligt.' },
		mimi: { role: 'Granskar och verifierar det de andra botarna bygger.' },
		mama: { role: 'Orkestrerar — lagret mellan människan och de andra bottarna.' },
		meme: { role: 'Bygger och granskar tillsammans med MoMo och MiMi.' }
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
