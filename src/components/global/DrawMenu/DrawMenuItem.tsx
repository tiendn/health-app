import clsx from "clsx";
import styles from "./style.module.scss";
import { Colors } from "@/theme/colors";
import Fonts from "@/theme/fonts";
import Link from "next/link";

interface DrawMenuItemProps {
	text: string;
	href: string;
}

const DrawMenuItem = ({ text, href }: DrawMenuItemProps) => {
	return (
		<div
			className={clsx(styles.drawMenuItem)}
			style={{
				backgroundColor: Colors.gray[400],
			}}
		>
			<Link className={styles.drawMenuItemLink} href={href}>
				<span className={clsx(styles.drawMenuItemText, Fonts.inter.className)}>{text}</span>
			</Link>
		</div>
	);
};

export default DrawMenuItem;
