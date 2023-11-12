import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { DietData } from "@/types";
import dayjs from "dayjs";
import clsx from "clsx";
import Fonts from "@/theme/fonts";
import { Colors } from "@/theme/colors";

const DietItem: React.FC<DietData> = (data) => {
	return (
		<div className={styles.dietItem}>
			<div className={styles.dietItemHeader}>
				<Image
					className={styles.dietItemImage}
					src={data.image}
					alt="diet"
					height={144}
					width={234}
				/>
				<div
					className={styles.dietItemTimestamp}
					style={{ backgroundColor: Colors.primary[300] }}
				>
					{data.timestamp && (
						<span className={clsx(Fonts.inter.className)} style={{ fontSize: 15 }}>
							{dayjs(data.timestamp).format("YYYY.MM.DD   HH:mm")}
						</span>
					)}
				</div>
			</div>
			<div>
				<span className={styles.dietItemTitle} style={{ color: Colors.dark[500] }}>
					{data.title}
				</span>
				<span className={styles.dietItemTags} style={{ color: Colors.primary[400] }}>
					{data?.tags?.map((tag) => `#${tag}   `)}
				</span>
			</div>
		</div>
	);
};

export default DietItem;
