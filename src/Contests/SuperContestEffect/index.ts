import fetch from 'node-fetch';
import {NamedAPIResource} from '../../Resources';

interface SuperContestEffect {
	id: number;
	appeal: number;
	flavor_text_entries: Array<FlavorText>;
	moves: Array<NamedAPIResource>;
}

export {SuperContestEffect};
