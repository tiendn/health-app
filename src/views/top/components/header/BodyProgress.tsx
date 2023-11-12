import LineChartComponent from "@/components/common/LineChart";
import Loading from "@/components/common/Loading";
import useBodyData from "@/hook/useBodyData";
import useWindowSize from "@/hook/useWindowSize";
import { Colors } from "@/theme/colors";
import React from "react";

const lines = [
	{ key: "weight", color: Colors.primary[500] },
	{ key: "fat", color: Colors.secondary[300] },
];

const BodyProgress: React.FC = () => {
	const size = useWindowSize();
	const { data, isLoading } = useBodyData();

	return (
		<div>
			{isLoading ? (
				<Loading />
			) : (
				<LineChartComponent
					lines={lines}
					data={data}
					height={312 - 30}
					width={size.width * 0.58}
					backgroundColor={Colors.dark[600]}
				/>
			)}
		</div>
	);
};

export default BodyProgress;
