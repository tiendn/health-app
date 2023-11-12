import LineChartComponent from "@/components/common/LineChart";
import Loading from "@/components/common/Loading";
import useBodyData from "@/hook/useBodyData";
import useWindowSize from "@/hook/useWindowSize";
import { Colors } from "@/theme/colors";
import React from "react";
import styles from "./style.module.scss";
import Title from "../Title";
import PeriodList from "./PeriodList";

const lines = [
	{ key: "weight", color: Colors.primary[500] },
	{ key: "fat", color: Colors.secondary[300] },
];

const BodyRecord: React.FC = () => {
	const size = useWindowSize();
	const { data, isLoading } = useBodyData();

	return (
		<div className={styles.bodyRecord}>
			{isLoading ? (
				<Loading />
			) : (
				<LineChartComponent
					header={<Title date="2021.05.21" text="BODY RECORD" />}
					lines={lines}
					data={data}
					height={312}
					width={size.width * 0.58}
					backgroundColor={Colors.dark[500]}
					footer={<PeriodList />}
				/>
			)}
		</div>
	);
};

export default BodyRecord;
