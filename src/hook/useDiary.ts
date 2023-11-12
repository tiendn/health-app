import { ApiResponse, DiaryData, MealHistory } from "@/types";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";

const useDiary = ({
	page,
}: {
	page: number;
}): {
	data: ApiResponse<DiaryData> | undefined;
	isLoading: boolean;
	error: Error | undefined;
} => {
	const localDataObject = useRef<{ [t: number]: DiaryData[] }>({});
	const [localData, setLocalData] = useState<DiaryData[]>([]);

	const { data, error } = useSWR({ url: "/api/diary", args: { page } }, fetcher);

	useEffect(() => {
		let result: DiaryData[] = [];
		if (data) {
			localDataObject.current[page] = data.data;

			Object.keys(localDataObject.current).forEach(
				(key: any) => (result = result.concat(localDataObject.current[key]))
			);
			setLocalData(result);
		}
	}, [data]);

	return {
		data: {
			...data,
			data: localData || [],
		},
		isLoading: !error && !data,
		error,
	};
};

export default useDiary;
