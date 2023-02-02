"use client";

import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export type ThemeType = "dark" | "light";

export interface ThemeTogglerType {
  defaultTheme?: ThemeType;
}

export const ThemeToggler: FC<ThemeTogglerType> = ({
  defaultTheme = "light",
}) => {
  const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   if (defaultTheme) {
  //     setTheme(defaultTheme);
  //   }
  // }, [defaultTheme, setTheme]);

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
