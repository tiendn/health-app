import React from "react";
import styles from "./style.module.scss";

const Loading = () => {
	return (
		<div className={styles.loadingSpinner}>
			<div className={styles.spinner}></div>
		</div>
	);
};

export default Loading;
