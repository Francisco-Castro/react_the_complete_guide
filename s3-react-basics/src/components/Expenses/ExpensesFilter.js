const ExpensesFilter = (props) => {
  const yearHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div>
      <label>Choose a year:</label>
      <select
        name="years"
        id="years"
        onChange={yearHandler}
        value={props.selectedYear}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
