// Chart.js와 React-Chartjs-2 라이브러리, 그리고 faker 라이브러리를 import 합니다.
import {
  Chart as ChartJS, // Chart.js 라이브러리에서 기본 Chart 객체를 ChartJS라는 이름으로 가져옵니다.
  CategoryScale, // 카테고리 축(scale)을 위한 모듈입니다. x축이나 y축에 카테고리 데이터를 표시할 때 사용합니다.
  LinearScale, // 선형 축(scale)을 위한 모듈입니다. 연속적인 숫자 데이터를 축에 표시할 때 사용합니다.
  BarElement, // 막대 차트를 그리기 위한 요소입니다.
  Title, // 차트의 제목을 추가하기 위한 모듈입니다.
  Tooltip, // 차트에 툴팁(마우스 오버 시 나타나는 정보 박스)을 추가하기 위한 모듈입니다.
  Legend, // 차트의 범례를 추가하기 위한 모듈입니다.
} from "chart.js";
import { Bar } from "react-chartjs-2"; // react-chartjs-2 라이브러리에서 Bar 차트 컴포넌트를 가져옵니다.
import { faker } from "@faker-js/faker"; // faker 라이브러리를 사용하여 랜덤 데이터를 생성합니다.

// Chart.js에 필요한 구성 요소들을 등록합니다.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// 차트의 옵션을 설정합니다.
export const options = {
  indexAxis: "y", // 'y' 축을 인덱스 축으로 설정하여 수평 막대 차트를 만듭니다.
  elements: {
    bar: {
      borderWidth: 2, // 막대의 테두리 두께를 2로 설정합니다.
    },
  },
  responsive: true, // 차트가 반응형이 되도록 설정합니다.
  plugins: {
    legend: {
      position: "right", // 범례를 차트의 오른쪽에 위치시킵니다.
    },
    title: {
      display: true, // 제목을 표시합니다.
      text: "Chart.js Horizontal Bar Chart", // 제목의 텍스트를 설정합니다.
    },
  },
};

// 차트에 사용될 라벨(월별)을 설정합니다.
const labels = ["January", "February", "March", "April", "May", "June", "July"];

// 차트에 표시될 데이터를 설정합니다.
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // faker를 사용하여 각 라벨에 대한 랜덤 숫자 데이터를 생성합니다.
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// BarChart 컴포넌트를 정의하고, Bar 컴포넌트에 옵션과 데이터를 전달하여 차트를 렌더링합니다.
const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart; // BarChart 컴포넌트를 export 합니다.
