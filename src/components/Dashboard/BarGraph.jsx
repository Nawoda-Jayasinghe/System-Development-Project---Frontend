import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

function BarChart(props) {
  const [chartData] = useState({
    labels: props.data?.processedData?.map((data) => data.month),
    datasets: [
      {
        label: "Member requests",
        data: props.data?.processedData?.map((data) => data.requests),
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
      },
      {
        label: "Donations",
        data: props.data?.processedData?.map((data) => data.donation),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
      },
    ],
  });

  const [delayed, setDelayed] = useState(false);

  return (
    <div className="BarChart">
      <Bar
        height={100}
        data={chartData}
        className="w-full"
        options={{
          animation: {
            onComplete: () => {
              setDelayed(true);
            },
            delay: (context) => {
              let delay = 0;
              if (
                context.type === "data" &&
                context.mode === "default" &&
                !delayed
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );

  //   return <h1>Hello</h1>;
}

export default BarChart;
