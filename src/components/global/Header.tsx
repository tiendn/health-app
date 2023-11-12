import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { Colors } from "@/theme/colors";
import Logo from "./Logo";
import Menu from "./Menu/Menu";

const Header = () => {
	return (
		<header className={clsx(styles.header)} style={{ backgroundColor: Colors.dark[500] }}>
			<Logo />
			<Menu />
		</header>
	);
};

export default Header;
