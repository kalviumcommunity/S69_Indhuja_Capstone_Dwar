import React, { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Submitted:", { amount, message });
    alert("Thank you for your donation!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg w-80 mt-4">
        <input type="number" placeholder="Amount (in $)" className="w-full p-2 border rounded mb-2" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <textarea placeholder="Message (optional)" className="w-full p-2 border rounded mb-2" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
