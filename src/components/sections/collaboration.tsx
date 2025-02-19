import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Section } from "../ui/section"
import { Button } from "../ui/button"

const approaches = [
  {
    title: "Design Strategy",
    description: "Crafting user-centered solutions that align with business goals"
  },
  {
    title: "Product Innovation",
    description: "Building next-gen experiences with cutting-edge technology"
  },
  {
    title: "Design Leadership",
    description: "Mentoring teams and scaling design systems"
  }
]

export function Collaboration() {
  return (
    <Section className="py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let's Create Something Impactful
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-16"
        >
          Bringing your vision to life through thoughtful design and innovation
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="p-6 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03]"
            >
              <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
              <p className="text-muted-foreground">{approach.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button asChild size="lg">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  )
} 