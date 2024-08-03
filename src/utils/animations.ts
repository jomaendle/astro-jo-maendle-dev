import gsap from "gsap";
import Lenis from "lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

registerAnimations(".fade-in-card", fadeInUp);
registerAnimations(".fade-in-left-card", fadeInFromLeftOnScroll);

function registerAnimations(
  selector: string,
  animation: (element: HTMLElement) => void,
) {
  const elements = gsap.utils.toArray<HTMLElement>(selector);
  elements.forEach((element) => animation(element));
}

function fadeInUp(element: HTMLElement) {
  gsap.set(element, { y: "20%", autoAlpha: 0 });

  gsap.to(element, {
    y: 0,
    autoAlpha: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      invalidateOnRefresh: true,
    },
  });
}

export function fadeInFromLeftOnScroll(element: HTMLElement) {
  gsap.set(element, { x: "-20%", autoAlpha: 0 });

  gsap.to(element, {
    x: 0,
    autoAlpha: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      invalidateOnRefresh: true,
    },
  });
}
