import React from "react";
import CardHeader from "./components/card/CardHeader";
import styles from "./style.module.scss";
import DietList from "./components/diet/DietList";

const ColumnPageView: React.FC = () => {
	return (
		<div className={styles.columnPageContainer}>
			<CardHeader />
			<DietList />
		</div>
	);
};

export default ColumnPageView;
