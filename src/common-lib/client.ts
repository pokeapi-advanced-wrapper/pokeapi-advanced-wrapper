import fetch from 'node-fetch';

interface Params {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	url: string;
	body?: Object;
}

/**
 * 타입스크립트용 요청 함수.
 * 반환값을 R 형태로 간주한다.
 *
 * @param params
 * @returns
 */
const request = <R>(params: Params, validator: (v: Object) => boolean = (v) => true): Promise<R> =>
	fetch(params.url, {
		// NOTE : 메소드 기본값 = GET
		method: params.method || 'GET',
		// NOTE : body는 body 인자가 입력된 경우에만. 자동으로 JSON.stringify를 진행하여 요청.
		body: params.body ? JSON.stringify(params.body) : undefined,
	})
		.then((res) => res.json() as Object)
		.then((res) => {
			if (validator(res)) return res as R;
			return Promise.reject(`유효하지 않은 자료형입니다.`);
		});

export default request;
export {request};
