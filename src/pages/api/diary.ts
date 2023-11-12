// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bodyData from "../../mock/diary.json";
import { ApiResponse, DiaryData, MealHistory } from "@/types";

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<DiaryData>>) {
	const { page = 1, limit = 8 } = req.query;

	const result = bodyData.slice((Number(page) - 1) * Number(limit), Number(limit) * Number(page));

	res.status(200).json({
		data: result,
		total: bodyData.length,
		page: Number(page),
		limit: Number(limit),
	});
}
