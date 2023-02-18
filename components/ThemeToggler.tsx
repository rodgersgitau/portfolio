"use client";

import { useTheme } from "next-themes";
import { FC, useEffect } from "react";
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
      className="px-4 py-2 bg-transparent border-2 border-black rounded-md w-max dark:border-gray-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="flex items-center gap-4">
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
