import React from "react";

function GoalList({ goals, onDeposit, onDelete }) {
  return (
    <div className="space-y-4">
      {goals.map((goal) => {
        const progress = (goal.savedAmount / goal.targetAmount) * 100;
        const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));

        return (
          <div key={goal.id} className="p-4 border rounded">
            <h2 className="text-xl font-semibold">{goal.title}</h2>
            <p>Saved: KES {goal.savedAmount} / {goal.targetAmount}</p>
            <div className="bg-gray-200 h-3 rounded overflow-hidden">
              <div className="bg-green-500 h-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className={daysLeft < 0 ? "text-red-500" : daysLeft <= 30 ? "text-yellow-600" : "text-gray-600"}>
              {daysLeft < 0 ? "Deadline passed" : `${daysLeft} day(s) left`}
            </p>
            <button
              className="text-sm bg-red-500 text-white px-2 py-1 mt-2 rounded"
              onClick={() => onDelete(goal.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default GoalList;