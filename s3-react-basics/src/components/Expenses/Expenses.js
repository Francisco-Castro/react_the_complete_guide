import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses({ expenses }) {
  const [pickedYear, setPickedYear] = useState("2020");

  const dropdownChangeHandler = (selectedYear) => {
    setPickedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={dropdownChangeHandler}
        selectedYear={pickedYear}
      />
      {expenses
        .filter((e) => e.date.getFullYear().toString() === pickedYear)
        .map(({ id, title, amount, date }) => {
          return (
            <ExpenseItem amount={amount} date={date} title={title} key={id} />
          );
        })}
    </Card>
  );
}

export default Expenses;
