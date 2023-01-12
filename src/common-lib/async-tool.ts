interface Options {
	retry: number;
}

const AsyncHandler = async <T>(callback: () => Promise<T>, options?: Options) => {
	const _options: Options = options || {retry: 1};
	while (_options.retry-- > 0) {
		try {
			return await callback();
		} catch (err) {
			if (_options.retry === 0) return err as Error;
		}
	}
};

export default AsyncHandler;
