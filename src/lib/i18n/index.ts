import { en, type Dictionary } from './en';
import { sv } from './sv';

export { en, sv };
export type { Dictionary };

export const dictionaries = { en, sv };

export type Locale = 'en' | 'sv';

export function t(locale: Locale): Dictionary {
	return dictionaries[locale];
}
