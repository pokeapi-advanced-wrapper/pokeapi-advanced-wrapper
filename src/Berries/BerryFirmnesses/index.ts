import fetch from 'node-fetch';
import {NamedAPIResource} from '../../Resources';

interface BerryFirmness {
	id: number;
	name: string;
	berries: Array<NamedAPIResource>;
	names: Array<Name>;
}

export type {BerryFirmness};
