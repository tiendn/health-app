import React from "react";
import styles from "./style.module.scss";
import Fonts from "@/theme/fonts";

interface TitleProps {
	text: string;
	date: string;
}

const Title: React.FC<TitleProps> = ({ text, date }) => {
	return (
		<div className={styles.title}>
			<span
				className={Fonts.inter.className}
				style={{ fontWeight: "200", width: 86, fontSize: 15 }}
			>
				{text}
			</span>
			<span className={Fonts.inter.className} style={{ fontSize: 22 }}>
				{date}
			</span>
		</div>
	);
};

export default Title;
