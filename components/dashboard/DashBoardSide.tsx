"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function DashBoardSide() {
  return (
    <div className="mr-4 hidden md:flex">
    <Link href="/" className="mr-6 flex items-center space-x-2">
  {/* <img src="/dcsLogo.webp" alt="" className="h-12 w-20"/>  */}
      <span className="hidden font-bold sm:inline-block">
       Desishub
      </span>
    </Link>
    <nav className="flex items-center gap-6 text-sm">
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, pariatur.</h2>
    </nav>
  </div>
  )
}
