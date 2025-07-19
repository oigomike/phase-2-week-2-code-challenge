import React from "react";

function Overview({ goals }) {
  const totalTarget = goals.reduce((sum, g) => sum + g.target, 0);
  const totalSaved = goals.reduce((sum, g) => sum + g.current, 0);

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Target: {totalTarget}</p>
      <p>Total Saved: {totalSaved}</p>
    </div>
  );
}

export default Overview;
