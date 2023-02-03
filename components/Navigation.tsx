import Link from "next/link";
import { useMemo } from "react";
import { ThemeToggler } from "./ThemeToggler";

export const Navigation = () => {
  const routes = useMemo(
    () => [
      { path: "/", pathname: "About" },
      { path: "/work", pathname: "Work" },
      { path: "/play", pathname: "Play" },
      { path: "/notes", pathname: "Notes" },
    ],
    []
  );
  return (
    <nav className="sticky l-0 t-0 h-max w-full min-h-[7rem] flex flex-col md:flex-row items-center gap-10 bg-purpleGray dark:bg-black">
      <div className="flex-1 ">
        <div className="w-max flex gap-8 items-center">
          {routes.map((route) => {
            return (
              <a
                key={route.path}
                href={route.path}
                className="underline underline-offset-8 hover:text-pink-600  transition-all ease-out hover:translate-y-1"
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
            <span className="px-4 py-3 rounded-md bg-black text-brightGray hover:bg-pink-500 dark:bg-brightGray dark:text-black dark:hover:bg-pink-300 capitalize font-semibold transition-all ease-out hover:translate-y-1">
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
