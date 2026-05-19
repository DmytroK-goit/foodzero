"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#9CAA00] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <ChevronUp size={28} />
    </button>
  );
}
