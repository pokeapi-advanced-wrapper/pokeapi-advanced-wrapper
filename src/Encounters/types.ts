import {NamedAPIResource} from '../Resources';

interface EncounterMethod {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A good value for sorting. */
	order: number;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

interface EncounterCondition {
	id: number;
	name: string;
	names: Array<Name>;
	values: Array<NamedAPIResource>;
}

interface EncounterConditionValue {
	id: number;
	name: string;
	condition: NamedAPIResource;
	names: Array<Name>;
}

export {EncounterMethod, EncounterCondition, EncounterConditionValue};
