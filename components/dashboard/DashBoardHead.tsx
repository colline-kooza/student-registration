"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
// import { MainNav } from "./MainNav"
// import { MobileNav } from "./MobileNav"
// import { CommandMenu } from "./CommandMenu"
// import { ModeToggle } from "./ModeToggle"
// import { buttonVariants } from "./ui/button"
// import { Icons } from "./Icons"
import { usePathname } from "next/navigation"
import { MainNav } from "../MainNav"
import { MobileNav } from "../MobileNav"
import { CommandMenu } from "../CommandMenu"
import { buttonVariants } from "../ui/button"
import { Icons } from "../Icons"
import { ModeToggle } from "../ModeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DashNav } from "./DashNav"
import DashBoardSide from "./DashBoardSide"
import { DashBoardLinks } from "./DashBoardLinks"
import { BellDot } from "lucide-react"


export default function DashBoardHead() {
    const components: { title: string; href: string;}[] = [
        {
          title: "Register",
          href: "/dashboard/registration",
        },
        {
          title: "Attendance",
          href: "/dashboard/attendence",
        }
      ]
      const sideLinks: { title: string; href: string;}[] = [
        {
          title: "Help",
          href: "/docs",
        },
        {
          title: "Docs",
          href: "/docs",
        },
       
      ]
  return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur h-[15vh] supports-[backdrop-filter]:bg-background/60 mt-8 ">
        <div className="container flex h-14 max-w-screen-2xl items-center mb-4">
          <DashNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <DashBoardLinks components={sideLinks}/>
            </div>
            <nav className="flex items-center">
              <Link
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <BellDot className="h-5 w-5" />
                </div>
              </Link>
              <ModeToggle />
              <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </nav>
          </div>
        </div>
      </header>
  )
}
