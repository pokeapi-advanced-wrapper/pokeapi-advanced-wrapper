import fetch from 'node-fetch'


/** 자원 정보 결과 형태 */
export interface NamedResourceResult {
  /** 자원 이름 */
  name: string;
  /** 자원 정보 조회용 URL  */
  url: string
}

/** Resources Lists/Pagination 반환값 정보 */
export interface NamedResources {
  count: number
  /** 다음 페이지 URL */
  next: string
  /** 이전 페이지 URL */
  previous: string
  results: Array<NamedResourceResult>
}

/** Resources Lists/Pagination 옵션 정보 */
export interface ResourcesOptions {
  limit: number,
  offset: number
}

export const Resources = (options: ResourcesOptions) => {
  const URLGenerator = (options: ResourcesOptions) => {
    const _params = new URLSearchParams();
    for (const k in options)
      _params.append(k, options[k])
    return `https://pokeapi.co/api/v2/ability/?${_params}`
  }

  try {
    return fetch(URLGenerator(options)).then(res => res.json())
  } catch (err) {
    console.error(err);
    return;
  }
}