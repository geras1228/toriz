export const pageVariants = {
  initial: {
    x: 80,
    opacity: 0,
    scale: 0.98,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    x: -80,
    opacity: 0,
    scale: 0.98,
  },
};

export const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};