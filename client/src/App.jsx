import React, { useState, useEffect } from "react";
import GoalList from "./components/GoalList";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  // Load goals from a local JSON file in public/
  useEffect(() => {
    fetch("/mock-goals.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data.goals) {
          setGoals(data.goals);
        } else {
          console.error("Invalid data format: expected { goals: [...] }");
        }
      })
      .catch((err) => console.error("Failed to load goals:", err));
  }, []);

  // Handle deposit updates
  function updateGoal(updatedGoal) {
    const updatedGoals = goals.map((goal) =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  }

  // Handle deleting a goal
  function deleteGoal(id) {
    const remainingGoals = goals.filter((goal) => goal.id !== id);
    setGoals(remainingGoals);
  }

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>SMART GOAL PLANNER</h1>
      <Overview goals={goals} />
      <DepositForm goals={goals} updateGoal={updateGoal} />
      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
    </div>
  );
}

export default App;
