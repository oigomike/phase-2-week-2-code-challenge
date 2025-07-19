import React from "react";
import DepositForm from "./DepositForm";

function GoalItem({ goal, onUpdateGoal, onDeleteGoal }) {
  const { id, title, target, current } = goal;

  function handleDelete() {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteGoal(id));
  }

  function handleDeposit(amount) {
    const updatedGoal = { ...goal, current: goal.current + amount };
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ current: updatedGoal.current }),
    })
      .then((res) => res.json())
      .then(onUpdateGoal);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>
        Saved: {current} / {target}
      </p>
      <DepositForm onDeposit={handleDeposit} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default GoalItem;
