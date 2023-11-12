import { useEffect } from "react";
import ScrollToTop from "../common/ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./style.module.scss";
import { LOGIN_STORAGE_KEY, getStorage } from "@/utils/storage";
import { PAGE_WITH_AUTH } from "@/utils/constants";

const Layout = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		const handleLocalStorageChange = () => {
			const hasLogin = getStorage(LOGIN_STORAGE_KEY);
			const currentPage = window.location.pathname;

			if (PAGE_WITH_AUTH.includes(currentPage)) {
				if (!hasLogin) window.location.replace("/login");
			}
		};

		handleLocalStorageChange();

		window.addEventListener("storage", handleLocalStorageChange);
		return () => window.removeEventListener("storage", handleLocalStorageChange);
	}, []);

	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.content}>
				{children}
				<Footer />
			</div>
			<ScrollToTop />
		</div>
	);
};

export default Layout;
