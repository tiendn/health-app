// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bodyData from "../../mock/meal-history.json";
import { ApiResponse, MealHistory } from "@/types";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse<MealHistory>>
) {
	const { page = 1, limit = 8, type = "morning" } = req.query;

	const result = bodyData
		.filter((d) => d.type === type)
		.slice((Number(page) - 1) * Number(limit), Number(limit) * Number(page));

	res.status(200).json({
		data: result,
		total: bodyData.length,
		page: Number(page),
		limit: Number(limit),
	});
}
