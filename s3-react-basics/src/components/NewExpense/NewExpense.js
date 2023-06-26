import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = (props) => {
  const enteredExpenseDataHandler = (expenseData) => {
    const result = { ...expenseData, id: Math.random().toString() };
    return props.onSaveExpenseData(result);
  };
  

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={enteredExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
