import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [expenseInput, setExpenseInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);

    setExpenseInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });

    // Next code doesn't guarantee updating the state. Instead use an anonymous function ^^^
    // setExpenseData({
    // ...setExpenseData,
    // title: event.target.value
    // })
  };

  const amountChangeHandler = (event) => {
    setExpenseInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
    // setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setExpenseInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
    // setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const result = { ...expenseInput, date: new Date(expenseInput.date) };

    props.onSaveExpenseData(result);

    setExpenseInput({ ...expenseInput, title: "", amount: "", date: "" });
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler} className="expense-form">
      <div className="expense-form-row">
        <div className="expense-form__input">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={expenseInput.title}
          />
        </div>
        <div className="expense-form__input">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={expenseInput.amount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="expense-form__input">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={expenseInput.date}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="expense-form-row">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> ADD EXPENSE </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
