import {
	APIResource,
	Description,
	Effect,
	GenerationGameIndex,
	MachineVersionDetail,
	Name,
	NamedAPIResource,
	VerboseEffect,
	VersionGroupFlavorText,
} from './common_types';

/** Item  */
export interface Item {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The price of this item in stores. */
	cost: number;
	/** The power of the move Fling when used with this item. */
	fling_power: number;
	/** The effect of the move Fling when used with this item. */
	fling_effect: NamedAPIResource;
	/** A list of attributes this item has. */
	attributes: Array<NamedAPIResource>;
	/** The category of items this item falls into. */
	category: NamedAPIResource;
	/** The effect of this ability listed in different languages. */
	effect_entries: Array<VerboseEffect>;
	/** The flavor text of this ability listed in different languages. */
	flavor_text_entries: Array<VersionGroupFlavorText>;
	/** A list of game indices relevent to this item by generation. */
	game_indices: Array<GenerationGameIndex>;
	/** The name of this item listed in different languages. */
	names: Array<Name>;
	/** A set of sprites used to depict this item in the game. */
	sprites: ItemSprites;
	/** A list of Pokémon that might be found in the wild holding this item. */
	held_by_pokemon: Array<ItemHolderPokemon>;
	/** An evolution chain this item requires to produce a bay during mating. */
	baby_trigger_for: APIResource;
	/** A list of the machines related to this item. */
	machines: Array<MachineVersionDetail>;
}

export interface ItemSprites {
	/** The default depiction of this item. */
	default: string;
}

export interface ItemHolderPokemon {
	/** The Pokémon that holds this item. */
	pokemon: NamedAPIResource;
	/** The details for the version that this item is held in by the Pokémon. */
	version_details: Array<ItemHolderPokemonVersionDetail>;
}

export interface ItemHolderPokemonVersionDetail {
	/** How often this Pokémon holds this item in this version. */
	rarity: number;
	/** The version that this item is held in by the Pokémon. */
	version: NamedAPIResource;
}

/** Item Attributes */
export interface ItemAttribute {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A list of items that have this attribute. */
	items: Array<NamedAPIResource>;
	/** The name of this item attribute listed in different languages. */
	names: Array<Name>;
	/** The description of this item attribute listed in different languages. */
	description: Array<Description>;
}

/** Item Categories */
export interface ItemCategory {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A list of items that are a part of this category. */
	items: Array<NamedAPIResource>;
	/** The name of this item category listed in different languages. */
	names: Array<Name>;
	/** The pocket items in this category would be put in. */
	pocket: NamedAPIResource;
}

/** Item Fling Effects */
export interface ItemFlingEffect {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The result of this fling effect listed in different languages. */
	effect_entries: Array<Effect>;
	/** A list of items that have this fling effect. */
	items: Array<NamedAPIResource>;
}

/** Item Pockets */
export interface ItemPocket {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A list of item categories that are relevant to this item pocket. */
	categories: Array<NamedAPIResource>;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}
