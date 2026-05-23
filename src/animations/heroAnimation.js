import gsap from "gsap";
import SplitType from "split-type";

export const heroAnimation = () => {
  const split = new SplitType("[data-hero-title]", {
    types: "chars",
  });

  const tl = gsap.timeline();

  tl.fromTo(
    split.chars,
    {
      opacity: 0,
      y: 120,
      rotateX: -90,
    },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.03,
      duration: 1,
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
      "-=0.5",
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
        duration: 1.6,
        ease: "power3.out",
      },
      "-=1",
    );
};
