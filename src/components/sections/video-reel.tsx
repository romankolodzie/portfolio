"use client"

import * as React from "react"
import { Section } from "../ui/section"

export function VideoReel() {
  return (
    <Section className="py-24">
      <div className="aspect-video w-full rounded-3xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/i85c1D140Uo"
          title="Portfolio Reel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </Section>
  )
}