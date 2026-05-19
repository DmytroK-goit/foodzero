import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initScrollReveal = () => {
  const elements = document.querySelectorAll("[data-reveal]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      },
    );
  });

  ScrollTrigger.refresh();
};
