import { BodyData, ExerciseData } from "@/types";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

const useExercise = (): {
	data: ExerciseData[] | undefined;
	isLoading: boolean;
	error: Error | undefined;
} => {
	const { data, error } = useSWR<ExerciseData[]>("/api/exercise", fetcher);

	return {
		data,
		isLoading: !error && !data,
		error,
	};
};

export default useExercise;
