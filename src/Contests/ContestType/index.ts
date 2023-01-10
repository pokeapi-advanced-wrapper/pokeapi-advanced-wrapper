import fetch from 'node-fetch';
import {NamedAPIResource} from '../../Resources';

interface ContestType {
	id: number;
	name: string;
	berry_flavor: NamedAPIResource;
	names: Array<ContestName>;
}

interface ContestName {
	name: string;
	color: string;
	language: NamedAPIResource;
}

export {ContestType, ContestName};
