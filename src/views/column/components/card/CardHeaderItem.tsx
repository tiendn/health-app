import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import PrimaryButton from "@/components/common/button/LinearButton";
import clsx from "clsx";
import Fonts from "@/theme/fonts";
import { Colors } from "@/theme/colors";

interface CardHeaderItemProps {
	title: string;
	content: string;
	onClick: () => void;
}

const CardHeaderItem: React.FC<CardHeaderItemProps> = ({ title, content, onClick }) => {
	return (
		<div
			className={styles.cardHeaderItem}
			style={{ backgroundColor: Colors.dark[600] }}
			onClick={onClick}
		>
			<span
				className={clsx(styles.cardHeaderItemText, Fonts.inter.className)}
				style={{ color: Colors.primary[300] }}
			>
				{title.toUpperCase()}
			</span>
			<div className={styles.cardHeaderItemDivider} />
			<span className={clsx(styles.cardHeaderItemContent)}>{content}</span>
		</div>
	);
};

export default CardHeaderItem;
