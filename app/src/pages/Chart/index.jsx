import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
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
    </>
  );
};

export default Chart;
