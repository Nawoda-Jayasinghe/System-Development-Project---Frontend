import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Data } from "./Data";

function LineGraph(props) {
  const [chartData] = useState({
    labels: props.collected?.map((data,index) => data.title),
    datasets: [
      {
        label: "Target",
        data: props.collected?.map((data) => data.target),
        backgroundColor: ["#C1BBEB"],
        borderColor: "#4D44B5",
        borderWidth: 2,
      },
      {
        label: "Collected",
        data: props.collected?.map((data) => data.total),
        backgroundColor: ["#800000"],
        borderColor: "#ff0000",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="BarChart">
      <Line
        height={220}
        data={chartData}
        className="w-full"
        options={{
          responsive: true,
          scales: {
            x: {
              grid: {
                display: true,
              },
            },
            y: {
              grid: {
                display: true,
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
            },
          },
        }}
      />
    </div>
  );

  //   return <h1>Hello</h1>;
}

export default LineGraph;
