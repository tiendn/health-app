import React from "react";
import styles from "./style.module.scss";
import CardFoodItem from "./CardFoodItem";
import { MealHistory } from "@/types";
import Loading from "@/components/common/Loading";

interface CardFoodProps {
	isLoading: boolean;
	data?: MealHistory[];
}

const CardFood = ({ isLoading, data }: CardFoodProps) => {
	return (
		<div className={styles.cardFood}>
			{isLoading && <Loading />}
			{data?.map((mealHistory) => (
				<CardFoodItem data={mealHistory} key={mealHistory.id} />
			))}
		</div>
	);
};

export default CardFood;
