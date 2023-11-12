type MealType = "morning" | "lunch" | "dinner" | "snack";

interface MealHistory {
	id: number;
	image: string;
	note: string;
	type: string;
}

interface BodyData {
	name: string;
	weight: number;
	fat: number;
}

interface DiaryData {
	id: number;
	timestamp: number;
	title: string;
	content: string;
}

interface DietData {
	id: number;
	timestamp: number;
	title: string;
	tags: string[];
	image: string;
}

interface ExerciseData {
	id: number;
	title: string;
	kcal: number;
	duration: number;
}

interface ApiResponsePagination {
	total: number;
	page: number;
	limit: number;
}

export interface ApiResponse<T> extends ApiResponsePagination {
	data: T[];
}
