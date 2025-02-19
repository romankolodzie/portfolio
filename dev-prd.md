# Portfolio Development Specification

## Tech Stack
```plaintext
Frontend:
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

Development:
- Cursor IDE
- pnpm (package management)
- ESLint + Prettier
- Vercel (deployment)
```

## Project Structure
```plaintext
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── about/
│   ├── work/                   # Role-based showcases
│   │   ├── [company]/          # Dynamic company routes
│   └── contact/                # Contact form
├── components/
│   ├── ui/                     # shadcn components
│   ├── layout/                 # Layout components
│   └── sections/               # Page sections
├── lib/
│   ├── utils.ts                # Utility functions
│   └── constants.ts            # Global constants
└── styles/
    └── globals.css             # Global styles
```

## Component Implementation Guide

### 1. Base Layout
```typescript
// app/layout.tsx
import { DM_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background antialiased',
        dmSans.className
      )}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 2. Key Components to Implement

#### Role Showcase
```typescript
// components/sections/RoleShowcase.tsx
interface RoleData {
  company: string
  role: string
  duration: string
  teamSize?: number
  systemLevelImpact: {
    description: string
    metrics: string[]
  }[]
  keyProjects: {
    title: string
    impact: string
    metrics: string[]
  }[]
}

// Implementation notes:
// - Create timeline-style navigation
// - Show evolution of work over time
// - Implement smooth transitions between projects
```

## Content Structure

### Role Data Format
```typescript
// lib/types.ts
interface CompanyRole {
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
```

### Navigation Schema
```typescript
// lib/constants.ts
export const NAVIGATION = [
  {
    title: 'Work',
    href: '/work',
    items: [
      {
        title: 'Academia.edu',
        href: '/roles/academia',
        period: '2024-Present'
      },
      {
        title: 'TikTok',
        href: '/roles/tiktok',
        period: '2021-2024'
      },
      {
        title: 'Meta',
        href: '/roles/meta',
        period: '2018-2021'
      }
    ]
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
]
```

### Theme Configuration
```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', ...fontFamily.sans],
      },
      colors: {
        primary: {...},
        secondary: {...},
        accent: {...}
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'var(--font-dm-sans)',
            // Other typography settings
          }
        }
      }
    }
  }
}
```

## Implementation Priorities

### Phase 1: Core Structure
1. Set up Next.js project with TypeScript and DM Sans
2. Implement role-based routing structure
3. Create base layout and navigation
4. Build hero section highlighting current role
5. Implement role showcase component

### Phase 2: Content & Interactions
1. Build impact story components
2. Add timeline navigation
3. Implement project galleries
4. Create contact form
5. Add dark mode support

### Phase 3: Polish & Performance
1. Optimize transitions between sections
2. Add role-specific animations
3. Implement SEO optimization
4. Set up analytics
5. Performance optimization

[Previous sections for Animation Guidelines, Styling Guidelines, Performance Targets, SEO Requirements, Testing Strategy, and Deployment Checklist remain the same]