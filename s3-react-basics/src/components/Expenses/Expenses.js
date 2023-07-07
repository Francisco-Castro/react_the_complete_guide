import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [year, setYear] = useState("2019");

  const dropdownChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={dropdownChangeHandler}
        selectedYear={year}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
