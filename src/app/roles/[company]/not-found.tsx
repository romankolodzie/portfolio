import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Role Not Found</h2>
      <p className="mb-4">Could not find the requested role.</p>
      <Link 
        href="/work"
        className="text-primary hover:underline"
      >
        View all roles
      </Link>
    </div>
  )
} 