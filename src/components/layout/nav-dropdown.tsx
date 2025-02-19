"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationItem } from "@/lib/types"
import { cn } from "@/lib/utils"

interface NavDropdownProps {
  item: NavigationItem
}

export function NavDropdown({ item }: NavDropdownProps) {
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="transition-colors hover:text-foreground/80 text-sm font-medium"
      >
        {item.title}
      </Link>
      {item.items && (
        <div className="absolute left-0 top-full hidden group-hover:block">
          <div className="pt-2">
            <div className="rounded-md border bg-popover p-2 shadow-md">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="block rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="font-medium">{subItem.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {subItem.period}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 