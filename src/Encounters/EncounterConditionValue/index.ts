import fetch from 'node-fetch';
import {NamedAPIResource} from '../../Resources';

interface EncounterConditionValue {
	id: number;
	name: string;
	condition: NamedAPIResource;
	names: Array<Name>;
}

export {EncounterConditionValue};
