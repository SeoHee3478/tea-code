import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const options = {
  plugins: [ChartDataLabels],
};

const labels = ["짜장면", "치킨", "곱창", "피자", "족발", "한강라면"];

export const data = {
  labels,
  datasets: [
    {
      label: "지금 먹고 싶은 거",
      data: [10, 80, 30, 20, 70, 60],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: ["gray", "darkgray"],
      borderWidth: 0.5,
      datalabels: {
        align: "center",
        anchor: "center",
        font: { size: 14 },
        // value는 default(%값)
        formatter: function (value, context) {
          let idx = context.dataIndex;
          return context.chart.data.labels[idx];
        },
      },
    },
  ],
};

export const DoughnutChart = () => {
  return <Doughnut options={options} data={data} />;
};
