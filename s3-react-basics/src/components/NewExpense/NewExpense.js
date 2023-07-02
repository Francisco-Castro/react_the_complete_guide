import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormClosed, setIsFormClosed] = useState(true);

  const showFormHandler = () => {
    setIsFormClosed(false);
  };

  const cancelForm = () => {
    setIsFormClosed(true);
  };

  const enteredExpenseDataHandler = (expenseData) => {
    const result = { ...expenseData, id: Math.random().toString() };
    return props.onSaveExpenseData(result);
  };

  return (
    <Card className="new-expense">
      {isFormClosed && (
        <button onClick={showFormHandler}>Create new expense</button>
      )}
      {!isFormClosed && (
        <ExpenseForm
          onSaveExpenseData={enteredExpenseDataHandler}
          onCancel={cancelForm}
        />
      )}
    </Card>
  );
};

export default NewExpense;
