"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVIGATION } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { NavDropdown } from "./nav-dropdown"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Portfolio</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          {NAVIGATION.map((item) => (
            <React.Fragment key={item.href}>
              {item.items ? (
                <NavDropdown item={item} />
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
} 