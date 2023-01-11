import {Description, Effect, Name, NamedAPIResource, VerboseEffect, VersionGameIndex} from './common_types';

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
export interface Nature {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The stat decreased by 10% in Pokémon with this nature. */
	decreased_stat: NamedAPIResource;
	/** The stat increased by 10% in Pokémon with this nature. */
	increased_stat: NamedAPIResource;
	/** The flavor hated by Pokémon with this nature. */
	hates_flavor: NamedAPIResource;
	/** The flavor liked by Pokémon with this nature */
	likes_flavor: NamedAPIResource;
	/** A list of Pokéathlon stats this nature effects and how much it effects them. */
	pokeathlon_stat_changes: Array<NatureStatChange>;
	/** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
	move_battle_style_preferences: Array<MoveBattleStylePreference>;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

export interface NatureStatChange {
	/** The amount of change. */
	max_change: number;
	/** The stat being affected. */
	pokeathlon_stat: NamedAPIResource;
}

export interface MoveBattleStylePreference {
	/** Chance of using the move, in percent, if HP is under one half. */
	low_hp_preference: number;
	/** Chance of using the move, in percent, if HP is over one half. */
	high_hp_preference: number;
	/** The move battle style. */
	move_battle_style: NamedAPIResource;
}

/** Pokeathlon Stats */
export interface PokeathlonStat {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** A detail of natures which affect this Pokéathlon stat positively or negatively. */
	affecting_natures: NaturePokeathlonStatAffectSets;
}

export interface NaturePokeathlonStatAffectSets {
	/** A list of natures and how they change the referenced Pokéathlon stat. */
	increase: Array<NaturePokeathlonStatAffect>;
	/** A list of natures and how they change the referenced Pokéathlon stat. */
	decrease: Array<NaturePokeathlonStatAffect>;
}

export interface NaturePokeathlonStatAffect {
	/** The maximum amount of change to the referenced Pokéathlon stat. */
	max_change: number;
	/** The nature causing the change. */
	nature: NamedAPIResource;
}

/** Pokemon  */
export interface Pokemon {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The base experience gained for defeating this Pokémon. */
	base_experience: number;
	/** The height of this Pokémon in decimetres. */
	height: number;
	/** Set for exactly one Pokémon used as the default for each species. */
	is_default: boolean;
	/** Order for sorting. Almost national order, except families are grouped together. */
	order: number;
	/** The weight of this Pokémon in hectograms. */
	weight: number;
	/** A list of abilities this Pokémon could potentially have. */
	abilities: Array<PokemonAbility>;
	/** A list of forms this Pokémon can take on. */
	forms: Array<NamedAPIResource>;
	/** A list of game indices relevent to Pokémon item by generation. */
	game_indices: Array<VersionGameIndex>;
	/** A list of items this Pokémon may be holding when encountered. */
	held_items: Array<PokemonHeldItem>;
	/** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
	location_area_encounters: string;
	/** A list of moves along with learn methods and level details pertaining to specific version groups. */
	moves: Array<PokemonMove>;
	/** A list of details showing types this pokémon had in previous generations */
	past_types: Array<PokemonTypePast>;
	/** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites */
	sprites: PokemonSprites;
	/** The species this Pokémon belongs to. */
	species: NamedAPIResource;
	/** A list of base stat values for this Pokémon. */
	stats: Array<PokemonStat>;
	/** A list of details showing types this Pokémon has. */
	types: Array<PokemonType>;
}
