/** 옵션 타입 */
interface URLOptions {
  limit: number
  offset: number
}

/** 래퍼 반환 자료형 (함수 모음 자료형) */
interface Wrapper {
  /** limit 정보 지정 함수 */
  setLimit: (v: number) => Wrapper
  /** offset 정보 지정 함수 */
  setOffset: (v: number) => Wrapper
  /** limit 정보 호출 함수 */
  getLimit: () => number
  /** offset 정보 호출 함수 */
  getOffset: () => number
  /** URL 파라미터 문자열 호출 함수 */
  toString: () => string
}

const URLHandler = () => {
  const data: URLOptions = {
    limit: 20,
    offset: 20
  }

  const wrapper = (data: URLOptions): Wrapper => {
    const toString = () => {
      const _params = new URLSearchParams()
      for (const v in data)
        _params.append(v, data[v]);
      return _params.toString();
    }

    const setLimit = (v: number) => {
      data.limit = v;
      return wrapper(data);
    }
    const setOffset = (v: number) => {
      data.offset = v;
      return wrapper(data);
    }

    const getLimit = () => data.limit;
    const getOffset = () => data.offset;

    return {
      setLimit, setOffset,
      getLimit, getOffset,
      toString
    }
  }

  return wrapper(data);
}

export default URLHandler;
export type { URLOptions, Wrapper }