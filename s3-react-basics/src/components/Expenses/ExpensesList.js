import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2>Expenses not found</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem amount={amount} date={date} title={title} key={id} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
