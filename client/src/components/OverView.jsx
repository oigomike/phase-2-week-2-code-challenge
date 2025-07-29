import React from "react";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalTarget = goals.reduce((acc, g) => acc + g.targetAmount, 0);
  const totalSaved = goals.reduce((acc, g) => acc + g.savedAmount, 0);
  const overdueGoals = goals.filter(
    (g) => new Date(g.deadline) < new Date()
  ).length;

  return (
    <div className="mb-6 bg-gray-100 p-4 rounded">
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: KES {totalSaved}</p>
      <p>Total Target: KES {totalTarget}</p>
      <p>Overdue Goals: {overdueGoals}</p>
    </div>
  );
}

export default Overview;