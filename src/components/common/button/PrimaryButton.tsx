import React from "react";
import styles from "./style.module.scss";
import { Colors } from "@/theme/colors";

type Props = {
	onClick: () => void;
	text: string;
};

const PrimaryButton: React.FC<Props> = ({ onClick, text }) => {
	return (
		<button
			onClick={onClick}
			className={styles.btnPrimary}
			style={{ backgroundColor: Colors.primary[400] }}
		>
			<span className={styles.btnPrimaryText}>{text}</span>
		</button>
	);
};

export default PrimaryButton;
