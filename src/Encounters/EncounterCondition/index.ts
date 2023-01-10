import fetch from 'node-fetch';
import {NamedAPIResource} from '../../Resources';

interface EncounterCondition {
	id: number;
	name: string;
	names: Array<Name>;
	values: Array<NamedAPIResource>;
}

export {EncounterCondition};
