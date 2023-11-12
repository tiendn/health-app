import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import Fonts from "@/theme/fonts";

interface CircleProgressProps {
	date: string;
	radius?: number;
	percentage: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage, radius = 90.5, date }) => {
	const size = radius * 2;
	const circumference = 2 * Math.PI * radius;
	const progressOffset = circumference - (percentage / 100) * circumference;

	return (
		<>
			<svg className={styles.circleProgress} width={size} height={size}>
				<circle
					className={styles.progressBar}
					cx={radius}
					cy={radius}
					r={radius}
					strokeWidth="3" // Adjust the stroke width as needed
					strokeDasharray={circumference}
					strokeDashoffset={progressOffset}
				/>
			</svg>
			<div className={clsx(styles.circleProgressContent, Fonts.inter.className)}>
				<span className={styles.circleProgressDate}>{date}</span>
				<span className={styles.circleProgressText}>{percentage}%</span>
			</div>
		</>
	);
};

export default CircleProgress;
