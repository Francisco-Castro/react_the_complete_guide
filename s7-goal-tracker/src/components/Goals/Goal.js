import Card from "../UI/Card";
import "./Goal.css";

const Goal = ({ onDeleteGoal, id, goal }) => {
  const deleteGoalHandler = () => {
    onDeleteGoal(id);
  };

  return (
    <div onClick={deleteGoalHandler}>
      <Card className="goal">
        <li>{goal}</li>
      </Card>
    </div>
  );
};

export default Goal;
