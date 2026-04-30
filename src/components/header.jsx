"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../img/Logo.png";
import bgmain from "../../img/bg_main.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-40 flex justify-between items-center px-20 py-6 text-white">
        <Link href="/">
          <Image src={Logo} alt="Logo image" width={200} />
        </Link>

        <div className="flex items-center gap-6">
          {!isOpen && (
            <>
              <a
                href="tel:+86852346000"
                className="text-xl hover:text-[#9CAA00] transition"
              >
                +86 852 346 000
              </a>

              <Link
                href="/reservations"
                className="border border-white px-5 py-3 hover:border-[#9CAA00] transition"
              >
                Reservations
              </Link>
            </>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 z-50"
          >
            <span
              className={`w-8 h-[2px] bg-white transition ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-[2px] bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-[2px] bg-white transition ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-30">
          {/* BG */}
          <Image src={bgmain} alt="bg" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#233000]/90"></div>

          <div className="relative z-40 flex items-center justify-between h-full px-32">
            <ul className="flex flex-col gap-8 text-white font-semibold">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "Blogs", href: "/blogs" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-7xl hover:text-[#9CAA00] transition"
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

              <ul className="flex gap-5 pt-4">
                <li>
                  <Link href="https://instagram.com" target="_blank">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com" target="_blank">
                    X
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com" target="_blank">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com" target="_blank">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
