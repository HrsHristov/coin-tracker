import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ dataSet }) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    console.log(dataSet);

    const hours = [];

    for (let index = hour; index > hour - 24; index--) {
        if (index < 0) {
            hours.push(`${hour - index}:${minutes}`);
        } else {
            hours.push(`${index}:${minutes}`);
        }
    }

    var data = {
        labels: hours,
        datasets: [
            {
                label: "24h Price Movement",
                data: dataSet.map((data) => data),
                fill: true,
                borderJoinSttyle: "bevel",
                tension: "0.1",
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
