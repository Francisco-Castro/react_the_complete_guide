import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ title, date, amount }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h3>{title}</h3>
          <h3 className="expense-item__price">${amount}</h3>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
