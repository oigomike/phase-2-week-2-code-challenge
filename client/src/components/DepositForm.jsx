import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [selectedId, setSelectedId] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const depositAmt = parseInt(amount);
    if (!selectedId || isNaN(depositAmt)) return;
    onDeposit(parseInt(selectedId), depositAmt);
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="">Select Goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.title}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount to deposit"
        className="border p-2 w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Deposit
      </button>
    </form>
  );
}

export default DepositForm;