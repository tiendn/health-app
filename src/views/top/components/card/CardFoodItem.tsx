import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import clsx from "clsx";
import Fonts from "@/theme/fonts";
import { Colors } from "@/theme/colors";
import { MealHistory } from "@/types";

interface CardFoodItemProps {
	data: MealHistory;
}

const CardFoodItem = ({ data }: CardFoodItemProps) => {
	const { image, note } = data;
	return (
		<div className={styles.cardFoodItem}>
			<Image src={image} alt="food" width={234} height={234} style={{ objectFit: "cover" }} />
			<div
				className={styles.cardFoodItemNote}
				style={{ backgroundColor: Colors.primary[300] }}
			>
				<span className={clsx(Fonts.inter.className)} style={{ fontSize: 15 }}>
					{note}
				</span>
			</div>
		</div>
	);
};

export default CardFoodItem;
