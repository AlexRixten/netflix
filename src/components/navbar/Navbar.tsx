"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { navbarMock } from "@/mock-data/navbar";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {navbarMock.map((link, idx) => (
            <div key={idx}>
              <li>
                <Link
                  href={link.href}
                  className={cn("text-gray-300 font-normal text-sm", {
                    "text-white font-semibold underline text-sm":
                      pathName === link.href,
                  })}
                >
                  {link.name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
}
