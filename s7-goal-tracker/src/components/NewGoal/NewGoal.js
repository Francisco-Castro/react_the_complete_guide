import Card from "../UI/Card";
import { useState } from "react";

import "./NewGoal.css";
const NewGoal = (props) => {
  const [goal, setGoal] = useState("");

  const goalChangeHandler = (event) => {
    setGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveGoal(goal);

    setGoal("")
  };

  return (
    <Card className="new-card">
      <form onSubmit={submitHandler} className="form">
        <label>Course Goal</label>
        <input onChange={goalChangeHandler} type="text" value={goal}></input>
        <button type="submit">Add Goal</button>
      </form>
    </Card>
  );
};

export default NewGoal;
