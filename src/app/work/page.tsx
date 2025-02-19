import { NAVIGATION } from "@/lib/constants"

export default function WorkPage() {
  const workItems = NAVIGATION.find(item => item.title === 'Work')?.items || []
  
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="grid gap-8">
        {workItems.map((role) => (
          <a 
            key={role.href}
            href={role.href}
            className="group block space-y-2 border p-6 rounded-lg hover:bg-accent transition-colors"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold group-hover:text-primary">
                {role.title}
              </h2>
              <span className="text-muted-foreground">{role.period}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
} 