import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";
import DepositForm from "./components/DepositForm";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("/mock-goals.json")
      .then((res) => res.json())
      .then(setGoals)
      .catch(console.error);
  }, []);

  function handleDeposit(goalId, amount) {
    const updated = goals.map((goal) =>
      goal.id === goalId
        ? { ...goal, savedAmount: goal.savedAmount + amount }
        : goal
    );
    setGoals(updated);
  }

  function handleDelete(id) {
    setGoals(goals.filter((g) => g.id !== id));
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">SMART Goal Planner</h1>
      <Overview goals={goals} />
      <GoalList goals={goals} onDeposit={handleDeposit} onDelete={handleDelete} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
    </div>
  );
}

export default App;