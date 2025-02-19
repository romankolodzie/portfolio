"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { NAVIGATION } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ScrollingImages } from "@/components/ui/scrolling-images"
import { Section } from "@/components/ui/section"

const images = [
  "/work/image1.jpg",
  "/work/image2.jpg",
  "/work/image3.jpg",
  "/work/image4.jpg",
  "/work/image5.jpg",
]

export function Hero() {
  const currentRole = NAVIGATION.find(item => item.title === 'Work')?.items?.[0]

  return (
    <Section className="h-[calc(100vh-4rem)] flex items-center my-6">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-8"
            >
              <span className="text-sm font-medium">Senior Designer</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              Crafting Digital Experiences at Scale
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12"
            >
              Lead Visual Designer specializing in AI-driven product design, design systems, 
              and interactive experiences — with proven impact at TikTok, Meta, and Academia.edu
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="flex gap-4"
            >
              <Button asChild size="lg">
                <Link href="/work">View Recent Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Let's Connect</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Scrolling Images */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="hidden lg:flex gap-4 flex-1"
          >
            <ScrollingImages 
              images={images} 
              direction="up"
              speed={40}
              className="translate-y-12"
            />
            <ScrollingImages 
              images={images} 
              direction="down"
              speed={35}
              className="-translate-y-12"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  )
} 