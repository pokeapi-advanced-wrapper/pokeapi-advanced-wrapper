import {APIResource, Description, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect} from './common_types';
import {AbilityEffectChange} from './pokemon';

export interface Move {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The percent value of how likely this move is to be successful. */
	accuracy: number;
	/** The percent value of how likely it is this moves effect will happen. */
	effect_chance: number;
	/** Power points. The number of times this move can be used. */
	pp: number;
	/** A value between -8 and 8. Sets the order in which moves are executed during battle. See Bulbapedia for greater detail. */
	priority: number;
	/** The base power of this move with a value of 0 if it does not have a base power. */
	power: number;
	/** A detail of normal and super contest combos that require this move. */
	contest_combos: ContestComboSets;
	/** The type of appeal this move gives a Pokémon when used in a contest. */
	contest_type: NamedAPIResource;
	/** The effect the move has when used in a contest. */
	contest_effect: APIResource;
	/** The type of damage the move inflicts on the target, e.g. physical. */
	damage_class: NamedAPIResource;
	/** The effect of this move listed in different languages. */
	effect_entries: Array<VerboseEffect>;
	/** The list of previous effects this move has had across version groups of the games. */
	effect_changes: Array<AbilityEffectChange>;
	/** List of Pokemon that can learn the move */
	learned_by_pokemon: Array<NamedAPIResource>;
	/** The flavor text of this move listed in different languages. */
	flavor_text_entries: Array<MoveFlavorText>;
	/** The generation in which this move was introduced. */
	generation: NamedAPIResource;
	/** A list of the machines that teach this move. */
	machines: Array<MachineVersionDetail>;
	/** Metadata about this move */
	meta: MoveMetaData;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** A list of move resource value changes across version groups of the game. */
	past_values: Array<PastMoveStatValues>;
	/** A list of stats this moves effects and how much it effects them. */
	stat_changes: Array<MoveStatChange>;
	/** The effect the move has when used in a super contest. */
	super_contest_effect: APIResource;
	/** The type of target that will receive the effects of the attack. */
	target: NamedAPIResource;
	/** The elemental type of this move. */
	type: NamedAPIResource;
}

export interface ContestComboSets {
	/** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
	normal: ContestComboDetail;
	/** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
	super: ContestComboDetail;
}

export interface ContestComboDetail {
	/** A list of moves to use before this move. */
	use_before: Array<NamedAPIResource>;
	/** A list of moves to use after this move. */
	use_after: Array<NamedAPIResource>;
}

export interface MoveFlavorText {
	/** The localized flavor text for an api resource in a specific language. */
	flavor_text: string;
	/** The language this name is in. */
	language: NamedAPIResource;
	/** The version group that uses this flavor text. */
	version_group: NamedAPIResource;
}

export interface MoveMetaData {
	/** The status ailment this move inflicts on its target. */
	ailment: NamedAPIResource;
	/** The category of move this move falls under, e.g. damage or ailment. */
	category: NamedAPIResource;
	/** The minimum number of times this move hits. Null if it always only hits once. */
	min_hits: number;
	/** The maximum number of times this move hits. Null if it always only hits once. */
	max_hits: number;
	/** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
	min_turns: number;
	/** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
	max_turns: number;
	/** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
	drain: number;
	/** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
	healing: number;
	/** Critical hit rate bonus. */
	crit_rate: number;
	/** The likelihood this attack will cause an ailment. */
	ailment_chance: number;
	/** The likelihood this attack will cause the target Pokémon to flinch. */
	flinch_chance: number;
	/** The likelihood this attack will cause a stat change in the target Pokémon. */
	stat_chance: number;
}

export interface MoveStatChange {
	/** The amount of change. */
	change: number;
	/** The stat being affected. */
	stat: NamedAPIResource;
}

export interface PastMoveStatValues {
	/** The percent value of how likely this move is to be successful. */
	accuracy: number;
	/** The percent value of how likely it is this moves effect will take effect. */
	effect_chance: number;
	/** The base power of this move with a value of 0 if it does not have a base power. */
	power: number;
	/** Power points. The number of times this move can be used. */
	pp: number;
	/** The effect of this move listed in different languages. */
	effect_entries: Array<VerboseEffect>;
	/** The elemental type of this move. */
	type: NamedAPIResource;
	/** The version group in which these move stat values were in effect. */
	version_group: NamedAPIResource;
}

/** Move Ailments */
export interface MoveAilment {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A list of moves that cause this ailment. */
	moves: Array<NamedAPIResource>;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

/** Move Battle Styles */
export interface MoveBattleStyle {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

/** Move Categories */
export interface MoveCategory {
	/**The identifier for this resource.  */
	/**  */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A list of moves that fall into this category. */
	moves: Array<NamedAPIResource>;
	/** The description of this resource listed in different languages. */
	descriptions: Array<Description>;
}

/** Move Damage Classes */
export interface MoveDamageClass {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The description of this resource listed in different languages. */
	descriptions: Array<Description>;
	/** A list of moves that fall into this damage class. */
	moves: Array<NamedAPIResource>;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

/** Move Learn Methods */
export interface MoveLearnMethod {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The description of this resource listed in different languages. */
	descriptions: Array<Description>;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** A list of version groups where moves can be learned through this method. */
	version_groups: Array<NamedAPIResource>;
}

/** Move Targets */
export interface MoveTarget {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The description of this resource listed in different languages. */
	descriptions: Array<Description>;
	/** A list of moves that that are directed at this target. */
	moves: Array<NamedAPIResource>;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}
