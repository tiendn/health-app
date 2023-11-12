import React, { useCallback, useMemo, useState } from "react";
import styles from "./style.module.scss";

import Options from "./components/Options";
import Header from "./components/header";
import CardFood from "./components/card/CardFood";
import LinearButton from "@/components/common/button/LinearButton";
import useMealHistory from "@/hook/useMealHistory";
import { MealType } from "@/types";

const TopPageView: React.FC = () => {
	const [type, setType] = useState<MealType | "">("");
	const [page, setPage] = useState<number>(1);
	const { data, isLoading } = useMealHistory({ page, type });

	const hasReachMax = useMemo(() => data && data?.page * data?.limit >= data?.total, [data]);

	const onLoadMore = useCallback(() => {
		// Load more
		if (!hasReachMax) setPage(page + 1);
	}, [hasReachMax, page]);

	const onChangeType = useCallback((type: MealType | "") => {
		setType(type);
		setPage(1);
	}, []);

	return (
		<div className={styles.topPageContainer}>
			<div className={styles.header}>
				<Header />
			</div>

			<div className={styles.mealHistory}>
				<Options onChangeType={onChangeType} />
				<CardFood data={data?.data} isLoading={isLoading} />
				<LinearButton disabled={hasReachMax} onClick={onLoadMore} text="記録をもっと見る" />
			</div>
		</div>
	);
};

export default TopPageView;
