import fetch from 'node-fetch';
import {Berry, BerryFirmness, BerryFlavorMap} from '../@types/berries';
import {Item} from '../@types/items';
import {Type} from '../@types/pokemon';

/**
 * URL 형태 만들기
 * @param param ID/NAME
 * @returns
 */
const URLForm = (param: string) => `https://pokeapi.co/api/v2/berry/${param}`;

/** Wrapper 함수 간에 공유되는 상태값 모음 */
interface States {
	params: string;

	/** 요청 결과 */
	data?: Berry;

	/** 오류 객체 정보 */
	error?: Error;
}

interface Wrapper {
	// 데이터 확인
	getData: () => Berry | undefined;
	getID: () => number | undefined;
	getName: () => string | undefined;
	/** 열매 나무가 한 단계를 성장하는데 걸리는 시간 (총 4단계) */
	getGrowthTime: () => number | undefined;
	/** 4단계 나무에서 나올 수 있는 최대 열매 수 */
	getMaxHarvest: () => number | undefined;
	/** The power of the move "Natural Gift" when used with this Berry. */
	getNaturalGiftPower: () => number | undefined;
	getSize: () => number | undefined;
	getSmoothness: () => number | undefined;
	getSoilDryness: () => number | undefined;
	getFirmness: () => BerryFirmness | undefined;
	getFlavors: () => BerryFlavorMap[] | undefined;
	getItem: () => Item | undefined;
	getNaturalGiftType: () => Type | undefined;

	// 가공 함수
	getSizeAsString: () => string | undefined;

	// 파라미터 함수
	setParams: (_param: string) => Wrapper;
	getParams: () => string;

	// 행동 함수
	request: () => Promise<Wrapper>;

	// 오류 정보
	isError: () => boolean;
	getError: () => Error | undefined;
}

const Berries = async (params: string) => {
	const data: States = {
		params,
	};

	const wrapper = (data: States): Wrapper => {
		const getData = () => data.data;

		const getID = () => getData()?.id;
		const getName = () => getData()?.name;
		const getGrowthTime = () => getData()?.growth_time;
		const getMaxHarvest = () => getData()?.max_harvest;
		const getNaturalGiftPower = () => getData()?.natural_gift_power;
		const getSize = () => getData()?.size;
		const getSmoothness = () => getData()?.smoothness;
		const getSoilDryness = () => getData()?.soil_dryness;
		const getFirmness = () => getData()?.firmness;
		const getFlavors = () => getData()?.flavors;
		const getItem = () => getData()?.item;
		const getNaturalGiftType = () => getData()?.natural_gift_type;

		// 가공 함수
		const getSizeAsString = () => {
			const _size = getSize();
			return _size ? `${_size.toLocaleString()} mm` : undefined;
		};

		// 파라미터 함수
		const setParams = (_params: string) => {
			data.params = _params;
			return wrapper(data);
		};

		const getParams = () => data.params;

		// 행동 함수
		const request = async () => {
			try {
				data.data = (await fetch(URLForm(data.params)).then((res) => res.json())) as Berry;
			} catch (err) {
				data.error = err as Error;
			}
			return wrapper(data);
		};

		const isError = () => data.error instanceof Error;
		const getError = () => data.error;

		return {
			getData,
			getID,
			getName,
			getGrowthTime,
			getMaxHarvest,
			getNaturalGiftPower,
			getSize,
			getSmoothness,
			getSoilDryness,
			getFirmness,
			getFlavors,
			getItem,
			getNaturalGiftType,

			getSizeAsString,

			setParams,
			getParams,

			request,

			isError,
			getError,
		};
	};

	return wrapper(data);
};

export {Berries};
