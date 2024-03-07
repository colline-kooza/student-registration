import { Icons } from "@/components/Icons";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/Page-Header";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";
import { Announcement } from "./Annoucements";


export default function Hero() {
  return (
   <div>
     <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Welcome to Desishub Student Portal</PageHeaderHeading>
<PageHeaderDescription>
  Welcome to Desishub Student and Interns! Our platform offers a comprehensive solution for student attendance registration, With our accessible, customizable, and open-source approach, you can effortlessly track daily attendance, Explore our features and unleash the potential of modern attendance management in education.
</PageHeaderDescription>
        <PageActions>
          <Link href="/dashboard" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href=""
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" /> */}
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
    </div>
   </div>
  );
}
