import "../styles/globals.css";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Theming from "@/components/providers/theme";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import BaseLayout from "@/components/layouts/base-layout";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.site_url}`),
  title: {
    default: "Rodgers Gitau",
    template: "%s | Rodgers Gitau",
  },
  description: "Creative developer, writer, and creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <Theming>
        <body
          suppressHydrationWarning
          className="relative antialiased bg-background/60"
        >
          <BaseLayout>{children}</BaseLayout>
        </body>
      </Theming>
    </html>
  );
}
