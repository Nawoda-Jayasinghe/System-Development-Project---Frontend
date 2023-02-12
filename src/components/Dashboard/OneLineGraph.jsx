import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Data } from "./Data";

function OneLineGraph(props) {
  const [chartData] = useState({
    labels: props.collected?.collected?.map((data, index) => {
      if (
        props.collected?.label?.toString() === "Number of people made requests"
      ) {
        return data.y;
      }

      return "Day " + data.y;
    }),
    datasets: [
      {
        label: props.collected?.label,
        data: props.collected?.collected?.map((data) => data.x),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: "rgb(255, 99, 132)",
        pointStyle: "circle",
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  });

  return (
    <div className="BarChart">
      <Line
        height={100}
        data={chartData}
        className="h-[20vh] w-full"
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

export default OneLineGraph;
