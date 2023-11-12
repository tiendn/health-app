import React, { useMemo } from "react";
import styles from "./style.module.scss";
import Fonts from "@/theme/fonts";
import dayjs from "dayjs";
import { Colors } from "@/theme/colors";
import useWindowSize from "@/hook/useWindowSize";

interface DiaryItemProps {
	timestamp: number;
	title: string;
	content: string;
}

const DiaryItem: React.FC<DiaryItemProps> = ({ timestamp, title, content }) => {
	const date = dayjs(timestamp);
	const day = date.format("YYYY.MM.DD");
	const time = date.format("HH:mm");
	const size = useWindowSize();

	const width = useMemo(() => {
		return (size.width - 320 - 12 * 3) / 4;
	}, []);

	return (
		<div className={styles.diaryItem} style={{ width, height: width, color: Colors.dark[500] }}>
			<div className={styles.diaryItemTimestamp}>
				<span className={Fonts.inter.className} style={{ fontSize: 18 }}>
					{day}
					<br />
					{time}
				</span>
			</div>
			<div className={styles.diaryItemContent}>
				<span style={{ fontSize: 12 }}>
					{title}
					<br />
					{content}
				</span>
			</div>
		</div>
	);
};

export default DiaryItem;
