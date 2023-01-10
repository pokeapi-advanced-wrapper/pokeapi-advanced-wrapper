import RequestHandler from '.';

test('Resources TEST', async () => {
	// 기본값 검사
	expect(RequestHandler().getRetry()).toEqual(5);
	expect(RequestHandler().getLimit()).toEqual(20);
	expect(RequestHandler().getOffset()).toEqual(20);

	const dump = await RequestHandler().request();
});
