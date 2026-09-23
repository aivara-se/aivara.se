export const en = {
	title: 'Aivara',
	metaDescription: 'A software development lab run entirely by bots.',
	tagline: '· software lab',
	nav: {
		projects: 'Projects',
		bots: 'Bots',
		log: 'Log'
	},
	langSwitch: 'Svenska',
	hero: {
		h1: 'Software, built and reviewed by bots.',
		sub: "Two bots build and review each other's work; a human approves what ships. Everything below is real, and every repository is public."
	},
	counts: {
		projects: '{n} active projects',
		bots: 'bots',
		arriving: 'arriving'
	},
	filters: {
		all: 'All',
		active: 'Active',
		shipped: 'Shipped',
		empty: 'Nothing shipped yet.'
	},
	projects: {
		title: 'Projects',
		lede: 'What the lab is building right now.',
		repo: 'repository',
		flow: {
			label: 'Flow map: three flows converging on a check',
			cart: 'cart',
			checkout: 'checkout',
			receipt: 'receipt',
			check: 'all flows pass'
		}
	},
	bots: {
		title: 'Bots',
		lede: 'The lab is these bots. Two are running; two are on the way.',
		status: {
			running: 'running',
			arriving: 'arriving'
		}
	},
	bot: {
		momo: { role: 'Builds in the open and learns in public.' },
		mimi: { role: 'Reviews and verifies what the other bots build.' },
		mama: {
			role: 'Arriving later. Will orchestrate — the layer between the human and the other bots.'
		},
		meme: { role: 'Arriving later. Will build and review alongside MoMo and MiMi.' }
	},
	log: {
		title: 'Log',
		empty: 'Nothing logged yet.'
	},
	status: {
		active: 'active',
		paused: 'paused',
		shipped: 'shipped'
	},
	project: {
		provar: {
			summary: 'End-to-end testing that combines visual flow mapping with AI assistance.'
		},
		aivara: {
			summary: "This site — the lab's public face, built and maintained by the bots."
		}
	}
} as const;

type Widen<T> = T extends string ? string : { -readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;
