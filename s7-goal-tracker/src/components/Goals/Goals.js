import Goal from "./Goal";
import "./Goals.css";

const Goals = ({ onDeleteGoal, goals }) => {
  const deleteGoalHandler = (id) => {
    onDeleteGoal(id);
  };

  return (
    <ul>
      {goals.map(({ id, title }) => {
        return (
          <Goal
            goal={title}
            key={id}
            id={id}
            onDeleteGoal={deleteGoalHandler}
          />
        );
      })}
    </ul>
  );
};

export default Goals;
