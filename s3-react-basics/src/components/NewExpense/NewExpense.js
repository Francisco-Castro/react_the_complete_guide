import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
