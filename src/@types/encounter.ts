import {Name} from './common_types';

export interface EncounterMethod {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A good value for sorting. */
	order: number;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

export interface EncounterConditionValue {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The condition this encounter condition value pertains to. */
	condition: EncounterCondition;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

export interface EncounterCondition {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
	/** A list of possible values for this encounter condition. */
	values: Array<EncounterConditionValue>;
}
