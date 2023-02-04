"use client";

import { FC, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggler: FC = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (
      !localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      void setTheme("dark");
    } else if (localStorage.getItem("theme")) {
      void setTheme(localStorage.getItem("theme") || "light");
    }
  }, []);

  return (
    <button
      className="px-4 py-2 w-[8rem] rounded-md bg-transparent border-2 border-black dark:border-gray-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="w-full flex items-center justify-between">
        {theme === "light" ? (
          <FiSun fontSize="1.5rem" />
        ) : (
          <FiMoon fontSize="1.5rem" />
        )}
        <span className="flex-1 font-semibold">
          {theme === "light" ? "Light" : "Dark"}
        </span>
      </div>
    </button>
  );
};
