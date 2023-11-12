import { BodyData } from "@/types";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

const useBodyData = (): {
	data: BodyData[] | undefined;
	isLoading: boolean;
	error: Error | undefined;
} => {
	const { data, error } = useSWR<BodyData[]>("/api/body", fetcher);

	return {
		data,
		isLoading: !error && !data,
		error,
	};
};

export default useBodyData;
