import type { EChartsType } from "echarts";

export function handleClickSelection(
  params: { dataIndex: number; componentType: string; seriesIndex: number },
  selectedIndices: number[]
) {
  // Check if selectedIndices already contains the index of the clicked solution
  if (selectedIndices.includes(params.dataIndex)) {
    // If it does, remove it from the array (to unselect it)
    selectedIndices.splice(selectedIndices.indexOf(params.dataIndex), 1);
  } else {
    // If it doesn't, add it to the array
    selectedIndices = [...selectedIndices, params.dataIndex];
  }

  if (params.componentType === "series") {
    console.log(params.seriesIndex);
    console.log(params.dataIndex);
    // selectedIndices = [params.dataIndex];
  }
  return selectedIndices;
}

export function handleSelectionChange(
  chart: EChartsType,
  selectedIndices: number[]
) {
  chart.dispatchAction({
    type: "unselect",
    seriesIndex: 0,
    dataIndex: getChartModel(chart).getSeries()[0].getSelectedDataIndices(),
  });
  chart.dispatchAction({
    type: "select",
    seriesIndex: 0,
    dataIndex: selectedIndices,
  });
  // Downplay all after selection, for selection to show
  chart.dispatchAction({
    type: "downplay",
    seriesIndex: 0,
  });
  return chart;
}

/**
 * Returns the model of a chart. This function exists so that ts-ignore doesn't
 * have to be mentioned in every file where getModel() is used.
 *
 * @param chart Chart instance to get the model from
 * @returns
 */
export function getChartModel(chart: EChartsType) {
  return chart.getModel();
}
