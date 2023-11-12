import { Icons, Images } from "@/theme/image";
import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";
import Badge from "@/components/common/Badge";

export interface MenuItemProps {
	icon: keyof typeof Icons;
	href?: string;
	title?: string;
	badge?: number;
}

const MenuItem = ({ icon, href = "#", title, badge }: MenuItemProps) => {
	return (
		<Link href={href} className={styles.menuItem}>
			<div className={styles.menuItemIcon}>
				<Image alt={title || "menu item"} height={32} width={32} src={Icons[icon]} />
				{badge && (
					<div className={styles.badge}>
						<Badge value={badge} />
					</div>
				)}
			</div>
			{title && <span className={styles.menuItemText}>{title}</span>}
		</Link>
	);
};

export default MenuItem;
