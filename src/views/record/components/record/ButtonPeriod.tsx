import clsx from "clsx";
import React, { useMemo } from "react";
import styles from "./style.module.scss";
import { Colors } from "@/theme/colors";

interface ButtonPeriodProps {
	period: string;
	isActive: boolean;
	onClick: () => void;
}

const ButtonPeriod: React.FC<ButtonPeriodProps> = ({ period, isActive, onClick }) => {
	const styleBtn = useMemo(() => {
		if (isActive)
			return {
				backgroundColor: Colors.primary[300],
				color: Colors.light,
			};
		return {
			backgroundColor: Colors.light,
			color: Colors.primary[300],
		};
	}, [isActive]);
	return (
		<button className={clsx(styles.btnPeriod)} onClick={onClick} style={styleBtn}>
			{period}
		</button>
	);
};

export default ButtonPeriod;
