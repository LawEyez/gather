import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import MobileNav from "@/components/layout/MobileNav"
import Brand from "@/components/global/Brand"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b backdrop-blur-md bg-white/80">
      <div className="container py-2 flex items-center justify-between h-13">
        <Brand /> 

        <SignedIn>
          <Navbar />
        </SignedIn>

        <div className="">
          <SignedIn>
            <div className="flex-center gap-3">
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </div>
          </SignedIn>

          <SignedOut>
            <Button asChild size='sm'>
              <Link href='/sign-in'>Sign in</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header