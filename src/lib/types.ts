export interface CompanyRole {
  company: string
  title: string
  period: string
  location: string
  overview: string
  teamContext: {
    size: number
    structure: string
    responsibility: string
  }
  systemImpact: {
    category: string
    description: string
    outcomes: string[]
  }[]
  keyProjects: {
    title: string
    timeframe: string
    challenge: string
    solution: string
    impact: string[]
    visualEvidence: {
      type: 'image' | 'video' | 'prototype'
      url: string
      caption: string
    }[]
  }[]
  skills: string[]
}

export interface NavigationItem {
  title: string
  href: string
  items?: {
    title: string
    href: string
    period: string
  }[]
}

export type Navigation = NavigationItem[] 