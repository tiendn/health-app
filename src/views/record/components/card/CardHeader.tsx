import React from "react";
import styles from "./style.module.scss";
import CardHeaderItem from "./CardHeaderItem";
import { Images } from "@/theme/image";

interface CardHeaderProps {}

const items = [
	{
		image: Images.card.record,
		title: "body record",
		btnText: "自分のカラダの記録",
	},
	{
		image: Images.card.exercise,
		title: "my exercise",
		btnText: "自分の運動の記録",
	},
	{
		image: Images.card.diary,
		title: "my diary",
		btnText: "自分の日記",
	},
];

const CardHeader: React.FC<CardHeaderProps> = () => {
	return (
		<div className={styles.cardHeader}>
			{items.map((item) => (
				<CardHeaderItem onBtnClick={() => {}} key={item.title} {...item} />
			))}
		</div>
	);
};

export default CardHeader;
