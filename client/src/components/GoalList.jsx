import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ goals, updateGoal, deleteGoal }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.map(goal => (
        <GoalItem
          key={goal.id}
          goal={goal}
          updateGoal={updateGoal}
          deleteGoal={deleteGoal}
        />
      ))}
    </div>
  );
}

export default GoalList;
