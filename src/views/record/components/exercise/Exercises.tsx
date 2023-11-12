import React from "react";
import styles from "./style.module.scss";
import { Colors } from "@/theme/colors";
import Title from "../Title";
import useExercise from "@/hook/useExercise";
import Loading from "@/components/common/Loading";
import ExerciseItem from "./ExerciseItem";

const Exercises: React.FC = () => {
	const { data, isLoading } = useExercise();
	return (
		<div className={styles.exerciseContainer} style={{ backgroundColor: Colors.dark[500] }}>
			<Title text="MY EXERCISE" date="2021.05.21" />
			{isLoading && <Loading />}
			<div className={styles.exerciseList}>
				{data?.map((item) => (
					<ExerciseItem key={item.id} {...item} />
				))}
				{/* Your code here */}
			</div>
		</div>
	);
};

export default Exercises;
