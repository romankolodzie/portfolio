import { notFound } from "next/navigation"
import { NAVIGATION } from "@/lib/constants"

interface ProjectsPageProps {
  params: {
    company: string
  }
}

export function generateStaticParams() {
  const workItems = NAVIGATION.find(item => item.title === 'Work')?.items || []
  return workItems.map((role) => ({
    company: role.href.split('/').pop(),
  }))
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const workItems = NAVIGATION.find(item => item.title === 'Work')?.items || []
  const role = workItems.find(
    (item) => item.href.split('/').pop() === params.company
  )

  if (!role) {
    notFound()
  }

  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Projects at {role.title}</h1>
      <p className="text-muted-foreground mb-8">{role.period}</p>
      
      {/* Project list will be implemented based on the CompanyRole interface */}
      <div className="prose max-w-none">
        <p>Projects coming soon...</p>
      </div>
    </section>
  )
} 