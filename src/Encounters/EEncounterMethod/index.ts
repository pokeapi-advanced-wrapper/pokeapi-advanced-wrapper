import fetch from 'node-fetch';

interface EncounterMethod {
	id: number;
	name: string;
	order: number;
	names: Array<Name>;
}

export {EncounterMethod};
