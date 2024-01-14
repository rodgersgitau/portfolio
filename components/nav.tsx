"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { ThemeToggler } from "@/components/ui/theme-toggler";

import { navItems } from "@/lib/data";

const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.aside className="fixed left-0 right-0 z-50 h-max bg-background">
      <motion.nav
        variants={riseWithFade}
        className="container flex !items-center w-full h-max min-h-20 max-w-screen-xl gap-8 py-2 mx-auto"
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
        <div className="flex justify-between gap-4 ml-auto !items-center md:gap-8">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={
                  pathname === path
                    ? "text-accent text-xs lg:text-sm"
                    : "text-current text-xs lg:text-sm hover:text-accent"
                }
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
