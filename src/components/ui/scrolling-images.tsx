"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollingImagesProps {
  images: string[]
  direction?: "up" | "down"
  speed?: number
  className?: string
}

export function ScrollingImages({ 
  images, 
  direction = "up", 
  speed = 40,
  className 
}: ScrollingImagesProps) {
  return (
    <div className={cn("relative overflow-hidden h-[70vh]", className)}>
      <motion.div 
        className="flex flex-col"
        animate={{
          y: direction === "up" ? "-50%" : "50%"
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear"
        }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative w-[250px] h-[300px] rounded-xl overflow-hidden my-3"
          >
            <img
              src={image}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
} 