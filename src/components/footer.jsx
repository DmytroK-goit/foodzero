"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed Email:", email);

    // тут буде API request
    // await fetch("/api/subscribe", { method:"POST", body: JSON.stringify({ email }) })

    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#233000] w-full px-[138px] py-[120px]">
      <div className="grid grid-cols-3 gap-20 items-start border-b border-white/20 pb-16">
        <div>
          <h2 className="text-white text-[68px] leading-[1] max-w-[220px]">
            Food Zero.
          </h2>
        </div>
        <div className="text-white flex flex-col gap-6">
          <h4 className="text-5xl border-b border-white pb-4 w-fit">Contact</h4>
          <a
            href="tel:+86852346000"
            className="text-2xl hover:text-[#9CAA00] transition"
          >
            +86 852 346 000
          </a>

          <a
            href="mailto:info@foodzero.com"
            className="text-2xl hover:text-[#9CAA00] transition"
          >
            info@foodzero.com
          </a>

          <p className="text-gray-300 text-xl leading-[1.8]">
            1959 Sepulveda Blvd. <br />
            Culver City, CA
          </p>
        </div>

        <div className="text-white flex flex-col gap-6">
          <h4 className="text-5xl border-b border-white pb-4 w-fit">
            Never Miss a Recipe
          </h4>

          <form onSubmit={handleSubmit} className="flex gap-4 mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-[72px] px-6 bg-transparent border border-white text-white placeholder:text-gray-400 outline-none"
            />

            <button
              type="submit"
              className="px-10 h-[72px] bg-white text-[#233000] text-xl font-semibold hover:bg-[#9CAA00] hover:text-white transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-gray-300 text-xl leading-[1.7]">
            Join our subscribers and get the best recipes delivered every week.
          </p>

          {success && (
            <p className="text-[#9CAA00] text-xl">Subscription successful!</p>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center pt-10 text-white/70 text-lg">
        <p>© 2026 Food Zero. All Rights Reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
