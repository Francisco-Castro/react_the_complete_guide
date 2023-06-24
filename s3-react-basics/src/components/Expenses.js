import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css"

function Expenses({expenses}) {
  return (
    <Card className="expenses">
      {expenses.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem amount={amount} date={date} title={title} key={id} />
        );
      })}
    </Card>
  );
}

export default Expenses;
