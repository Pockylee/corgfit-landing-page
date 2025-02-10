"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavigationMenu } from "@/components/navigation/navigation-menu"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

export function Navbar() {
  const scrolled = useScroll()

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
        scrolled ? "bg-black/80 backdrop-blur-sm border-b border-white/10" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/corgfit_logo.png"
            alt="Corgfit Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl">Corgfit</span>
        </Link>

        <NavigationMenu />

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-white hover:text-[#E67E22]">
            Sign In
          </Button>
          <Button variant="ghost" className="text-white hover:text-[#E67E22]">
            Sign Up
          </Button>
          <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white">Download</Button>
        </div>
      </nav>
    </header>
  )
}

