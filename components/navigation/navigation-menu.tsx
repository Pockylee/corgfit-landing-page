"use client"

import Link from "next/link"
import { NAV_ITEMS } from "@/config/navigation"

export function NavigationMenu() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} className="text-sm hover:text-[#E67E22] transition-colors">
          {item.label}
        </Link>
      ))}
    </div>
  )
}

