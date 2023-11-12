// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bodyData from "../../mock/exercise.json";
import { ExerciseData } from "@/types";

export default function handler(req: NextApiRequest, res: NextApiResponse<ExerciseData[]>) {
	res.status(200).json(bodyData);
}
