"use client";
import { useState } from "react";

export default function Reservations() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    persons: "1 Person",
  });
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
  return (
    <section className="h-[1100px] bg-[#ebf0e4] w-full flex flex-col items-center justify-center px-[138px]">
      <h3 className="text-[108px] leading-[1] mb-8 text-center">
        Make a Reservation
      </h3>
      <p className="text-[#4d4d4d] text-[24px] mb-20 text-center">
        Get in touch with restaurant
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[1400px] flex flex-wrap gap-8 justify-center"
      >
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-[350px] h-[96px] border border-black bg-transparent px-8 text-[24px] outline-none"
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-[350px] h-[96px] border border-black bg-transparent px-8 text-[24px] outline-none"
        />

        <select
          name="persons"
          value={formData.persons}
          onChange={handleChange}
          className="w-[350px] h-[96px] border border-black bg-transparent px-8 text-[24px] outline-none"
        >
          <option>1 Person</option>
          <option>2 Persons</option>
          <option>3 Persons</option>
          <option>4 Persons</option>
          <option>5 Persons</option>
          <option>6+ Persons</option>
        </select>

        <button
          type="submit"
          className="w-[344px] h-[96px] bg-[#233000] text-white text-[24px] hover:bg-[#9CAA00] transition duration-300"
        >
          Book Now
        </button>
      </form>

      {success && (
        <p className="mt-10 text-green-700 text-2xl">
          Reservation request sent successfully!
        </p>
      )}
    </section>
  );
}
