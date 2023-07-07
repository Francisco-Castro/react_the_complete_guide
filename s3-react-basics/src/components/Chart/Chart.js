import ChartBar from "./ChartBar";
import "./Chart.css";
import Card from "../UI/Card";

const Chart = ({ expenses }) => {
  //   console.log(expenses);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const briefExpenses = expenses.map(({ date, amount }) => {
    return { month: months[date.getMonth()], amount: amount };
  });

  var result = briefExpenses.reduce((acc, exp) => {
    const total = !acc[exp.month] ? exp.amount : acc[exp.month] + exp.amount;

    const res = (acc[exp.month] = total);

    return acc;
  }, {});

  let arr = Object.values(result);
  const max = Math.max(...arr);

  return (
    <Card className="chart">
      {months.map((m) => (
        // <ChartBar month={m} amount={0} key={Math.random()} />
        <ChartBar
          month={m}
          amount={result[m] || 0}
          max={max}
          key={Math.random()}
        />
      ))}
    </Card>
  );
};

export default Chart;
