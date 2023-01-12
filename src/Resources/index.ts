import URLHandler, {Wrapper as URLHandlerWrapper} from './url-tool';
import AsyncHandler from '../common-lib/async-tool';
import fetch from 'node-fetch';
import type {NamedAPIResource} from '../@types/common_types';

interface NamedAPIResourceList {
	/** The total number of resources available from this API. */
	count: number;
	/** The URL for the next page in the list. */
	next: string;
	/** The URL for the previous page in the list. */
	previous: string;
	/** A list of named API resources. */
	results: Array<NamedAPIResource>;
}

interface RequestState {
	/** URLHandler Wrapper Closure Type */
	options: URLHandlerWrapper;
	/** 재시도 횟수 */
	retry: number;
	/** 요청 결과 */
	json?: NamedAPIResourceList | Error;
}

/** Wrapper Type */
interface Wrapper {
	// params setter
	/** set limit */
	setLimit: (_limit: number) => Wrapper;
	/** set offset */
	setOffset: (_offset: number) => Wrapper;
	/** 재시도 횟수 지정 */
	setRetry: (_retry: number) => Wrapper;
	// params getter
	/** get limit */
	getLimit: () => number;
	/** get offset */
	getOffset: () => number;
	/** 재시도 횟수 */
	getRetry: () => number;
	// states
	/** 데이터 비어있음 여부 */
	isEmpted: () => boolean;
	/** 요청 오류 여부 */
	isError: () => boolean;
	/** 데이터 유효성 */
	isValid: () => boolean;
	// behaviors
	/** 데이터 요청 */
	request: () => Promise<Wrapper>;
	// requested results
	/** JSON 해석 데이터 */
	getData: () => NamedAPIResourceList | undefined;
	/** 모든 리소스의 개수 */
	getLength: () => number | undefined;
	/** 리소스 리스트 */
	getResults: () => Array<NamedAPIResource> | undefined;
}

const RequestHandler = (options?: {
	/** 재시도 횟수 */
	retry: number;
}) => {
	const {retry = 5} = options || {};
	const data: RequestState = {
		options: URLHandler(),
		retry,
	};

	const wrapper = function (data: RequestState): Wrapper {
		const request = async () => {
			const _params = data.options.toString();
			const _request = () =>
				fetch(`https://pokeapi.co/api/v2/ability/?${_params}`).then(
					(res) => res.json() as Promise<NamedAPIResourceList>,
				);

			data.json = await AsyncHandler(_request, {retry: 5});

			return wrapper(data);
		};

		const setLimit = (_limit: number) => {
			data.options.setLimit(_limit);
			return wrapper(data);
		};

		const setOffset = (_offset: number) => {
			data.options.setOffset(_offset);
			return wrapper(data);
		};

		const setRetry = (_retry: number) => {
			data.retry = _retry;
			return wrapper(data);
		};

		const getLimit = () => data.options.getLimit();
		const getOffset = () => data.options.getOffset();
		const getRetry = () => data.retry;

		const isEmpted = () => !data.json;
		const isError = () => data.json instanceof Error;
		const isValid = () => !(isEmpted() || isError());

		const getData = () => (isValid() ? (data.json as NamedAPIResourceList) : undefined);
		const getLength = () => getData()?.count;
		const getResults = () => getData()?.results;

		return {
			setLimit,
			setOffset,
			setRetry,
			getLimit,
			getOffset,
			getRetry,
			isEmpted,
			isError,
			isValid,
			request,
			getData,
			getLength,
			getResults,
		};
	};

	return wrapper(data);
};

/** 모든 리소스 데이터 불러오기 */
const getAllResources = async () =>
	RequestHandler()
		.request()
		.then((res) => {
			const _length = res.getLength();
			if (!_length) throw new Error(`데이터 호출 실패`);
			return _length;
		})
		.then((_length) => RequestHandler().setLimit(_length).setOffset(0).request());

export type {NamedAPIResource, NamedAPIResourceList};
export {RequestHandler as ResourcesList, getAllResources};
export default RequestHandler;
