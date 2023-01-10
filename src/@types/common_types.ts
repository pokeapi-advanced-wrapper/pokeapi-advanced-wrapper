import {EncounterCondition, EncounterConditionValue, EncounterMethod} from './encounter';
import {Version, VersionGroup} from './games';
import {Language} from './language';

export {EncounterCondition, EncounterConditionValue, EncounterMethod};
export {Language};

export interface APIResource {
	/** The URL of the referenced resource. */
	url: string;
}

export interface Description {
	/** The localized description for an API resource in a specific language. */
	description: string;
	language: Language;
}

export interface Effect {
	/** The localized effect text for an API resource in a specific language. */
	effect: string;
	/** The language this effect is in. */
	language: Language;
}

export interface Encounter {
	/** The lowest level the Pokémon could be encountered at. */
	min_level: number;
	/** The highest level the Pokémon could be encountered at. */
	max_level: number;
	/** A list of condition values that must be in effect for this encounter to occur. */
	condition_values: EncounterConditionValue;
	/** Percent chance that this encounter will occur. */
	chance: number;
	/** The method by which this encounter happens. */
	method: EncounterMethod;
}

export interface FlavorText {
	/**
	 * The localized flavor text for an API resource in a specific language.
	 * Note that this text is left unprocessed as it is found in game files.
	 * This means that it contains special characters that one might want to replace with their visible decodable version.
	 * Please check out this issue to find out more.
	 */
	flavor_text: string;
	/** The language this name is in. */
	language: Language;
	/** The game version this flavor text is extracted from. */
	version: Version;
}

export interface GenerationGameIndex {
	/** The internal id of an API resource within game data. */
	game_index: number;
	/** The generation relevent to this game index. */
	/** @todo */
	generation: Generation;
}

export interface MachineVersionDetail {
	/** The machine that teaches a move from an item. */
	/** @todo */
	machine: Machine;
	/** The version group of this specific machine. */
	version_group: VersionGroup;
}

export interface Name {
	/** The localized name for an API resource in a specific language. */
	name: string;
	/** The language this name is in. */
	language: NamedAPIResource;
}

export interface NamedAPIResource {
	/** The name of the referenced resource. */
	name: string;
	/** The URL of the referenced resource. */
	url: string;
}

export interface VerboseEffect {
	/** The localized effect text for an API resource in a specific language. */
	effect: string;
	/** The localized effect text in brief. */
	short_effect: string;
	/** The language this effect is in. */
	language: Language;
}

export interface VersionEncounterDetail {
	/** The game version this encounter happens in. */
	version: Version;
	/** The total percentage of all encounter potential. */
	max_chance: number;
	/** A list of encounters and their specifics. */
	encounter_details: Encounter;
}

export interface VersionGameIndex {
	/** The internal id of an API resource within game data. */
	game_index: number;
	/** The version relevent to this game index. */
	version: Version;
}

export interface VersionGroupFlavorText {
	/** The localized name for an API resource in a specific language. */
	text: string;
	/** The language this name is in. */
	language: Language;
	/** The version group which uses this flavor text. */
	version_group: VersionGroup;
}
