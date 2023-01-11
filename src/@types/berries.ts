import {Name} from './common_types';
import {ContestType} from './contests';

export interface Berry {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/**
	 * Time it takes the tree to grow one stage, in hours.
	 * Berry trees go through four of these growth stages before they can be picked.
	 */
	growth_time: number;
	/** The maximum number of these berries that can grow on one tree in Generation IV. */
	max_harvest: number;
	/** The power of the move "Natural Gift" when used with this Berry. */
	natural_gift_power: number;
	/** The size of this Berry, in millimeters. */
	size: number;
	/** The smoothness of this Berry, used in making Pokéblocks or Poffins. */
	smoothness: number;
	/**
	 * The speed at which this Berry dries out the soil as it grows.
	 * A higher rate means the soil dries more quickly.
	 */
	soil_dryness: number;
	/** The firmness of this berry, used in making Pokéblocks or Poffins. */
	firmness: BerryFirmness;
	/** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry. */
	flavors: Array<BerryFlavorMap>;
	/** Berries are actually items. This is a reference to the item specific data for this berry. */
	item: Item;
	/** The type inherited by "Natural Gift" when used with this Berry. */
	natural_gift_type: Type;
}

export interface BerryFlavorMap {
	/** How powerful the referenced flavor is for this berry. */
	potency: number;
	/** The referenced berry flavor. */
	flavor: BerryFlavor;
}

/** Berry Firmnesses */
export interface BerryFirmness {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A list of the berries with this firmness. */
	berries: Array<Berry>;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

/** Berry Flavors */
export interface BerryFlavor {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** A list of the berries with this flavor. */
	berries: Array<FlavorBerryMap>;
	/** The contest type that correlates with this berry flavor. */
	contest_type: ContestType;
	/** The name of this resource listed in different languages. */
	names: Array<Name>;
}

/** Berry Flavors */
export interface FlavorBerryMap {
	/** How powerful the referenced flavor is for this berry. */
	potency: number;
	/** The berry with the referenced flavor. */
	berry: Berry;
}
