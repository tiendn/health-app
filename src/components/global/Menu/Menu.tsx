import Image from "next/image";
import MenuItem from "./MenuItem";
import type { MenuItemProps } from "./MenuItem";
import styles from "./style.module.scss";
import { Icons } from "@/theme/image";
import DrawMenu from "../DrawMenu/DrawMenu";
import { useEffect, useRef, useState } from "react";

const navItems: MenuItemProps[] = [
	{ title: "自分の記録", href: "record", icon: "memo" },
	{ title: "チャレンジ", href: "", icon: "challenge" },
	{ title: "お知らせ", href: "", badge: 1, icon: "info" },
];

const Menu = () => {
	const [showDrawMenu, setShowDrawMenu] = useState(false);
	const drawMenuRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (drawMenuRef.current && !(drawMenuRef.current as any).contains(event.target)) {
				setShowDrawMenu(false);
			}
		}
		// Bind the event listener
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.menu}>
			{navItems.map((nav, index) => (
				<MenuItem {...nav} key={index} />
			))}
			<div className={styles.drawMenu}>
				<Image
					onClick={() => setShowDrawMenu(!showDrawMenu)}
					alt={"menu item"}
					height={32}
					width={32}
					src={showDrawMenu ? Icons.close : Icons.menu}
				/>
				{showDrawMenu && <DrawMenu ref={drawMenuRef} />}
			</div>
		</div>
	);
};

export default Menu;
