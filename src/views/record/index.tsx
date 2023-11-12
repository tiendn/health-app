import React from "react";
import CardHeader from "./components/card/CardHeader";
import styles from "./style.module.scss";
import Diary from "./components/diary/Diary";
import BodyRecord from "./components/record/BodyRecord";
import Exercises from "./components/exercise/Exercises";

const RecordPageView: React.FC = () => {
	return (
		<div className={styles.recordPageContainer}>
			<CardHeader />
			<BodyRecord />
			<Exercises />
			<Diary />
		</div>
	);
};

export default RecordPageView;
