import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses({ expenses }) {
  const [pickedYear, setPickedYear] = useState("2019");

  const dropdownChangeHandler = (selectedYear) => {
    setPickedYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === pickedYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(({ id, title, amount, date }) => {
      return <ExpenseItem amount={amount} date={date} title={title} key={id} />;
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={dropdownChangeHandler}
        selectedYear={pickedYear}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
