import { ChartData, ChartType } from "chart.js";

export interface DataChart {
  data: ChartData
  type: ChartType,
}

interface  Data {
  data: number[]
}
