import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Separator } from "./ui/separator"

export function Announcement() {
  return (
    <Link
      href="https://www.desishub.com/"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="sm:hidden">For more information about Desishub</span>
      <span className="hidden sm:inline">
      For more information about Desishub
      </span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}