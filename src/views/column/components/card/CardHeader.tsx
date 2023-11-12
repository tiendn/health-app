import React from "react";
import styles from "./style.module.scss";
import CardHeaderItem from "./CardHeaderItem";

interface CardHeaderProps {}

const items = [
	{
		title: "recommend column",
		content: "オススメ",
		value: "recommend",
	},
	{
		title: "recommend diet",
		content: "ダイエット",
		value: "recommend",
	},
	{
		title: "recommend beauty",
		content: "美容",
		value: "recommend",
	},
	{
		title: "recommend health",
		content: "健康",
		value: "recommend",
	},
];

const CardHeader: React.FC<CardHeaderProps> = () => {
	return (
		<div className={styles.cardHeader}>
			{items.map((item) => (
				<CardHeaderItem onClick={() => {}} key={item.title} {...item} />
			))}
		</div>
	);
};

export default CardHeader;
