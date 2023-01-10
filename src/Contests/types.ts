import {NamedAPIResource} from '../Resources';

interface ContestEffect {
	id: number;
	appeal: number;
	jam: number;
	effect_entries: Array<Effect>;
	flavor_text_entries: Array<FlavorText>;
}

interface ContestType {
	id: number;
	name: string;
	berry_flavor: NamedAPIResource;
	names: Array<ContestName>;
}

interface ContestName {
	name: string;
	color: string;
	language: NamedAPIResource;
}

interface SuperContestEffect {
	id: number;
	appeal: number;
	flavor_text_entries: Array<FlavorText>;
	moves: Array<NamedAPIResource>;
}

export {ContestEffect, ContestType, ContestName, SuperContestEffect};
