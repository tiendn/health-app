import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import clsx from "clsx";
import Fonts from "@/theme/fonts";
import { Colors } from "@/theme/colors";

interface CardHeaderItemProps {
	image: string;
	title: string;
	btnText: string;
	onBtnClick: () => void;
}

const CardHeaderItem: React.FC<CardHeaderItemProps> = ({ image, title, btnText, onBtnClick }) => {
	return (
		<div className={styles.cardHeaderItem} style={{}}>
			<div className={styles.cardHeaderItemImageOverlay} />
			<Image
				className={styles.cardHeaderItemImage}
				src={image}
				alt={"record-card"}
				width={240}
				height={240}
			/>
			<div className={styles.cardHeaderItemContent}>
				<span
					className={clsx(styles.cardHeaderItemText, Fonts.inter.className)}
					style={{ fontSize: 25, color: Colors.primary[300] }}
				>
					{title.toUpperCase()}
				</span>
				<PrimaryButton text={btnText} onClick={onBtnClick} />
			</div>
		</div>
	);
};

export default CardHeaderItem;
