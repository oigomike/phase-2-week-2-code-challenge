import React, { useState } from "react";

function DepositForm({ onDeposit }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount) || depositAmount <= 0) return;

    onDeposit(depositAmount);
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Deposit Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
