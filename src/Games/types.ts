import {NamedAPIResource} from '../Resources';

interface Generations {
	id: number;
	name: string;
	abilities: Array<NamedAPIResource>;
	names: Array<Name>;
	main_region: NamedAPIResource;
	moves: Array<NamedAPIResource>;
	pokemon_species: Array<NamedAPIResource>;
	types: Array<NamedAPIResource>;
	version_groups: Array<NamedAPIResource>;
}

interface Pokedexes {
	id: number;
	name: string;
	is_main_series: boolean;
	descriptions: Array<Description>;
	names: Array<Name>;
	pokemon_entries: Array<PokemonEntry>;
	region: NamedAPIResource;
	version_groups: Array<NamedAPIResource>;
}

interface PokemonEntry {
	entry_number: number;
	pokemon_species: NamedAPIResource;
}

interface Version {
	id: number;
	name: string;
	names: Array<Name>;
	version_group: NamedAPIResource;
}

interface VersionGroup {
	id: number;
	name: string;
	order: number;
	generation: NamedAPIResource;
	move_learn_methods: Array<NamedAPIResource>;
	pokedexes: Array<NamedAPIResource>;
	regions: Array<NamedAPIResource>;
	versions: Array<NamedAPIResource>;
}

export {Generations, Pokedexes, PokemonEntry, Version, VersionGroup};
