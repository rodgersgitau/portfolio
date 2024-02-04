"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AtomIcon, HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ui/theme-toggler";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

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
        className="container flex flex-wrap !items-center w-full h-max min-h-20 max-w-screen-xl gap-8 py-2 mx-auto"
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
            <span className="hidden text-xs md:block lg:text-sm">Home</span>
          </div>
        </Link>
        <div className="flex gap-4 md:ml-auto !items-center md:gap-8">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={
                  pathname === path
                    ? "text-primary text-xs lg:text-sm"
                    : "text-current text-xs lg:text-sm hover:text-primary"
                }
              >
                {name}
              </Link>
            );
          })}

          <div className="flex items-center gap-4 ml-auto md:gap-8 w-max">
            <Link
              target="_blank"
              rel="norefererr"
              href="https://labs.rodgersgitau.vercel.app"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  className: "text-xs lg:text-sm",
                })
              )}
            >
              <div className="flex !items-center gap-2">
                <AtomIcon className="w-4 h-4" />
                <span className="text-xs lg:text-sm">Labs</span>
              </div>
            </Link>

            <ThemeToggler />
          </div>
        </div>
      </motion.nav>
    </motion.aside>
  );
}
