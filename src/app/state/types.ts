import { ChartData, DatasetChartOptions } from "chart.js"
import { FormCollection } from "../calendar/types"

export interface State {
    chart: {
        pieData: PieChartData
    }
    calendarData: FormCollection[]
}


export type PieChartData = {
    labels: string[],
    datasets: ChartData<"pie", number[], string>
}


export type Action = {
    type: string
    payload?: string | boolean | number | Record<string, string> | FormCollection[]
}