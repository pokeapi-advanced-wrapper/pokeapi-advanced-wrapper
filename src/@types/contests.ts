import {BerryFlavor} from './berries';
import {Language} from './language';
import {Effect, FlavorText} from './common_types';
import {Move} from './Moves';

/** Contest Types */
export interface ContestType {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The berry flavor that correlates with this contest type. */
	berry_flavor: BerryFlavor;
	/** The name of this contest type listed in different languages. */
	names: Array<ContestName>;
}
/** Contest Types */
export interface ContestName {
	/** The name for this contest. */
	name: string;
	/** The color associated with this contest's name. */
	color: string;
	language: Language;
}

/** Contest Effects */
export interface ContestEffect {
	/** The identifier for this resource. */
	id: number;
	/** The base number of hearts the user of this move gets. */
	appeal: number;
	/** The base number of hearts the user's opponent loses. */
	jam: number;
	/** The result of this contest effect listed in different languages. */
	effect_entries: Array<Effect>;
	/** The flavor text of this contest effect listed in different languages. */
	flavor_text_entries: Array<FlavorText>;
}

/** Super Contest Effects */
export interface SuperContestEffect {
	/** The identifier for this resource. */
	id: number;
	/** The level of appeal this super contest effect has. */
	appeal: number;
	/** The flavor text of this super contest effect listed in different languages. */
	flavor_text_entries: Array<FlavorText>;
	/** A list of moves that have the effect when used in super contests. */
	moves: Array<Move>;
}
