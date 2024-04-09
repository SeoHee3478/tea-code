// Chart.js와 React-Chartjs-2 라이브러리, 그리고 faker 라이브러리를 import 합니다.
import {
  Chart as ChartJS, // Chart.js 라이브러리에서 기본 Chart 객체를 ChartJS라는 이름으로 가져옵니다.
  LinearScale, // 선형 축(scale)을 위한 모듈입니다. 연속적인 숫자 데이터를 축에 표시할 때 사용합니다.
  PointElement, // 점 요소를 사용하여 버블 차트를 그리기 위한 요소입니다.
  Tooltip, // 차트에 툴팁(마우스 오버 시 나타나는 정보 박스)을 추가하기 위한 모듈입니다.
  Legend, // 차트의 범례를 추가하기 위한 모듈입니다.
} from "chart.js";
import { Bubble } from "react-chartjs-2"; // react-chartjs-2 라이브러리에서 Bubble 차트 컴포넌트를 가져옵니다.
import { faker } from "@faker-js/faker"; // faker 라이브러리를 사용하여 랜덤 데이터를 생성합니다.

// Chart.js에 필요한 구성 요소들을 등록합니다.
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

// 차트의 옵션을 설정합니다.
export const options = {
  scales: {
    y: {
      beginAtZero: true, // y 축의 값이 0부터 시작하도록 설정합니다.
    },
  },
};

// 차트에 표시될 데이터를 설정합니다.
export const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.number.int({ min: -100, max: 100 }), // x 좌표에 대한 랜덤 숫자 데이터를 생성합니다.
        y: faker.number.int({ min: -100, max: 100 }), // y 좌표에 대한 랜덤 숫자 데이터를 생성합니다.
        r: faker.number.int({ min: 5, max: 20 }), // 버블의 반지름에 대한 랜덤 숫자 데이터를 생성합니다.
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)", // 빨간색으로 배경을 설정합니다.
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.number.int({ min: -100, max: 100 }),
        y: faker.number.int({ min: -100, max: 100 }),
        r: faker.number.int({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)", // 파란색으로 배경을 설정합니다.
    },
  ],
};

// BubbleChart 컴포넌트를 정의하고, Bubble 컴포넌트에 옵션과 데이터를 전달하여 차트를 렌더링합니다.
const BubbleChart = () => {
  return <Bubble options={options} data={data} />;
};

export default BubbleChart; // BubbleChart 컴포넌트를 export 합니다.
