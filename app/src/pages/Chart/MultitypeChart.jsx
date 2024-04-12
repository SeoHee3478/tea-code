import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js"; // chart.js 라이브러리에서 필요한 구성 요소들을 가져옵니다.
import { Chart } from "react-chartjs-2"; // react-chartjs-2 라이브러리에서 Chart 컴포넌트를 가져옵니다.
import { faker } from "@faker-js/faker"; // @faker-js/faker 라이브러리에서 faker 함수를 가져옵니다.

// chart.js의 구성 요소들을 등록합니다. 이는 차트를 그리는 데 필요한 기본 요소들입니다.
ChartJS.register(
  LinearScale, // 선형 스케일을 정의합니다.
  CategoryScale, // 범주형 스케일을 정의합니다.
  BarElement, // 막대 요소를 정의합니다.
  PointElement, // 데이터 포인트를 정의합니다.
  LineElement, // 데이터 포인트를 연결하는 선을 정의합니다.
  Legend, // 범례를 제공합니다.
  Tooltip, // 툴팁을 제공합니다.
  LineController, // 선 차트를 제어하는 데 사용됩니다.
  BarController // 막대 차트를 제어하는 데 사용됩니다.
);

const labels = ["January", "February", "March", "April", "May", "June", "July"]; // 차트의 레이블입니다.

// 차트에 표시될 데이터를 정의합니다.
export const data = {
  labels, // 차트의 각 지점에 대한 레이블입니다.
  datasets: [
    {
      type: "line", // 데이터셋의 유형을 지정합니다 (선 차트).
      label: "Dataset 1", // 데이터셋의 레이블입니다.
      borderColor: "rgb(255, 99, 132)", // 선의 색상입니다.
      borderWidth: 2, // 선의 두께입니다.
      fill: false, // 데이터 영역을 채우지 않습니다.
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // 랜덤한 데이터 값을 생성하여 데이터셋에 추가합니다.
    },
    {
      type: "bar", // 데이터셋의 유형을 지정합니다 (막대 차트).
      label: "Dataset 2", // 데이터셋의 레이블입니다.
      backgroundColor: "rgb(75, 192, 192)", // 막대의 배경색입니다.
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // 랜덤한 데이터 값을 생성하여 데이터셋에 추가합니다.
      borderColor: "white", // 막대의 테두리 색상입니다.
      borderWidth: 2, // 막대의 테두리 두께입니다.
    },
    {
      type: "bar", // 데이터셋의 유형을 지정합니다 (막대 차트).
      label: "Dataset 3", // 데이터셋의 레이블입니다.
      backgroundColor: "rgb(53, 162, 235)", // 막대의 배경색입니다.
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // 랜덤한 데이터 값을 생성하여 데이터셋에 추가합니다.
    },
  ],
};

// 다양한 유형의 차트를 렌더링하는 MultitypeChart 컴포넌트를 정의합니다.
const MultitypeChart = () => {
  return <Chart type="bar" data={data} />; // Chart 컴포넌트에 데이터를 전달하여 차트를 렌더링합니다.
};

export default MultitypeChart; // MultitypeChart 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
