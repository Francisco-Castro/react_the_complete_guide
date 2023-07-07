import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.dataPoints.map(dp => dp.value)
  const maxValue = Math.max(...values)

  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={maxValue}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
