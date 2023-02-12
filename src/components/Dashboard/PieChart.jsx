import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Data } from "./Data";
import { Chart } from "chart.js/auto";

function PieChart(props) {
  const [chartData] = useState({
    labels: props.data?.processedData?.map((data) => data.title),
    datasets: [
      {
        label: props.data?.label,
        data: props.data?.processedData?.map((data) => data.total),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "#f3ba2f",
          "#2a71d0",
        ],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <div className="BarChart">
      <h2 className="text-login-color font-bold text-xl my-10">
        {props.data?.label}
      </h2>
      <Pie
        data={chartData}
        // options={{
        //   plugins: {
        //     title: {
        //       display: true,
        //       text: props.data.label,
        //     },
        //   },
        // }}
      />
    </div>
  );

  //   return <h1>Hello</h1>;
}

export default PieChart;
