import gsap from "gsap";

export const imageReveal = (element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 1.2,
      clipPath: "inset(15% 0% 15% 0%)",
    },
    {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 2,
      ease: "power4.out",
    },
  );
};
