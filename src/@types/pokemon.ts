import {Description, Effect, Name, NamedAPIResource, VerboseEffect} from './common_types';

export interface Abilities {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** Whether or not this ability originated in the main series of the video games. */
	is_main_series: boolean;
	/** The generation this ability originated in. */
	generation: NamedAPIResource;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** The effect of this ability listed in different languages. */
	effect_entries: Array<VerboseEffect>;
	/** The list of previous effects this ability has had across version groups. */
	effect_changes: Array<AbilityEffectChange>;
	/** The flavor text of this ability listed in different languages. */
	flavor_text_entries: Array<AbilityFlavorText>;
	/** A list of Pokémon that could potentially have this ability. */
	pokemon: Array<AbilityPokemon>;
}

export interface AbilityEffectChange {
	/** The previous effect of this ability listed in different languages. */
	effect_entries: Array<Effect>;
	/** The version group in which the previous effect of this ability originated. */
	version_group: NamedAPIResource;
}

export interface AbilityFlavorText {
	/** The localized name for an API resource in a specific language. */
	flavor_text: string;
	/** The language this text resource is in. */
	language: NamedAPIResource;
	/** The version group that uses this flavor text. */
	version_group: NamedAPIResource;
}

export interface AbilityPokemon {
	/** Whether or not this a hidden ability for the referenced Pokémon. */
	is_hidden: boolean;
	/** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
	slot: number;
	/** The Pokémon this ability could belong to. */
	pokemon: NamedAPIResource;
}

/** Characteristics */
export interface Characteristic {
	/** The identifier for this resource. */
	id: number;
	/** The remainder of the highest stat/IV divided by 5. */
	gene_modulo: number;
	/** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5. */
	possible_values: Array<number>;
}

/** Egg Groups */
export interface EggGroup {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** A list of all Pokémon species that are members of this egg group. */
	pokemon_species: Array<NamedAPIResource>;
}

/** Genders */
export interface Gender {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A list of Pokémon species that can be this gender and how likely it is that they will be. */
	pokemon_species_details: Array<PokemonSpeciesGender>;
	/** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
	required_for_evolution: Array<NamedAPIResource>;
}

export interface PokemonSpeciesGender {
	/** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
	rate: number;
	/** A Pokémon species that can be the referenced gender. */
	pokemon_species: NamedAPIResource;
}

/** Growth Rates */
export interface GrowthRate {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The formula used to calculate the rate at which the Pokémon species gains level. */
	formula: string;
	/** The descriptions of this characteristic listed in different languages. */
	descriptions: Array<Description>;
	/** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
	levels: Array<GrowthRateExperienceLevel>;
	/** A list of Pokémon species that gain levels at this growth rate. */
	pokemon_species: Array<NamedAPIResource>;
}

export interface GrowthRateExperienceLevel {
	/** The level gained. */
	level: number;
	/** The amount of experience required to reach the referenced level. */
	experience: number;
}

/** Natures */
