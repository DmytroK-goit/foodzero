import gsap from "gsap";

export const heroAnimation = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    "[data-hero-title]",
    {
      opacity: 0,
      y: 120,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
    },
  )

    .fromTo(
      "[data-hero-text]",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7",
    )

    .fromTo(
      "[data-hero-image]",
      {
        opacity: 0,
        scale: 1.2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      },
      "-=1",
    );
};
