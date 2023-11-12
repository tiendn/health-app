import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { Colors } from "@/theme/colors";
import Link from "next/link";

const items = [
	"会員登録",
	"運営会社",
	"利用規約",
	"個人情報の取扱について",
	"特定商取引法に基づく表記",
	"お問い合わせ",
];

const Footer = () => {
	return (
		<div className={clsx(styles.footer)} style={{ backgroundColor: Colors.dark[500] }}>
			<div className={styles.footerRow}>
				{items.map((item) => (
					<Link style={{ color: Colors.light }} key={item} href="/top">
						{item}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Footer;
