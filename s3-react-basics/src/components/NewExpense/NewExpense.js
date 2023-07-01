import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormClosed, setIsFormClosed] = useState(true);

  const showFormHandler = () => {
    setIsFormClosed(false);
  };

  const cancelForm = (data) => {
    setIsFormClosed(data);
  };

  const enteredExpenseDataHandler = (expenseData) => {
    const result = { ...expenseData, id: Math.random().toString() };
    return props.onSaveExpenseData(result);
  };

  let content = isFormClosed ? (
    <button onClick={showFormHandler}>Create new expense</button>
  ) : (
    <ExpenseForm
      onSaveExpenseData={enteredExpenseDataHandler}
      onCancel={cancelForm}
    />
  );
  return <Card className="new-expense">{content}</Card>;
};

export default NewExpense;
