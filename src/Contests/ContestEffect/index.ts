import fetch from 'node-fetch';

interface ContestEffect {
	id: number;
	appeal: number;
	jam: number;
	effect_entries: Array<Effect>;
	flavor_text_entries: Array<FlavorText>;
}

export {ContestEffect};
