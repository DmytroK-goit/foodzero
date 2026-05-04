"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bgmain from "../../img/bg_main.png";
import Logo from "../../img/Logo.png";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-480 relative w-full min-h-screen overflow-hidden">
      <Image
        src={bgmain}
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#233000]/85 z-10"></div>

      <section className="relative z-20 flex items-center justify-center min-h-screen">
        {!isOpen && (
          <Link
            href="/menu"
            className="text-white text-6xl  border-white px-10 py-5 hover:border-[#9CAA00] hover:text-[#9CAA00] transition border-2"
          >
            View Menu
          </Link>
        )}

        {isOpen && (
          <div className="flex justify-between w-full max-w-6xl px-10">
            <ul className="flex flex-col gap-8 text-white font-semibold">
              {[
                { name: "Home", href: "/home" },
                { name: "Menu", href: "/menu" },
                { name: "Blogs", href: "/blogs" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-7xl hover:text-[#9CAA00] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-white max-w-md flex flex-col gap-6">
              <h4 className="text-5xl border-b border-white pb-3">Contact</h4>

              <a href="tel:+86852346000" className="text-2xl">
                +86 852 346 000
              </a>

              <a href="mailto:info@foodzero.com" className="text-2xl">
                info@foodzero.com
              </a>

              <p className="text-gray-200">
                1959 Sepulveda Blvd. <br />
                Culver City, CA
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
