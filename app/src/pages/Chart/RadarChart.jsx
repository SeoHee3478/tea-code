import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"; // chart.js 라이브러리에서 필요한 구성 요소들을 가져옵니다.
import { Radar } from "react-chartjs-2"; // react-chartjs-2 라이브러리에서 Radar 차트 컴포넌트를 가져옵니다.

// chart.js의 구성 요소들을 등록합니다. 이는 차트를 그리는 데 필요한 기본 요소들입니다.
ChartJS.register(
  RadialLinearScale, // 레이더 차트의 스케일을 정의합니다.
  PointElement, // 데이터 포인트를 정의합니다.
  LineElement, // 데이터 포인트를 연결하는 선을 정의합니다.
  Filler, // 데이터 영역 아래를 채우는 데 사용됩니다.
  Tooltip, // 툴팁을 제공합니다.
  Legend // 범례를 제공합니다.
);

// 차트에 표시될 데이터를 정의합니다.
export const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"], // 차트의 각 지점에 대한 레이블입니다.
  datasets: [
    {
      label: "# of Votes", // 데이터셋의 레이블입니다.
      data: [2, 9, 3, 5, 2, 3], // 각 레이블에 해당하는 데이터 값입니다.
      backgroundColor: "rgba(255, 99, 132, 0.2)", // 데이터 영역의 배경색입니다.
      borderColor: "rgba(255, 99, 132, 1)", // 데이터 영역의 테두리 색입니다.
      borderWidth: 1, // 데이터 영역의 테두리 두께입니다.
    },
  ],
};

// 레이더 차트 컴포넌트를 정의합니다.
const RadarChart = () => {
  return <Radar data={data} />; // Radar 컴포넌트에 데이터를 전달하여 차트를 렌더링합니다.
};

export default RadarChart; // RadarChart 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
