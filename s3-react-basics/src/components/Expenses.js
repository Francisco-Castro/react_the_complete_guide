import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses({expenses}) {
  return (
    <div className="expenses">
      {expenses.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem amount={amount} date={date} title={title} key={id} />
        );
      })}
    </div>
  );
}

export default Expenses;
