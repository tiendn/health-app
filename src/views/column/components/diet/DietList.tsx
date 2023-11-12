import React, { useCallback, useMemo, useState } from "react";
import styles from "./style.module.scss";
import Loading from "@/components/common/Loading";
import DietItem from "./DietItem";
import LinearButton from "@/components/common/button/LinearButton";
import useDiet from "@/hook/useDiet";

const DietList: React.FC = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading } = useDiet({ page });

	const hasReachMax = useMemo(() => data && data?.page * data?.limit >= data?.total, [data]);

	const onLoadMore = useCallback(() => {
		if (!hasReachMax) setPage(page + 1);
	}, [data]);

	return (
		<div className={styles.dietListContainer}>
			{isLoading && <Loading />}
			<div className={styles.dietList}>
				{data?.data.map((item) => (
					<DietItem key={item.title} {...item} />
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
	);
};

export default DietList;
