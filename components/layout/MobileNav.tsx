import Link from "next/link"
import { HiOutlineMenuAlt2 } from "react-icons/hi"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import NavItems from "@/components/layout/NavItems"

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <HiOutlineMenuAlt2 />
        </SheetTrigger>
        
        <SheetContent className="flex flex-col gap-3">
          <Link href="/" className="font-bold text-lg tracking-tight">Gather.</Link>

          <Separator />

          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav