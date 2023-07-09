import "./App.css";
import Goals from "./components/Goals/Goals";
import NewGoal from "./components/NewGoal/NewGoal";
import { useState } from "react";

function App() {
  const INITIAL_GOALS = [
    { id: 1, title: "Finish the course!" },
    { id: 2, title: "Do all the exercises!" },
    { id: 3, title: "Improve my React knowledge!" },
  ];

  const [goals, setGoals] = useState(INITIAL_GOALS);
  const [deletedIds, setdeletedIds] = useState([]);

  const addNewGoalHandler = (goal) => {
    // const id = goals.length + 1;
    const id = Math.random();
    setGoals([{ id: id, title: goal }, ...goals]);
  };
  const deleteGoalHandler = (id) => {
    const di = [id, ...deletedIds];
    setdeletedIds(di);
    const result = goals.filter(({ id }) => {
      return !di.includes(id);
    });
    setGoals(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewGoal onSaveGoal={addNewGoalHandler} />
        <Goals goals={goals} onDeleteGoal={deleteGoalHandler} />
      </header>
    </div>
  );
}

export default App;
