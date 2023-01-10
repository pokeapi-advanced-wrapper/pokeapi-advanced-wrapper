import AsyncHandler from './async-tool';

test('async-tool.ts TEST', async () => {
	const _json = await AsyncHandler(() =>
		fetch('https://jsonplaceholder.typicode.com/google').then((res) => res.json()),
	);
	if (!(_json instanceof Object && Object.keys(_json).length === 0)) {
		throw new Error(`요청을 제대로 처리하지 못 함.`);
	}
});
