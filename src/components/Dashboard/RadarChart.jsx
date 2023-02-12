import { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Data } from "./Data";
import { Chart } from "chart.js/auto";

function RadarChart(props) {
  const [chartData] = useState({
    labels: props.data?.processedData?.map((data) => data.month),
    datasets: [
      {
        label: props.data?.datasetOne,
        data: props.data?.processedData?.map((data) => data.completedTasks),
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: props.data?.datasetTwo,
        data: props.data?.processedData?.map((data) => data.pendingTasks),
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  });

  return (
    <div className="BarChart">
      <h2 className="text-login-color font-bold text-xl my-10">
        {props.data?.label}
      </h2>
      <Radar
        data={chartData}
        // options={{
        //   plugins: {
        //     title: {
        //       display: true,
        //       text: "Users Gained between 2016-2020",
        //     },
        //   },
        // }}
      />
    </div>
  );

  //   return <h1>Hello</h1>;
}

export default RadarChart;
