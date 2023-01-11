import {NamedAPIResource} from './common_types';
import {VersionGroup} from './games';

export interface Machine {
	/** The identifier for this resource. */
	id: number;
	/** The TM or HM item that corresponds to this machine. */
	item: NamedAPIResource;
	/** The move that is taught by this machine. */
	move: NamedAPIResource;
	version_group: VersionGroup;
}
