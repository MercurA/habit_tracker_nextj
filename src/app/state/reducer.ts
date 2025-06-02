import { FormCollection } from "../calendar/types";
import { GET_PIE_DATA, SET_CALENDAR_DATA } from "./actions";
import { Action, State } from "./types";



const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case SET_CALENDAR_DATA:
            return {
                ...state,
                calendarData: [...state.calendarData, ...action.payload]
            }
        case GET_PIE_DATA:
            if (state.calendarData.length) {
                return {
                    ...state,
                    chart: {
                        ...state.chart,
                        pieData: formatDataForChart(state.calendarData)
                    }
                }

            } else {
                return state
            }
        default:
            return state;
    }
}


function formatDataForChart(calendarData: FormCollection[]) {
    let labels: string[] = []
    let qty: number[] = []
    let backgroundColor: string[] = []
    let borderColor = [
        'rgb(0, 0, 0)',
        'rgb(0, 0, 0)',
        'rgb(0, 0, 0)',
    ]
    calendarData.map(({ mood }) => {
        if (!labels.includes(mood.name)) {
            labels.push(mood.name)
        }
    })
    //['Up', 'Productive', 'Energetic']
    if (labels.length > 0) {
        for (let i = 0; i < labels.length; i++) {
            let count = 0
            let color = ''
            for (let j = 0; j < calendarData.length; j++) {
                if (labels[i] === calendarData[j].mood.name) {
                    count += 1
                    color = calendarData[j].mood.color
                }
            }
            qty.push(count)
            backgroundColor.push(color)
        }
    }

    return {
        labels,
        datasets: [{
            label: 'Events',
            data: qty,
            backgroundColor,
            borderColor,
            borderWidth: 1,
        }]
    }
}

export default reducer


// Look into the labels and find the 1st one to count
// 1 i = 0 labels[0]='Up'
//   j = 0 calendarData[j] = 'up'
