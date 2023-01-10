import fetch from 'node-fetch';
import {NamedAPIResource} from '../../Resources';

interface BerryFlavor {
	id: number;
	name: string;
	berries: Array<FlavorBerryMap>;
	names: Array<Name>;
}

interface FlavorBerryMap {
	potency: number;
	berry: NamedAPIResource;
}

export {BerryFlavor, FlavorBerryMap};
