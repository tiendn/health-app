import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";

type Props = {
	onClick: () => void;
	text: string;
	disabled?: boolean;
};

const LinearButton: React.FC<Props> = ({ onClick, disabled, text }) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={clsx(styles.btnLinearGradient, disabled && styles.btnLinearGradientDisabled)}
		>
			<span className={styles.btnLinearGradientText}>{text}</span>
		</button>
	);
};

export default LinearButton;
