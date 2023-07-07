import "./ChartBar.css";

const ChartBar = ({ month, amount, max }) => {
  return (
    <div className="chartbar">
      <input
        className="vranger"
        type="range"
        orient="vertical"
        value={amount}
        max={max}
        min="0"
        readOnly
      ></input>
      <div className="chartbar-text">{month}</div>
    </div>
  );
};

export default ChartBar;
