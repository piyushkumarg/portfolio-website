export const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delay: i * 0.2,
    },
  }),
};



export const skillsVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delay: 0.1*i,
    },
  }),
};


export const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const skillSliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-50%",
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};