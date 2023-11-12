import { Colors } from "@/theme/colors";
import React from "react";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Legend,
	Bar,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import styles from "./style.module.scss";

interface LineChartProps {
	data: any;
	width: number;
	height: number;
	header?: JSX.Element;
	footer?: JSX.Element;
	backgroundColor: string;
	lines: { key: string; color: string }[];
}

const LineChartComponent = ({
	header,
	backgroundColor,
	footer,
	width,
	height,
	data,
	lines,
}: LineChartProps) => {
	return (
		<div
			className={styles.lineChartContainer}
			style={{ backgroundColor, padding: "15px 56px" }}
		>
			{header}
			<ResponsiveContainer width={width} height={height}>
				<LineChart data={data} style={{}}>
					{lines.map((line) => (
						<Line
							strokeWidth={3}
							key={line.key}
							dataKey={line.key}
							stroke={line.color}
						/>
					))}
					<Tooltip />
					<CartesianGrid horizontal={false} stroke={Colors.gray[400]} />
					<XAxis dataKey="name" />
					{/* <YAxis /> */}
				</LineChart>
			</ResponsiveContainer>
			{footer}
		</div>
	);
};

export default LineChartComponent;
