"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

function Theming({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
}
export default Theming;
