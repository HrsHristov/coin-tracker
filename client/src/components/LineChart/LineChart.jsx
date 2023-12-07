import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ dataSet, price }) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const hours = [];

    for (let index = hour; index > hour - 24; index--) {
        if (index < 0) {
            hours.push(`${24 + index}:${minutes}`);
        } else {
            hours.push(`${index}:${minutes}`);
        }
    }

    const finalDataSet = [...dataSet.splice(0, 23), price];

    console.log(hours);
    console.log(finalDataSet);

    var data = {
        labels: hours.reverse(),
        datasets: [
            {
                label: "24h Price Movement",
                data: finalDataSet.map((data) => data),
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                ticks: { color: "white" },
            },
            x: {
                ticks: { color: "white" },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
