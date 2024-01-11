import "../styles/globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Backdrop from "@/components/ui/backdrop";
import { Navbar } from "@/components/nav";
import PageLayout from "@/components/layouts/page-layout";
import Theming from "@/components/providers/theme";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

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
          className="relative flex w-full h-full min-h-screen gap-8 antialiased bg-background/60"
        >
          <Navbar />
          <PageLayout>{children}</PageLayout>
          {/* Backdrop */}
          <Backdrop />
          <Analytics />
          <SpeedInsights />
        </body>
      </Theming>
    </html>
  );
}
