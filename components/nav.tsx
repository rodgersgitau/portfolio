"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { riseWithFade } from "@/components/motion";

import { buttonVariants } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ui/theme-toggler";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.aside className="fixed left-0 right-0 z-50 w-full h-20 bg-background">
      <motion.nav
        variants={riseWithFade}
        className="container flex items-center w-full max-w-screen-xl gap-8 py-6 mx-auto"
      >
        <Link
          href="/"
          className={
            pathname === ""
              ? "text-accent text-xs lg:text-sm"
              : "text-current text-xs lg:text-sm"
          }
        >
          <div className="flex !items-center gap-2">
            <HomeIcon className="w-4 h-4" />
            <span className="text-xs lg:text-sm">Home</span>
          </div>
        </Link>
        <div className="flex items-center justify-between gap-4 ml-auto md:gap-8">
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
                        ? "text-accent text-xs lg:text-sm"
                        : "text-current text-xs lg:text-sm",
                  })
                )}
              >
                {name}
              </Link>
            );
          })}

          <div className="w-max h-max">
            <ThemeToggler />
          </div>
        </div>
      </motion.nav>
    </motion.aside>
  );
}
