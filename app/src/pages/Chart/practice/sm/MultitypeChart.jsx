import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  LinearScale, // 선형 스케일을 정의합니다.
  CategoryScale, // 범주형 스케일을 정의합니다.
  BarElement, // 막대 요소를 정의합니다.
  LineElement, // 데이터 포인트를 연결하는 선을 정의합니다.
  Legend, // 범례를 제공합니다.
  Tooltip, // 툴팁을 제공합니다.
  LineController, // 선 차트를 제어하는 데 사용됩니다.
  BarController // 막대 차트를 제어하는 데 사용됩니다.
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    },
  ],
};

const MultitypeChart = () => {
  return <Chart type="bar" data={data} />;
};

export default MultitypeChart;
