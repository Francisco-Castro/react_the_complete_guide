import Card from "../UI/Card";
import { useState } from "react";
import styles from "./NewGoal.module.css";

const NewGoal = (props) => {
  const [goal, setGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (goal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSaveGoal(goal);
    setGoal("");
  };

  return (
    <Card className={styles["new-card"]}>
      <form
        onSubmit={submitHandler}
        className={`${styles["form-control"]} ${!isValid && styles["invalid"]}`}
      >
        <label>Course Goal</label>
        <input onChange={goalChangeHandler} type="text" value={goal}></input>
        <button type="submit">Add Goal</button>
      </form>
    </Card>
  );
};

export default NewGoal;
