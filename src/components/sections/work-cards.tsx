"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Section } from "../ui/section"
import { cn } from "@/lib/utils"

const workSections = [
  {
    title: "Academia.edu",
    description: "Revolutionizing academic research discovery through intuitive design and AI-powered recommendations.",
    tags: ["Design Systems", "Product Design", "Marketing Design"],
    image: "/work/academia.jpg",
    href: "/roles/academia",
    background: "bg-zinc-900"
  },
  {
    title: "TikTok",
    description: "Crafting interactive ad experiences, designing marketing campaigns, team leadership, and design system development.",
    tags: ["Motion Design", "Visual Design", "Leadership", "Video Production"],
    image: "/work/tiktok.jpg",
    href: "/roles/tiktok",
    background: "bg-zinc-900"
  },
  {
    title: "Facebook",
    description: "Scaling design templates and video production workflows while growing the team from 1 to 6 designers to empower small business success",
    tags: ["Motion Design", "Visual Design", "Leadership", "Video Production"],
    image: "/work/facebook.jpg",
    href: "/roles/facebook",
    background: "bg-zinc-900"
  }
]

export function WorkCards() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Calculate total height needed for proper scrolling
  const cardHeight = 60 // vh units
  const cardSpacing = 40 // vh units between cards
  const totalCards = workSections.length
  const scrollHeight = (cardHeight + cardSpacing) * (totalCards - 1) + cardHeight

  return (
    <Section>
      <div ref={containerRef} className="relative" style={{ height: `${scrollHeight}vh` }}>
        <div className="max-w-6xl mx-auto space-y-[40vh]">
          {workSections.map((section, index) => {
            const progress = useTransform(
              scrollYProgress,
              [index / totalCards, (index + 1) / totalCards],
              [0, 1]
            )

            return (
              <motion.div
                key={section.title}
                style={{
                  position: "sticky",
                  top: "20vh",
                  zIndex: index,
                }}
                className={cn(
                  "relative rounded-[2rem] overflow-hidden h-[60vh] group border border-white/5",
                  section.background
                )}
              >
                <Link href={section.href} className="block h-full">
                  <div className="grid grid-cols-2 h-full">
                    {/* Left side - Content */}
                    <div className="relative z-10 p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {section.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="max-w-xl">
                          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            {section.title}
                          </h3>
                          <p className="text-lg text-white/80">
                            {section.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="inline-flex items-center text-sm font-medium text-white border border-white/20 rounded-full px-6 py-2 group/button hover:bg-white/10 transition-colors">
                          view project
                          <svg
                            className="ml-2 w-4 h-4 transform transition-transform group-hover/button:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative p-6">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                          <Image
                            src={section.image}
                            alt={section.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            priority={index === 0}
                            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                            onError={() => console.error(`Failed to load image: ${section.image}`)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
} 