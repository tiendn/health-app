import { ApiResponse, DietData } from "@/types";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const useDiet = ({
	page,
}: {
	page: number;
}): {
	data: ApiResponse<DietData> | undefined;
	isLoading: boolean;
	error: Error | undefined;
} => {
	const localDataObject = useRef<{ [t: number]: DietData[] }>({});
	const [localData, setLocalData] = useState<DietData[]>([]);

	const { data, error } = useSWR({ url: "/api/diet", args: { page } }, fetcher);

	useEffect(() => {
		let result: DietData[] = [];
		if (data) {
			localDataObject.current[page] = data.data;

			Object.keys(localDataObject.current).forEach(
				(key: any) => (result = result.concat(localDataObject.current[key]))
			);
			setLocalData(result);
		}
	}, [data, page]);

	return {
		data: {
			...data,
			data: localData || [],
		},
		isLoading: !error && !data,
		error,
	};
};

export default useDiet;
