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
    <nav className="sticky l-0 t-0 p-2 w-full h-[8rem] flex flex-col md:flex-row items-center gap-10 bg-brightGray dark:bg-black">
      <div className="flex-1 ">
        <div className="w-max flex gap-8 items-center">
          {routes.map((route) => {
            return (
              <a
                key={route.path}
                href={route.path}
                className="underline underline-offset-8 hover:text-pink-500  transition-all ease-out hover:translate-y-1"
              >
                {route.pathname}
              </a>
            );
          })}
          <div className="inline-flex md:hidden ">
            <a
              href="/contact"
              className="underline underline-offset-8 hover:text-pink-500  transition-all ease-out hover:translate-y-1"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:items-center">
        <Link href="/contact">
          <span className="px-4 py-3 rounded-md bg-pink-100 text-pink-800 hover:bg-pink-500 hover:text-white capitalize font-semibold transition-all ease-out hover:translate-y-1">
            Let's Talk
          </span>
        </Link>
      </div>
      <div className="w-max">
        <ThemeToggler defaultTheme="light" />
      </div>
    </nav>
  );
};
