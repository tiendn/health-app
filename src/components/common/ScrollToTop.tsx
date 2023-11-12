import { Icons } from "@/theme/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

function ScrollToTop() {
	const [visible, setVisible] = useState(false);
	const onScroll = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const handleScrollListener = () => {
		setVisible(window.scrollY > 100);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollListener);
		return () => {
			window.removeEventListener("scroll", handleScrollListener);
		};
	}, []);

	if (visible)
		return (
			<Image
				className={styles.scrollToTop}
				src={Icons.scroll}
				alt="scroll to top"
				width={48}
				height={48}
				onClick={onScroll}
			/>
		);
	return null;
}

export default ScrollToTop;
