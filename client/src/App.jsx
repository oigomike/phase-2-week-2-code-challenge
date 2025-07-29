import React, { useState, useEffect } from "react";
import GoalList from "./components/GoalList";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("/mock-goals.json")
      .then((res) => res.json())
      .then((data) => setGoals(data.goals))
      .catch((err) => console.error("Failed to load goals:", err));
  }, []);

  function updateGoal(updatedGoal) {
    const updatedGoals = goals.map((goal) =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  }

  function deleteGoal(id) {
    const remainingGoals = goals.filter((goal) => goal.id !== id);
    setGoals(remainingGoals);
  }

  return (
    <div className="App">
      <h1>SMART GOAL PLANNER</h1>
      <Overview goals={goals} />
      <DepositForm goals={goals} updateGoal={updateGoal} />
      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
    </div>
  );
}

export default App;
