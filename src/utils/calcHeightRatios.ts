export const calcHeightRatios = (series: number[]) => {
  const maxValue = Math.max(...series);
  return series.map((elem) => Number((elem * 100) / maxValue).toFixed(2));
};
