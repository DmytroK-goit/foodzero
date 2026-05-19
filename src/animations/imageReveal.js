import gsap from "gsap";

export const imageReveal = (element) => {
  gsap.fromTo(
    element,
    {
      scale: 1.2,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.4,
      ease: "power3.out",
    },
  );
};
