import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import { DoughnutChart } from "./DoughnutChart";
import MultitypeChart from "./MultitypeChart";
import RadarChart from "./RadarChart";

const Chart = () => {
  return (
    <>
      <div>
        <p>Multitype chart</p>
        <MultitypeChart />
      </div>
      <div>
        <p>Bar chart</p>
        <BarChart />
      </div>
      <div>
        <p>Radar chart</p>
        <RadarChart />
      </div>
      <div>
        <p>Bubble chart</p>
        <BubbleChart />
      </div>
      <div>
        <p>내맘대로 chart</p>
        <DoughnutChart />
      </div>
    </>
  );
};

export default Chart;
