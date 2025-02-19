"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "../ui/section"

const metrics = [
  {
    label: "Global Designers Led",
    value: "7+"
  },
  {
    label: "Engagement Increase",
    value: "+87%"
  },
  {
    label: "AI-Driven Products",
    value: "10+"
  },
  {
    label: "Revenue Generated",
    value: "$10M+"
  }
]

export function ImpactMetrics() {
  return (
    <Section className="py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-black/[0.03] dark:bg-white/[0.03]"
          >
            <span className="text-4xl font-bold mb-2">{metric.value}</span>
            <span className="text-sm text-muted-foreground text-center">{metric.label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
} 