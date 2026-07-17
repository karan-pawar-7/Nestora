import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
}) => {

  const variants = {
    up: { y: 80, x: 0 },
    down: { y: -80, x: 0 },
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...variants[direction],
        scale: 0.96,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;