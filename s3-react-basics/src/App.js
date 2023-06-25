import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  { id: 1, date: new Date(2021, 2, 28), title: "Car Insurance", amount: 222.5 },
  { id: 2, date: new Date(2020, 1, 13), title: "House Rent", amount: 1111.15 },
  { id: 3, date: new Date(2020, 5, 11), title: "Rental car", amount: 5500.2 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense />
        <Expenses expenses={expenses} />
      </header>
    </div>
  );

  // Without JSX we use React.createElement in a nested structure
  // createElement/3 - Args: [Element, Object, Content]
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement(
  //     "header",
  //     { className: "App-header" },
  //     React.createElement(Expenses, {expenses: expenses})
  //   )
  // );
}

export default App;
