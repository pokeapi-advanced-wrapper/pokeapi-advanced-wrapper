import URLHandler from './url-tool';

test('Resources/URLHandler TEST', () => {
	// 기본값 테스트
	expect(URLHandler().getLimit()).toEqual(20);
	expect(URLHandler().getOffset()).toEqual(20);

	// 값 저장 테스트
	expect(URLHandler().setLimit(30).getLimit()).toEqual(30);
	expect(URLHandler().setOffset(30).getOffset()).toEqual(30);

	// 파라미터 호출 테스트
	expect(URLHandler().setLimit(30).setOffset(30).toString()).toEqual('limit=30&offset=30');
});
