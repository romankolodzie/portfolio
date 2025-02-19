import { notFound } from "next/navigation"
import { NAVIGATION } from "@/lib/constants"
import { RolePageContent } from "@/components/role-page-content"

interface RolePageProps {
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

export default function RolePage({ params }: RolePageProps) {
  const workItems = NAVIGATION.find(item => item.title === 'Work')?.items || []
  const role = workItems.find(
    (item) => item.href.split('/').pop() === params.company
  )

  if (!role) {
    notFound()
  }

  return <RolePageContent company={params.company} />
} 