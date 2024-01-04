"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggler } from "@/components/ui/theme-toggler";

import { navItems } from "@/lib/config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-0 z-50 tracking-tight border-b h-max min-h-16 bg-background/90 md:bg-transparent md:border-0 md:sticky md:h-full md:top-16 md:w-48 backdrop-opacity-10">
      <nav
        id="nav"
        className="flex flex-row items-center gap-8 p-4 mx-auto md:flex-col fade md:p-0"
      >
        <div className="flex items-center flex-grow gap-1 md:justify-start md:gap-4 md:flex-col md:w-max">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={cn(
                  buttonVariants({
                    size: "full",
                    variant: "link",
                    className:
                      pathname === path
                        ? "!p-0 text-start text-accent text-xs lg:text-sm"
                        : "!p-0 text-start text-current text-xs lg:text-sm",
                  })
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className="relative ml-auto md:ml-0 md:mt-auto w-max h-max">
          <ThemeToggler />
        </div>
      </nav>
    </aside>
  );
}
