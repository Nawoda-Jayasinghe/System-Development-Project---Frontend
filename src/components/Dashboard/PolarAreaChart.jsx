import { useState } from "react";
import { PolarArea } from "react-chartjs-2";
import { Data } from "./Data";
import { Chart } from "chart.js/auto";

function PolarAreaChart(props) {
  const [chartData] = useState({
    labels: props.data?.processedData?.map((data) => data.city),
    datasets: [
      {
        label: "Users Gained",
        data: props.data?.processedData?.map((data) => data.memberCount),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
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
      <PolarArea
        data={chartData}
      />
    </div>
  );

  //   return <h1>Hello</h1>;
}

export default PolarAreaChart;
