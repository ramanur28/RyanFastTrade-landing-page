import { animate } from "framer-motion";

export const slideUp = {
  initial: {
    y: "100%",
  },
  animate: (i) => ({
    y: "0%",
    transition: {
      type: "spring",
      stiffness: 50,
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.75 },
  },
};

export const slideR = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const slideL = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const countAnim = (num, changeText) => {
  animate(num / 90, num, {
    duration: 1.5,
    delay: 0.25,
    ease: "easeOut",
    onUpdate: (latest) => changeText(Math.round(latest)),
  });
};

export const questionAnim = {
  initial: {
    height: 20,
    transition: {
      duration: 0.5,
    },
  },
  active: {
    height: "auto",
    transition: {
      duration: 0.4,
    },
  },
};
