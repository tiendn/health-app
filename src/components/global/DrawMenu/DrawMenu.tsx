import { Ref, forwardRef } from "react";
import DrawMenuItem from "./DrawMenuItem";
import styles from "./style.module.scss";

interface DrawMenuProps {}

const items = [
	{ text: "自分の記録", href: "record" },
	{ text: "体重グラフ", href: "" },
	{ text: "目標", href: "" },
	{ text: "選択中のコース", href: "" },
	{ text: "コラム一覧", href: "column" },
	{ text: "設定", href: "" },
];

const DrawMenu = (props: DrawMenuProps, ref: Ref<any>) => {
	return (
		<div ref={ref} className={styles.drawMenu}>
			{items.map((item, index) => (
				<DrawMenuItem {...item} key={item.text} />
			))}
		</div>
	);
};

export default forwardRef(DrawMenu);
