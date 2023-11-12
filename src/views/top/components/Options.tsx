import React from "react";
import styles from "./style.module.scss";
import HexView, { HexViewType } from "@/components/common/HexView";
import { MealType } from "@/types";

interface OptionsProps {
	onChangeType: (type: MealType | "") => void;
}

type OptionsType = keyof typeof HexViewType;
const items: OptionsType[] = ["morning", "lunch", "dinner", "snack"];

const Options: React.FC<OptionsProps> = ({ onChangeType }) => {
	return (
		<div className={styles.options}>
			{items.map((item) => (
				<HexView onClick={() => onChangeType(item)} type={item} key={item} />
			))}
		</div>
	);
};

export default Options;
