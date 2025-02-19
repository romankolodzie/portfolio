"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Section } from "./ui/section"
import { cn } from "@/lib/utils"

const roleContent = {
  academia: {
    role: "Senior Product Designer",
    period: "2024-Present",
    heroImage: "/roles/academia/hero.jpg",
    description: "Leading design for Academia.edu's brand + marketing efforts, and designing new AI products. Focusing on user acquisition, revenue, and helping academics accelerate their research and academic discovery.",
    projects: [
      {
        title: "AI Research Assistant",
        description: "Redesigned the research discovery experience with AI-powered recommendations and natural language search, resulting in 87% increase in user engagement.",
        image: "/roles/academia/project1.jpg",
      },
      {
        title: "Design System Evolution",
        description: "Led the development of a comprehensive design system that improved design consistency and development velocity across multiple product teams.",
        image: "/roles/academia/project2.jpg",
      },
      {
        title: "Premium Subscription Flow",
        description: "Optimized the premium subscription experience, leading to a 35% increase in conversion rate and improved user satisfaction.",
        image: "/roles/academia/project3.jpg",
      }
    ]
  },
  tiktok: {
    role: "Lead Motion Designer",
    period: "2021-2024",
    heroImage: "/roles/tiktok/hero.jpg",
    description: "Directed creative strategy for TikTok's advertising products, leading a team of designers to create engaging ad experiences, seasonal campaigns and scalable design systems.",
    projects: [
      {
        title: "Ad Creation Platform",
        description: "Redesigned the ad creation experience, simplifying the workflow and introducing AI-powered creative suggestions.",
        image: "/roles/tiktok/project1.jpg",
      },
      {
        title: "Motion Design System",
        description: "Developed a comprehensive motion design system that standardized animations across the platform.",
        image: "/roles/tiktok/project2.jpg",
      },
      {
        title: "Campaign Analytics",
        description: "Created an intuitive analytics dashboard that helped advertisers better understand their campaign performance.",
        image: "/roles/tiktok/project3.jpg",
      }
    ]
  },
  meta: {
    role: "Senior Visual Designer",
    period: "2018-2021",
    heroImage: "/roles/meta/hero.jpg",
    description: "Led visual design for Meta's small business products, scaling design operations and establishing new creative processes.",
    projects: [
      {
        title: "Small Business Suite",
        description: "Redesigned the small business tools suite, making it easier for businesses to manage their online presence.",
        image: "/roles/meta/project1.jpg",
      },
      {
        title: "Campaign Builder",
        description: "Created a new campaign creation experience that simplified ad creation for small businesses.",
        image: "/roles/meta/project2.jpg",
      },
      {
        title: "Design Templates",
        description: "Developed a scalable template system that helped small businesses create professional-looking content.",
        image: "/roles/meta/project3.jpg",
      }
    ]
  }
}

export type RoleContentType = typeof roleContent;

interface RolePageContentProps {
  company: string;
}

export function RolePageContent({ company }: RolePageContentProps) {
  const content = roleContent[company as keyof typeof roleContent]
  
  if (!content) {
    return null;
  }

  return (
    <div className="relative space-y-32">
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-8">
                <span className="text-sm font-medium">{content.role}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {company.charAt(0).toUpperCase() + company.slice(1)}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {content.description}
              </p>
              <p className="text-sm text-muted-foreground">{content.period}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={content.heroImage}
                alt={`${company} role`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                priority
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Project Sections */}
      <div className="space-y-32">
        {content.projects.map((project, index) => (
          <Section key={project.title} className="py-16">
            <div className="container max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center",
                  index % 2 === 1 && "lg:grid-flow-dense"
                )}
              >
                <div className={cn(index % 2 === 1 && "lg:col-start-2")}>
                  <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                  <p className="text-lg text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />
                </div>
              </motion.div>
            </div>
          </Section>
        ))}
      </div>

      {/* Pre-footer Navigation */}
      <Section className="py-32 bg-white/5">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More Work</h2>
            <p className="text-muted-foreground">Explore other roles and projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(roleContent)
              .filter(([key]) => key !== company)
              .map(([key, role]) => (
                <Link
                  key={key}
                  href={`/roles/${key}`}
                  className="group block p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{role.role}</p>
                  <span className="text-sm font-medium group-hover:underline">
                    View Role →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </Section>
    </div>
  )
} 