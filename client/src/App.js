import React, { useEffect, useState } from "react";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      {goals.map((goal) => (
        <div key={goal.id}>
          <h2>{goal.name}</h2>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
