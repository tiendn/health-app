export const fetcher = (args: any) => {
	const params = new URLSearchParams();
	if (args.args) {
		Object.entries(args.args).forEach(([key, value]) => {
			if (value) params.append(key, `${value}`);
		});
	}

	return fetch((args.url || args) + "?" + params.toString()).then((res) => res.json());
};
