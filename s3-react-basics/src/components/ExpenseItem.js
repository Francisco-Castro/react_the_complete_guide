import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, date, amount }) {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h3>{title}</h3>
        <h3 className="expense-item__price">${amount}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
