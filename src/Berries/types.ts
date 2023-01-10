import fetch from 'node-fetch';
import {NamedAPIResource} from '../Resources';

interface Barry {
	id: number;
	name: string;
	growth_time: number;
	max_harvest: number;
	natural_gift_power: number;
	size: number;
	smoothness: number;
	soil_dryness: number;
	firmness: NamedAPIResource;
	flavors: Array<BerryFlavorMap>;
	item: NamedAPIResource;
	natural_gift_type: NamedAPIResource;
}

interface BerryFlavorMap {
	potency: number;
	flavor: NamedAPIResource;
}

interface BerryFirmness {
	id: number;
	name: string;
	berries: Array<NamedAPIResource>;
	names: Array<Name>;
}

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

export type {Barry, BerryFlavorMap, BerryFirmness, BerryFlavor, FlavorBerryMap};
