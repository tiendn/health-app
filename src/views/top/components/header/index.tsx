import Image from "next/image";
import { Images } from "@/theme/image";
import styles from "./style.module.scss";
import useWindowSize from "@/hook/useWindowSize";
import CircleProgress from "@/components/common/CircleProgress";
import BodyProgress from "./BodyProgress";

export const Header = () => {
	const size = useWindowSize();

	return (
		<div className={styles.headerBody}>
			<div className={styles.headerLeft}>
				<div
					className={styles.headerImage}
					style={{ height: 312, width: size.width * 0.42 }}
				>
					<Image
						src={Images.food.dinner[1]}
						alt="Food"
						height={312}
						width={size.width * 0.42}
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className={styles.headerProgress}>
					<CircleProgress date="05/21" percentage={80} />
				</div>
			</div>
			<div className={styles.headerRight}>
				<BodyProgress />
			</div>
		</div>
	);
};

export default Header;
