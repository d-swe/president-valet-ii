import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
  variants?: Variants;
};

const FadeInVert = ({
  children,
  delay = 0.3,
  duration = 0.5,
  offset = -100,
  once = true,
  variants,
}: FadeInProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: offset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const FadeInHoriz = ({
  children,
  delay = 0.3,
  duration = 0.5,
  offset = -100,
  once = true,
  variants,
}: FadeInProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, x: offset },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export { FadeInVert, FadeInHoriz };
