"use client"
import { PieChartData } from '@/app/state/types';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
    pieData: ChartData<"pie", number[], string>
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Pie Chart Example',
        },
    },
};

const PieChart = ({ pieData }: Props) => {

    console.log('PieChart', pieData)
    if (pieData.hasOwnProperty('labels')) {
        return <Pie data={pieData} options={options} />;
    } else {
        return 'something is wrong'
    }
}

export default PieChart