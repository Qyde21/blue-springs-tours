"use client";
import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage(`Thank you ${name}, we will contact you on ${phone}!`);
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left" id="booking">
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-700 text-white p-2 rounded">
        Submit Booking
      </button>
      {message && <p className="text-green-700 mt-2">{message}</p>}
    </form>
  );
}