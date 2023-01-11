import {GenerationGameIndex, Name, VersionEncounterDetail} from './common_types';
import {Version, Pokedex, VersionGroup} from './games';

export interface Location {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The region this location can be found in. */
	region: Region;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** A list of game indices relevent to this location by generation. */
	game_indicies: Array<GenerationGameIndex>;
	/** Areas that can be found within this location. */
	areas: Array<LocationArea>;
}

export interface LocationArea {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The internal id of an API resource within game data. */
	game_index: number;
	/** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
	encounter_method_rates: EncounterMethodRate;
	/** The region this location area can be found in. */
	location: Location;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	pokemon_encounters: Array<PokemonEncounter>;
}

export interface EncounterMethodRate {
	/** The method in which Pokémon may be encountered in an area. */
	encounter_method: EncounterMethod;
	/** The chance of the encounter to occur on a version of the game. */
	version_details: Array<EncounterVersionDetails>;
}

export interface EncounterVersionDetails {
	/** The chance of an encounter to occur. */
	rate: number;
	/** The version of the game in which the encounter can occur with the given chance. */
	version: Version;
}

export interface PokemonEncounter {
	/** The Pokémon being encountered. */
	pokemon: Pokemon;
	/** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
	version_details: Array<VersionEncounterDetail>;
}

export interface PalParkArea {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** A list of Pokémon encountered in thi pal park area along with details. */
	pokemon_encounters: Array<PalParkEncounterSpecies>;
}

export interface PalParkEncounterSpecies {
	/** The base score given to the player when this Pokémon is caught during a pal park run. */
	base_score: number;
	/** The base rate for encountering this Pokémon in this pal park area. */
	rate: number;
	/** The Pokémon species being encountered. */
	pokemon_species: PokemonSpecies;
}

export interface Region {
	id: number;
	locations: Array<Location>;
	name: string;
	names: Array<Name>;
	main_generation: Generation;
	pokedexes: Array<Pokedex>;
	version_groups: Array<VersionGroup>;
}
