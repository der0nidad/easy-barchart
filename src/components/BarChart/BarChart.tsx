import React from "react";
import styles from "./BarChart.module.scss";
import { calcHeightRatios } from "../../utils/calcHeightRatios";

type Data = {
  value: number;
  label?: string;
};
type Props = {
  series: Data[];
};

const BarChart: React.FC<Props> = ({ series }) => {
  if (series.length === 0) {
    return <div className={styles.chart__noData}>Данных пока нет</div>;
  }
  const ratios = calcHeightRatios(series.map((elem) => elem.value));
  return (
    <div className={styles.chart__container}>
      {series.map((elem, index) => (
        <div
          className={styles.chart__element}
          style={{ height: `${ratios[index]}%` }}
        />
      ))}
    </div>
  );
};

export default BarChart;
