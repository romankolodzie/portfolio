import { Variants } from "framer-motion"

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "cubicBezier"
      }
    }
  }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

export const slideIn = (direction: "up" | "down" | "left" | "right", type: "spring" | "tween" = "tween"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type,
        duration: type === "tween" ? 0.5 : undefined,
        bounce: type === "spring" ? 0.4 : undefined
      }
    }
  }
}

export const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "cubicBezier"
    }
  }
} 