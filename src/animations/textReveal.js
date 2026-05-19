import gsap from "gsap";

export const textReveal = (element) => {
  const text = element.textContent;

  element.innerHTML = text
    .split("")
    .map((char) => {
      if (char === " ") {
        return `<span>&nbsp;</span>`;
      }

      return `<span>${char}</span>`;
    })
    .join("");

  const chars = element.querySelectorAll("span");

  gsap.fromTo(
    chars,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      duration: 0.5,
      ease: "power3.out",
    },
  );
};
