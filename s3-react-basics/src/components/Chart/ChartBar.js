import "./ChartBar.css";

// const ChartBar = ({ month, amount, max }) => {
const ChartBar = (props) => {
  let barFillHeight = "0%";
  
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div>
      <div className="bar">
        <div className="bar__outer"></div>
        <div className="bar__inner" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chartbar-text">{props.label}</div>
    </div>
  );
};

export default ChartBar;
