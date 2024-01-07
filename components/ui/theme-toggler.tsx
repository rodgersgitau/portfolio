"use client";

import { useTheme } from "next-themes";
import { FC, useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

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
    <Button
      size="sm"
      variant="outline"
      className="flex items-center gap-2 font-medium"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}

      <span className="flex-1 hidden text-sm md:block">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </Button>
  );
};
