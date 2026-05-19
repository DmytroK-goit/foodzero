"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/animations/scrollReveal";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationProvider({ children }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      initScrollReveal();
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return children;
}
