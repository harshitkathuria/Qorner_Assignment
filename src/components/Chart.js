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

const label = [];
for (let i = 1; i <= 31; i++) {
  label.push(i);
}

export default function App({ dataSet, hasMultipleLines }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animationEnabled: true,
    plugins: {
      legend: {
        display: hasMultipleLines ? true : false
      }
    }
  };

  let data = {};
  if (hasMultipleLines) {
    console.log("has");
    data = {
      labels: label,
      datasets: [
        {
          label: "Subscribed",
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderWidth: 1.5,
          data: dataSet.map(value => value.value1)
        },
        {
          label: "Non Subscribed",
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          borderWidth: 1.5,
          data: dataSet.map(value => value.value2)
        }
      ]
    };
  } else {
    console.log("does not have");

    data = {
      labels: label,
      datasets: [
        {
          backgroundColor: "#9a9da1",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1.5,
          data: dataSet.map(value => value.value1)
        }
      ]
    };
  }
  return <Line options={options} data={data} />;
}
