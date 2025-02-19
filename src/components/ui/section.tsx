"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
  children: React.ReactNode
  className?: string
  variant?: "card" | "plain"
}

export function Section({ children, className, variant = "card", ...props }: SectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative w-full mx-auto",
        variant === "card" && "px-4 sm:px-6 lg:px-8 max-w-[1440px] rounded-[1.25rem] bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl",
        className
      )} 
      {...props}
    >
      <div className="py-2">
        {children}
      </div>
    </motion.section>
  )
}