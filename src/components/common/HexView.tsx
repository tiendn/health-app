import Image from "next/image";
import React from "react";

import styles from "./style.module.scss";
import { inter } from "@/theme/fonts";
import clsx from "clsx";
import { Icons } from "@/theme/image";
import { capitalizeFirstLetter } from "@/utils/helper";

export const HexViewType = {
	morning: Icons.knife,
	lunch: Icons.knife,
	dinner: Icons.knife,
	snack: Icons.cup,
};

interface Props {
	type: keyof typeof HexViewType;
	onClick: () => void;
}

const HexView = ({ type = "morning", onClick }: Props) => {
	return (
		<div onClick={onClick} className={styles.hexViewContainer}>
			<Image width={56} height={56} src={HexViewType[type]} alt="icon" />
			<span className={clsx(styles.hexViewText, inter.className)}>
				{capitalizeFirstLetter(type)}
			</span>
		</div>
	);
};

export default HexView;
