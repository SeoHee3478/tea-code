import { Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(Legend, Tooltip);

const labels = ["January", "February", "March"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Data 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    },
    {
      type: "bubble",
      label: "Data 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "scatter",
      label: "Data 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    },
  ],
};

const MultitypeChart = () => {
  return <Chart type="bar" data={data} />;
};

export default MultitypeChart;
