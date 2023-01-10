import URLHandler, {Wrapper as URLHandlerWrapper} from './url-tool';
import AsyncHandler from '../async-tool';
import fetch from 'node-fetch';

interface NamedAPIResource {
	/** The name of the referenced resource. */
	name: string;
	/** The URL of the referenced resource. */
	url: string;
}

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
	retry: number;
	/** 요청 결과 */
	json?: NamedAPIResourceList | Error;
}

const RequestHandler = ({
	retry = 5,
}: {
	/** 재시도 횟수 */
	retry: number;
}) => {
	const data: RequestState = {
		options: URLHandler(),
		retry,
	};

	const wrapper = function (data: RequestState) {
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

		const getLimit = () => data.options.getLimit();
		const getOffset = () => data.options.getOffset();

		const isEmpted = () => !data.json;
		const isError = () => data.json instanceof Error;
		const isValid = () => !(isEmpted() || isError());

		const getData = () => (isValid() ? (data.json as NamedAPIResourceList) : undefined);
		const getLength = () => getData()?.count;
		const getResults = () => getData()?.results;

		return {
			// 파라미터 지정 함수
			/** limit 파라미터 지정 함수 */
			setLimit,
			/** offset 파라미터 지정 함수 */
			setOffset,

			// 파라미터 값 호출 함수
			getLimit,
			getOffset,

			// 유효성 함수
			/** 비어있음 여부 함수 */
			isEmpted,
			/** 오류 여부 함수 */
			isError,
			/**
			 * 유효성 함수.
			 * 유효성 검사 툴은 아직 도입되지 않아 간접적으로 값을 추정합니다.
			 */
			isValid,

			// 행동 함수
			request,

			// 데이터 호출 함수
			getData,
			/** 총 데이터 길이 */
			getLength,
			/** 데이터 결과 */
			getResults,
		};
	};

	return wrapper(data);
};

export type {NamedAPIResource, NamedAPIResourceList};
export {RequestHandler as ResourcesList};
export default RequestHandler;
