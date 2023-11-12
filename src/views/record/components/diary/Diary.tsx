import React, { useCallback, useMemo, useState } from "react";
import styles from "./style.module.scss";
import DiaryItem from "./DiaryItem";
import useDiary from "@/hook/useDiary";
import Loading from "@/components/common/Loading";
import LinearButton from "@/components/common/button/LinearButton";
import clsx from "clsx";
import Fonts from "@/theme/fonts";
import { Colors } from "@/theme/colors";

const Diary: React.FC = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading } = useDiary({ page });

	const hasReachMax = useMemo(() => data && data?.page * data?.limit >= data?.total, [data]);

	const onLoadMore = useCallback(() => {
		// Load more
		if (!hasReachMax) setPage(page + 1);
	}, [hasReachMax, page]);

	return (
		<>
			<span
				className={clsx(styles.diaryTitle, Fonts.inter.className)}
				style={{ color: Colors.dark[500] }}
			>
				MY DIARY
			</span>
			<br />
			<div className={styles.diaryContainer}>
				{isLoading && <Loading />}
				<div className={styles.diaryList}>
					{data?.data.map((item) => (
						<DiaryItem
							key={item.title}
							timestamp={item.timestamp}
							title={item.title}
							content={item.content}
						/>
					))}
				</div>

				{data?.data && (
					<>
						<div style={{ height: 24 }} />
						<LinearButton
							disabled={hasReachMax}
							onClick={onLoadMore}
							text="自分の日記をもっと見る"
						/>
					</>
				)}
			</div>
		</>
	);
};

export default Diary;
