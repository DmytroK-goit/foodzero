import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
        once: false,
      },
    },
  );
};
