import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form className="expense-form">
      <div className="expense-form-row">
        <div className="expense-form__input">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="expense-form__input">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="expense-form__input">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="expense-form-row">
        <button type="submit"> ADD EXPENSE </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
