import React from "react";
import logo from "./logo.png";
import Image from "next/image";
import styles from "./style.module.scss";

const Logo = () => {
	const onTopPage = () => {
		window.location.href = "/top";
	};
	return (
		<div className={styles.logo} onClick={onTopPage}>
			<Image height={40} width={109} src={"/logo.png"} alt="Health Logo" />
		</div>
	);
};

export default Logo;
