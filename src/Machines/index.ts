import {NamedAPIResource} from '../Resources';

interface VersionGroup {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/** Order for sorting. Almost by date of release, except similar versions are grouped together. */
	order: number;
}

interface Machine {
	/** The identifier for this resource. */
	id: number;
	/** The TM or HM item that corresponds to this machine. */
	item: NamedAPIResource;
	/** The move that is taught by this machine. */
	move: NamedAPIResource;
	version_group: VersionGroup;
}
