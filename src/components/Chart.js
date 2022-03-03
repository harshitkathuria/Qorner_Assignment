import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
};

const label = [];
for (let i = 1; i <= 31; i++) {
  label.push(i);
}

export default function App({ dataSet }) {
  const Data = dataSet.map(value => value.value1);
  const data = {
    labels: label,
    datasets: [
      {
        backgroundColor: "#9a9da1",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1.5,
        data: Data
      }
    ]
  };
  return <Line options={options} data={data} />;
}
