import {NamedAPIResource} from '../Resources';

interface EncounterMethod {
	id: number;
	name: string;
	order: number;
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
