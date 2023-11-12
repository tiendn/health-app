import React from "react";
import styles from "./style.module.scss";
import { ExerciseData } from "@/types";
import { Colors } from "@/theme/colors";
import clsx from "clsx";
import Fonts from "@/theme/fonts";

const ExerciseItem: React.FC<ExerciseData> = (data) => {
	return (
		<div
			className={styles.exerciseItem}
			style={{ borderBottom: `1px solid ${Colors.gray[400]}`, paddingBottom: 4 }}
		>
			<div className={clsx(styles.row)}>
				<span className={styles.exerciseItemDot}>●</span>
				<div className={styles.exerciseItemTitleKcal}>
					<span className={styles.exerciseItemTitle}>{data.title}</span>
					<span
						className={clsx(styles.exerciseItemKcal, Fonts.inter.className)}
						style={{ color: Colors.primary[300], fontSize: 15 }}
					>
						{data.kcal}kcal
					</span>
				</div>
			</div>
			<span
				className={clsx(styles.exerciseItemDuration, Fonts.inter.className)}
				style={{ color: Colors.primary[300], fontSize: 18 }}
			>
				{data.duration}
			</span>
		</div>
	);
};

export default ExerciseItem;
