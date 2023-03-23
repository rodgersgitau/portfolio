import Link from "next/link";
import { useMemo } from "react";

import { ThemeToggler } from "./ThemeToggler";

export const Navigation = () => {
  const routes = useMemo(
    () => [
      { path: "/", pathname: "Home" },
      // { path: "/work", pathname: "Work" },
      { path: "/play", pathname: "Playground" },
      { path: "/contact", pathname: "Contact" },
      // { path: "/notes", pathname: "Notes" },
    ],
    []
  );
  return (
    <nav className="sticky l-0 t-0 h-max w-full min-h-[7rem] flex flex-col md:flex-row items-center gap-10 px-8">
      <div className="flex-1 ">
        <div className="flex items-center gap-8 w-max">
          {routes.map((route) => {
            return (
              <a
                key={route.path}
                href={route.path}
                className="font-semibold underline transition-all ease-out underline-offset-8 hover:text-pink-600 hover:translate-y-1"
              >
                {route.pathname}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between gap-8">
        <div className="w-max">
          <Link href="/contact">
            <span className="px-4 py-3 text-base font-semibold capitalize transition-all ease-out bg-black rounded-md dark:bg-base dark:text-black hover:text-black hover:bg-pink-300 hover:translate-y-1">
              Let's Talk
            </span>
          </Link>
        </div>
        <div className="w-max">
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};
