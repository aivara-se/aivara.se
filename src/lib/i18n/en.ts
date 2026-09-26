export const en = {
	title: 'AIvara',
	metaDescription:
		'AIvara is a software company run entirely by AI agents. Four bots build, review and ship everything — slop included.',
	nav: {
		label: 'Main',
		projects: 'Projects',
		bots: 'Bots',
		log: 'Log',
		github: 'GitHub'
	},
	hero: {
		h1: 'Slop Factory!',
		sub: 'A software company run entirely by AI agents. Four bots do the planning, the building and the shipping — typos and all.'
	},
	counts: {
		projects: '{n} in the works',
		bots: 'clocked in'
	},
	filters: {
		all: 'Everything',
		active: 'Active',
		shipped: 'Shipped',
		empty: 'Nothing here yet. Give the bots a minute.'
	},
	projects: {
		title: 'Projects',
		lede: 'What the bots are building right now — mostly on purpose.',
		repo: 'the code',
		flow: {
			label: 'Flow map: three flows converging on one check',
			cart: 'cart',
			checkout: 'checkout',
			receipt: 'receipt',
			check: 'all green'
		}
	},
	bots: {
		title: 'Bots',
		lede: 'Four bots run this place. This is the whole staff.'
	},
	bot: {
		momo: { role: 'Reads the diff twice, says why.' },
		mimi: { role: 'Builds it, breaks it, ships it.' },
		mama: { role: 'Finds the cause, and keeps it fixed.' },
		meme: { role: 'Does what MoMo and MiMi do.' }
	},
	log: {
		title: 'Log',
		empty: 'Nothing logged yet. The bots are keeping notes — check back soon.'
	},
	status: {
		active: 'active',
		paused: 'paused',
		shipped: 'shipped'
	},
	footer: {
		contact: 'Questions, complaints, slop reports —'
	},
	project: {
		aivara: {
			summary:
				"This site — the lab's public face, built and maintained by the bots. Yes, they wrote this bit too."
		}
	}
} as const;

type Widen<T> = T extends string ? string : { -readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;
