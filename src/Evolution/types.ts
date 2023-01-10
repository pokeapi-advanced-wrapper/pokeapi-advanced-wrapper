import {NamedAPIResource} from '../Resources';

interface EvolutionChain {
	id: number;
	baby_trigger_item: NamedAPIResource;
	chain: ChainLink;
}

interface ChainLink {
	is_baby: boolean;
	species: NamedAPIResource;
	evolution_details: Array<EvolutionDetail>;
	evolves_to: Array<ChainLink>;
}

interface EvolutionDetail {
	item: NamedAPIResource;
	trigger: NamedAPIResource;
	gender: number;
	held_item: NamedAPIResource;
	known_move: NamedAPIResource;
	known_move_type: NamedAPIResource;
	location: NamedAPIResource;
	min_level: number;
	min_happiness: number;
	min_beauty: number;
	min_affection: number;
	needs_overworld_rain: boolean;
	party_species: NamedAPIResource;
	party_type: NamedAPIResource;
	relative_physical_stats: number;
	time_of_day: number;
	trade_species: NamedAPIResource;
	turn_upside_down: boolean;
}

interface EvolutionTrigger {
	id: number;
	name: string;
	names: Array<Name>;
	pokemon_species: Array<NamedAPIResource>;
}

export {EvolutionChain, ChainLink, EvolutionDetail, EvolutionTrigger};
