"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "w-full overflow-hidden",
        className
      )} 
      {...props}
    >
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex shrink-0 gap-4"
          animate={{
            x: direction === "left" ? [0, -1035] : [0, 1035]
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          {...(pauseOnHover && {
            whileHover: { animationPlayState: "paused" }
          })}
        >
          {children}
        </motion.div>
        <motion.div 
          className="flex shrink-0 gap-4"
          animate={{
            x: direction === "left" ? [0, -1035] : [0, 1035]
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          {...(pauseOnHover && {
            whileHover: { animationPlayState: "paused" }
          })}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
} 