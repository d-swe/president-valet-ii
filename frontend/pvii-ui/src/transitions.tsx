import { motion, useInView, Variants } from "motion/react"
import { useRef } from "react";

type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  once?: boolean
  variants?: Variants
}

const FadeInLeftToRight = ({
  children,
  delay = 0.3,
  duration = 0.5,
  yOffset = -100,
  once = true,
  variants,
}: FadeInProps) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once })

  const defaultVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  }

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
  )
};

export default FadeInLeftToRight;
