import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = { title, target: parseFloat(target), current: 0 };
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then(onAddGoal);

    setTitle("");
    setTarget("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Target Amount"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        type="number"
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;

