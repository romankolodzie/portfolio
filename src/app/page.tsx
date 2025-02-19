"use client"

import * as React from "react"
import { Hero } from "@/components/sections/hero"
import { ImpactMetrics } from "@/components/sections/impact-metrics"
import { VideoReel } from "@/components/sections/video-reel"
import { WorkCards } from "@/components/sections/work-cards"
import { Collaboration } from "@/components/sections/collaboration"

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Hero />
      <ImpactMetrics />
      <VideoReel />
      <WorkCards />
      <Collaboration />
    </div>
  )
} 