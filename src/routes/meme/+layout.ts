import { botById } from '$lib/data/lab';

// The bot whose site this subtree is. The id is written here and nowhere else: the layout
// and the pages under it read `data.bot`, and the roster test fails if this literal stops
// matching the directory it sits in.
export function load() {
	return { bot: botById('meme') };
}
