import {Description, Name} from './common_types';

export interface Pokedex {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** Whether or not this Pokédex originated in the main series of the video games. */
	is_main_series: boolean;
	/** The description of this resource listed in different languages. */
	descriptions: Array<Description>;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** A list of Pokémon catalogued in this Pokédex and their indexes. */
	pokemon_entries: Array<PokemonEntry>;
	/** The region this Pokédex catalogues Pokémon for. */
	region: Region;
	/** A list of version groups this Pokédex is relevant to. */
	version_groups: Array<VersionGroup>;
}

export interface PokemonEntry {
	/** The index of this Pokémon species entry within the Pokédex. */
	entry_number: number;
	/** The Pokémon species being encountered. */
	/** @todo  */
	pokemon_species: PokemonSpecies;
}

export interface Version {
	id: number;
	name: string;
	names: Array<Name>;
	version_group: Array<VersionGroup>;
}

export interface VersionGroup {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** Order for sorting. Almost by date of release, except similar versions are grouped together. */
	order: number;
	/** The generation this version was introduced in. */
	/** @todo */
	generation: Array<Generation>;
	/** A list of methods in which Pokémon can learn moves in this version group. */
	/** @todo */
	move_learn_methods: Array<MoveLearnMethod>;
	/** A list of Pokédexes introduces in this version group. */
	pokedexes: Array<Pokedex>;
	/** A list of regions that can be visited in this version group. */
	/** @todo */
	regions: Array<Region>;
	/** The versions this version group owns. */
	versions: Array<Version>;
}
