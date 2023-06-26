import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses({ expenses }) {
  const [filterYear, setFilteredYear] = useState("2021");

  // Derived values AKA Computed values
  let hiddenYears = "2019, 2021 and 2022";

  switch (filterYear) {
    case "2019":
      hiddenYears = "2020, 2021 and 2022";
      break;
    case "2020":
      hiddenYears = "2019, 2021 and 2022";
      break;
    case "2021":
      hiddenYears = "2019, 2020 and 2022";
      break;
    default:
      hiddenYears = "2019, 2020 and 2021";
      break;
  }

  const dropdownChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={dropdownChangeHandler}
        selectedYear={filterYear}
      />
      <p>Years {hiddenYears} are hidden</p>
      {expenses.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem amount={amount} date={date} title={title} key={id} />
        );
      })}
    </Card>
  );
}

export default Expenses;
