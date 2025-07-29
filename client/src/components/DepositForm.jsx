import React from "react";

function GoalItem({ goal, updateGoal, deleteGoal }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const deadline = new Date(goal.deadline);
  const today = new Date();
  const isOverdue = deadline < today && goal.savedAmount < goal.targetAmount;
  const daysLeft = Math.floor((deadline - today) / (1000 * 60 * 60 * 24));
  const isWarning = daysLeft <= 30 && daysLeft >= 0 && goal.savedAmount < goal.targetAmount;

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <p>Deadline: {goal.deadline}</p>
      <div style={{ background: "#eee", height: 10 }}>
        <div style={{ width: `${progress}%`, background: "green", height: "100%" }}></div>
      </div>
      {isWarning && <p style={{ color: "orange" }}>⚠️ {daysLeft} days left!</p>}
      {isOverdue && <p style={{ color: "red" }}>❌ Overdue!</p>}
      <button onClick={() => deleteGoal(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalItem;
