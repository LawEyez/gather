'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navlinks } from "@/constants"

const NavItems = () => {
  const pathname = usePathname()

  return (
    <div className="md:flex-center flex flex-col md:flex-row items-start w-full gap-3">
      {navlinks.map(link => (
        <Link
          key={link.name}
          href={link.path}
          className={`capitalize text-sm font-medium ${link.path === pathname ? 'text-black' : 'text-neutral-400'}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default NavItems