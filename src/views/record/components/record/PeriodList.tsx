import React, { useCallback } from "react";
import ButtonPeriod from "./ButtonPeriod";
import styles from "./style.module.scss";

const PeriodList: React.FC = () => {
	const [activePeriod, setActivePeriod] = React.useState("日");
	const periods = ["日", "週", "月", "年"];

	const handlePeriodClick = useCallback((period: string) => setActivePeriod(period), []);

	return (
		<div className={styles.periodList}>
			{periods.map((period) => (
				<ButtonPeriod
					isActive={activePeriod === period}
					onClick={() => handlePeriodClick(period)}
					key={period}
					period={period}
				/>
			))}
		</div>
	);
};

export default PeriodList;
