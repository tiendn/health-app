import { ApiResponse, MealHistory, MealType } from "@/types";
import { fetcher } from "@/utils/fetcher";
import { resolve } from "path";
import { useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";

const useMealHistory = ({
	page,
	type,
}: {
	page: number;
	type: MealType | "";
}): {
	data: ApiResponse<MealHistory> | undefined;
	isLoading: boolean;
	error: Error | undefined;
} => {
	const localDataObject = useRef<{ [t: number]: MealHistory[] }>({});
	const [localData, setLocalData] = useState<MealHistory[]>([]);

	const { data, error } = useSWR({ url: "/api/meal", args: { page, type } }, fetcher);

	useEffect(() => {
		let result: MealHistory[] = [];
		if (data) {
			localDataObject.current[page] = data.data;

			Object.keys(localDataObject.current).forEach(
				(key: any) => (result = result.concat(localDataObject.current[key]))
			);
			setLocalData(result);
		}
	}, [data, page]);

	useEffect(() => {
		localDataObject.current = {};
	}, [type]);

	return {
		data: {
			...data,
			data: localData || [],
		},
		isLoading: !error && !data,
		error,
	};
};

export default useMealHistory;
