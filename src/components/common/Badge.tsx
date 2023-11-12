import React from "react";
import styles from "./style.module.scss";
import { Colors } from "@/theme/colors";
import clsx from "clsx";
import Fonts from "@/theme/fonts";

interface BadgeProps {
	value: number;
	size?: number;
	backgroundColor?: string;
	textColor?: string;
}

const Badge = ({
	value,
	size = 16,
	backgroundColor = Colors.primary[500],
	textColor = Colors.light,
}: BadgeProps) => (
	<div
		className={styles.badge}
		style={{
			width: size,
			height: size,
			borderRadius: size / 2,
			backgroundColor,
			color: textColor,
		}}
	>
		<span className={clsx(styles.badgeValue, Fonts.inter.className)}>{value}</span>
	</div>
);
export default Badge;
